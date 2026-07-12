<script setup lang="ts">
type TermLine = { type: 'comment' | 'command' | 'output'; text: string }

defineProps<{
  heading?: string
  file?: string
  lines?: TermLine[]
}>()
</script>

<template>
  <div class="slidev-layout lab-01">
    <PageNo />
    <div class="header">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="file">{{ file }}</span>
    </div>
    <div class="terminal">
      <div class="terminal-head">
        <span class="terminal-lights">
          <span class="light light-red"></span>
          <span class="light light-yellow"></span>
          <span class="light light-green"></span>
        </span>
      </div>
      <div class="terminal-body">
        <template v-for="(line, i) in lines ?? []" :key="i">
          <span v-if="line.type === 'command'" class="line-command"><span class="prompt">$</span> {{ line.text }}</span>
          <span v-else-if="line.type === 'comment'" class="line-comment">{{ line.text }}</span>
          <span v-else class="line-output">{{ line.text }}</span>
        </template>
      </div>
    </div>
    <div class="footer">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.lab-01 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.header,
.footer {
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
.file {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-git);
}
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。 */
.terminal {
  flex: 1;
  background: var(--term-bg);
  border: 1px solid var(--dark-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.terminal-head {
  display: flex;
  align-items: center;
  padding: 32px 32px 16px;
}
.terminal-lights {
  display: flex;
  gap: 14px;
}
.light {
  width: 20px;
  height: 20px;
  border-radius: 999px;
}
.light-red {
  background: #ed6a5e;
}
.light-yellow {
  background: #f5be4f;
}
.light-green {
  background: #61c554;
}
.terminal-body {
  flex: 1;
  padding: 48px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-family: var(--font-mono);
  font-size: 29px;
  line-height: 1.6;
}
.line-command {
  color: var(--dark-ink);
}
.line-command .prompt {
  color: var(--brand-git);
}
.line-comment {
  color: var(--ink-3);
}
.line-output {
  color: var(--dark-ink-2);
}
</style>
