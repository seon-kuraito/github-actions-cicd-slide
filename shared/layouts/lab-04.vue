<script setup lang="ts">
type TermLine = { type: 'comment' | 'command' | 'output'; text: string }
type Step = { no: string | number; heading: string; desc?: string }

defineProps<{
  heading?: string
  steps?: Step[]
  lines?: TermLine[]
}>()
</script>

<template>
  <div class="slidev-layout lab-04">
    <PageNo />
    <div class="header">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="body">
      <div class="steps">
        <div v-for="(step, i) in steps ?? []" :key="i" class="step">
          <span class="step-no">{{ step.no }}</span>
          <div class="step-text">
            <span class="step-heading"><MdInline :text="step.heading" /></span>
            <span class="step-desc"><MdInline :text="step.desc" /></span>
          </div>
        </div>
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
            <span v-if="line.type === 'command'" class="line-command"><span class="prompt">$</span> <span class="command-text">{{ line.text }}</span></span>
            <span v-else-if="line.type === 'comment'" class="line-comment">{{ line.text }}</span>
            <span v-else class="line-output">{{ line.text }}</span>
          </template>
        </div>
      </div>
    </div>
    <div class="footer">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.lab-04 {
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
.title-block {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 64px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.body {
  flex: 1;
  display: flex;
  gap: 96px;
  align-items: stretch;
}
.steps {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.step {
  display: flex;
  align-items: baseline;
  gap: 32px;
  padding: 30px 0;
}
.step:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.step-no {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: var(--brand-git);
  width: 64px;
  flex-shrink: 0;
}
.step-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.step-heading {
  font-family: var(--font-sans);
  font-size: 33px;
  font-weight: 700;
  color: var(--ink);
}
.step-desc {
  font-family: var(--font-sans);
  font-size: 26px;
  line-height: 1.7;
  color: var(--ink-3);
}
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。 */
.terminal {
  /* 對齊 p69-88 終端機寬度：git/github/ai/shell 版型左面板 1000＋gap 48 → 終端 672。 */
  width: 672px;
  flex-shrink: 0;
  background: var(--term-bg);
  border: 1px solid var(--dark-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: stretch;
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
  font-size: 25px;
  line-height: 1.6;
}
.line-command .prompt {
  color: var(--brand-git);
}
.line-command .command-text {
  color: var(--dark-ink);
}
.line-comment {
  color: var(--ink-3);
}
.line-output {
  color: var(--dark-ink-2);
}
</style>
