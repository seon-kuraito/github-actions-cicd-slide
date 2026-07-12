<script setup lang="ts">
import { computed } from 'vue'

interface ShTermLine {
  type: 'cmd' | 'output' | 'comment'
  text: string
  comment?: string
  accent?: boolean
}

const props = withDefaults(
  defineProps<{
    lines?: ShTermLine[]
    fontSize?: number
    lineHeight?: number
  }>(),
  { lines: () => [], fontSize: 25, lineHeight: 1.55 },
)

// 有行尾註解的 cmd 行取最長指令寬度，其餘補空白 → 註解自動對齊成一欄
const cmdPad = computed(() =>
  Math.max(0, ...props.lines.filter((l) => l.type === 'cmd' && l.comment).map((l) => l.text.length)),
)
const padded = (l: ShTermLine) => l.text.padEnd(cmdPad.value, ' ')
</script>

<template>
  <div class="sh-terminal">
    <div class="terminal-head">
      <span class="terminal-lights">
        <span class="light light-red"></span>
        <span class="light light-yellow"></span>
        <span class="light light-green"></span>
      </span>
    </div>
    <div class="terminal-body" :style="{ '--term-font': `${fontSize}px`, '--term-lh': lineHeight }">
      <template v-for="(l, i) in lines" :key="i">
        <span v-if="l.type === 'cmd'" class="line-cmd"><span class="prompt">$</span>{{ ' ' + (l.comment ? padded(l) : l.text) }}<span v-if="l.comment" class="cmd-comment">{{ ' ' + l.comment }}</span></span>
        <span v-else-if="l.type === 'output'" class="line-output">{{ l.text }}</span>
        <span v-else :class="['line-comment', { 'is-accent': l.accent }]">{{ l.text }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。 */
.sh-terminal {
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
  gap: 14px;
  font-family: var(--font-mono);
  font-size: var(--term-font);
  line-height: var(--term-lh);
  min-height: 0;
  overflow: hidden;
  white-space: pre;
}
.line-cmd {
  color: var(--dark-ink);
}
.prompt {
  color: var(--brand-git);
}
.cmd-comment {
  color: var(--dark-ink-3);
}
.line-output {
  color: var(--dark-ink-2);
}
.line-comment {
  color: var(--dark-ink-3);
}
.line-comment.is-accent {
  margin-top: auto;
  color: var(--brand-git);
}
</style>
