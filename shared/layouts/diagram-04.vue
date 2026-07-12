<script setup lang="ts">
interface Step {
  label?: string
  active?: boolean
}

withDefaults(
  defineProps<{
    heading?: string
    steps?: Step[]
    zoomTag?: string
    zoomText?: string
  }>(),
  { steps: () => [] },
)

const ARROW = '→'
</script>

<template>
  <div class="slidev-layout diagram-04">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="main">
      <div class="chain">
        <template v-for="(s, i) in steps" :key="i">
          <span v-if="i > 0" class="chain-arrow">{{ ARROW }}</span>
          <span class="step" :class="{ active: s.active }"><MdInline :text="s.label" /></span>
        </template>
      </div>
      <div class="zoom">
        <span class="zoom-tag">{{ zoomTag }}</span>
        <span class="zoom-text"><MdInline :text="zoomText" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.diagram-04 {
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
  font-size: 64px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
}
.chain {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.chain-arrow {
  font-family: var(--font-mono);
  font-size: 30px;
  color: var(--ink-3);
}
.step {
  font-family: var(--font-sans);
  font-size: 28px;
  padding: 20px 32px;
  white-space: nowrap;
  color: var(--ink-2);
  border: 1px solid var(--line-2);
}
.step.active {
  font-weight: 700;
  color: var(--ink);
  border: 3px solid var(--brand-git);
}
.zoom {
  border: 3px solid var(--brand-git);
  padding: 52px 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1400px;
}
.zoom-tag {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--brand-git);
}
.zoom-text {
  font-family: var(--font-sans);
  font-size: 33px;
  line-height: 1.8;
  color: var(--ink);
}
</style>
