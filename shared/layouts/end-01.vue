<script setup lang="ts">
defineProps<{
  heading?: string
  items?: { no: string | number; text: string }[]
  next?: string
}>()

const NEXT_ARROW = 'next →'
</script>

<template>
  <div class="slidev-layout end-01">
    <PageNo />
    <div class="top-row">
      <div class="eyebrow-row">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="items">
      <div v-for="(it, i) in items ?? []" :key="i" class="item">
        <span class="item-no">{{ it.no }}</span>
        <span class="item-text"><MdInline :text="it.text" /></span>
      </div>
    </div>
    <div class="footer">
      <span></span>
      <span v-if="next" class="next">{{ NEXT_ARROW }} {{ next }}</span>
    </div>
  </div>
</template>

<style scoped>
.end-01 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.eyebrow-row {
  display: flex;
  align-items: center;
  gap: 20px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 72px;
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
  gap: 0;
  max-width: 1500px;
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
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line);
  padding-top: 36px;
}
.next {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--brand-git);
}
</style>
