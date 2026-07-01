/// <reference path="./vite-env.d.ts" />

// Environment detection — a Vite/Slidev take on the Next.js
// `constants/environments` pattern. `ENV` reads `import.meta.env.VITE_ENV` (the
// browser has no `process`; Vite only exposes `VITE_`-prefixed vars and inlines
// them at build time).
//
// CI sets VITE_ENV per branch (.github/workflows/deploy.yml): main → 'production',
// preparing → 'preparing'. Local dev has none, so ENV falls back to 'preparing'.
//
// Usage: import { isProduction } from 'slidev-addon-shared/constants/environments'

export const ENVIRONMENTS = ['preparing', 'production'] as const

export type Environment = (typeof ENVIRONMENTS)[number]

export const ENV: Environment =
  (import.meta.env.VITE_ENV as Environment) || 'preparing'

export const isPreparing = ENV === 'preparing'
export const isProduction = ENV === 'production'
