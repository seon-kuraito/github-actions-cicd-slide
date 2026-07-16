// Resolve a public-asset path against the deck's Vite base.
//
// Layouts author image paths as root-absolute (e.g. "/qr-slides.png") so slides
// read cleanly and stay base-agnostic. But a runtime `:src` binding is NOT
// rewritten by Vite, so "/qr-slides.png" hits the site origin root — correct for
// the onboarding deck (base "/") but wrong for a week deck (base "/week-1/"),
// where the asset lives at "/week-1/qr-slides.png". Prepending BASE_URL fixes
// both: onboarding stays "/qr-slides.png", week-1 becomes "/week-1/qr-slides.png".
//
// Pass-through for values that already carry an origin (absolute or
// protocol-relative URLs, data: URIs) so they're never double-prefixed.
export function withBase(path?: string): string | undefined {
  if (!path || /^(https?:)?\/\/|^data:/.test(path)) return path
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
