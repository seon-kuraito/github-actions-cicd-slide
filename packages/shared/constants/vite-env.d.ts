// Minimal ambient typing for `import.meta.env`. The addon has no `vite/client`
// to reference (Vite is a transitive dep), so we declare the one field we read.
interface ImportMetaEnv {
  readonly VITE_ENV?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
