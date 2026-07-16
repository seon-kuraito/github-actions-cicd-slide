<script setup lang="ts">
import { withBase } from '../utils/with-base'

defineProps<{
  heading?: string
  sub?: string
  image?: string
  alt?: string
  imageLabel?: string
  imageNote?: string
}>()
</script>

<template>
  <div class="slidev-layout image-02">
    <PageNo />
    <div v-if="image" class="media">
      <img :src="withBase(image)" :alt="alt" class="media-img" />
    </div>
    <div v-else class="placeholder">
      <span class="ph-label">{{ imageLabel }}</span>
      <span class="ph-note">{{ imageNote }}</span>
    </div>
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <div class="caption-bar">
      <div class="caption-group">
        <span class="caption-dot"></span>
        <span class="caption-heading"><MdInline :text="heading" /></span>
        <span class="caption-sub"><MdInline :text="sub" /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-02 {
  background: var(--panel);
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  border-bottom: 2px dashed var(--line-2);
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
.eyebrow-pos {
  position: absolute;
  top: 72px;
  left: 100px;
  z-index: 2;
}
.caption-bar {
  height: 180px;
  background: var(--paper);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  gap: 64px;
}
.caption-group {
  display: flex;
  align-items: baseline;
  gap: 32px;
  min-width: 0;
}
.caption-dot {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--brand-git);
  flex-shrink: 0;
  align-self: center;
}
.caption-heading {
  font-family: var(--font-sans);
  font-size: 40px;
  font-weight: 700;
  color: var(--ink);
  white-space: nowrap;
}
.caption-sub {
  font-family: var(--font-sans);
  font-size: 28px;
  color: var(--ink-3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
