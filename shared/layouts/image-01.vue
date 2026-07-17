<script setup lang="ts">
import { withBase } from '../utils/with-base'

defineProps<{
  slug?: string
  heading?: string
  body?: string
  image?: string
  imageDark?: string
  imageAlign?: 'top'
  imageScale?: number
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
      <div
        v-if="image"
        class="media"
        :class="{ 'media--scaled': imageScale }"
        :style="imageScale ? { '--image-scale': String(imageScale) } : undefined"
      >
        <img :src="withBase(image)" :alt="alt" class="media-img" :class="{ 'media-img--light': imageDark, 'media-img--top': imageAlign === 'top' }" />
        <img v-if="imageDark" :src="withBase(imageDark)" :alt="alt" class="media-img media-img--dark" :class="{ 'media-img--top': imageAlign === 'top' }" />
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
/* min-height: 0 — 直向 flex 的 flex:1 帶 min-height:auto，會被 .media 裡圖片的固有比例
   撐高（892 寬的圖 → 854 高），把 main-row 頂出下方安全區、壓到頁碼。佔位態是空 div、
   無固有高度，故只有真圖會發作。歸零後 main-row 純由 flex 決定＝佔位區塊的框，圖再由
   object-fit: cover ＋ .media 的 overflow: hidden 裁進去。image-02 的 .media 同解。 */
.main-row {
  flex: 1;
  min-height: 0;
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
/* 陰影上在 .media（容器）而非 .media-img：.media 有 overflow: hidden，陰影上在圖上會被裁掉；
   上在容器的 box-shadow 畫在 border-box 外、不受裁切。淺色＝以 ink（#37352F）暖調染色的柔和
   雙層投影（襯 --paper 的暖白），比純黑更貼調性；深色＝純黑投影在 #1F1F1F 上幾乎不可見，改
   配一圈 1px 白色微環給暗圖在暗頁上的邊緣定義（GitHub 深色卡片同手法）。 */
.media {
  flex: 1;
  align-self: stretch;
  min-width: 0;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(55, 53, 47, 0.11), 0 2px 8px rgba(55, 53, 47, 0.07);
}
html.dark .media {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.48), 0 0 0 1px rgba(255, 255, 255, 0.07);
}
.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.media-img--top {
  object-position: top;
}
.media--scaled .media-img {
  transform: scale(var(--image-scale));
  transform-origin: top center;
}
.media-img--dark {
  display: none;
}
html.dark .media-img--light {
  display: none;
}
html.dark .media-img--dark {
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
