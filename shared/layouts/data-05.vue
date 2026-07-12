<script setup lang="ts">
defineProps<{
  heading?: string
  steps?: { no?: string; heading?: string; desc?: string; state?: 'done' | 'now' | 'todo' }[]
}>()
</script>

<template>
  <div class="slidev-layout data-05">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="steps-area">
      <div class="steps">
        <span class="track"></span>
        <div v-for="(step, i) in steps" :key="i" class="step" :class="step.state ?? 'todo'">
          <span class="step-dot"></span>
          <span class="step-no">{{ step.no }}</span>
          <span class="step-heading"><MdInline :text="step.heading" /></span>
          <span class="step-desc"><MdInline :text="step.desc" /></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.data-05 {
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
.steps-area {
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 0;
}
.steps {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px;
  padding-top: 12px;
}
/* 連接線填滿到容器右緣（與末欄文案切齊）。 */
.track {
  position: absolute;
  top: 23px;
  left: 12px;
  right: 0;
  height: 3px;
  background: var(--line);
}
.step {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.step-dot {
  width: 26px;
  height: 26px;
  border-radius: 999px;
}
.step.done .step-dot {
  background: var(--brand-git);
}
.step.now .step-dot,
.step.todo .step-dot {
  box-sizing: border-box;
  background: var(--paper);
}
.step.now .step-dot,
.step.todo .step-dot {
  border: 6px solid var(--line-2);
}
.step-no {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.step.done .step-no {
  color: var(--brand-git);
}
.step-heading {
  font-family: var(--font-sans);
  font-size: 38px;
  font-weight: 700;
  color: var(--ink);
}
.step-desc {
  font-family: var(--font-sans);
  font-size: 27px;
  line-height: 1.8;
  color: var(--ink-3);
}
</style>
