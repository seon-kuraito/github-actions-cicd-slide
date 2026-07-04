// Deploy Worker: per-deck SPA routing + scheduled-release gate for the multi-deck
// assembly.
//
// run_worker_first (wrangler.jsonc) makes this Worker front-run every /week-*
// request — including a deck's own assets — so it can 404 an unreleased week
// before any file is served. Non-week paths (the onboarding deck at /, its
// slides, its assets) stay assets-first; this Worker only sees them as a
// not-found fallback, which it routes to the root hub shell.
//
// Why the gate lives here (not _redirects, not build-time): a real 404 that
// flips exactly at the release datetime with NO redeploy — the comparison runs
// against Cloudflare edge time on every request. Production only; preparing and
// local show every week, so unreleased content stays previewable.
import { isReleased } from '../shared/constants/release-schedule'

export default {
  async fetch(request, env) {
    const { pathname, origin } = new URL(request.url)
    const deck = pathname.match(/^\/(week-\d+)(?:\/|$)/)

    // Non-week request: only reached as an assets-first 404 fallback (a
    // history-mode deep link into the onboarding deck, e.g. /3) → root hub shell.
    if (!deck) return env.ASSETS.fetch(new Request(new URL('/', origin), request))

    // Week request (front-run via run_worker_first). Gate in production only:
    // before the week's release datetime, return a real, uncached 404 — even for
    // a direct URL. no-store so a 404 seen at 23:59 isn't cached past a 00:00 open.
    if (env.STAGE === 'production' && !isReleased(deck[1], Date.now())) {
      return new Response('Not Found', {
        status: 404,
        headers: { 'cache-control': 'no-store', 'content-type': 'text/plain; charset=utf-8' },
      })
    }

    // Released (or non-production): serve the real asset if one exists; otherwise
    // fall back to that deck's SPA shell so history-mode deep links resolve. We
    // fetch the directory form (/week-N/, not /week-N/index.html): default
    // html_handling 307-redirects /index.html → the directory, which would drop
    // the deep path (/week-1/5 → /week-1/, losing slide 5). The directory form
    // serves 200 in place, so the original URL is preserved and Slidev resolves it.
    const res = await env.ASSETS.fetch(request)
    if (res.status !== 404) return res
    return env.ASSETS.fetch(new Request(new URL(`/${deck[1]}/`, origin), request))
  },
}
