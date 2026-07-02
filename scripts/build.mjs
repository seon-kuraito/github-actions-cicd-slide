#!/usr/bin/env node
// Build every deck under apps/* and assemble a single deployable dist/.
// Each deck builds with `--base /<name>/` into dist/<name>/. History-mode SPA
// fallback for deep links is handled by the deploy Worker (cloudflare/router.mjs), not
// by _redirects — so Slidev's per-deck _redirects are dropped during assembly.
import { readdirSync, existsSync, rmSync, cpSync, readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const appsDir = join(root, 'apps')
const distDir = join(root, 'dist')
const hubDir = join(root, 'hub')

// The canonical (production) origin the sitemap advertises to search engines.
const PROD_ORIGIN = 'https://github-actions-cicd-slide.seonkuraito.com'
const isProduction = process.env.VITE_ENV === 'production'

// Discover decks: apps/* dirs that actually hold a slides.md (weeks added over
// time — absent ones simply don't get built, no error).
const decks = readdirSync(appsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(appsDir, d.name, 'slides.md')))
  .map((d) => d.name)
  .sort()

if (decks.length === 0) {
  console.error('No decks found under apps/* (expected a slides.md).')
  process.exit(1)
}

console.log(`Assembling ${decks.length} deck(s): ${decks.join(', ')}`)
rmSync(distDir, { recursive: true, force: true })

for (const name of decks) {
  const base = `/${name}/`
  const out = join(distDir, name)
  rmSync(join(appsDir, name, 'dist'), { recursive: true, force: true }) // stale per-deck output
  console.log(`\n▸ ${name}  (base ${base})`)
  execFileSync('pnpm', ['-C', `apps/${name}`, 'exec', 'slidev', 'build', '--base', base, '--out', out], {
    cwd: root,
    stdio: 'inherit',
  })
}

// Slidev emits a per-deck _redirects (200-rewrite) for history-mode SPA fallback,
// but Workers Static Assets rejects those: combined with the default html_handling
// they trip its infinite-loop detector (code 100324). The deploy Worker
// (cloudflare/router.mjs) does per-deck fallback instead, so just drop them.
let dropped = 0
for (const name of decks) {
  const f = join(distDir, name, '_redirects')
  if (existsSync(f)) {
    rmSync(f)
    dropped++
  }
}
if (dropped > 0) console.log(`\n✓ dropped ${dropped} per-deck _redirects (worker handles routing)`)

// Root static assets (hub/): the hand-written hub index.html that
// lives at the subdomain root `/`, plus any future favicon/og assets. Copied
// verbatim into dist/ root, on top of the per-deck /week-N/ folders.
if (existsSync(hubDir)) {
  cpSync(hubDir, distDir, { recursive: true })
  console.log(`✓ dist/ root static assets copied from hub/`)

  // Inline VITE_ENV into the copied hub index.html. hub/ bypasses Vite, so
  // Vite's own %ENV% replacement never runs on it — we do the same substitution
  // here. Fallback matches packages/shared/constants/environments.ts.
  const hubEnv = process.env.VITE_ENV || 'preparing'
  const hubHtml = join(distDir, 'index.html')
  if (existsSync(hubHtml)) {
    writeFileSync(hubHtml, readFileSync(hubHtml, 'utf8').replaceAll('%VITE_ENV%', hubEnv))
  }
}

// Per-env indexing control for decks. Production decks stay crawlable; every
// other env (preparing, local) gets a noindex robots meta injected into each
// deck's index.html, so staging never surfaces in search. (The hub is noindex
// in both envs — set statically in hub/index.html.) Injecting at build time
// keeps it in the static HTML, so crawlers honour it without executing JS.
if (!isProduction) {
  for (const name of decks) {
    const f = join(distDir, name, 'index.html')
    if (!existsSync(f)) continue
    const html = readFileSync(f, 'utf8')
    writeFileSync(f, html.replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'))
  }
  console.log(`✓ injected noindex into ${decks.length} deck(s) (non-production build)`)
}

// sitemap.xml — always advertises the production deck URLs (the canonical site
// GSC indexes), generated from the discovered decks so it stays in sync as weeks
// are added. The hub is intentionally omitted (it's noindex).
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  decks.map((name) => `  <url><loc>${PROD_ORIGIN}/${name}/</loc></url>`).join('\n') +
  `\n</urlset>\n`
writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
console.log(`✓ generated sitemap.xml (${decks.length} deck URL(s))`)

console.log(`✓ dist/ assembled from ${decks.length} deck(s)`)
