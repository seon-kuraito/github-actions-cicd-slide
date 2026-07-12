<script setup lang="ts">
defineProps<{
  heading?: string
  items?: { no?: string | number; text?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout admin-02">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="items">
      <div v-for="(item, i) in items" :key="i" class="item">
        <span class="item-no">{{ item.no }}</span>
        <span class="item-text"><MdInline :text="item.text" /></span>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.admin-02 {
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
  font-size: 64px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.items {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1550px;
}
.item {
  display: flex;
  align-items: baseline;
  gap: 40px;
  padding: 40px 0;
}
.item:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.item-no {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 700;
  color: var(--brand-git);
  width: 72px;
  flex-shrink: 0;
}
.item-text {
  font-family: var(--font-sans);
  font-size: 38px;
  line-height: 1.6;
  color: var(--ink);
}
</style>
