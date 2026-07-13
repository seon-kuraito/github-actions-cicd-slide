<script setup lang="ts">
defineProps<{
  heading?: string
  items?: { label?: string; value?: string; mono?: boolean }[]
}>()
</script>

<template>
  <div class="slidev-layout admin-01">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="cards-grid">
      <div v-for="(item, i) in items" :key="i" class="info-card" :class="{ mono: item.mono }">
        <span class="card-label">{{ item.label }}</span>
        <span v-if="item.mono" class="value-mono">{{ item.value }}</span>
        <span v-else class="value-text"><MdInline :text="item.value" /></span>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.admin-01 {
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
.title-block {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.cards-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-content: center;
}
.info-card {
  border: 2px solid var(--line-2);
  padding: 48px 52px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.card-label {
  font-family: var(--font-mono);
  font-size: 24px;
  letter-spacing: 0.18em;
  font-weight: 500;
  color: var(--ink-3);
}
/* 憑證卡（mono，如 SSID／密碼）：label 品牌色、value 等寬字 */
.info-card.mono .card-label {
  font-weight: 600;
  color: var(--brand-git);
}
.value-mono {
  font-family: var(--font-mono);
  font-size: 44px;
  font-weight: 600;
  color: var(--ink);
}
.value-text {
  font-family: var(--font-sans);
  font-size: 38px;
  font-weight: 700;
  color: var(--ink);
}
</style>
