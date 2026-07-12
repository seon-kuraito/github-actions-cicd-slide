<script setup lang="ts">
defineProps<{
  sub?: string
  badge?: string
  contacts?: string[]
}>()

// CONGRATULATIONS 為固定設計字樣，整體使用品牌橘。
const HEADLINE = 'CONGRATULATIONS'
</script>

<template>
  <div class="slidev-layout statement-06">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <span class="headline">{{ HEADLINE }}</span>
    <span class="sub"><MdInline :text="sub" /></span>
    <div class="chips">
      <span v-if="badge" class="badge">{{ badge }}</span>
      <span v-for="(c, i) in contacts ?? []" :key="i" class="contact-chip">{{ c }}</span>
    </div>
  </div>
</template>

<style scoped>
.statement-06 {
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
/* 家族規格為 180px；CONGRATULATIONS 15 字母在 1920 畫布放不下，降至 148px。 */
.headline {
  font-family: var(--font-display);
  font-size: 148px;
  font-weight: 700;
  line-height: 1;
  color: var(--brand-git);
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
  border: 1px solid var(--brand-git);
  padding: 14px 32px;
}
.contact-chip {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 500;
  color: var(--ink-2);
  border: 1px solid var(--line-2);
  padding: 14px 32px;
}
</style>
