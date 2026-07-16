<script setup lang="ts">
import { withBase } from '../utils/with-base'

defineProps<{
  heading?: string
  figures?: { src?: string; alt?: string; label?: string; note?: string; no?: string | number; caption?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout image-04">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="figures">
      <div v-for="(fig, i) in figures" :key="i" class="figure">
        <div v-if="fig.src" class="media">
          <img :src="withBase(fig.src)" :alt="fig.alt" class="media-img" />
        </div>
        <div v-else class="placeholder">
          <span class="ph-label">{{ fig.label }}</span>
          <span class="ph-note">{{ fig.note }}</span>
        </div>
        <div class="caption-row">
          <span class="fig-no">{{ fig.no }}</span>
          <span class="caption"><MdInline :text="fig.caption" /></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.image-04 {
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
.figures {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}
.figure {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.media {
  flex: 1;
  min-height: 0;
  overflow: hidden;
}
.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.placeholder {
  flex: 1;
  background: var(--panel);
  border: 2px dashed var(--line-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.ph-label {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.ph-note {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-4);
}
.caption-row {
  display: flex;
  align-items: baseline;
  gap: 20px;
}
.fig-no {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--brand-git);
  flex-shrink: 0;
}
.caption {
  font-family: var(--font-sans);
  font-size: 27px;
  line-height: 1.7;
  color: var(--ink-2);
}
</style>
