<script setup lang="ts">
interface Side {
  tag?: string
  label?: string
  diagramLabel?: string
  diagramNote?: string
}

defineProps<{
  heading?: string
  expected?: Side
  actual?: Side
}>()
</script>

<template>
  <div class="slidev-layout diagram-02">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="cols">
      <!-- 圖在上、標籤與文案在下（對齊 p22 image-04 的圖→說明排版）。 -->
      <div class="col expected">
        <div class="diagram-box">
          <span class="diagram-label">{{ expected?.diagramLabel }}</span>
          <span class="diagram-note">{{ expected?.diagramNote }}</span>
        </div>
        <div class="col-head">
          <span class="tag">{{ expected?.tag }}</span>
          <span class="label"><MdInline :text="expected?.label" /></span>
        </div>
      </div>
      <div class="col actual">
        <div class="diagram-box">
          <span class="diagram-label">{{ actual?.diagramLabel }}</span>
          <span class="diagram-note">{{ actual?.diagramNote }}</span>
        </div>
        <div class="col-head">
          <span class="tag">{{ actual?.tag }}</span>
          <span class="label"><MdInline :text="actual?.label" /></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.diagram-02 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.heading-block {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.cols {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}
.col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.col-head {
  display: flex;
  align-items: baseline;
  gap: 24px;
}
.tag {
  font-family: var(--font-mono);
  font-size: 23px;
  letter-spacing: 0.16em;
  padding: 8px 20px;
  flex-shrink: 0;
}
.expected .tag {
  font-weight: 500;
  color: var(--ink-3);
  border: 2px solid var(--line-2);
}
/* 品牌色實底上的白字無深色版：釘 #FFFFFF，不得換回 var(--paper)（深色重映射會翻轉）。 */
.actual .tag {
  font-weight: 600;
  color: #FFFFFF;
  background: var(--brand-git);
}
.label {
  font-family: var(--font-sans);
  font-size: 30px;
  font-weight: 700;
}
.expected .label {
  color: var(--ink-2);
}
.actual .label {
  color: var(--ink);
}
.diagram-box {
  flex: 1;
  background: var(--panel);
  border: 2px dashed var(--line-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  box-sizing: border-box;
}
.diagram-label {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.diagram-note {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-4);
}
</style>
