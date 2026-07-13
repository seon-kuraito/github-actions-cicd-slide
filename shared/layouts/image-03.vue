<script setup lang="ts">
defineProps<{
  heading?: string
  panels?: { src?: string; alt?: string; label?: string; note?: string; tag?: string; caption?: string; active?: boolean }[]
}>()
</script>

<template>
  <div class="slidev-layout image-03">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="panels">
      <!-- class="frame"（非 "panel"）：刻意不套全域 .slidev-layout .panel 的 14px 圓角，
           那圓角規則只給終端機與其配對淺色面板；雙圖框維持方角。 -->
      <div v-for="(panel, i) in panels" :key="i" class="frame">
        <div v-if="panel.src" class="media">
          <img :src="panel.src" :alt="panel.alt" class="media-img" />
        </div>
        <div v-else class="placeholder">
          <span class="ph-label">{{ panel.label }}</span>
          <span class="ph-note">{{ panel.note }}</span>
        </div>
        <div class="tag-row">
          <span class="tag" :class="{ active: panel.active }">{{ panel.tag }}</span>
          <span class="caption"><MdInline :text="panel.caption" /></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.image-03 {
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
.panels {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}
.frame {
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
.tag-row {
  display: flex;
  align-items: baseline;
  gap: 24px;
}
.tag {
  font-family: var(--font-mono);
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 0.16em;
  padding: 8px 20px;
  flex-shrink: 0;
  color: var(--ink-3);
  border: 2px solid var(--line-2);
}
/* AFTER 反白釘 #FFFFFF（非 var(--paper)）：深色模式下橘底上維持白字，不得改回 var。 */
.tag.active {
  color: #FFFFFF;
  background: var(--brand-git);
  border: 2px solid var(--brand-git);
}
.caption {
  font-family: var(--font-sans);
  font-size: 27px;
  line-height: 1.7;
  color: var(--ink-2);
}
</style>
