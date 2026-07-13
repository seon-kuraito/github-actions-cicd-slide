<script setup lang="ts">
interface Stat {
  tag?: string
  value?: string | number
  unit?: string
  desc?: string
}

defineProps<{
  heading?: string
  before?: Stat
  after?: Stat
}>()

const ARROW = '→'
</script>

<template>
  <div class="slidev-layout metric-01">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="stats">
      <div class="stat before">
        <span class="stat-tag">{{ before?.tag }}</span>
        <div class="value-row">
          <span class="value">{{ before?.value }}</span>
          <span class="unit">{{ before?.unit }}</span>
        </div>
        <span class="desc"><MdInline :text="before?.desc" /></span>
      </div>
      <span class="arrow">{{ ARROW }}</span>
      <div class="stat after">
        <span class="stat-tag">{{ after?.tag }}</span>
        <div class="value-row">
          <span class="value">{{ after?.value }}</span>
          <span class="unit">{{ after?.unit }}</span>
        </div>
        <span class="desc"><MdInline :text="after?.desc" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.metric-01 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.heading-block {
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
.stats {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.stat-tag {
  font-family: var(--font-mono);
  font-size: 25px;
  letter-spacing: 0.22em;
}
.before .stat-tag {
  font-weight: 500;
  color: var(--ink-3);
}
.after .stat-tag {
  font-weight: 600;
  color: var(--brand-git);
}
.value-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
}
.value {
  font-family: var(--font-display);
  font-size: 200px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
}
.before .value {
  color: var(--ink-3);
}
.after .value {
  color: var(--brand-git);
}
.unit {
  font-family: var(--font-mono);
  font-size: 34px;
}
.before .unit {
  font-weight: 500;
  color: var(--ink-3);
}
.after .unit {
  font-weight: 600;
  color: var(--brand-git);
}
.desc {
  font-family: var(--font-sans);
  font-size: 28px;
}
.before .desc {
  color: var(--ink-2);
}
.after .desc {
  font-weight: 700;
  color: var(--ink);
}
.arrow {
  font-family: var(--font-mono);
  font-size: 72px;
  color: var(--brand-git);
}
</style>
