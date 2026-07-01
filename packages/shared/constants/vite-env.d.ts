// Minimal ambient typing for `import.meta.env`. The addon has no `vite/client`
// to reference (Vite is a transitive dep), so we declare only the fields we read.
// Note: this interface REPLACES Vite's built-in `ImportMetaEnv` wherever it's in
// scope, so any Vite built-in we use (e.g. BASE_URL) must be re-declared here too.
interface ImportMetaEnv {
  // Vite built-in: the deck's `--base`, e.g. "/week-1/". Always present.
  readonly BASE_URL: string
  // Set by CI per branch (main → 'production'); absent in local dev / preparing.
  readonly VITE_ENV?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
