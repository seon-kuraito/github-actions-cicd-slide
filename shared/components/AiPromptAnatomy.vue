<script setup lang="ts">
import { computed } from 'vue'
import MdInline from './MdInline.vue'

const props = withDefaults(
  defineProps<{
    heading?: string
    sections?: { label: string; text: string; active?: boolean }[]
    /* 比照 ShPanel／AiContextPanel 的同名兩個 prop：段落少時預設的垂直置中會讓內容浮在面板
     * 正中央、與標題列脫開，該頁傳 align="top" ＋ :pad-y="0" 讓段落從 head 下緣長下來。
     * 預設值維持原行為（padY 12 為本元件原值），基底頁 ai-02 不受影響。 */
    padY?: number
    align?: 'center' | 'top'
  }>(),
  { heading: 'PROMPT ANATOMY', sections: () => [], padY: 12, align: 'center' },
)
const meta = computed(() => (props.sections.length ? `${props.sections.length} 段結構` : ''))
</script>

<template>
  <!-- panel＝全 deck 左側面板共同外觀（圓角／body 底）的掛勾，見 base.css。 -->
  <div class="anatomy-panel panel">
    <div class="panel-head">
      <span class="head-label">{{ heading }}</span>
      <span v-if="meta" class="head-meta">{{ meta }}</span>
    </div>
    <div class="anatomy-body" :class="{ 'align-top': align === 'top' }" :style="{ '--pad-y': `${padY}px` }">
      <div v-for="(s, i) in sections" :key="i" :class="['section', { 'is-active': s.active }]">
        <span class="section-label">{{ s.label }}</span>
        <span class="section-text"><MdInline :text="s.text" /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 圓角與 body 底由 base.css 的 .slidev-layout .panel 統一供給（template 已掛 panel class）。 */
.anatomy-panel {
  width: 1000px;
  flex-shrink: 0;
  border: 2px solid var(--line);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  --mdi-code-color: var(--brand-ai);
}
.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 44px;
  border-bottom: 2px solid var(--line);
}
.head-meta {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.head-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.anatomy-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--pad-y) 0;
}
.anatomy-body.align-top {
  justify-content: flex-start;
}
.section {
  display: flex;
  align-items: baseline;
  gap: 36px;
  padding: 26px 44px;
}
.section:not(:last-child) {
  border-bottom: 2px solid var(--line);
}
.section.is-active {
  background: var(--brand-ai-tint);
}
.section-label {
  width: 220px;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--brand-ai-deep);
}
/* 全部 label 統一 03 的紫：淺色 deep（深字淺底、對比高），深色改 soft（淺字深底，避免 deep 在深面板/tint 上深疊深）。 */
html.dark .section-label {
  color: var(--brand-ai-soft);
}
.section-text {
  font-family: var(--font-sans);
  font-size: 26px;
  line-height: 1.6;
  color: var(--ink);
}
.is-active .section-text {
  font-weight: 700;
}
</style>
