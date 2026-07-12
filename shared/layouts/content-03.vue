<script setup lang="ts">
defineProps<{
  heading?: string
  cite?: string
}>()
</script>

<template>
  <div class="slidev-layout content-03">
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <PageNo />
    <span class="quote-mark">&ldquo;</span>
    <span class="heading"><MdInline :text="heading" /></span>
    <span v-if="cite" class="cite"><MdInline :text="cite" /></span>
  </div>
</template>

<style scoped>
.content-03 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
  padding: 100px 200px;
  box-sizing: border-box;
}
.eyebrow-pos {
  position: absolute;
  top: 72px;
  left: 100px;
  z-index: 2;
}
.quote-mark {
  font-family: var(--font-display);
  font-size: 200px;
  font-weight: 700;
  line-height: 0.5;
  color: var(--brand-git);
  height: 80px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 64px;
  font-weight: 900;
  line-height: 1.6;
  color: var(--ink);
  letter-spacing: 0.04em;
  text-align: center;
  max-width: 1400px;
}
.cite {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--ink-3);
}
</style>
