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
  `addons: [slidev-addon-shared]` in its `slides.md` frontmatter. Carries the
  design system converted from the Claude Design handoff (the `templates.html` +
  `spec.md` handoff files were discarded after conversion — `apps/templates` is
  the living reference; decisions in DECISIONS.md「視覺線」):
  - `layouts/` — **numeric suffix = base vocabulary, has a templates page**
    (`cover-01`, `chapter-01`, `git-03`, …); **non-numeric = scenario-customized,
    NOT in templates** (`git-files`, `git-push`, `git-term`, `git-diff`,
    `git-areas`, `shell-dir`, `shell-term`, `ai-skill`, `ai-context`). Bases are
    the **starting point for per-scenario customization**, not a fixed catalogue —
    so `shared/layouts` having what `templates` lacks is the expected state, not a
    gap to "fill in". (The older rule "numeric = design-handoff template id" was
    demoted once the handoff was discarded; see DECISIONS「視覺線」→「情境版型落地」
    for the naming rule and the base-vs-custom boundary.) Slide content is fed **entirely via frontmatter
    YAML props** (md body unused); the main-title prop is always `heading` —
    never `title`, which collides with deck headmatter on slide 1. Variants
    switch via props (`brand: git|github|ai`). **`src` trap**: never name a
    top-level layout prop `src` — it's Slidev's reserved per-slide key (imports
    an external .md as the slide's content), so the slide silently vanishes
    from the deck; use `image` instead (`src` keys nested inside array items
    are fine). **`---` trap**: three or more consecutive dashes **anywhere** in
    frontmatter truncate the slide's YAML at that point — the rest of the block
    silently vanishes and the slide still renders (Slidev splits on `---` before
    YAML runs, so quoting does *not* help, single or double). Bites terminal
    output that contains rules or PowerShell's `Mode` column (`d----`, `-a----`).
    **"Anywhere" includes YAML comments** — a `# ---（…）` comment written *to warn
    about this very trap* silently truncated the slide (2026-07-17); the split runs
    before YAML, so comment-vs-value is not a distinction it makes.
    Escape as `"\x2D\x2D\x2D"` (double-quoted YAML) when the literal dashes are
    required. **Leading-`*` trap**: a YAML plain scalar *starting* with `*` is an
    **alias reference**, so a bullet like `- **一個人**做完…` dies with
    `ReferenceError: Unresolved alias`. Only bites at the **start** of a value —
    the same `**bold**` mid-sentence is fine, which is why it hides until someone
    front-loads the emphasis. Quote the string. Sibling of the `---` trap in the
    way that matters: **`pnpm typecheck` is green** (it never parses `slides.md`)
    — only `dev`/`build` catch either. **Base trap**: image paths are authored root-absolute
    (`/foo.png`) but must resolve through `withBase` (`shared/utils/with-base.ts`)
    so they respect each deck's `--base` — a raw `:src="/foo.png"` hits the site
    root (onboarding's same-named asset) on a `/week-N/` deck, silently loading
    the wrong image; new image layouts wrap the binding (`:src="withBase(image)"`).
  - `components/` — chrome (`Eyebrow`, `PageNo`, auto page number) + `MdInline`
    (renders a small inline-markup subset — bold / code / accent / link / newline —
    inside YAML strings; see `MdInline.vue` for the live set) + parameterized
    diagram components (`Git*`, `Gh*`, `Ai*`, `Sh*`) that auto-layout from
    semantic data. **SVG trap**: never write `<text font-size="22">` — Slidev's
    UnoCSS attributify mode matches the presentation attribute and emits
    `[font-size~="22"] { font-size: 5.5rem }`, blowing the text up. Put
    font-size/font-weight/letter-spacing in `style=""` instead.
  - `styles/` — design tokens (`:root` vars, 1:1 with spec.md) + Google Fonts.
    Dark mode = one `html.dark` block remapping neutral tokens (Slidev's dark
    toggle flips every layout); constant-white-on-brand spots are pinned with
    `#FFFFFF` literals. Details in DECISIONS.md「視覺線」.
  - Every deck sets `canvasWidth: 1920` (headmatter); px values inside layouts
    were copied verbatim from the 1920×1080 design file.
- `apps/templates/` — **local-only style-guide deck**: one slide per layout;
  since the handoff files were discarded, this deck IS the visual reference
  (curated, no longer 1:1 with the original design handoff — see DECISIONS.md
  「視覺線」). Committed to git but never built or deployed
  (`LOCAL_ONLY` in `scripts/build.mjs`).

## Course content (docs/ + DECISIONS.md)

The course-content workstream lives beside the code and has its own truth chain — never
restate it here: `DECISIONS.md` (settled decisions + gates) → `docs/README.md` (six-week
map, marker legend, 【NN】 numbering rules, kit-derivation rules, 發放原則) →
`docs/curriculum/week-N.md` (page-level deck plans) → `docs/kit/week-N.md` (weekly repo /
skills / knowledge-point checklists). Read docs/README.md's 標記說明 before editing any of
them. Editing traps:

- **【NN】 numbers are continuous per product arc** (W1→W2→W3 Dashboard; W4→W5→W6 notify
  system), NOT per week. Inserting/removing a block renumbers every downstream week in
  that arc — curriculum headers only (kit dropped 【NN】 on 2026-07-17). Current ranges
  live in docs/README.md「【NN】編號規則」.
- **curriculum ↔ kit are coupled**: kit knowledge-point lists group by class period
  (`- >PN — 堂標題`, 1:1 with the skill-dashboard tiles), not by 【NN】 — but every point
  still derives from that week's curriculum pages, so edit curriculum and kit as a pair
  (derivation rules in docs/README.md). 【NN】 renumbers no longer touch kit.
- **Cross-week prose references carry a source-week prefix** (`W1【03】`) so arc-wide
  renumbers must skip them.
- Weekly repos ship **state, not exercises** — see 發放原則 in docs/README.md before adding
  kit material.

The plan is versioned (v1 frozen, v2 re-grooms W4–W6) and per-week deck production still
adjusts details — current status lives in DECISIONS.md, not here.

## Conventions (and why)

- **pnpm workspaces** — one `pnpm install` at the root installs every deck + the addon.
- **Single Slidev version, pinned once** — `pnpm-workspace.yaml`'s `catalog:` pins
  `@slidev/cli` / theme / `vue`; every deck references `catalog:`, so all stay on
  one version with no duplicate installs.
- **Node pinned** via `.nvmrc` + `package.json` `engines`; CI matches it.
- **No Turborepo** — at this size, cache savings don't pay for the config complexity.
- **Branch naming** — a whole workstream *version* lands on one branch as one PR, named
  `<type>/<workstream>-vN` and mirrored across parallel workstreams so they read as a pair
  (`docs/course-content-v1` ↔ `feat/course-visual-v1`); smaller one-off work uses plain
  `<type>/<description>` (`feat/deck-common-slides`, `feat/favicon-og-meta`) with no `-vN`.
  Type follows Conventional Commits (`docs` for the planning line, `feat` for implementation).

## Working on a deck

- Dev one deck: `pnpm -C apps/<deck> dev` (`<deck>` = `week-N`, `onboarding`, or `templates`)
- Build one deck: `pnpm -C apps/<deck> build`
- Type-check the addon SFCs: `pnpm typecheck` (→ `pnpm -C shared typecheck`, `vue-tsc --noEmit`).
  Scoped to `shared/layouts` + `shared/components` via `shared/tsconfig.json` (`strictTemplates:
  false` so Slidev global components / `$page` don't false-positive); `setup/` is excluded (uses
  the `#slidev/slides` virtual module). Not run in CI — a local safety net, not a test framework.

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
