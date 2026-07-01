import { isProduction } from '../constants/environments'

// GA4 Measurement ID. Not a secret — it ships in every page's HTML by design,
// so hardcoding it here (rather than a build-time secret) is fine.
const GA4_MEASUREMENT_ID = 'G-PCV1CL95WD'

// Minimal local shapes for the vue-router bits we touch. vue-router is only a
// transitive dep (not resolvable from this zero-dependency addon), so we type
// structurally here instead of importing its types.
type RouteLike = { path: string; query: unknown; hash: unknown }
type RouterLike = { beforeEach(guard: (to: RouteLike) => unknown): void }

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

// GA4: load gtag.js. Production only — local dev and `preparing` deliberately
// skip it (ENV falls back to 'preparing' off `main`), so they never pollute the
// production property. Test locally with `VITE_ENV=production pnpm -C apps/week-N dev`.
function installAnalytics() {
  if (!isProduction || typeof document === 'undefined') return

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
  // Automatic page_view is suppressed: the next step wires the router hook to
  // send one page_view per slide (plus each slide's dwell time). Leaving it on
  // would double-count the entry slide once that manual tracking lands.
  w.gtag('config', GA4_MEASUREMENT_ID, { send_page_view: false })
}

// Slidev's `setup/main.ts` hook (an addon may provide it); the default export
// receives the app context, including the vue-router instance. We skip the
// `defineAppSetup` type helper to avoid a `@slidev/types` dependency here.
export default ({ router }: { router: RouterLike }) => {
  installBaseFix(router)
  installAnalytics()
}
