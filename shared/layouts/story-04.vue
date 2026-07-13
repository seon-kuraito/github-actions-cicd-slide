<script setup lang="ts">
defineProps<{
  heading?: string
  endings?: { label?: string; text?: string; active?: boolean }[]
}>()
</script>

<template>
  <div class="slidev-layout story-04">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="endings-grid">
      <div v-for="(ending, i) in endings" :key="i" class="ending-card" :class="{ active: ending.active }">
        <span class="ending-label">{{ ending.label }}</span>
        <span class="ending-text"><MdInline :text="ending.text" /></span>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.story-04 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.head-row,
.foot-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
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
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.endings-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}
/* 一般結局卡＝灰底細框；active 結局卡＝品牌色粗框、無底色 */
.ending-card {
  padding: 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background: var(--panel);
  border: 2px solid var(--line-2);
}
.ending-card.active {
  background: transparent;
  border: 3px solid var(--brand-git);
}
.ending-label {
  font-family: var(--font-mono);
  font-size: 25px;
  letter-spacing: 0.18em;
  font-weight: 500;
  color: var(--ink-3);
}
.ending-card.active .ending-label {
  font-weight: 600;
  color: var(--brand-git);
}
.ending-text {
  font-family: var(--font-sans);
  font-size: 31px;
  line-height: 1.9;
  color: var(--ink-2);
}
.ending-card.active .ending-text {
  font-weight: 500;
  color: var(--ink);
}
</style>
