import { isProduction } from '../constants/environments'
// Slidev keeps every slide's parsed data (title, frontmatter) in this virtual
// module. Per-slide titles are NOT on the vue-router routes — all slides share
// one dynamic `/:no` route with no meta — so we look the title up here by
// number. Same data the TOC/overview reads.
import { slides } from '#slidev/slides'

// GA4 Measurement ID. Not a secret — it ships in every page's HTML by design,
// so hardcoding it here (rather than a build-time secret) is fine.
const GA4_MEASUREMENT_ID = 'G-PCV1CL95WD'

// Minimal local shapes for the vue-router bits we touch. vue-router is only a
// transitive dep (not resolvable from this zero-dependency addon), so we type
// structurally here instead of importing its types.
type RouteLike = {
  path: string
  query: unknown
  hash: unknown
  params: Record<string, string | string[]>
}
type RouterLike = {
  beforeEach(guard: (to: RouteLike) => unknown): void
  afterEach(hook: (to: RouteLike) => void): void
}

// SHARED_BASE_FIX: work around Slidev's double-base bug on multi-deck subpath
// deploys. Each deck is built with `--base /week-N/`, so vue-router's history
// base is `/week-N/` AND Slidev's slide-path builder already bakes `/week-N/`
// into the path it pushes — so client-side page-turns become
// `/week-N/week-N/2`, which doesn't match the `/:no` routes and lands on the
// 404 route. We catch that here and strip the duplicated leading deck segment,
// so navigation resolves to `/2` and the URL stays `/week-N/2`.
function installBaseFix(router: RouterLike) {
  const seg = import.meta.env.BASE_URL.replace(/^\/+|\/+$/g, '') // "week-1"
  if (!seg) return
  const prefix = `/${seg}`
  router.beforeEach((to) => {
    if (to.path === prefix || to.path.startsWith(`${prefix}/`)) {
      return {
        path: to.path.slice(prefix.length) || '/',
        query: to.query,
        hash: to.hash,
        replace: true,
      }
    }
  })
}

// GA4. Production only — local dev and `preparing` deliberately skip it (ENV
// falls back to 'preparing' off `main`), so they never pollute the production
// property. Test locally with `VITE_ENV=production pnpm -C apps/week-N dev`.
function installAnalytics(router: RouterLike) {
  if (!isProduction || typeof document === 'undefined') return
  loadGtag()
  trackSlides(router)
}

function loadGtag() {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
  document.head.appendChild(script)

  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  // Automatic page_view is suppressed; trackSlides() sends one manually per
  // slide, so leaving it on would double-count the entry slide.
  w.gtag('config', GA4_MEASUREMENT_ID, { send_page_view: false })
}

// Per-slide tracking. Slidev is a history-mode SPA, so page-turns are client
// routing and GA4's automatic page_view fires only once. We send a page_view on
// every slide change, plus a `slide_dwell` event (seconds spent) when leaving a
// slide. visibilitychange/pagehide flush the slide being left, so the last one
// before a tab-switch/close isn't lost — and time on a hidden tab isn't counted.
function trackSlides(router: RouterLike) {
  const send = (name: string, params: Record<string, unknown>) => {
    ;(window as any).gtag?.('event', name, params)
  }

  let currentPath: string | null = null // slide identity, deduped on pathname
  let currentHref = '' // full URL, reported to GA4
  let currentTitle = '' // this slide's title, reported to GA4
  let enteredAt = 0

  // The slide's own title (frontmatter title/name, else its first heading),
  // looked up by slide number. Undefined for non-slide routes and headingless
  // slides — the caller falls back to the deck-wide document.title.
  const slideTitle = (no: string | string[]) =>
    slides.value.find((s) => s.no === Number(no))?.meta?.slide?.title

  const flushDwell = () => {
    if (currentPath === null) return
    const ms = Date.now() - enteredAt
    enteredAt = Date.now() // reset first, so a re-entrant flush can't double-count
    if (ms <= 0) return
    send('slide_dwell', {
      page_location: currentHref,
      page_title: currentTitle,
      dwell_seconds: Math.round(ms / 1000),
      dwell_ms: ms,
    })
  }

  // afterEach fires on the initial navigation too, so the entry slide is counted.
  router.afterEach((to) => {
    const path = window.location.pathname
    if (path === currentPath) return // within-slide step / redirect echo — ignore
    flushDwell()
    currentPath = path
    currentHref = window.location.href
    currentTitle = slideTitle(to.params.no) || document.title
    enteredAt = Date.now()
    send('page_view', { page_location: currentHref, page_title: currentTitle })
  })

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushDwell()
    else enteredAt = Date.now() // back on tab: restart timer, ignore away-time
  })
  window.addEventListener('pagehide', flushDwell)
}

// Slidev's `setup/main.ts` hook (an addon may provide it); the default export
// receives the app context, including the vue-router instance. We skip the
// `defineAppSetup` type helper to avoid a `@slidev/types` dependency here.
export default ({ router }: { router: RouterLike }) => {
  installBaseFix(router)
  installAnalytics(router)
}
