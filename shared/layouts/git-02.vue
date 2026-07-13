<script setup lang="ts">
type AreaItem = {
  flag?: string
  flagTone?: 'deep' | 'ok' | 'brand'
  text?: string
  tone?: 'default' | 'muted' | 'dim'
  sans?: boolean
  bold?: boolean
  indent?: boolean
}
type Area = { name?: string; state?: 'dashed' | 'active' | 'solid'; items?: AreaItem[] }
type Arrow = { label?: string; active?: boolean }
type TermLine = { text?: string; kind?: 'cmd' | 'comment' | 'out' | 'dim' | 'note' | 'warn' }

defineProps<{
  heading?: string
  command?: string
  meta?: string
  areas?: Area[]
  arrows?: Arrow[]
  terminal?: TermLine[]
}>()

const PANEL_LABEL = 'FILE FLOW'
</script>

<template>
  <div class="slidev-layout git-02">
    <PageNo />
    <div class="header-row">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="command">{{ command }}</span>
    </div>
    <div class="body">
      <div class="panel">
        <div class="panel-head">
          <span class="panel-label">{{ PANEL_LABEL }}</span>
          <span class="panel-meta">{{ meta }}</span>
        </div>
        <GitAreaFlow :areas="areas" :arrows="arrows" />
      </div>
      <GitTerminal :lines="terminal" />
    </div>
  </div>
</template>

<style scoped>
.git-02 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
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
.command {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-git);
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
  padding: 24px 36px;
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
</style>
