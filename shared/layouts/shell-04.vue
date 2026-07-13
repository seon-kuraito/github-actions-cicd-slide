<script setup lang="ts">
type TreeNode = {
  name: string
  kind?: 'dir' | 'file'
  children?: TreeNode[]
  highlight?: boolean
  dashed?: boolean
  badge?: string
  tag?: string
}
type TermLine = { type: 'cmd' | 'output' | 'comment'; text: string; comment?: string; accent?: boolean }

withDefaults(
  defineProps<{
    heading?: string
    command?: string
    panelLabel?: string
    panelMeta?: string
    tree?: TreeNode[]
    caption?: string
    terminal?: TermLine[]
  }>(),
  { panelLabel: 'MAKE DIRECTORY' },
)
</script>

<template>
  <div class="slidev-layout shell-04">
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
      <ShPanel :label="panelLabel" :meta="panelMeta" class="panel">
        <ShFileTree :nodes="tree" />
        <div v-if="caption" class="caption-wrap">
          <span class="caption"><MdInline :text="caption" /></span>
        </div>
      </ShPanel>
      <ShTerminal :lines="terminal" class="terminal" />
    </div>
  </div>
</template>

<style scoped>
.shell-04 {
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
.caption-wrap {
  padding: 40px 44px 0;
}
.caption {
  font-family: var(--font-sans);
  font-size: 23px;
  color: var(--ink-3);
}
.terminal {
  flex: 1;
}
</style>
