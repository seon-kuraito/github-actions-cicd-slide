<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'doc' | 'log'
    lines?: { text: string; tone?: 'accent' | 'body' | 'dim'; prefix?: string }[]
  }>(),
  { variant: 'doc', lines: () => [] },
)
</script>

<template>
  <div class="mono-panel">
    <div class="terminal-head">
      <span class="terminal-lights">
        <span class="light light-red"></span>
        <span class="light light-yellow"></span>
        <span class="light light-green"></span>
      </span>
    </div>
    <div :class="['mono-body', `is-${variant}`]">
      <span v-for="(l, i) in lines" :key="i" :class="['mono-line', `tone-${l.tone ?? 'body'}`]">
        <template v-if="l.prefix"><span class="line-prefix">{{ l.prefix }}</span> </template>{{ l.text }}</span
      >
    </div>
  </div>
</template>

<style scoped>
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。 */
.mono-panel {
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
.mono-body {
  flex: 1;
  padding: 48px 32px 32px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-mono);
  overflow: hidden;
}
/* variant 控制字級節奏：doc／log 兩組數值照設計稿。 */
.mono-body.is-doc {
  font-size: 22px;
  line-height: 1.6;
  gap: 12px;
}
.mono-body.is-log {
  font-size: 23px;
  line-height: 1.55;
  gap: 16px;
}
.mono-line {
  color: var(--dark-ink);
}
/* 高亮 note 恆在最後一行 → 推到終端機最底（tone-accent 與 ## 共用，故鎖 :last-child）。 */
.mono-line:last-child {
  margin-top: auto;
}
.mono-line.tone-accent {
  color: var(--brand-ai-term);
}
.mono-line.tone-dim {
  color: var(--dark-ink-2);
}
.line-prefix {
  color: var(--brand-ai-term);
}
</style>
