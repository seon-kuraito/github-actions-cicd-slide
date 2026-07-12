<script setup lang="ts">
defineProps<{
  heading?: string
  cards?: { no?: string | number; heading?: string; desc?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout data-02">
    <PageNo />
    <div class="top-bar">
      <div class="top-bar-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="cards">
      <div v-for="(card, i) in cards" :key="i" class="card">
        <span class="card-no">{{ card.no }}</span>
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
.data-02 {
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
.cards {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}
.card {
  border: 1px solid var(--line);
  padding: 52px 52px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.card-no {
  font-family: var(--font-display);
  font-size: 52px;
  font-weight: 700;
  color: var(--brand-git);
}
.card-heading {
  font-family: var(--font-sans);
  font-size: 40px;
  font-weight: 700;
  color: var(--ink);
}
.card-desc {
  font-family: var(--font-sans);
  font-size: 29px;
  line-height: 1.85;
  color: var(--ink-2);
}
</style>
