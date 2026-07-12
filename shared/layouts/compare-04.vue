<script setup lang="ts">
interface Option {
  name?: string
  slug?: string
  items?: string[]
}

withDefaults(
  defineProps<{
    heading?: string
    options?: Option[]
  }>(),
  { options: () => [] },
)
</script>

<template>
  <div class="slidev-layout compare-04">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="options">
      <div v-for="(o, i) in options" :key="i" class="option">
        <div class="option-head">
          <span class="option-name"><MdInline :text="o.name" /></span>
          <span class="option-slug">{{ o.slug }}</span>
        </div>
        <div class="items">
          <div v-for="(item, j) in o.items" :key="j" class="item">
            <span class="item-dot"></span>
            <span class="item-text"><MdInline :text="item" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.compare-04 {
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
.options {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}
.option {
  border: 1px solid var(--line-2);
  padding: 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.option-head {
  display: flex;
  align-items: baseline;
  gap: 24px;
}
.option-name {
  font-family: var(--font-sans);
  font-size: 42px;
  font-weight: 900;
  color: var(--ink);
}
.option-slug {
  font-family: var(--font-mono);
  font-size: 23px;
  color: var(--ink-3);
}
.items {
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.item {
  display: flex;
  align-items: baseline;
  gap: 24px;
}
.item-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: var(--brand-git);
  flex-shrink: 0;
}
.item-text {
  font-family: var(--font-sans);
  font-size: 28px;
  line-height: 1.7;
  color: var(--ink-2);
}
</style>
