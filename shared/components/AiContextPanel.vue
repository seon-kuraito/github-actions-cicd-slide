<script setup lang="ts">
withDefaults(
  defineProps<{
    heading?: string
    hint?: string
    files?: { name: string; desc?: string; size?: string; in?: boolean }[]
  }>(),
  { heading: 'CONTEXT', files: () => [] },
)
</script>

<template>
  <div class="context-panel">
    <div class="panel-head">
      <span class="head-label">{{ heading }}</span>
      <span v-if="hint" class="head-hint">{{ hint }}</span>
    </div>
    <div class="context-body">
      <div v-for="(f, i) in files" :key="i" :class="['ctx-row', f.in ? 'is-in' : 'is-out']">
        <span class="file-name">{{ f.name }}</span>
        <span class="file-desc">{{ f.desc }}</span>
        <span class="file-size">{{ f.size }}</span>
        <span v-if="f.in" class="badge-in">IN</span>
        <span v-else class="badge-out">OUT</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.context-panel {
  width: 1000px;
  flex-shrink: 0;
  border: 2px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
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
.head-hint {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.context-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
}
.ctx-row {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 26px 44px;
}
.ctx-row.is-in {
  background: var(--brand-ai-tint);
}
/* 列間分隔線：IN 列用 paper、OUT 列用 line（分隔線顏色跟當列狀態走）。 */
.ctx-row:not(:first-child) {
  border-top: 2px solid var(--line);
}
.ctx-row.is-in:not(:first-child) {
  border-top-color: var(--paper);
}
.file-name {
  font-family: var(--font-mono);
  font-size: 25px;
}
.is-in .file-name {
  font-weight: 600;
  color: var(--ink);
}
.is-out .file-name {
  color: var(--ink-4);
  text-decoration: line-through;
}
.file-desc {
  font-family: var(--font-sans);
  font-size: 22px;
  color: var(--ink-3);
}
.is-out .file-desc {
  color: var(--ink-4);
}
.file-size {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 21px;
  color: var(--ink-3);
}
.is-out .file-size {
  color: var(--ink-4);
}
.badge-in {
  font-family: var(--font-mono);
  font-size: 19px;
  font-weight: 600;
  color: #ffffff;
  background: var(--brand-ai);
  padding: 5px 14px;
}
.badge-out {
  font-family: var(--font-mono);
  font-size: 19px;
  font-weight: 600;
  color: var(--ink-3);
  border: 2px solid var(--line-2);
  padding: 4px 13px;
}
</style>
