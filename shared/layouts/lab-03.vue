<script setup lang="ts">
type LabNote = { type: 'warning' | 'note'; text: string }

defineProps<{
  heading?: string
  items?: LabNote[]
}>()
</script>

<template>
  <div class="slidev-layout lab-03">
    <PageNo />
    <div class="header">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="items">
      <div v-for="(item, i) in items ?? []" :key="i" class="item" :class="item.type">
        <span class="item-label">{{ item.type.toUpperCase() }}</span>
        <span class="item-text"><MdInline :text="item.text" /></span>
      </div>
    </div>
    <div class="footer">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.lab-03 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.header,
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
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
  gap: 30px;
  justify-content: center;
}
.item {
  padding: 30px 56px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.item.warning {
  border-left: 8px solid var(--brand-git);
  background: var(--brand-git-tint);
}
.item.note {
  border-left: 8px solid var(--line-2);
  background: var(--panel);
}
.item-label {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.18em;
}
.item.warning .item-label {
  color: var(--brand-git);
}
.item.note .item-label {
  color: var(--ink-3);
}
.item-text {
  font-family: var(--font-sans);
  font-size: 30px;
  line-height: 1.8;
}
.item.warning .item-text {
  color: var(--ink);
}
.item.note .item-text {
  color: var(--ink-2);
}
</style>
