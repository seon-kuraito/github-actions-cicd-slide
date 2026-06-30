// Deploy Worker: per-deck SPA fallback for the multi-deck assembly.
//
// Static assets are served first (run_worker_first defaults to false), so this
// runs ONLY for requests that don't map to a file — i.e. Slidev history-mode
// deep links like /week-1/5. We can't use _redirects for this (Slidev's
// 200-rewrites trip Workers' infinite-loop detector, code 100324) nor
// not_found_handling: single-page-application (it falls back only to the root
// hub, breaking deep links into a deck). So we route here instead:
//   /week-N/<anything>  → serve the /week-N/ shell  (that deck's SPA entry)
//   everything else     → serve the / shell         (the root hub)
//
// We fetch the directory form (/week-N/, not /week-N/index.html): default
// html_handling 307-redirects /index.html → the directory, which would drop the
// deep path (/week-1/5 → /week-1/, losing slide 5). The directory form serves
// 200 in place, so the original URL is preserved and Slidev resolves the slide.
export default {
  async fetch(request, env) {
    const { pathname, origin } = new URL(request.url)
    const deck = pathname.match(/^\/(week-\d+)(?:\/|$)/)
    const shell = deck ? `/${deck[1]}/` : '/'
    return env.ASSETS.fetch(new Request(new URL(shell, origin), request))
  },
}
