<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    meta?: string
    padY?: number
    align?: 'center' | 'top'
    /* 內容超出面板時改捲動，而非把列壓扁（flex 子項預設 shrink，症狀是最後幾列被壓矮、
     * 字被切掉，且「溢出量」量起來是 0——看不出是溢出）。比照 ShTerminal 的 body。 */
    scrollY?: boolean
  }>(),
  { padY: 20, align: 'center', scrollY: false },
)
</script>

<template>
  <div class="sh-panel">
    <div class="head">
      <span class="label">{{ label }}</span>
      <span v-if="meta" class="meta">{{ meta }}</span>
    </div>
    <div
      class="body"
      :class="{ 'align-top': align === 'top', 'is-scroll': scrollY }"
      :style="{ '--pad-y': `${padY}px` }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sh-panel {
  border: 2px solid var(--line);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 44px;
  border-bottom: 2px solid var(--line);
}
.label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.meta {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
/* 預設垂直置中：設計稿的樹夠長、幾乎填滿面板，置中與貼齊上緣看不出差別。
 * 樹短的頁（如 shell-dir 只有三列）置中會讓內容浮在中間、與面板標題脫開，
 * 這種頁傳 align="top"。 */
.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--pad-y) 0;
}
.body.align-top {
  justify-content: flex-start;
}
/* 與 ShTerminal 的 body 同組合：橫向不捲（過長改折行／裁切），縱向才捲。 */
.body.is-scroll {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
