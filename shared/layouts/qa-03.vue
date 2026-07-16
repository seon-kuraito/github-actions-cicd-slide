<script setup lang="ts">
import { withBase } from '../utils/with-base'

defineProps<{
  label?: string
  heading?: string
  hints?: string[]
  image?: string
  imageLabel?: string
  imageHint?: string
}>()
</script>

<template>
  <div class="slidev-layout qa-03">
    <PageNo />
    <div class="header">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <div class="body">
      <div v-if="image" class="figure">
        <img :src="withBase(image)" class="figure-img" alt="" />
      </div>
      <div v-else class="figure-placeholder">
        <span class="placeholder-label">{{ imageLabel }}</span>
        <span class="placeholder-hint">{{ imageHint }}</span>
      </div>
      <div class="question">
        <span class="label">{{ label }}</span>
        <span class="heading"><MdInline :text="heading" /></span>
        <div class="hints">
          <div v-for="(hint, i) in hints ?? []" :key="i" class="hint">
            <span class="hint-dot"></span>
            <span class="hint-text"><MdInline :text="hint" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.qa-03 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.header,
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.body {
  flex: 1;
  display: flex;
  gap: 96px;
  align-items: stretch;
}
.figure {
  flex: 1;
  background: var(--panel);
  overflow: hidden;
}
.figure-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.figure-placeholder {
  flex: 1;
  background: var(--panel);
  border: 2px dashed var(--line-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.placeholder-label {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.placeholder-hint {
  font-family: var(--font-mono);
  font-size: 24px;
  color: var(--ink-4);
}
.question {
  width: 700px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}
.label {
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-git);
}
.heading {
  font-family: var(--font-sans);
  font-size: 60px;
  font-weight: 900;
  line-height: 1.45;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.hints {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.hint {
  display: flex;
  align-items: baseline;
  gap: 24px;
}
.hint-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: var(--brand-git);
  flex-shrink: 0;
}
.hint-text {
  font-family: var(--font-sans);
  font-size: 28px;
  line-height: 1.7;
  color: var(--ink-2);
}
</style>
