<script setup lang="ts">
import { withBase } from '../utils/with-base'

defineProps<{
  image?: string
  heading?: string
  href?: string
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
    <img v-if="image" :src="withBase(image)" class="qr-img" />
    <div v-else class="qr-placeholder">
      <span class="qr-ph-label">{{ QR_PLACEHOLDER_LABEL }}</span>
      <span class="qr-ph-size">{{ QR_PLACEHOLDER_SIZE }}</span>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <a v-if="href" :href="href" target="_blank" rel="noopener noreferrer" class="cta">開啟頁面</a>
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
/* heading＝content-03 置中宣言層規格；CTA 為 default 空心／hover 實心的開新分頁連結。 */
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
/* CTA：default 空心（brand 框線＋brand 字），hover 實心（brand 底＋白字）。開新分頁。 */
.cta {
  font-family: var(--font-sans);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--brand-git);
  background: transparent;
  border: 2px solid var(--brand-git);
  padding: 18px 44px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.cta:hover {
  background: var(--brand-git);
  color: #FFFFFF;
}
</style>
