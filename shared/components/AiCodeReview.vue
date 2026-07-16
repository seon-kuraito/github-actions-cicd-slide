<script setup lang="ts">
import { computed } from 'vue'
import MdInline from './MdInline.vue'

const props = withDefaults(
  defineProps<{
    file?: string
    badge?: string
    lines?: { no: string | number; code: string; mark?: boolean; note?: { label: string; text: string } }[]
  }>(),
  { lines: () => [] },
)

const heading = computed(() => 'CODE')
</script>

<template>
  <!-- panel＝全 deck 左側面板共同外觀（圓角／body 底）的掛勾，見 base.css。 -->
  <div class="review-panel panel">
    <div class="panel-head">
      <span class="head-label">{{ heading }}</span>
      <span v-if="badge" class="head-badge">{{ badge }}</span>
    </div>
    <div class="review-body">
      <template v-for="(l, i) in lines" :key="i">
        <div :class="['code-row', { 'is-mark': l.mark }]">
          <span class="row-no">{{ l.no }}</span>
          <span class="row-code">{{ l.code }}</span>
        </div>
        <div v-if="l.note" class="note-card">
          <span class="note-label">{{ l.note.label }}</span>
          <span class="note-text"><MdInline :text="l.note.text" /></span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* 圓角與 body 底由 base.css 的 .slidev-layout .panel 統一供給（template 已掛 panel class）。 */
.review-panel {
  width: 1000px;
  flex-shrink: 0;
  border: 2px solid var(--line);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 44px;
  border-bottom: 2px solid var(--line);
}
.head-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.head-badge {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.review-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 24px;
  line-height: 1.5;
}
.code-row {
  display: flex;
  gap: 32px;
  padding: 12px 44px;
}
.code-row.is-mark {
  background: var(--brand-ai-tint);
}
.row-no {
  width: 52px;
  flex-shrink: 0;
  text-align: right;
  color: var(--ink-4);
}
.is-mark .row-no {
  color: var(--brand-ai);
  font-weight: 600;
}
.row-code {
  white-space: pre;
  color: var(--ink-2);
}
.is-mark .row-code {
  color: var(--ink);
  font-weight: 600;
}
.note-card {
  margin: 24px 44px 24px 128px;
  border: 3px solid var(--brand-ai);
  background: var(--paper);
  padding: 22px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.note-label {
  font-family: var(--font-mono);
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--brand-ai);
}
.note-text {
  font-family: var(--font-sans);
  font-size: 24px;
  line-height: 1.6;
  color: var(--ink);
  --mdi-code-color: var(--brand-ai);
}
</style>
