<script setup lang="ts">
defineProps<{
  image?: string
  heading?: string
  url?: string
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
    <span class="heading"><MdInline :text="heading" /></span>
    <span v-if="url" class="url-badge">{{ url }}</span>
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
/* 實照 QR 白底在淺色 paper 上幾乎無邊界，加灰 hairline 框。 */
.qr-img {
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  border: 2px solid var(--line-2);
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
/* heading＝content-03 置中宣言層規格；url 降為底部品牌 badge（同 outro／break 家族 badge 規格）。 */
.heading {
  font-family: var(--font-sans);
  font-size: 84px;
  font-weight: 900;
  line-height: 1.6;
  color: var(--ink);
  letter-spacing: 0.04em;
  text-align: center;
  max-width: 1400px;
}
.url-badge {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  color: var(--brand-git);
  border: 2px solid var(--brand-git);
  padding: 14px 32px;
}
</style>
