<script setup lang="ts">
interface ChecklistItem {
  heading?: string
  desc?: string
  optional?: boolean
}

defineProps<{
  heading?: string
  items?: ChecklistItem[]
}>()

const LABEL_REQUIRED = 'REQUIRED'
const LABEL_OPTIONAL = 'OPTIONAL'
</script>

<template>
  <div class="slidev-layout intro-04">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="checklist">
      <div v-for="(item, i) in items ?? []" :key="i" class="check-row" :class="{ optional: item.optional }">
        <span class="check-box"></span>
        <div class="check-text">
          <span class="check-heading"><MdInline :text="item.heading" /></span>
          <span class="check-desc"><MdInline :text="item.desc" /></span>
        </div>
        <span class="check-tag">{{ item.optional ? LABEL_OPTIONAL : LABEL_REQUIRED }}</span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.intro-04 {
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
.title-block {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 72px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.checklist {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1600px;
}
.check-row {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 24px 0;
}
.check-row:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.check-box {
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  flex-shrink: 0;
  border: 3px solid var(--ink);
}
.check-row.optional .check-box {
  border: 3px solid var(--line-2);
}
.check-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.check-heading {
  font-family: var(--font-sans);
  font-size: 34px;
  font-weight: 700;
  color: var(--ink);
}
.check-row.optional .check-heading {
  color: var(--ink-3);
}
.check-desc {
  font-family: var(--font-sans);
  font-size: 26px;
  color: var(--ink-3);
}
.check-tag {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 23px;
  padding: 10px 24px;
  font-weight: 600;
  color: var(--brand-git);
  border: 1px solid var(--brand-git);
}
.check-row.optional .check-tag {
  font-weight: 500;
  color: var(--ink-3);
  border: 1px solid var(--line-2);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
