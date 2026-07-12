<script setup lang="ts">
type PrEvent = { text: string; sub?: string; state?: 'done' | 'current' }
type LineKind = 'key' | 'plain' | 'dim' | 'strong' | 'cmd' | 'comment' | 'accent' | 'err'
type CodeLine = string | { text: string; kind?: LineKind; hl?: boolean }

defineProps<{
  heading?: string
  tag?: string
  panelLabel?: string
  prState?: string
  prTitle?: string
  headBranch?: string
  baseBranch?: string
  events?: PrEvent[]
  mergeLabel?: string
  mergeNote?: string
  lines?: CodeLine[]
}>()
</script>

<template>
  <div class="slidev-layout github-02">
    <PageNo />
    <div class="header-row">
      <div class="header-left">
        <Eyebrow main-color="var(--brand-github)" />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="tag">{{ tag }}</span>
    </div>
    <div class="body">
      <div class="panel">
        <div class="panel-head">
          <span class="panel-label">{{ panelLabel }}</span>
          <span class="pr-state">{{ prState }}</span>
        </div>
        <div class="pr-body">
          <span class="pr-title"><MdInline :text="prTitle" /></span>
          <div class="branch-row">
            <span class="branch-base">{{ baseBranch }}</span>
            <span class="branch-arrow">←</span>
            <span class="branch-head">{{ headBranch }}</span>
          </div>
          <div class="pr-timeline">
            <div v-for="(e, i) in events" :key="i" :class="['tl-item', `is-${e.state ?? 'done'}`]">
              <span class="tl-text"><MdInline :text="e.text" /></span>
              <span v-if="e.sub" class="tl-sub">{{ e.sub }}</span>
            </div>
          </div>
          <div class="merge-row">
            <span class="merge-label">{{ mergeLabel }}</span>
            <span class="merge-note"><MdInline :text="mergeNote" /></span>
          </div>
        </div>
      </div>
      <GhCodePanel class="code-panel" :lines="lines" :size="24" :gap="14" />
    </div>
  </div>
</template>

<style scoped>
.github-02 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
  /* MdInline 的 inline-code 在 github 系走品牌色，取代預設 --brand-git */
  --mdi-code-color: var(--brand-github);
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
  font-size: 64px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.tag {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-github);
}
.body {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
.panel {
  width: 1000px;
  flex-shrink: 0;
  border: 1px solid var(--line);
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
.panel-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
/* padding-y 3px：OPEN 徽章框高不高過純文字標籤，header 對齊 Git 的 64px。 */
.pr-state {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 600;
  color: var(--ok);
  border: 1px solid var(--ok);
  padding: 3px 14px;
}
.pr-body {
  flex: 1;
  padding: 30px 44px 52px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.pr-title {
  font-family: var(--font-sans);
  font-size: 38px;
  font-weight: 900;
  color: var(--ink);
}
/* 分支列：base（main）在前、emphasized；箭頭 ← 指向 main；head（feature）在後、muted。 */
.branch-row {
  display: flex;
  align-items: center;
  gap: 18px;
}
.branch-base {
  font-family: var(--font-mono);
  font-size: 23px;
  font-weight: 600;
  color: var(--brand-github);
  border: 1px solid var(--brand-github);
  padding: 6px 16px;
}
.branch-arrow {
  font-family: var(--font-mono);
  font-size: 23px;
  color: var(--ink-3);
}
.branch-head {
  font-family: var(--font-mono);
  font-size: 23px;
  color: var(--ink-3);
  border: 1px solid var(--line-2);
  padding: 6px 16px;
}
/* 生命週期時間軸：藍點＋連接線；current（可合併）用環狀強調節點，比照線圖 head。 */
.pr-timeline {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
.tl-item {
  position: relative;
  padding-left: 52px;
  padding-bottom: 34px;
  display: flex;
  align-items: baseline;
  gap: 20px;
}
.tl-item:last-child {
  padding-bottom: 0;
}
.tl-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--brand-github);
  box-sizing: border-box;
}
.tl-item.is-current::before {
  background: var(--paper);
  border: 6px solid var(--brand-github);
}
.tl-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 10px;
  top: 31px;
  bottom: -8px;
  width: 2px;
  background: var(--line-2);
}
.tl-text {
  font-family: var(--font-sans);
  font-size: 32px;
  font-weight: 600;
  color: var(--ink);
}
.tl-sub {
  font-family: var(--font-mono);
  font-size: 23px;
  color: var(--ink-3);
}
/* merge 按鈕：PR 已通過檢查＋approve → 可合併，按鈕轉綠。 */
.merge-row {
  display: flex;
  align-items: center;
  gap: 28px;
}
.merge-label {
  font-family: var(--font-sans);
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
  background: var(--ok);
  padding: 13px 34px;
}
.merge-note {
  font-family: var(--font-sans);
  font-size: 23px;
  color: var(--ink-3);
}
.code-panel {
  flex: 1;
}
</style>
