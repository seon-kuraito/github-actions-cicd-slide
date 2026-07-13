<script setup lang="ts">
defineProps<{
  qrs?: { url?: string; desc?: string; src?: string }[]
}>()

const QR_PLACEHOLDER_LABEL = 'QR CODE'
const QR_PLACEHOLDER_SIZE = '400 × 400'
</script>

<template>
  <div class="slidev-layout link-02">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <div class="qrs">
      <!-- 每欄＝link-01 中心那組（QR 圖＋橘色 url＋灰色 desc），兩欄水平並排。 -->
      <div v-for="(qr, i) in qrs ?? []" :key="i" class="qr-item">
        <img v-if="qr.src" :src="qr.src" class="qr-img" />
        <div v-else class="qr-placeholder">
          <span class="qr-ph-label">{{ QR_PLACEHOLDER_LABEL }}</span>
          <span class="qr-ph-size">{{ QR_PLACEHOLDER_SIZE }}</span>
        </div>
        <span class="qr-url">{{ qr.url }}</span>
        <span class="qr-desc"><MdInline :text="qr.desc" /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-02 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.eyebrow-pos {
  position: absolute;
  top: 72px;
  left: 100px;
  z-index: 2;
}
.qrs {
  display: flex;
  align-items: flex-start;
  gap: 160px;
}
.qr-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
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
/* 橘色 url／灰色 desc：字級與群組內間距對齊 link-01（url 52／desc 32／gap 44）。 */
.qr-url {
  font-family: var(--font-mono);
  font-size: 52px;
  font-weight: 600;
  color: var(--brand-git);
}
.qr-desc {
  font-family: var(--font-sans);
  font-size: 32px;
  color: var(--ink-3);
  text-align: center;
  max-width: 600px;
}
</style>
