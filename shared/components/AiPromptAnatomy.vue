<script setup lang="ts">
import { computed } from 'vue'
import MdInline from './MdInline.vue'

const props = withDefaults(
  defineProps<{
    heading?: string
    sections?: { label: string; text: string; active?: boolean }[]
  }>(),
  { heading: 'PROMPT ANATOMY', sections: () => [] },
)
const meta = computed(() => (props.sections.length ? `${props.sections.length} 段結構` : ''))
</script>

<template>
  <div class="anatomy-panel">
    <div class="panel-head">
      <span class="head-label">{{ heading }}</span>
      <span v-if="meta" class="head-meta">{{ meta }}</span>
    </div>
    <div class="anatomy-body">
      <div v-for="(s, i) in sections" :key="i" :class="['section', { 'is-active': s.active }]">
        <span class="section-label">{{ s.label }}</span>
        <span class="section-text"><MdInline :text="s.text" /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.anatomy-panel {
  width: 1000px;
  flex-shrink: 0;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
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
  border-bottom: 1px solid var(--line);
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
  padding: 12px 0;
}
.section {
  display: flex;
  align-items: baseline;
  gap: 36px;
  padding: 26px 44px;
}
.section:not(:last-child) {
  border-bottom: 1px solid var(--line);
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
/* 全部 label 統一 03 的紫：亮色 deep（深字淺底、對比高），深色改 soft（淺字深底，避免 deep 在深面板/tint 上深疊深）。 */
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
