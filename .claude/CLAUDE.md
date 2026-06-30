# github-actions-cicd-slide

A six-week Slidev presentation series on CI/CD — six decks (`week-1` … `week-6`)
that share one visual identity. pnpm monorepo, deployed to Cloudflare Pages at
`slides.<domain>/week-N`.

## Layout

- `apps/week-N/` — one deployable Slidev deck per week (`slides.md` + `package.json`).
  Decks are added over time; a week with no `slides.md` simply isn't built.
- `packages/shared/` — `slidev-addon-shared`, the shared visual/component layer.
  A lightweight Slidev **addon**, not a full theme. Each deck opts in with
  `addons: [slidev-addon-shared]` in its `slides.md` frontmatter.

## Conventions (and why)

- **pnpm workspaces** — one `pnpm install` at the root installs every deck + the addon.
- **Single Slidev version, pinned once** — `pnpm-workspace.yaml`'s `catalog:` pins
  `@slidev/cli` / theme / `vue`; every deck references `catalog:`, so all six stay on
  one version with no duplicate installs.
- **Node pinned** via `.nvmrc` + `package.json` `engines`; CI matches it.
- **No Turborepo** — at six decks, cache savings don't pay for the config complexity.

## Working on a deck

- Dev one deck: `pnpm -C apps/week-N dev`
- Build one deck: `pnpm -C apps/week-N build`

## Build & deploy

- **Assemble** — `pnpm build` (→ `scripts/build.mjs`) globs `apps/*`, builds each deck
  with `slidev build --base /week-N/` into `dist/week-N/`, then folds every deck's
  `_redirects` into a single root `dist/_redirects` (Cloudflare Pages honors only the
  root one) so history-mode deep links resolve.
- **Deploy** — GitHub Actions + `wrangler` → Cloudflare Pages; `preparing` is the deploy branch.

## Not doing (yet)

- No PDF export — keeps Playwright out of CI.
- No automated test framework — add per-area only when something's complex enough to warrant it.
