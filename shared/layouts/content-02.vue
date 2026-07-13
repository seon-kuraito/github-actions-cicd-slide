<script setup lang="ts">
interface BulletItem {
  text?: string
  secondary?: boolean
}

defineProps<{
  heading?: string
  items?: BulletItem[]
}>()
</script>

<template>
  <div class="slidev-layout content-02">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="bullets">
      <div v-for="(item, i) in items ?? []" :key="i" class="bullet-row" :class="{ secondary: item.secondary }">
        <span class="bullet-node"></span>
        <span class="bullet-text"><MdInline :text="item.text" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.content-02 {
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
.bullets {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 52px;
  max-width: 1500px;
}
.bullet-row {
  display: flex;
  align-items: baseline;
  gap: 36px;
}
.bullet-node {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  flex-shrink: 0;
  transform: translateY(-2px);
  background: var(--brand-git);
}
.bullet-row.secondary .bullet-node {
  border: 5px solid var(--line-2);
  box-sizing: border-box;
  background: var(--paper);
}
.bullet-text {
  font-family: var(--font-sans);
  font-size: 36px;
  line-height: 1.7;
  color: var(--ink);
}
.bullet-row.secondary .bullet-text {
  color: var(--ink-3);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
