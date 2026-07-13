<script setup lang="ts">
type TermLine = { text?: string; kind?: 'cmd' | 'comment' | 'out' | 'dim' | 'note' | 'warn' }

withDefaults(defineProps<{ lines?: TermLine[] }>(), { lines: () => [] })
</script>

<template>
  <div class="git-terminal">
    <div class="terminal-head">
      <span class="terminal-lights">
        <span class="light light-red"></span>
        <span class="light light-yellow"></span>
        <span class="light light-green"></span>
      </span>
    </div>
    <div class="terminal-body">
      <span v-for="(l, i) in lines" :key="i" :class="['term-line', `ln-${l.kind ?? 'out'}`]"
        ><template v-if="l.kind === 'cmd'"><span class="prompt">$ </span></template>{{ l.text }}</span
      >
    </div>
  </div>
</template>

<style scoped>
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。 */
.git-terminal {
  flex: 1;
  background: var(--term-bg);
  border: 2px solid var(--dark-border);
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
  gap: 14px;
  font-family: var(--font-mono);
  font-size: 25px;
  line-height: 1.55;
  min-height: 0;
  overflow: hidden;
}
/* 行內保留連續空格（對齊 git status --short 這類輸出）。 */
.term-line {
  white-space: pre-wrap;
}
.ln-cmd,
.ln-out {
  color: var(--dark-ink);
}
.ln-comment {
  color: var(--dark-ink-3);
}
.ln-dim {
  color: var(--dark-ink-2);
}
.ln-note {
  margin-top: auto;
  color: var(--brand-git-term);
}
.ln-warn {
  color: var(--code-orange);
}
.prompt {
  color: var(--brand-git-term);
}
</style>
