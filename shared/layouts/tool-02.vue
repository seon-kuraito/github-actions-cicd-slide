<script setup lang="ts">
defineProps<{
  heading?: string
  cards?: { tag?: string; name?: string; desc?: string; url?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout tool-02">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="cards-grid">
      <div v-for="(card, i) in cards" :key="i" class="card">
        <span class="card-tag">{{ card.tag }}</span>
        <span class="card-name"><MdInline :text="card.name" /></span>
        <span class="card-desc"><MdInline :text="card.desc" /></span>
        <span class="card-url">{{ card.url }}</span>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.tool-02 {
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
.cards-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  align-content: center;
}
.card {
  border: 2px solid var(--line-2);
  padding: 52px 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.card-tag {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--brand-git);
}
.card-name {
  font-family: var(--font-sans);
  font-size: 42px;
  font-weight: 900;
  color: var(--ink);
}
.card-desc {
  font-family: var(--font-sans);
  font-size: 26px;
  line-height: 1.8;
  color: var(--ink-2);
}
.card-url {
  font-family: var(--font-mono);
  font-size: 23px;
  color: var(--ink-3);
  margin-top: auto;
}
</style>
