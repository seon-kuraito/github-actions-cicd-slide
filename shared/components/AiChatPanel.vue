<script setup lang="ts">
import MdInline from './MdInline.vue'

withDefaults(
  defineProps<{
    turns?: { role: 'you' | 'ai'; text: string }[]
    note?: string
  }>(),
  { turns: () => [] },
)
</script>

<template>
  <div class="chat-panel">
    <div class="terminal-head">
      <span class="terminal-lights">
        <span class="light light-red"></span>
        <span class="light light-yellow"></span>
        <span class="light light-green"></span>
      </span>
    </div>
    <div class="chat-body">
      <template v-for="(t, i) in turns" :key="i">
        <span :class="['turn-role', t.role === 'you' ? 'is-you' : 'is-ai']">{{ t.role === 'you' ? 'YOU' : 'AI' }}</span>
        <span v-if="t.role === 'you'" class="turn-you"><MdInline :text="t.text" /></span>
        <span v-else class="turn-ai"><MdInline :text="t.text" /></span>
      </template>
      <span v-if="note" class="chat-note">{{ note }}</span>
    </div>
  </div>
</template>

<style scoped>
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。 */
.chat-panel {
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
.chat-body {
  flex: 1;
  padding: 48px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow: hidden;
}
.turn-role {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.18em;
}
.turn-role.is-you {
  color: var(--dark-ink-2);
}
.turn-role.is-ai {
  color: var(--brand-ai-term);
}
.turn-you {
  font-family: var(--font-sans);
  font-size: 25px;
  line-height: 1.7;
  color: var(--dark-ink);
  background: var(--term-hl);
  padding: 22px 28px;
}
.turn-ai {
  font-family: var(--font-sans);
  font-size: 24px;
  line-height: 1.7;
  color: var(--dark-ink-2);
  --mdi-code-color: var(--dark-ink);
}
.chat-note {
  margin-top: auto;
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--brand-ai-term);
}
</style>
