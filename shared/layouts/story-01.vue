<script setup lang="ts">
defineProps<{
  kicker?: string
  heading?: string
  sub?: string
}>()
</script>

<template>
  <div class="slidev-layout story-01">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <span class="kicker">{{ kicker }}</span>
    <span class="heading"><MdInline :text="heading" /></span>
    <span class="sub"><MdInline :text="sub" /></span>
  </div>
</template>

<style scoped>
.story-01 {
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
  text-align: center;
  max-width: 1500px;
}
.sub {
  font-family: var(--font-sans);
  font-size: 32px;
  color: var(--ink-3);
}
</style>
