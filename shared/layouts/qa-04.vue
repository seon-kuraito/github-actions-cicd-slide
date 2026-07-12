<script setup lang="ts">
type Option = { label: string; text: string; answer?: boolean }

defineProps<{
  heading?: string
  options?: Option[]
  tag?: string
}>()
</script>

<template>
  <div class="slidev-layout qa-04">
    <PageNo />
    <div class="header">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="options">
      <div v-for="(opt, i) in options ?? []" :key="i" class="option" :class="{ answer: opt.answer }">
        <span class="option-label">{{ opt.label }}</span>
        <span class="option-text"><MdInline :text="opt.text" /></span>
      </div>
    </div>
    <div class="footer">
      <span></span>
      <span class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.qa-04 {
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
  font-size: 64px;
  font-weight: 900;
  line-height: 1.4;
  color: var(--ink);
  letter-spacing: 0.04em;
  max-width: 1600px;
}
.options {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  max-width: 1500px;
}
.option {
  display: flex;
  align-items: center;
  gap: 40px;
}
.option-label {
  width: 76px;
  height: 76px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 700;
  /* 非 active 選項方框：對齊 p21 BEFORE／p45 EXPECTED 的淡框樣式（1px line-2＋ink-3）。 */
  border: 1px solid var(--line-2);
  color: var(--ink-3);
}
/* 答案反白釘 #FFFFFF：橘底上的白字，深色模式不得隨 --paper 重映射翻轉。 */
.option.answer .option-label {
  border: 3px solid var(--brand-git);
  background: var(--brand-git);
  color: #FFFFFF;
}
.option-text {
  font-family: var(--font-sans);
  font-size: 36px;
  line-height: 1.6;
  color: var(--ink);
}
.option.answer .option-text {
  font-weight: 700;
}
.tag {
  font-family: var(--font-mono);
  font-size: 24px;
  letter-spacing: 0.12em;
  color: var(--brand-git);
}
</style>
