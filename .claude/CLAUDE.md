# github-actions-cicd-slide

A six-week Slidev presentation series on CI/CD — six week decks (`week-1` … `week-6`)
plus a root `onboarding` deck, all sharing one visual identity. pnpm monorepo, deployed
to Cloudflare Workers Static Assets; each week is served at `<host>/week-N`, onboarding
at `<host>/`.

## Layout

- `apps/week-N/` — one deployable Slidev deck per week (`slides.md` + `package.json`).
  Decks are added over time; a week with no `slides.md` simply isn't built.
- `apps/onboarding/` — the root deck: same structure, but built with `--base /` and served
  at `<host>/` (it replaced the old hand-written `hub/`); its `public/` carries `robots.txt`.
- `shared/` — `slidev-addon-shared`, the shared visual/component layer.
  A lightweight Slidev **addon**, not a full theme. Each deck opts in with
  `addons: [slidev-addon-shared]` in its `slides.md` frontmatter.

## Course content (docs/ + DECISIONS.md)

The course-content workstream lives beside the code and has its own truth chain — never
restate it here: `DECISIONS.md` (settled decisions + gates) → `docs/README.md` (six-week
map, marker legend, 【NN】 numbering rules, kit-derivation rules, 發放原則) →
`docs/curriculum/week-N.md` (page-level deck plans) → `docs/kit/week-N.md` (weekly repo /
skills / knowledge-point checklists). Read docs/README.md's 標記說明 before editing any of
them. Editing traps:

- **【NN】 numbers are continuous per product arc** (W1→W2→W3 Dashboard; W4→W5→W6 notify
  system), NOT per week. Inserting/removing a block renumbers every downstream week in
  that arc — curriculum headers and kit groups together. Current ranges live in
  docs/README.md「【NN】編號規則」.
- **curriculum ↔ kit are coupled**: every 【NN】 block has a same-numbered group in its
  kit file; edit them as a pair (derivation rules in docs/README.md).
- **Cross-week prose references carry a source-week prefix** (`W1【03】`) so arc-wide
  renumbers must skip them.
- Weekly repos ship **state, not exercises** — see 發放原則 in docs/README.md before adding
  kit material.
- Cadence: **v1 (2026-07-10)** froze the W1–W6 page-level plan; **v2** re-grooms W4–W6
  in the 8/8 off week; per-week deck production may still adjust details.

## Conventions (and why)

- **pnpm workspaces** — one `pnpm install` at the root installs every deck + the addon.
- **Single Slidev version, pinned once** — `pnpm-workspace.yaml`'s `catalog:` pins
  `@slidev/cli` / theme / `vue`; every deck references `catalog:`, so all stay on
  one version with no duplicate installs.
- **Node pinned** via `.nvmrc` + `package.json` `engines`; CI matches it.
- **No Turborepo** — at this size, cache savings don't pay for the config complexity.

## Working on a deck

- Dev one deck: `pnpm -C apps/<deck> dev` (`<deck>` = `week-N` or `onboarding`)
- Build one deck: `pnpm -C apps/<deck> build`

## Build & deploy

- **Assemble** — `pnpm build` (→ `scripts/build.mjs`) globs `apps/*`: week decks build with
  `--base /week-N/` into `dist/week-N/`, the `onboarding` deck with `--base /` into `dist/`
  root (the site's `/` page, replacing the old hand-written `hub/`). Drops Slidev's per-deck
  `_redirects` (the deploy Worker handles routing instead).
- **Deploy** — Cloudflare **Workers Static Assets** (NOT Pages), via GitHub Actions +
  `wrangler` (see `wrangler.jsonc` + [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
  both self-documented). Two named wrangler envs ↔ two subdomains: `--env production`
  (`main`) and `--env preparing` (`preparing`); `routes` + `custom_domain` auto-create the
  domain/DNS/SSL on first deploy. Rollout: feature → `preparing` (staging) → `main` (prod).
- **Environments** — two per-env signals, kept separate:
  - `VITE_ENV` (CI sets per branch: `main` → `production`, else `preparing`; see
    `shared/constants/environments.ts`) is a **client build-time** gate — the shared addon
    loads GA4 + per-slide tracking only in production, non-production deck builds get
    `noindex`, and `onboarding` gets `noindex` in *all* envs. Test locally with
    `VITE_ENV=production pnpm -C apps/week-N dev`.
  - `STAGE` (`wrangler.jsonc` `vars`, per env) is a **Worker runtime** gate — only
    `production` activates the release gate below; `preparing` shows every week.
- **Release gate** — each week has a release datetime in
  `shared/constants/release-schedule.ts` (single source of truth). In production the deploy
  Worker returns a real, `no-store` 404 for a week's `/week-N/*` until that datetime — even
  on a direct URL — then opens it automatically with no redeploy (it compares edge time per
  request, so the flip is request-time, not deploy-time). `preparing`/local show every week.
- **Routing trap** — multi-deck history-mode deep links can't use `_redirects` (Slidev's
  200-rewrites trip Workers' infinite-loop detector, code 100324) nor
  `not_found_handling: single-page-application` (falls back only to the root hub). The deploy
  Worker (`cloudflare/router.mjs`) routes instead: `/week-*` front-runs the Worker
  (`run_worker_first` — enables the gate + per-deck SPA fallback); other non-asset paths fall
  back to the `onboarding` shell at `/`.
- **Base-doubling trap** — Slidev bakes each deck's `--base /week-N/` into both the router
  history base and the path it pushes on slide nav, so client page-turns double to
  `/week-N/week-N/2` and hit the 404 route. The shared addon's `setup/main.ts` installs a
  router `beforeEach` guard that strips the duplicated leading segment. (The root
  `onboarding` deck has base `/`, so the guard's segment is empty and it no-ops.)

## Not doing (yet)

- No PDF export — keeps Playwright out of CI.
- No automated test framework — add per-area only when something's complex enough to warrant it.
