<script setup lang="ts">
defineProps<{
  heading?: string
  command?: string
  sub?: string
}>()
</script>

<template>
  <div class="slidev-layout lab-02">
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <PageNo />
    <span class="heading"><MdInline :text="heading" /></span>
    <span class="command">{{ command }}<span class="cursor"></span></span>
    <span class="sub"><MdInline :text="sub" /></span>
  </div>
</template>

<style scoped>
.lab-02 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  box-sizing: border-box;
}
.eyebrow-pos {
  position: absolute;
  top: 72px;
  left: 100px;
  z-index: 2;
}
.heading {
  font-family: var(--font-sans);
  font-size: 108px;
  font-weight: 900;
  line-height: 1.2;
  color: var(--ink);
  letter-spacing: 0.06em;
}
.command {
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 500;
  color: var(--brand-git);
}
.cursor {
  display: inline-block;
  width: 18px;
  height: 42px;
  background: var(--brand-git);
  margin-left: 14px;
  vertical-align: -6px;
}
.sub {
  font-family: var(--font-sans);
  font-size: 30px;
  color: var(--ink-3);
}
</style>
