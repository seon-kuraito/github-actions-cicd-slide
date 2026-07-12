#!/usr/bin/env node
// Build every deck under apps/* and assemble a single deployable dist/.
//
// Two kinds of deck live under apps/*:
//   - week-N      → built with `--base /week-N/` into dist/week-N/, served at /week-N/
//   - onboarding  → built with `--base /` into dist/ root, served at the domain
//                   root /. It replaces the old hand-written hub/ — onboarding
//                   IS the root page now (its public/ carries robots.txt).
//
// History-mode SPA fallback for deep links is handled by the deploy Worker
// (cloudflare/router.mjs), not by _redirects — so Slidev's per-deck _redirects
// are dropped during assembly.
import { readdirSync, existsSync, rmSync, readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const appsDir = join(root, 'apps')
const distDir = join(root, 'dist')

// The onboarding deck is special: base `/`, output into dist/ root — so it's kept
// out of the week loop, the sitemap, and the per-env noindex rule (see below).
const ONBOARDING = 'onboarding'

// Local-only decks: committed for reference but never built or deployed.
// apps/templates is the design-system style guide (the living reference for
// every custom layout) — it must stay out of dist/ and the sitemap.
const LOCAL_ONLY = new Set(['templates'])

// The canonical (production) origin the sitemap advertises to search engines.
const PROD_ORIGIN = 'https://github-actions-cicd-slide.seonkuraito.com'
const isProduction = process.env.VITE_ENV === 'production'

// Discover decks: apps/* dirs that actually hold a slides.md (weeks added over
// time — absent ones simply don't get built, no error).
const decks = readdirSync(appsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !LOCAL_ONLY.has(d.name) && existsSync(join(appsDir, d.name, 'slides.md')))
  .map((d) => d.name)
  .sort()

const weeks = decks.filter((name) => name !== ONBOARDING)
const hasOnboarding = decks.includes(ONBOARDING)

if (decks.length === 0) {
  console.error('No decks found under apps/* (expected a slides.md).')
  process.exit(1)
}

console.log(`Assembling ${decks.length} deck(s): ${decks.join(', ')}`)
rmSync(distDir, { recursive: true, force: true })

// Build one deck with `slidev build --base <base> --out <out>`. Clears the deck's
// stale local dist first (Slidev's default output location, unused in assembly).
function buildDeck(name, base, out) {
  rmSync(join(appsDir, name, 'dist'), { recursive: true, force: true })
  console.log(`\n▸ ${name}  (base ${base})`)
  execFileSync('pnpm', ['-C', `apps/${name}`, 'exec', 'slidev', 'build', '--base', base, '--out', out], {
    cwd: root,
    stdio: 'inherit',
  })
}

// Onboarding first (base /, into dist root), then the weeks into their subdirs.
// Neither build empties dist/ (it's outside each deck's Vite root, so Vite won't
// auto-clear it), but building the root deck first keeps the intent obvious.
if (hasOnboarding) buildDeck(ONBOARDING, '/', distDir)
for (const name of weeks) buildDeck(name, `/${name}/`, join(distDir, name))

// Slidev emits a per-deck _redirects (200-rewrite) for history-mode SPA fallback,
// but Workers Static Assets rejects those: combined with the default html_handling
// they trip its infinite-loop detector (code 100324). The deploy Worker
// (cloudflare/router.mjs) does per-deck fallback instead, so just drop them.
//   week-N     → dist/week-N/_redirects
//   onboarding → dist/_redirects (root)
const redirectFiles = weeks.map((name) => join(distDir, name, '_redirects'))
if (hasOnboarding) redirectFiles.push(join(distDir, '_redirects'))
let dropped = 0
for (const f of redirectFiles) {
  if (existsSync(f)) {
    rmSync(f)
    dropped++
  }
}
if (dropped > 0) console.log(`\n✓ dropped ${dropped} _redirects (worker handles routing)`)

// Per-env indexing control, injected at build time so it stays in the static
// HTML and crawlers honour it without executing JS.
//   - weeks: crawlable in production; noindex in every other env (preparing,
//     local) so staging never surfaces in search.
//   - onboarding: noindex in BOTH envs — it's just a launcher; the decks under
//     /week-N/ are the searchable content.
function injectNoindex(indexHtml) {
  if (!existsSync(indexHtml)) return false
  const html = readFileSync(indexHtml, 'utf8')
  writeFileSync(indexHtml, html.replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'))
  return true
}

const noindexTargets = []
if (!isProduction) noindexTargets.push(...weeks.map((name) => join(distDir, name, 'index.html')))
if (hasOnboarding) noindexTargets.push(join(distDir, 'index.html'))
let noindexed = 0
for (const f of noindexTargets) if (injectNoindex(f)) noindexed++
if (noindexed > 0) console.log(`✓ injected noindex into ${noindexed} deck index(es)`)

// sitemap.xml — always advertises the production deck URLs (the canonical site
// GSC indexes), generated from the discovered weeks so it stays in sync as weeks
// are added. Onboarding is intentionally omitted (it's noindex).
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  weeks.map((name) => `  <url><loc>${PROD_ORIGIN}/${name}/</loc></url>`).join('\n') +
  `\n</urlset>\n`
writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
console.log(`✓ generated sitemap.xml (${weeks.length} deck URL(s))`)

console.log(`✓ dist/ assembled from ${decks.length} deck(s)`)
