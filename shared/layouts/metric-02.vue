<script setup lang="ts">
defineProps<{
  number?: string | number
  unit?: string
  desc?: string
}>()
</script>

<template>
  <div class="slidev-layout metric-02">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <span class="giant-number">{{ number }}</span>
    <span class="unit">{{ unit }}</span>
    <span class="desc"><MdInline :text="desc" /></span>
  </div>
</template>

<style scoped>
.metric-02 {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  box-sizing: border-box;
}
.eyebrow-pos {
  position: absolute;
  top: 72px;
  left: 100px;
  z-index: 2;
}
.giant-number {
  font-family: var(--font-display);
  font-size: 340px;
  font-weight: 700;
  line-height: 1;
  color: var(--brand-git);
  letter-spacing: -0.03em;
}
.unit {
  font-family: var(--font-mono);
  font-size: 27px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: var(--ink-3);
}
.desc {
  font-family: var(--font-sans);
  font-size: 38px;
  line-height: 1.7;
  color: var(--ink);
  text-align: center;
  max-width: 1200px;
}
</style>
