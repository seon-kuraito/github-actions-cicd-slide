<script setup lang="ts">
import { withBase } from '../utils/with-base'

defineProps<{
  heading?: string
  body?: string
  image?: string
  alt?: string
  imageLabel?: string
  imageNote?: string
}>()
</script>

<template>
  <div class="slidev-layout image-05">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <div v-if="image" class="media">
      <img :src="withBase(image)" :alt="alt" class="media-img" />
    </div>
    <div v-else class="placeholder">
      <span class="ph-label">{{ imageLabel }}</span>
      <span class="ph-note">{{ imageNote }}</span>
    </div>
    <div class="lower">
      <div class="text-row">
        <div class="heading-col">
          <span class="heading"><MdInline :text="heading" /></span>
        </div>
        <span class="body-text"><MdInline :text="body" /></span>
      </div>
      <div class="bottom-bar">
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-05 {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.eyebrow-pos {
  position: absolute;
  top: 72px;
  left: 100px;
  z-index: 2;
}
.media,
.placeholder {
  height: 560px;
  flex-shrink: 0;
  background: var(--panel);
  border-bottom: 2px solid var(--line);
}
.media {
  overflow: hidden;
}
.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
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
  font-size: 22px;
  color: var(--ink-4);
}
.lower {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 56px 100px 64px;
  box-sizing: border-box;
  gap: 32px;
}
.text-row {
  display: flex;
  gap: 96px;
  align-items: flex-start;
}
.heading-col {
  width: 700px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.35;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.body-text {
  flex: 1;
  font-family: var(--font-sans);
  font-size: 29px;
  line-height: 1.9;
  color: var(--ink-2);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
