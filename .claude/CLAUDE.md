# github-actions-cicd-slide

A six-week Slidev presentation series on CI/CD — six decks (`week-1` … `week-6`)
that share one visual identity. pnpm monorepo, deployed to Cloudflare Workers
Static Assets; each deck is served at `<host>/week-N`.

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
  `_redirects` into a single root `dist/_redirects` (Cloudflare serves only the root
  one) so history-mode deep links resolve. It also copies `public/` — a hand-written
  hub `index.html` served at `/` — verbatim into `dist/` root.
- **Deploy** — Cloudflare **Workers Static Assets** (NOT Pages), via GitHub Actions +
  `wrangler` (see `wrangler.jsonc` + [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
  both self-documented). Two named wrangler envs ↔ two subdomains: `--env production`
  (`main`) and `--env staging` (`preparing`); `routes` + `custom_domain` auto-create the
  domain/DNS/SSL on first deploy. Rollout: feature → `preparing` (staging) → `main` (prod).
- **The trap** — keep `assets.not_found_handling: none`. Each deck's history-mode SPA
  fallback comes from the root `_redirects` (200-rewrites); switching to
  `single-page-application` only falls back to the root hub and breaks deep links into decks.

## Not doing (yet)

- No PDF export — keeps Playwright out of CI.
- No automated test framework — add per-area only when something's complex enough to warrant it.
