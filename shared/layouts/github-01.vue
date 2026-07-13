<script setup lang="ts">
type DagStatus = 'ok' | 'err' | 'running' | 'skip' | 'queued'
interface DagJob {
  name: string
  status?: DagStatus
}
type LineKind = 'key' | 'plain' | 'dim' | 'strong' | 'cmd' | 'comment' | 'accent' | 'err'
type CodeLine = string | { text: string; kind?: LineKind; hl?: boolean }

defineProps<{
  heading?: string
  tag?: string
  panelLabel?: string
  panelMeta?: string
  trigger?: string
  stages?: DagJob[][]
  parallelLabel?: string
  lines?: CodeLine[]
}>()
</script>

<template>
  <div class="slidev-layout github-01">
    <PageNo />
    <div class="header-row">
      <div class="header-left">
        <Eyebrow main-color="var(--brand-github)" />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="tag">{{ tag }}</span>
    </div>
    <div class="body">
      <div class="panel">
        <div class="panel-head">
          <span class="panel-label">{{ panelLabel }}</span>
          <span class="panel-meta">{{ panelMeta }}</span>
        </div>
        <div class="dag-wrap">
          <GhWorkflowDag :trigger="trigger" :stages="stages" :parallel-label="parallelLabel" />
        </div>
      </div>
      <GhCodePanel class="code-panel" :lines="lines" :size="23" :gap="10" />
    </div>
  </div>
</template>

<style scoped>
.github-01 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
  /* MdInline 的 inline-code 在 github 系走品牌色，取代預設 --brand-git */
  --mdi-code-color: var(--brand-github);
}
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 48px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.tag {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-github);
}
.body {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
.panel {
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
.panel-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.panel-meta {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.dag-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.code-panel {
  flex: 1;
}
</style>
