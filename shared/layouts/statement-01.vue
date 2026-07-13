<script setup lang="ts">
defineProps<{
  sub?: string
  contact?: string
}>()

// Q&A 為固定設計字（& 走品牌橘）。
const QA_LEFT = 'Q'
const QA_AMP = '&'
const QA_RIGHT = 'A'
</script>

<template>
  <div class="slidev-layout statement-01">
    <PageNo />
    <span class="eyebrow-pos">
      <Eyebrow />
    </span>
    <span class="headline">{{ QA_LEFT }}<span class="headline-accent">{{ QA_AMP }}</span>{{ QA_RIGHT }}</span>
    <span class="sub"><MdInline :text="sub" /></span>
    <div v-if="contact" class="contacts">
      <span class="contact-chip">{{ contact }}</span>
    </div>
  </div>
</template>

<style scoped>
.statement-01 {
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
.headline-accent {
  color: var(--brand-git);
}
.sub {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 500;
  color: var(--ink-3);
  letter-spacing: 0.1em;
}
/* 底部聯絡資訊：與 statement-02 同一 in-flow 有框 chip（置中群組內、對齊 p62 排版）。 */
.contacts {
  display: flex;
  align-items: center;
  gap: 28px;
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
