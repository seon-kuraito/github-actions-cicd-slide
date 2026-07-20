// Visual-verify harness: screenshot deck slides in light/dark for review.
//
// Self-bootstraps puppeteer-core into scripts/node_modules on first run (no
// Chromium download — it drives the system Chrome), so the dependency never
// enters the pnpm workspace / lockfile / CI (the repo keeps browser automation
// out of CI on purpose). Starts a throwaway dev server for the deck, shoots the
// requested pages, then tears the server down.
//
// Usage:
//   node scripts/shot.mjs <deck> <pages> [--mode both|light|dark]
//                         [--out <dir>] [--port <n>] [--scale <n>]
//     <deck>   week-1 | week-2 | … | onboarding | templates
//     <pages>  comma-separated page numbers, e.g. 128 or 128,185,187
//     --mode   light | dark | both     (default both)
//     --out    output directory        (default scripts/.shots)
//     --port   dev server port         (default 3999)
//     --scale  deviceScaleFactor       (default 0.6)
//   env CHROME_PATH   override the Chrome/Chromium binary
//
// Examples:
//   node scripts/shot.mjs week-1 128,185 --mode both
//   pnpm shot week-1 128                 (via the root "shot" script)

import { execSync, spawn } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const SCRIPTS_DIR = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(SCRIPTS_DIR, '..')

// ---- args ----
const [deck, pagesArg, ...rest] = process.argv.slice(2)
if (!deck || !pagesArg) {
  console.error('usage: node scripts/shot.mjs <deck> <pages> [--mode both|light|dark] [--out dir] [--port n] [--scale n]')
  process.exit(1)
}
const opts = { mode: 'both', out: join(SCRIPTS_DIR, '.shots'), port: '3999', scale: '0.6' }
for (let i = 0; i < rest.length; i += 2) {
  const key = rest[i]?.replace(/^--/, '')
  if (key && key in opts && rest[i + 1] != null) opts[key] = rest[i + 1]
}
const pages = pagesArg.split(',').map((s) => s.trim()).filter(Boolean)
const modes = opts.mode === 'both' ? ['light', 'dark'] : [opts.mode]

// ---- system Chrome ----
function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean)
  const found = candidates.find((p) => existsSync(p))
  if (!found) {
    console.error('No Chrome/Chromium found — set CHROME_PATH to your browser binary.')
    process.exit(1)
  }
  return found
}

// ---- puppeteer-core (installed on demand, scripts/ only) ----
async function loadPuppeteer() {
  try {
    return (await import('puppeteer-core')).default
  } catch {
    console.error('· first run: installing puppeteer-core into scripts/ (no Chromium download)…')
    execSync('npm install', {
      cwd: SCRIPTS_DIR,
      stdio: 'inherit',
      env: { ...process.env, PUPPETEER_SKIP_DOWNLOAD: '1' },
    })
    return (await import('puppeteer-core')).default
  }
}

// ---- throwaway dev server (started detached so we can kill the whole tree) ----
function startDevServer(deck, port) {
  const child = spawn('pnpm', ['-C', `apps/${deck}`, 'dev', '--port', String(port)], {
    cwd: REPO_ROOT,
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  return new Promise((ready, fail) => {
    const timer = setTimeout(() => fail(new Error(`dev server not ready on :${port} after 60s`)), 60000)
    const scan = (buf) => {
      if (buf.toString().includes(`localhost:${port}`)) {
        clearTimeout(timer)
        ready(child)
      }
    }
    child.stdout.on('data', scan)
    child.stderr.on('data', scan)
    child.on('exit', (code) => { clearTimeout(timer); fail(new Error(`dev server exited early (${code})`)) })
  })
}
function stopDevServer(child) {
  try { process.kill(-child.pid, 'SIGTERM') } catch { /* already gone */ }
}

// ---- run ----
const chrome = findChrome()
const puppeteer = await loadPuppeteer()
mkdirSync(opts.out, { recursive: true })

console.error(`· starting apps/${deck} dev on :${opts.port} …`)
const server = await startDevServer(deck, opts.port)
let browser
try {
  browser = await puppeteer.launch({ executablePath: chrome, headless: 'new' })
  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: Number(opts.scale) })
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }])
  for (const n of pages) {
    for (const mode of modes) {
      await page.goto(`http://localhost:${opts.port}/${n}?clicks=99`, { waitUntil: 'domcontentloaded', timeout: 120000 })
      await page.waitForSelector('.slidev-layout', { timeout: 120000 })
      await page.evaluate((dark) => {
        localStorage.clear()
        document.documentElement.classList.toggle('dark', dark)
      }, mode === 'dark')
      await new Promise((r) => setTimeout(r, 1000))
      const file = join(opts.out, `${deck}-p${n}-${mode}.png`)
      await page.screenshot({ path: file })
      console.log(file)
    }
  }
} finally {
  if (browser) await browser.close()
  stopDevServer(server)
}
