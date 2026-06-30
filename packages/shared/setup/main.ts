// SHARED_BASE_FIX: work around Slidev's double-base bug on multi-deck subpath
// deploys. Each deck is built with `--base /week-N/`, so vue-router's history
// base is `/week-N/` AND Slidev's slide-path builder already bakes `/week-N/`
// into the path it pushes — so client-side page-turns become
// `/week-N/week-N/2`, which doesn't match the `/:no` routes and lands on the
// 404 route. We catch that here and strip the duplicated leading deck segment,
// so navigation resolves to `/2` and the URL stays `/week-N/2`.
//
// This is Slidev's `setup/main.ts` hook (an addon may provide it); the default
// export receives the app context, including the vue-router instance. We skip
// the `defineAppSetup` type helper to avoid a `@slidev/types` dependency here.
export default ({ router }) => {
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
