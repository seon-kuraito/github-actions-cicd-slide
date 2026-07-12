<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    no?: string | number
    slug?: string
    heading?: string
    brand?: 'git' | 'github' | 'ai'
  }>(),
  { brand: 'git' },
)
</script>

<template>
  <div class="slidev-layout chapter-01" :class="`brand-${props.brand}`">
    <span class="eyebrow-pos">
      <Eyebrow main-color="var(--c-accent)" />
    </span>
    <PageNo />
    <span class="giant-no">{{ no }}</span>
    <div class="block">
      <span class="slug">{{ slug }}</span>
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
  </div>
</template>

<style scoped>
.chapter-01 {
  overflow: hidden;
  --c-accent: var(--brand-git);
}
.chapter-01.brand-github {
  --c-accent: var(--brand-github);
}
.chapter-01.brand-ai {
  --c-accent: var(--brand-ai);
}
.eyebrow-pos {
  position: absolute;
  top: 72px;
  left: 100px;
  z-index: 2;
}
.giant-no {
  position: absolute;
  right: -70px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-display);
  font-size: 900px;
  font-weight: 700;
  line-height: 0.85;
  color: var(--c-accent);
  letter-spacing: -0.05em;
}
.block {
  position: absolute;
  left: 100px;
  bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.slug {
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--c-accent);
}
.heading {
  font-family: var(--font-sans);
  font-size: 108px;
  font-weight: 900;
  line-height: 1.22;
  color: var(--ink);
  letter-spacing: 0.04em;
}
</style>
