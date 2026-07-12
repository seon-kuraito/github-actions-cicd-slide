<script setup lang="ts">
defineProps<{
  heading?: string
  stats?: { value?: string | number; unit?: string; heading?: string; desc?: string; active?: boolean }[]
}>()
</script>

<template>
  <div class="slidev-layout data-04">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="stats">
      <div v-for="(s, i) in stats" :key="i" class="stat" :class="{ active: s.active }">
        <span class="stat-value">{{ s.value }}<span v-if="s.unit" class="stat-unit">{{ s.unit }}</span></span>
        <span class="stat-heading"><MdInline :text="s.heading" /></span>
        <span class="stat-desc"><MdInline :text="s.desc" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.data-04 {
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
.stats {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  gap: 48px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-left: 48px;
  border-left: 6px solid var(--line);
}
.stat.active {
  border-left: 6px solid var(--brand-git);
}
.stat-value {
  font-family: var(--font-display);
  font-size: 130px;
  font-weight: 700;
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.03em;
}
.stat-unit {
  font-size: 72px;
  color: var(--brand-git);
}
.stat-heading {
  font-family: var(--font-sans);
  font-size: 32px;
  font-weight: 700;
  color: var(--ink);
}
.stat-desc {
  font-family: var(--font-sans);
  font-size: 27px;
  line-height: 1.7;
  color: var(--ink-3);
}
</style>
