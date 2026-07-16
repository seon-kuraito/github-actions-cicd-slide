<script setup lang="ts">
import { computed } from 'vue'

type LineKind = 'key' | 'plain' | 'dim' | 'strong' | 'cmd' | 'comment' | 'accent' | 'err'
type CodeLine = string | { text: string; kind?: LineKind; hl?: boolean }

const props = withDefaults(
  defineProps<{
    lines?: CodeLine[]
    size?: number
    gap?: number
  }>(),
  { lines: () => [], size: 23, gap: 10 },
)

interface Parsed {
  kind: LineKind
  hl: boolean
  text: string
  key?: string
  rest?: string
}

// 純字串自動判別（`#` 開頭＝comment、`$ ` 開頭＝cmd、其餘 plain）；物件可指定 kind。
const parsed = computed<Parsed[]>(() =>
  props.lines.map((raw) => {
    const o = typeof raw === 'string' ? { text: raw } : raw
    let kind = o.kind
    if (!kind) {
      const t = o.text.trimStart()
      kind = t.startsWith('#') ? 'comment' : t.startsWith('$ ') ? 'cmd' : 'plain'
    }
    const p: Parsed = { kind, hl: ('hl' in o && o.hl) || false, text: o.text }
    if (kind === 'key') {
      const at = o.text.indexOf(': ')
      if (at >= 0 && o.text.slice(at + 2).trim()) {
        p.key = o.text.slice(0, at + 2)
        p.rest = o.text.slice(at + 2)
      }
    } else if (kind === 'cmd') {
      p.rest = o.text.replace(/^\s*\$\s*/, '')
    }
    return p
  }),
)
</script>

<template>
  <div
    class="gh-code-panel"
    :style="{
      '--line-size': `${size}px`,
      '--line-gap': `${gap}px`,
    }"
  >
    <div class="terminal-head">
      <span class="terminal-lights">
        <span class="light light-red"></span>
        <span class="light light-yellow"></span>
        <span class="light light-green"></span>
      </span>
    </div>
    <div class="code-body">
      <span v-for="(l, i) in parsed" :key="i" :class="['code-line', `k-${l.kind}`, { 'is-hl': l.hl }]">
        <template v-if="l.kind === 'key' && l.rest !== undefined">{{ l.key }}<span class="key-val">{{ l.rest }}</span></template>
        <template v-else-if="l.kind === 'cmd'"><span class="cmd-prompt">$</span>{{ ' ' + l.rest }}</template>
        <template v-else>{{ l.text }}</template>
      </span>
    </div>
  </div>
</template>

<style scoped>
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。 */
.gh-code-panel {
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
  padding: var(--term-pad-head);
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
.code-body {
  flex: 1;
  padding: var(--term-pad-body);
  display: flex;
  flex-direction: column;
  gap: var(--line-gap);
  font-family: var(--font-mono);
  font-size: var(--line-size);
  line-height: 1.55;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
.code-line {
  white-space: pre-wrap;
}
/* 高亮 note 恆在最後一行 → 推到終端機最底（比照 AiChatPanel chat-note）。 */
.code-line:last-child {
  margin-top: auto;
}
.k-key,
.k-comment,
.k-accent {
  color: var(--code-blue);
}
.k-plain,
.k-strong,
.k-cmd {
  color: var(--dark-ink);
}
.k-dim {
  color: var(--dark-ink-2);
}
.k-err {
  color: var(--code-red);
}
.k-strong,
.k-accent {
  font-weight: 600;
}
.code-line.is-hl {
  background: var(--term-hl);
  margin: 0 -16px;
  padding: 4px 16px;
}
.key-val {
  color: var(--dark-ink);
}
.cmd-prompt {
  color: var(--code-blue);
}
</style>
