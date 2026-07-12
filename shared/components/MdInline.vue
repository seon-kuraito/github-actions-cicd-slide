<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ text?: string | number }>()

type Seg = { kind: 'text' | 'bold' | 'code' | 'br'; text: string }

const segs = computed<Seg[]>(() => {
  const src = String(props.text ?? '')
  const out: Seg[] = []
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\n)/g
  let last = 0
  for (const m of src.matchAll(re)) {
    const at = m.index ?? 0
    if (at > last) out.push({ kind: 'text', text: src.slice(last, at) })
    const tok = m[0]
    if (tok === '\n') out.push({ kind: 'br', text: '' })
    else if (tok.startsWith('**')) out.push({ kind: 'bold', text: tok.slice(2, -2) })
    else out.push({ kind: 'code', text: tok.slice(1, -1) })
    last = at + tok.length
  }
  if (last < src.length) out.push({ kind: 'text', text: src.slice(last) })
  return out
})
</script>

<template>
  <template v-for="(s, i) in segs" :key="i">
    <br v-if="s.kind === 'br'" />
    <strong v-else-if="s.kind === 'bold'" class="mdi-b">{{ s.text }}</strong>
    <code v-else-if="s.kind === 'code'" class="mdi-c">{{ s.text }}</code>
    <template v-else>{{ s.text }}</template>
  </template>
</template>

<style scoped>
.mdi-b {
  font-weight: 700;
}
.mdi-c {
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--mdi-code-color, var(--brand-git));
}
</style>
