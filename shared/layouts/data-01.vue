<script setup lang="ts">
defineProps<{
  heading?: string
  cols?: { label?: string; heading?: string; desc?: string; active?: boolean }[]
}>()
</script>

<template>
  <div class="slidev-layout data-01">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="cols">
      <div v-for="(col, i) in cols" :key="i" class="col" :class="{ active: col.active }">
        <span class="col-label">{{ col.label }}</span>
        <span class="col-heading"><MdInline :text="col.heading" /></span>
        <span class="col-desc"><MdInline :text="col.desc" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.data-01 {
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
.cols {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
.col {
  padding: 56px 60px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border: 1px solid var(--line);
  border-top: 6px solid var(--line-2);
}
.col.active {
  border: 1px solid var(--brand-git);
  border-top: 6px solid var(--brand-git);
}
.col-label {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--ink-3);
}
.col.active .col-label {
  color: var(--brand-git);
}
.col-heading {
  font-family: var(--font-sans);
  font-size: 44px;
  font-weight: 700;
  color: var(--ink);
}
.col-desc {
  font-family: var(--font-sans);
  font-size: 30px;
  line-height: 1.85;
  color: var(--ink-2);
}
</style>
