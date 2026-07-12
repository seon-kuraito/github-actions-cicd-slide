<script setup lang="ts">
defineProps<{
  heading?: string
  body?: string
  note?: string
}>()
</script>

<template>
  <div class="slidev-layout content-01">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="text-block">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="body"><MdInline :text="body" /></span>
      <span v-if="note" class="note"><MdInline :text="note" /></span>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.content-01 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 72px 100px 140px;
  box-sizing: border-box;
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
.text-block {
  display: flex;
  flex-direction: column;
  gap: 44px;
  max-width: 1480px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 80px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.body {
  font-family: var(--font-sans);
  font-size: 34px;
  font-weight: 400;
  line-height: 1.9;
  color: var(--ink);
  max-width: 1360px;
}
.note {
  font-family: var(--font-sans);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--ink-3);
  max-width: 1360px;
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
