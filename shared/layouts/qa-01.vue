<script setup lang="ts">
defineProps<{
  label?: string
  heading?: string
  sub?: string
  tag?: string
}>()
</script>

<template>
  <div class="slidev-layout qa-01">
    <PageNo />
    <span class="watermark">?</span>
    <div class="header">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <div class="content">
      <span class="label">{{ label }}</span>
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="sub"><MdInline :text="sub" /></span>
    </div>
    <div class="footer">
      <span></span>
      <span class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.qa-01 {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 72px 100px 140px;
  box-sizing: border-box;
}
.watermark {
  position: absolute;
  right: -70px;
  bottom: -160px;
  font-family: var(--font-display);
  font-size: 1000px;
  font-weight: 700;
  line-height: 0.85;
  color: var(--qa-watermark);
  letter-spacing: -0.05em;
}
.header,
.footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1420px;
}
.label {
  font-family: var(--font-mono);
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-git);
}
.heading {
  font-family: var(--font-sans);
  font-size: 84px;
  font-weight: 900;
  line-height: 1.4;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.sub {
  font-family: var(--font-sans);
  font-size: 30px;
  color: var(--ink-3);
}
.tag {
  font-family: var(--font-mono);
  font-size: 24px;
  letter-spacing: 0.12em;
  color: var(--brand-git);
}
</style>
