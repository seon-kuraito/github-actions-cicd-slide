<script setup lang="ts">
defineProps<{
  heading?: string
  itemLabel?: string
  cols?: { label?: string; active?: boolean }[]
  rows?: { item?: string; cells?: string[] }[]
}>()
</script>

<template>
  <div class="slidev-layout data-03">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="table-area">
      <div class="table-head">
        <span class="head-cell">{{ itemLabel }}</span>
        <span v-for="(col, i) in cols" :key="i" class="head-cell" :class="{ active: col.active }">{{ col.label }}</span>
      </div>
      <div v-for="(row, r) in rows" :key="r" class="table-row">
        <span class="row-item"><MdInline :text="row.item" /></span>
        <span v-for="(cell, c) in row.cells" :key="c" class="row-cell" :class="{ active: cols?.[c]?.active }"><MdInline :text="cell" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.data-03 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-bar,
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-bar-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.table-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.table-head {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 24px 0;
  border-bottom: 2px solid var(--ink-2);
}
.head-cell {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}
.head-cell.active {
  color: var(--brand-git);
}
.table-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding: 34px 0;
  align-items: baseline;
}
.table-row:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.row-item {
  font-family: var(--font-sans);
  font-size: 34px;
  font-weight: 700;
  color: var(--ink-3);
}
.row-cell {
  font-family: var(--font-sans);
  font-size: 29px;
  color: var(--ink);
}
</style>
