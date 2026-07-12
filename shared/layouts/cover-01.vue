<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps<{
  display?: string
  heading?: string
  date?: string
  module?: string
}>()

const { $slidev } = useSlideContext()

const FALLBACK_MODULE = 'ONBOARDING'

const moduleName = computed(
  () =>
    props.module ??
    ((($slidev?.configs ?? {}) as Record<string, unknown>).module as string | undefined) ??
    FALLBACK_MODULE,
)
</script>

<template>
  <div class="slidev-layout cover-01">
    <div class="module-row">
      <span class="module-label">MODULE</span>
      <span class="module-dot"></span>
      <span class="module-name">{{ moduleName }}</span>
    </div>
    <div class="titles">
      <span class="title-display"><MdInline :text="display" /></span>
      <span class="title-heading"><MdInline :text="heading" /></span>
    </div>
    <svg class="divider" width="360" height="28" viewBox="0 0 360 28">
      <line class="divider-line" x1="14" y1="14" x2="346" y2="14"></line>
      <circle class="node node-brand-open" cx="60" cy="14" r="10"></circle>
      <circle class="node node-brand" cx="180" cy="14" r="11"></circle>
      <circle class="node node-open" cx="300" cy="14" r="10"></circle>
    </svg>
    <span class="date">{{ date }}</span>
  </div>
</template>

<style scoped>
.cover-01 {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 56px;
  /* 置中群組上移 24px（date 為絕對定位、錨在底部不動）。 */
  padding-bottom: 48px;
  box-sizing: border-box;
}
.module-row {
  display: flex;
  align-items: center;
  gap: 20px;
}
.module-label,
.module-name {
  font-family: var(--font-mono);
  font-size: 26px;
  letter-spacing: 0.22em;
}
.module-label {
  font-weight: 600;
  color: var(--brand-git);
}
.module-name {
  font-weight: 500;
  color: var(--ink-3);
}
.module-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--line-2);
}
.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}
.title-display {
  font-family: var(--font-display-tc);
  font-size: 108px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.title-heading {
  font-family: var(--font-sans);
  font-size: 92px;
  font-weight: 900;
  line-height: 1.2;
  color: var(--ink);
  letter-spacing: 0.04em;
}
/* SVG 中性色走 token，深色模式隨 html.dark 重映射翻轉；品牌橘不變。 */
.divider {
  display: block;
}
.divider-line {
  stroke: var(--line);
  stroke-width: 3;
}
.node-brand {
  fill: var(--brand-git);
}
.node-brand-open {
  fill: var(--paper);
  stroke: var(--brand-git);
  stroke-width: 4;
}
.node-open {
  fill: var(--paper);
  stroke: var(--line-2);
  stroke-width: 4;
}
.date {
  position: absolute;
  bottom: 72px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 25px;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}
</style>
