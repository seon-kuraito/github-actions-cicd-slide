<script setup lang="ts">
defineProps<{
  heading?: string
  cols?: { keys: string[]; desc: string }[][]
}>()
</script>

<template>
  <div class="slidev-layout tool-01">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="cols-grid">
      <div v-for="(col, ci) in cols" :key="ci" class="col">
        <div v-for="(row, ri) in col" :key="ri" class="key-row">
          <div class="keys">
            <span v-for="(key, ki) in row.keys" :key="ki" class="keycap">{{ key }}</span>
          </div>
          <span class="key-desc"><MdInline :text="row.desc" /></span>
        </div>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.tool-01 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.head-row,
.foot-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.title-block {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.cols-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 96px;
  align-content: center;
}
.col {
  display: flex;
  flex-direction: column;
}
.key-row {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px 0;
}
.key-row:not(:last-child) {
  border-bottom: 2px solid var(--line);
}
.keys {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 320px;
  flex-shrink: 0;
}
.keycap {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  color: var(--ink);
  background: var(--panel);
  border: 2px solid var(--line-2);
  border-bottom-width: 3px;
  border-radius: 8px;
  padding: 10px 20px;
}
.key-desc {
  font-family: var(--font-sans);
  font-size: 27px;
  color: var(--ink-2);
}
</style>
