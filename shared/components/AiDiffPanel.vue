<script setup lang="ts">
import { computed } from 'vue'

type DiffKind = 'add' | 'del' | 'ctx'
type DiffLine = { kind?: DiffKind; no?: string | number; code: string }

const props = withDefaults(
  defineProps<{
    file?: string
    lines?: DiffLine[]
  }>(),
  { lines: () => [] },
)

const heading = computed(() => 'DIFF')
const adds = computed(() => props.lines.filter((l) => l.kind === 'add').length)
const dels = computed(() => props.lines.filter((l) => l.kind === 'del').length)

const kindOf = (l: DiffLine): DiffKind => l.kind ?? 'ctx'
const marker = (l: DiffLine) => (l.kind === 'add' ? '+' : l.kind === 'del' ? '−' : l.no)
</script>

<template>
  <div class="diff-panel">
    <div class="panel-head">
      <span class="head-label">{{ heading }}</span>
      <span class="head-stat"><span class="stat-add">+{{ adds }}</span> <span class="stat-del">−{{ dels }}</span></span>
    </div>
    <div class="diff-body">
      <div v-for="(l, i) in lines" :key="i" :class="['diff-row', `is-${kindOf(l)}`]">
        <span class="line-no">{{ marker(l) }}</span>
        <span class="line-code">{{ l.code }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.diff-panel {
  width: 1000px;
  flex-shrink: 0;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 44px;
  border-bottom: 1px solid var(--line);
}
.head-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.head-stat {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.stat-add {
  color: var(--ok);
}
.stat-del {
  color: var(--brand-git-deep);
}
.diff-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 24px;
  line-height: 1.5;
}
.diff-row {
  display: flex;
  gap: 32px;
  padding: 12px 44px;
}
.diff-row.is-add {
  background: var(--diff-add-bg);
}
.diff-row.is-del {
  background: var(--diff-del-bg);
}
.line-no {
  width: 52px;
  flex-shrink: 0;
  text-align: right;
  color: var(--ink-4);
}
.is-add .line-no {
  color: var(--ok);
}
.is-del .line-no {
  color: var(--brand-git-deep);
}
.line-code {
  white-space: pre;
  color: var(--ink-2);
}
.is-add .line-code {
  color: var(--diff-add-ink);
}
.is-del .line-code {
  color: var(--diff-del-ink);
}
</style>
