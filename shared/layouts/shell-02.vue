<script setup lang="ts">
type DirEntry = { name: string; kind?: 'dir' | 'file'; meta?: string; tag?: string; hidden?: boolean }
type TermLine = { type: 'cmd' | 'output' | 'comment'; text: string; comment?: string; accent?: boolean }

withDefaults(
  defineProps<{
    heading?: string
    command?: string
    panelLabel?: string
    panelMeta?: string
    entries?: DirEntry[]
    terminal?: TermLine[]
  }>(),
  { panelLabel: 'DIRECTORY LISTING' },
)
</script>

<template>
  <div class="slidev-layout shell-02">
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
    <div class="panels">
      <ShPanel :label="panelLabel" :meta="panelMeta" :pad-y="0" class="panel">
        <ShDirListing :entries="entries" />
      </ShPanel>
      <ShTerminal :lines="terminal" :font-size="24" :line-height="1.5" class="terminal" />
    </div>
  </div>
</template>

<style scoped>
.shell-02 {
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
  font-size: 64px;
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
.panels {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
.panel {
  width: 1000px;
  flex-shrink: 0;
}
.terminal {
  flex: 1;
}
</style>
