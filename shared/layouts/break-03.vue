<script setup lang="ts">
type Badge = { text: string; accent?: boolean }

defineProps<{
  heading?: string
  sub?: string
  badges?: Badge[]
}>()
</script>

<template>
  <div class="slidev-layout break-03">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <span class="headline"><MdInline :text="heading" /></span>
    <span class="sub"><MdInline :text="sub" /></span>
    <div class="badges">
      <span v-for="(badge, i) in badges ?? []" :key="i" class="badge" :class="{ accent: badge.accent }">{{ badge.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.break-03 {
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
/* sub 為較長討論題，維持家族副標規格（36／0.1em／ink-3），加寬度上限與行高供換行。 */
.sub {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 500;
  color: var(--ink-3);
  letter-spacing: 0.1em;
  max-width: 1300px;
  text-align: center;
  line-height: 1.6;
}
.badges {
  display: flex;
  align-items: center;
  gap: 28px;
}
.badge {
  font-family: var(--font-mono);
  font-size: 26px;
  padding: 14px 32px;
  font-weight: 500;
  color: var(--ink-2);
  border: 2px solid var(--line-2);
}
.badge.accent {
  font-weight: 600;
  color: var(--brand-git);
  border: 2px solid var(--brand-git);
}
</style>
