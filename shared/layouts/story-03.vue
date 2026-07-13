<script setup lang="ts">
defineProps<{
  kicker?: string
  heading?: string
  sub?: string
  takeaway?: string
}>()
</script>

<template>
  <div class="slidev-layout story-03">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="body">
      <span class="kicker">{{ kicker }}</span>
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="divider"></span>
      <span class="sub"><MdInline :text="sub" /></span>
      <span class="takeaway"><MdInline :text="takeaway" /></span>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.story-03 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.head-row,
.foot-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  max-width: 1550px;
}
.kicker {
  font-family: var(--font-mono);
  font-size: 27px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: var(--brand-git);
}
.heading {
  font-family: var(--font-sans);
  font-size: 84px;
  font-weight: 900;
  line-height: 1.4;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.divider {
  width: 120px;
  height: 3px;
  background: var(--line);
}
.sub {
  font-family: var(--font-sans);
  font-size: 33px;
  line-height: 1.8;
  color: var(--ink-2);
}
.takeaway {
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 600;
  color: var(--brand-git);
}
</style>
