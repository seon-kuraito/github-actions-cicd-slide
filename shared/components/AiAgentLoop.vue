<script setup lang="ts">
withDefaults(
  defineProps<{
    heading?: string
    input?: string
    model?: string
    tools?: string
    output?: string
    callLabel?: string
    resultLabel?: string
    meta?: string
  }>(),
  {
    heading: 'AGENT LOOP',
    input: 'PROMPT',
    model: 'MODEL',
    tools: 'TOOLS',
    meta: 'model ⇄ tools',
    output: 'OUTPUT',
    callLabel: 'tool call',
    resultLabel: 'result',
  },
)
</script>

<template>
  <div class="loop-panel">
    <div class="panel-head">
      <span class="head-label">{{ heading }}</span>
      <span v-if="meta" class="head-meta">{{ meta }}</span>
    </div>
    <div class="loop-body">
      <svg width="960" height="460" viewBox="0 0 960 460">
        <!-- 中性箭頭走 --ink-4（深色翻）；AI 迴圈線與強調走 --brand-ai（恆定）；卡片底 --paper／--panel／--brand-ai-tint 隨頁翻。 -->
        <path d="M 250 170 L 320 170" fill="none" stroke="var(--ink-4)" stroke-width="4"></path>
        <path d="M 640 170 L 710 170" fill="none" stroke="var(--ink-4)" stroke-width="4"></path>
        <path d="M 704 158 L 716 170 L 704 182" fill="none" stroke="var(--ink-4)" stroke-width="4" stroke-linejoin="round"></path>
        <path d="M 314 158 L 326 170 L 314 182" fill="none" stroke="var(--ink-4)" stroke-width="4" stroke-linejoin="round"></path>
        <!-- tool call（右，實線）接 TOOLS 右側邊、result（左，虛線）接 TOOLS 左側邊；MODEL 端接底邊；鏡射於 x=480，兩箭頭都落在框邊緣、可見。 -->
        <path d="M 560 202 C 620 240 620 330 580 330" fill="none" stroke="var(--brand-ai)" stroke-width="4"></path>
        <path d="M 590 316 L 580 330 L 594 340" fill="none" stroke="var(--brand-ai)" stroke-width="4" stroke-linejoin="round"></path>
        <path d="M 380 330 C 340 330 340 240 400 202" fill="none" stroke="var(--brand-ai)" stroke-width="4" stroke-dasharray="8 8"></path>
        <path d="M 383 198 L 400 202 L 396 219" fill="none" stroke="var(--brand-ai)" stroke-width="4" stroke-linejoin="round"></path>
        <rect x="60" y="138" width="190" height="64" fill="var(--panel)" stroke="var(--line-2)" stroke-width="2"></rect>
        <text class="node-text" x="155" y="179" text-anchor="middle" fill="var(--ink-2)">{{ input }}</text>
        <rect x="330" y="138" width="300" height="64" fill="var(--brand-ai-tint)" stroke="var(--brand-ai)" stroke-width="2"></rect>
        <text class="node-text is-strong is-accent" x="480" y="179" text-anchor="middle" fill="var(--brand-ai-deep)">{{ model }}</text>
        <rect x="720" y="138" width="190" height="64" fill="var(--paper)" stroke="var(--line-2)" stroke-width="2"></rect>
        <text class="node-text" x="815" y="179" text-anchor="middle" fill="var(--ink)">{{ output }}</text>
        <rect x="380" y="298" width="200" height="64" fill="var(--paper)" stroke="var(--brand-ai)" stroke-width="2"></rect>
        <text class="node-text is-accent" x="480" y="339" text-anchor="middle" fill="var(--brand-ai-deep)">{{ tools }}</text>
        <text class="edge-label" x="662" y="338" text-anchor="middle" fill="var(--brand-ai)">{{ callLabel }}</text>
        <text class="edge-label" x="298" y="338" text-anchor="middle" fill="var(--brand-ai)">{{ resultLabel }}</text>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.loop-panel {
  width: 1000px;
  flex-shrink: 0;
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 44px;
  border-bottom: 1px solid var(--line);
}
.head-meta {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.head-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.loop-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* SVG 文字的字級只能走 style/class，不可寫成 presentation attribute（attributify 誤傷）。 */
.node-text {
  font-family: var(--font-mono);
  font-size: 22px;
}
.node-text.is-strong {
  font-weight: 600;
}
/* 深色下 tint／paper 節點底變深，deep 深紫深疊深；改用 soft 淺紫（同 AiPromptAnatomy active label）。 */
html.dark .node-text.is-accent {
  fill: var(--brand-ai-soft);
}
.edge-label {
  font-family: var(--font-mono);
  font-size: 20px;
}
</style>
