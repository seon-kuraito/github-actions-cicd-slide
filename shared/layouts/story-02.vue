<script setup lang="ts">
defineProps<{
  heading?: string
  items?: string[]
}>()
</script>

<template>
  <div class="slidev-layout story-02">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="body">
      <div class="lead">
        <span class="heading"><MdInline :text="heading" /></span>
      </div>
      <div class="items">
        <div v-for="(item, i) in items" :key="i" class="item">
          <span class="item-dot"></span>
          <span class="item-text"><MdInline :text="item" /></span>
        </div>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.story-02 {
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
.body {
  flex: 1;
  display: flex;
  gap: 120px;
  align-items: center;
}
.lead {
  width: 560px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 110px;
  font-weight: 900;
  line-height: 1.25;
  color: var(--ink);
  letter-spacing: 0.06em;
}
.items {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 44px;
}
.item {
  display: flex;
  align-items: baseline;
  gap: 32px;
}
.item-dot {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--brand-git);
  flex-shrink: 0;
}
.item-text {
  font-family: var(--font-sans);
  font-size: 34px;
  line-height: 1.7;
  color: var(--ink);
}
</style>
