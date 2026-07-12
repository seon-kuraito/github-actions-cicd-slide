<script setup lang="ts">
withDefaults(
  defineProps<{
    heading?: string
    dontTag?: string
    dontItems?: string[]
    doTag?: string
    doItems?: string[]
  }>(),
  { dontItems: () => [], doItems: () => [] },
)
</script>

<template>
  <div class="slidev-layout compare-01">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="cols">
      <div class="col dont">
        <span class="col-tag">{{ dontTag }}</span>
        <div class="items">
          <span v-for="(item, i) in dontItems" :key="i" class="item"><MdInline :text="item" /></span>
        </div>
      </div>
      <div class="col do">
        <span class="col-tag">{{ doTag }}</span>
        <div class="items">
          <span v-for="(item, i) in doItems" :key="i" class="item"><MdInline :text="item" /></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.compare-01 {
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
.cols {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
}
.col {
  padding: 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.col.dont {
  background: var(--panel);
  border: 1px solid var(--line-2);
}
.col.do {
  border: 3px solid var(--brand-git);
}
.col-tag {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.18em;
}
.dont .col-tag {
  color: var(--ink-3);
}
.do .col-tag {
  color: var(--brand-git);
}
.items {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.item {
  font-family: var(--font-sans);
  font-size: 30px;
  line-height: 1.7;
}
.dont .item {
  color: var(--ink-2);
}
.do .item {
  font-weight: 500;
  color: var(--ink);
}
</style>
