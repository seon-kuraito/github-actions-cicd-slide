<script setup lang="ts">
defineProps<{
  qrs?: { heading?: string; url?: string; src?: string }[]
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
      <!-- 每欄＝link-01 中心那組（QR 圖＋heading 名稱＋URL 品牌 badge），兩欄水平並排。 -->
      <div v-for="(qr, i) in qrs ?? []" :key="i" class="qr-item">
        <img v-if="qr.src" :src="qr.src" class="qr-img" />
        <div v-else class="qr-placeholder">
          <span class="qr-ph-label">{{ QR_PLACEHOLDER_LABEL }}</span>
          <span class="qr-ph-size">{{ QR_PLACEHOLDER_SIZE }}</span>
        </div>
        <span class="qr-heading"><MdInline :text="qr.heading" /></span>
        <span v-if="qr.url" class="url-badge">{{ qr.url }}</span>
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
/* 實照 QR 白底在亮色 paper 上幾乎無邊界，加灰 hairline 框（同 link-01）。 */
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
/* heading／url-badge 規格同 link-01（置中宣言層 84＋家族 badge）；heading 收 760 寬供欄內換行。 */
.qr-heading {
  font-family: var(--font-sans);
  font-size: 84px;
  font-weight: 900;
  line-height: 1.6;
  color: var(--ink);
  letter-spacing: 0.04em;
  text-align: center;
  max-width: 760px;
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
