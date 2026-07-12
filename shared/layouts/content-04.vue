<script setup lang="ts">
interface TermItem {
  term?: string
  name?: string
  desc?: string
}

defineProps<{
  heading?: string
  terms?: TermItem[]
}>()
</script>

<template>
  <div class="slidev-layout content-04">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <span class="heading"><MdInline :text="heading" /></span>
    <div class="grid">
      <div v-for="(t, i) in terms ?? []" :key="i" class="term-cell">
        <span class="term">{{ t.term }}</span>
        <span class="term-name"><MdInline :text="t.name" /></span>
        <span class="term-desc"><MdInline :text="t.desc" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.content-04 {
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
  gap: 0 96px;
  align-content: center;
}
.term-cell {
  border-top: 1px solid var(--line);
  padding: 40px 0 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.term {
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 600;
  color: var(--brand-git);
}
.term-name {
  font-family: var(--font-sans);
  font-size: 38px;
  font-weight: 700;
  color: var(--ink);
}
.term-desc {
  font-family: var(--font-sans);
  font-size: 28px;
  line-height: 1.8;
  color: var(--ink-2);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
