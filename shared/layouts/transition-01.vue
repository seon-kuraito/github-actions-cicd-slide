<script setup lang="ts">
defineProps<{
  covered?: string[]
  next?: string[]
}>()

const LABEL_COVERED = 'JUST COVERED'
const LABEL_NEXT = 'UP NEXT'
</script>

<template>
  <div class="slidev-layout transition-01">
    <PageNo />
    <div class="top-row">
      <div class="eyebrow-row">
        <Eyebrow />
      </div>
    </div>
    <div class="cols">
      <div class="col-covered">
        <span class="covered-label">{{ LABEL_COVERED }}</span>
        <div class="list">
          <div v-for="(t, i) in covered ?? []" :key="i" class="row">
            <span class="covered-dot"></span>
            <span class="covered-text"><MdInline :text="t" /></span>
          </div>
        </div>
      </div>
      <div class="col-next">
        <span class="next-label">{{ LABEL_NEXT }}</span>
        <div class="list">
          <div v-for="(t, i) in next ?? []" :key="i" class="row">
            <span class="next-dot"></span>
            <span class="next-text"><MdInline :text="t" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.transition-01 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.eyebrow-row {
  display: flex;
  align-items: center;
  gap: 20px;
}
.cols {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  gap: 0;
}
.col-covered,
.col-next {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.col-covered {
  padding-right: 96px;
  border-right: 2px solid var(--line);
}
.col-next {
  padding-left: 96px;
}
.covered-label,
.next-label {
  font-family: var(--font-mono);
  font-size: 25px;
  letter-spacing: 0.22em;
}
.covered-label {
  font-weight: 500;
  color: var(--ink-3);
}
.next-label {
  font-weight: 600;
  color: var(--brand-git);
}
.list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.row {
  display: flex;
  align-items: baseline;
  gap: 26px;
}
.covered-dot,
.next-dot {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  flex-shrink: 0;
}
.covered-dot {
  background: var(--brand-git);
}
.next-dot {
  border: 4px solid var(--brand-git);
  box-sizing: border-box;
  background: var(--paper);
}
.covered-text {
  font-family: var(--font-sans);
  font-size: 32px;
  line-height: 1.6;
  color: var(--ink-2);
}
.next-text {
  font-family: var(--font-sans);
  font-size: 34px;
  font-weight: 700;
  line-height: 1.6;
  color: var(--ink);
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
