<script setup lang="ts">
interface AgendaItem {
  no?: string | number
  heading?: string
  desc?: string
}

defineProps<{
  heading?: string
  items?: AgendaItem[]
}>()
</script>

<template>
  <div class="slidev-layout intro-01">
    <PageNo />
    <div class="left-col">
      <div class="left-top">
        <Eyebrow />
        <span class="heading"><MdInline :text="heading" /></span>
      </div>
      <span></span>
    </div>
    <div class="agenda">
      <div v-for="(item, i) in items ?? []" :key="i" class="agenda-row">
        <span class="agenda-no">{{ item.no }}</span>
        <div class="agenda-text">
          <span class="agenda-heading"><MdInline :text="item.heading" /></span>
          <span class="agenda-desc"><MdInline :text="item.desc" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-01 {
  display: flex;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 120px;
}
.left-col {
  width: 560px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left-top {
  display: flex;
  flex-direction: column;
  gap: 56px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 84px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.agenda {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* 首列內容頂部切齊左側標題頂部（eyebrow 72 + 高 + gap 56 = 標題頂 164；
     扣掉列自帶的 44px 上內距）。 */
  padding-top: 48px;
}
.agenda-row {
  display: flex;
  align-items: baseline;
  gap: 48px;
  padding: 44px 0;
}
.agenda-row:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.agenda-no {
  font-family: var(--font-display);
  font-size: 44px;
  font-weight: 700;
  color: var(--brand-git);
  width: 84px;
  flex-shrink: 0;
}
.agenda-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.agenda-heading {
  font-family: var(--font-sans);
  font-size: 42px;
  font-weight: 700;
  color: var(--ink);
}
.agenda-desc {
  font-family: var(--font-sans);
  font-size: 27px;
  color: var(--ink-3);
}
</style>
