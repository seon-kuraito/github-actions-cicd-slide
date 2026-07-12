<script setup lang="ts">
interface ColItem {
  heading?: string
  body?: string
}

defineProps<{
  heading?: string
  cols?: ColItem[]
}>()
</script>

<template>
  <div class="slidev-layout content-05">
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
      <div v-for="(col, i) in cols ?? []" :key="i" class="col">
        <span class="col-heading"><MdInline :text="col.heading" /></span>
        <span class="col-body"><MdInline :text="col.body" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.content-05 {
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
  grid-template-columns: 1fr 1fr;
  gap: 96px;
  align-content: center;
}
.col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.col-heading {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 700;
  color: var(--ink);
}
.col-body {
  font-family: var(--font-sans);
  font-size: 29px;
  line-height: 1.9;
  color: var(--ink-2);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
