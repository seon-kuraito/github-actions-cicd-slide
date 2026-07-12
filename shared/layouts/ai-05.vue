<script setup lang="ts">
defineProps<{
  heading?: string
  meta?: string
  hint?: string
  files?: { name: string; desc?: string; size?: string; in?: boolean }[]
  doc?: { text: string; tone?: 'accent' | 'body' | 'dim'; prefix?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout ai-05">
    <PageNo />
    <div class="header-row">
      <div class="header-left">
        <Eyebrow main-color="var(--brand-ai)" />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="meta">{{ meta }}</span>
    </div>
    <div class="panels">
      <AiContextPanel :hint="hint" :files="files" />
      <AiMonoPanel variant="doc" :lines="doc" />
    </div>
  </div>
</template>

<style scoped>
.ai-05 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 48px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 64px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.meta {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-ai);
}
.panels {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
</style>
