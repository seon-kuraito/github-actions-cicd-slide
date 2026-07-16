<script setup lang="ts">
import { withBase } from '../utils/with-base'

defineProps<{
  slug?: string
  heading?: string
  body?: string
  image?: string
  alt?: string
  imageLabel?: string
  imageNote?: string
}>()
</script>

<template>
  <div class="slidev-layout image-01">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <div class="main-row">
      <div class="text-col">
        <span class="slug">{{ slug }}</span>
        <span class="heading"><MdInline :text="heading" /></span>
        <span class="body-text"><MdInline :text="body" /></span>
      </div>
      <div v-if="image" class="media">
        <img :src="withBase(image)" :alt="alt" class="media-img" />
      </div>
      <div v-else class="placeholder">
        <span class="ph-label">{{ imageLabel }}</span>
        <span class="ph-note">{{ imageNote }}</span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.image-01 {
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
.main-row {
  flex: 1;
  display: flex;
  gap: 96px;
  align-items: center;
}
.text-col {
  width: 732px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.slug {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-git);
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.body-text {
  font-family: var(--font-sans);
  font-size: 31px;
  line-height: 1.85;
  color: var(--ink-2);
}
.media {
  flex: 1;
  align-self: stretch;
  min-width: 0;
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
  align-self: stretch;
  background: var(--panel);
  border: 2px dashed var(--line-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.ph-label {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.ph-note {
  font-family: var(--font-mono);
  font-size: 24px;
  color: var(--ink-4);
}
</style>
