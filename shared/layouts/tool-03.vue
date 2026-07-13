<script setup lang="ts">
defineProps<{
  heading?: string
  items?: { name?: string; desc?: string; id?: string; optional?: boolean }[]
}>()
</script>

<template>
  <div class="slidev-layout tool-03">
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
      <div v-for="(item, i) in items" :key="i" class="item" :class="{ optional: item.optional }">
        <div class="item-main">
          <span class="item-name"><MdInline :text="item.name" /></span>
          <span class="item-desc"><MdInline :text="item.desc" /></span>
        </div>
        <span class="item-id">{{ item.id }}</span>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.tool-03 {
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
.items {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1650px;
}
.item {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 34px 0;
}
.item:not(:last-child) {
  border-bottom: 2px solid var(--line);
}
.item-main {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.item-name {
  font-family: var(--font-sans);
  font-size: 34px;
  font-weight: 700;
  color: var(--ink);
}
.item-desc {
  font-family: var(--font-sans);
  font-size: 26px;
  color: var(--ink-3);
}
.item-id {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 25px;
  color: var(--brand-git);
}
/* 選用套件整列淡化：名稱與識別字轉 ink-3 */
.item.optional .item-name,
.item.optional .item-id {
  color: var(--ink-3);
}
</style>
