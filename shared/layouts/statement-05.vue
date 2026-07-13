<script setup lang="ts">
defineProps<{
  heading?: string
  sub?: string
  badge?: string
}>()
</script>

<template>
  <div class="slidev-layout statement-05">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <span class="headline"><MdInline :text="heading" /></span>
    <span class="sub"><MdInline :text="sub" /></span>
    <div class="chips">
      <span v-if="badge" class="badge">{{ badge }}</span>
    </div>
  </div>
</template>

<style scoped>
.statement-05 {
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
.headline {
  font-family: var(--font-display);
  font-size: 180px;
  font-weight: 700;
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.03em;
}
.sub {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 500;
  color: var(--ink-3);
  letter-spacing: 0.1em;
}
.chips {
  display: flex;
  align-items: center;
  gap: 28px;
}
.badge {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 600;
  color: var(--brand-git);
  border: 2px solid var(--brand-git);
  padding: 14px 32px;
}
</style>
