#!/usr/bin/env node
// Build every deck under apps/* and assemble a single deployable dist/.
// Each deck builds with `--base /<name>/` into dist/<name>/; the per-deck
// _redirects (which Cloudflare ignores in subfolders) are aggregated into a
// single root dist/_redirects so history-mode deep links resolve.
import { readdirSync, existsSync, rmSync, readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const appsDir = join(root, 'apps')
const distDir = join(root, 'dist')

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

// Cloudflare Pages honors only the dist-root _redirects — fold each deck's
// path-scoped rule into one file and drop the ignored nested copies.
const blocks = []
for (const name of decks) {
  const f = join(distDir, name, '_redirects')
  if (existsSync(f)) {
    blocks.push(readFileSync(f, 'utf8').trim())
    rmSync(f)
  }
}
if (blocks.length > 0) {
  writeFileSync(join(distDir, '_redirects'), blocks.join('\n') + '\n')
  console.log(`\n✓ dist/_redirects (${blocks.length} rule block(s))`)
}

console.log(`✓ dist/ assembled from ${decks.length} deck(s)`)
