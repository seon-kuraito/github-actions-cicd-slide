<script setup lang="ts">
defineProps<{
  sub?: string
  badge?: string
  contacts?: string[]
}>()
</script>

<template>
  <div class="slidev-layout statement-06">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <!-- 固定結業字樣：COURSE COMPLETE（COMPLETE 品牌橘）；CONGRATULATIONS 由底部 badge 承載 -->
    <span class="headline">COURSE <span class="accent">COMPLETE</span></span>
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
.headline {
  font-family: var(--font-display);
  font-size: 180px;
  font-weight: 700;
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.03em;
}
.headline .accent {
  color: var(--brand-git);
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
  color: var(--ink-2);
  border: 2px solid var(--line-2);
  padding: 14px 32px;
}
.contact-chip {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 500;
  color: var(--ink-2);
  border: 2px solid var(--line-2);
  padding: 14px 32px;
}
</style>
