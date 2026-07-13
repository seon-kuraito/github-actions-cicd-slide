<script setup lang="ts">
defineProps<{
  image?: string
  url?: string
  desc?: string
}>()

const QR_PLACEHOLDER_LABEL = 'QR CODE'
const QR_PLACEHOLDER_SIZE = '400 × 400'
</script>

<template>
  <div class="slidev-layout link-01">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <img v-if="image" :src="image" class="qr-img" />
    <div v-else class="qr-placeholder">
      <span class="qr-ph-label">{{ QR_PLACEHOLDER_LABEL }}</span>
      <span class="qr-ph-size">{{ QR_PLACEHOLDER_SIZE }}</span>
    </div>
    <span class="url">{{ url }}</span>
    <span class="desc"><MdInline :text="desc" /></span>
  </div>
</template>

<style scoped>
.link-01 {
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
.qr-img {
  width: 400px;
  height: 400px;
  flex-shrink: 0;
}
.qr-placeholder {
  width: 400px;
  height: 400px;
  background: var(--panel);
  border: 2px dashed var(--line-2);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;
}
.qr-ph-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.qr-ph-size {
  font-family: var(--font-mono);
  font-size: 21px;
  color: var(--ink-4);
}
.url {
  font-family: var(--font-mono);
  font-size: 52px;
  font-weight: 600;
  color: var(--brand-git);
}
.desc {
  font-family: var(--font-sans);
  font-size: 32px;
  color: var(--ink-3);
}
</style>
