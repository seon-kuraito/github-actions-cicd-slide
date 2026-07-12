<script setup lang="ts">
import GhStatusIcon from './GhStatusIcon.vue'

type Status = 'ok' | 'err' | 'running' | 'skip' | 'queued'
interface Cell {
  status?: Status
  label?: string
}
interface Row {
  name: string
  cells?: Cell[]
}

withDefaults(defineProps<{ cols?: string[]; rows?: Row[] }>(), { cols: () => [], rows: () => [] })

const st = (c: Cell): Status => c.status ?? 'ok'
</script>

<template>
  <div class="matrix" :style="{ '--cols': cols.length }">
    <span></span>
    <span v-for="c in cols" :key="c" class="col-head">{{ c }}</span>
    <template v-for="r in rows" :key="r.name">
      <span class="row-head">{{ r.name }}</span>
      <div v-for="(c, i) in r.cells ?? []" :key="i" :class="['cell', `st-${st(c)}`]">
        <GhStatusIcon :status="st(c)" :size="24" />
        <span class="cell-label">{{ c.label }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.matrix {
  display: grid;
  grid-template-columns: 220px repeat(var(--cols), 1fr);
  gap: 16px;
  align-items: center;
}
.col-head {
  text-align: center;
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.row-head {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.cell {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 1px solid var(--line-2);
}
.cell.st-running {
  border: 2px solid var(--brand-github);
  background: var(--brand-github-tint);
}
.cell.st-err {
  background: var(--diff-del-bg);
}
.cell-label {
  font-family: var(--font-mono);
  font-size: 21px;
  color: var(--ink);
}
.st-running .cell-label {
  color: var(--brand-github);
  font-weight: 600;
}
.st-err .cell-label {
  color: var(--err);
  font-weight: 600;
}
.st-skip .cell-label,
.st-queued .cell-label {
  color: var(--ink-4);
}
</style>
