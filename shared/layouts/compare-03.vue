<script setup lang="ts">
interface ManualStep {
  no?: string
  text?: string
}

withDefaults(
  defineProps<{
    heading?: string
    manualTag?: string
    manualSteps?: ManualStep[]
    autoTag?: string
    trigger?: string
    autoText?: string
    autoNote?: string
  }>(),
  { manualSteps: () => [] },
)
</script>

<template>
  <div class="slidev-layout compare-03">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="cols">
      <div class="manual-col">
        <span class="manual-tag">{{ manualTag }}</span>
        <div v-for="(s, i) in manualSteps" :key="i" class="manual-step">
          <span class="step-no">{{ s.no }}</span>
          <span class="step-text"><MdInline :text="s.text" /></span>
        </div>
      </div>
      <div class="auto-col">
        <span class="auto-tag">{{ autoTag }}</span>
        <div class="auto-box">
          <span class="trigger">{{ trigger }}</span>
          <span class="auto-text"><MdInline :text="autoText" /></span>
        </div>
        <span class="auto-note"><MdInline :text="autoNote" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.compare-03 {
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
.cols {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 96px;
}
.manual-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}
.manual-tag {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
  margin-bottom: 24px;
}
.manual-step {
  display: flex;
  align-items: baseline;
  gap: 24px;
  padding: 18px 0;
}
.manual-step:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.step-no {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  color: var(--ink-3);
  width: 48px;
  flex-shrink: 0;
}
.step-text {
  font-family: var(--font-sans);
  font-size: 27px;
  color: var(--ink-2);
}
.auto-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;
}
.auto-tag {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--brand-git);
}
.auto-box {
  border: 3px solid var(--brand-git);
  padding: 64px 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.trigger {
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 600;
  color: var(--brand-git);
}
.auto-text {
  font-family: var(--font-sans);
  font-size: 40px;
  font-weight: 900;
  line-height: 1.4;
  color: var(--ink);
}
.auto-note {
  font-family: var(--font-sans);
  font-size: 27px;
  line-height: 1.8;
  color: var(--ink-3);
}
</style>
