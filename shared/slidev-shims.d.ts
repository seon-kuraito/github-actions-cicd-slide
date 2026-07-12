// Ambient shim for Slidev's client API used by a few SFCs (Eyebrow, PageNo,
// cover-01). `@slidev/client` is provided by Slidev at build time and is only a
// transitive dep, so it isn't resolvable from this zero-dependency addon — which
// means vue-tsc can't find its types. We declare only what the SFCs destructure
// from useSlideContext(); mirrors the structural shims in setup/main.ts and
// constants/vite-env.d.ts. Type-check only — never bundled.
declare module '@slidev/client' {
  import type { Ref } from 'vue'
  interface SlideContext {
    $page: Ref<number>
    $frontmatter: Record<string, unknown>
    $slidev: { configs?: Record<string, unknown>; [key: string]: unknown }
    [key: string]: unknown
  }
  export function useSlideContext(): SlideContext
}
