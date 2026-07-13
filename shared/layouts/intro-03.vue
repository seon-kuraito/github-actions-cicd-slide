<script setup lang="ts">
interface MapCard {
  no?: string | number
  heading?: string
  desc?: string
  active?: boolean
}

defineProps<{
  heading?: string
  cards?: MapCard[]
}>()

const BADGE_NOW = 'NOW'
</script>

<template>
  <div class="slidev-layout intro-03">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="grid">
      <div v-for="(card, i) in cards ?? []" :key="i" class="card" :class="{ active: card.active }">
        <div v-if="card.active" class="card-head">
          <span class="module-label">MODULE {{ card.no }}</span>
          <span class="now-badge">{{ BADGE_NOW }}</span>
        </div>
        <span v-else class="module-label">MODULE {{ card.no }}</span>
        <span class="card-heading"><MdInline :text="card.heading" /></span>
        <span class="card-desc"><MdInline :text="card.desc" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.intro-03 {
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
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  align-content: center;
}
.card {
  padding: 40px 44px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid var(--line-2);
}
.card.active {
  border: 3px solid var(--brand-git);
}
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.module-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.card.active .module-label {
  color: var(--brand-git);
}
/* NOW 徽章白字釘字面值：品牌橘底無深色版，不隨 html.dark 重映射翻轉。 */
.now-badge {
  font-family: var(--font-mono);
  font-size: 21px;
  font-weight: 600;
  color: #ffffff;
  background: var(--brand-git);
  padding: 5px 14px;
}
.card-heading {
  font-family: var(--font-sans);
  font-size: 42px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
}
.card-desc {
  font-family: var(--font-sans);
  font-size: 26px;
  line-height: 1.7;
  color: var(--ink-2);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
