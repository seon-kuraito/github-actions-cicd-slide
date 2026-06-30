// Deploy Worker: per-deck SPA fallback for the multi-deck assembly.
//
// Static assets are served first (run_worker_first defaults to false), so this
// runs ONLY for requests that don't map to a file — i.e. Slidev history-mode
// deep links like /week-1/5. We can't use _redirects for this (Slidev's
// 200-rewrites trip Workers' infinite-loop detector, code 100324) nor
// not_found_handling: single-page-application (it falls back only to the root
// hub, breaking deep links into a deck). So we route here instead:
//   /week-N/<anything>  → serve /week-N/index.html  (that deck's SPA shell)
//   everything else     → serve /index.html         (the root hub)
export default {
  async fetch(request, env) {
    const { pathname, origin } = new URL(request.url)
    const deck = pathname.match(/^\/(week-\d+)(?:\/|$)/)
    const shell = deck ? `/${deck[1]}/index.html` : '/index.html'
    return env.ASSETS.fetch(new Request(new URL(shell, origin), request))
  },
}
