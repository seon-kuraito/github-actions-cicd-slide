<script setup lang="ts">
defineProps<{
  quote?: string
  attribution?: string
  context?: string
}>()
</script>

<template>
  <div class="slidev-layout story-05">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="body">
      <div class="quote-block">
        <span class="quote"><MdInline :text="quote" /></span>
        <span class="attribution">{{ attribution }}</span>
      </div>
      <span class="context"><MdInline :text="context" /></span>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.story-05 {
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
.quote-block {
  border-left: 8px solid var(--brand-git);
  padding-left: 56px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.quote {
  font-family: var(--font-sans);
  font-size: 56px;
  font-weight: 700;
  line-height: 1.6;
  color: var(--ink);
}
.attribution {
  font-family: var(--font-mono);
  font-size: 27px;
  color: var(--ink-3);
}
.context {
  font-family: var(--font-sans);
  font-size: 29px;
  line-height: 1.9;
  color: var(--ink-2);
  padding-left: 62px;
}
</style>
