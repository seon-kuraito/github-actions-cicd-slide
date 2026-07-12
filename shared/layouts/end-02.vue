<script setup lang="ts">
defineProps<{
  heading?: string
  items?: { tag: string; name: string; url: string }[]
}>()
</script>

<template>
  <div class="slidev-layout end-02">
    <PageNo />
    <div class="top-row">
      <div class="eyebrow-row">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="items">
      <div v-for="(it, i) in items ?? []" :key="i" class="item">
        <span class="item-tag">{{ it.tag }}</span>
        <span class="item-name"><MdInline :text="it.name" /></span>
        <span class="item-url">{{ it.url }}</span>
      </div>
    </div>
    <div class="footer">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.end-02 {
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
.heading-block {
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
  max-width: 1650px;
}
.item {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 34px 0;
}
.item:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.item-tag {
  font-family: var(--font-mono);
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--brand-git);
  border: 1px solid var(--brand-git);
  padding: 10px 24px;
  width: 170px;
  text-align: center;
  box-sizing: border-box;
  flex-shrink: 0;
}
.item-name {
  font-family: var(--font-sans);
  font-size: 33px;
  font-weight: 700;
  color: var(--ink);
}
.item-url {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 25px;
  color: var(--ink-3);
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
