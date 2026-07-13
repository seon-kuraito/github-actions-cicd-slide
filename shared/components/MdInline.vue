<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ text?: string | number }>()

type Seg = { kind: 'text' | 'bold' | 'code' | 'accent' | 'br' | 'link'; text: string; href?: string }

const segs = computed<Seg[]>(() => {
  const src = String(props.text ?? '')
  const out: Seg[] = []
  const re = /(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`|\[[^\]]+\]\([^)]+\)|\n)/g
  let last = 0
  for (const m of src.matchAll(re)) {
    const at = m.index ?? 0
    if (at > last) out.push({ kind: 'text', text: src.slice(last, at) })
    const tok = m[0]
    if (tok === '\n') out.push({ kind: 'br', text: '' })
    else if (tok.startsWith('**')) out.push({ kind: 'bold', text: tok.slice(2, -2) })
    else if (tok.startsWith('==')) out.push({ kind: 'accent', text: tok.slice(2, -2) })
    else if (tok.startsWith('[')) {
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok)
      if (link) out.push({ kind: 'link', text: link[1], href: link[2] })
    } else out.push({ kind: 'code', text: tok.slice(1, -1) })
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
    <span v-else-if="s.kind === 'accent'" class="mdi-a">{{ s.text }}</span>
    <a v-else-if="s.kind === 'link'" class="mdi-a mdi-lnk" :href="s.href">{{ s.text }}</a>
    <code v-else-if="s.kind === 'code'" class="mdi-c">{{ s.text }}</code>
    <template v-else>{{ s.text }}</template>
  </template>
</template>

<style scoped>
.mdi-b {
  font-weight: 700;
}
.mdi-a {
  color: var(--brand-git);
  font-weight: 700;
}
/* [text](href) 連結＝品牌高亮＋底線；相對路徑（如 /week-1/1）自動落在當前環境的 domain。
 * border-bottom: none 蓋掉 Slidev 預設主題給 a 的 1px dashed（否則與底線疊成雙線）。
 * hover 不變色（釘住品牌色、改以移除底線回饋）；active 下沉 1px（position 位移，
 * 不用 transform——inline 元素吃不到）。 */
.mdi-lnk {
  position: relative;
  text-decoration: underline;
  text-underline-offset: 0.14em;
  text-decoration-thickness: 0.05em;
  border-bottom: none !important;
}
.mdi-lnk:hover {
  color: var(--brand-git);
  text-decoration: none;
}
.mdi-lnk:active {
  top: 1px;
}
.mdi-c {
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--mdi-code-color, var(--brand-git));
}
</style>
