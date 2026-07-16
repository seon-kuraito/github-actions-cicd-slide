<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  heading?: string
  steps?: { no?: string; heading?: string; desc?: string; state?: 'done' | 'now' | 'todo' }[]
}>()

/* 連線點亮到「最後一個已點亮節點」：dot 間距＝(100% + gap)/N，故填到第 L 點的寬度
 * ＝ L/N ×(100% + 56px)。只有第一點亮（L=0）或全暗時無連線。 */
const trackFill = computed(() => {
  const s = props.steps ?? []
  let last = -1
  s.forEach((st, i) => {
    if (st.state === 'now' || st.state === 'done') last = i
  })
  if (last < 1) return '0px'
  return `calc(${last / s.length} * (100% + 56px))`
})
</script>

<template>
  <div class="slidev-layout data-05">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="steps-area">
      <div class="steps">
        <span class="track"></span>
        <span class="track-fill" :style="{ width: trackFill }"></span>
        <div v-for="(step, i) in steps" :key="i" class="step" :class="step.state ?? 'todo'">
          <span class="step-dot"></span>
          <span class="step-no">{{ step.no }}</span>
          <span class="step-heading"><MdInline :text="step.heading" /></span>
          <span class="step-desc"><MdInline :text="step.desc" /></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.data-05 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-bar,
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-bar-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.steps-area {
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 0;
}
.steps {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px;
  padding-top: 12px;
}
/* 連接線填滿到容器右緣（與末欄文案切齊）。 */
.track {
  position: absolute;
  top: 23px;
  left: 12px;
  right: 0;
  height: 3px;
  background: var(--line);
}
/* 已點亮段（覆蓋灰底 track，止於最後一個點亮節點；色隨 brand class 翻） */
.track-fill {
  position: absolute;
  top: 23px;
  left: 12px;
  height: 3px;
  background: var(--brand-git);
}
.step {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.step-dot {
  width: 26px;
  height: 26px;
  border-radius: 999px;
}
/* 進行中（now）與已完成（done）皆點亮＝填色；尚未進行（todo）為空心。
 * 節點一旦點亮就保持，隨投影片逐一亮起、不再熄滅。 */
.step.done .step-dot,
.step.now .step-dot {
  background: var(--brand-git);
}
.step.todo .step-dot {
  box-sizing: border-box;
  background: var(--paper);
  border: 6px solid var(--line-2);
}
.step-no {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.step.done .step-no,
.step.now .step-no {
  color: var(--brand-git);
}
.step-heading {
  font-family: var(--font-sans);
  font-size: 38px;
  font-weight: 700;
  color: var(--ink);
}
.step-desc {
  font-family: var(--font-sans);
  font-size: 27px;
  line-height: 1.8;
  color: var(--ink-3);
}
</style>
