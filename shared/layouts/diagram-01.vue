<script setup lang="ts">
interface Note {
  heading?: string
  desc?: string
  muted?: boolean
}

withDefaults(
  defineProps<{
    heading?: string
    diagramLabel?: string
    diagramNote?: string
    notes?: Note[]
  }>(),
  { notes: () => [] },
)
</script>

<template>
  <div class="slidev-layout diagram-01">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="main">
      <div class="diagram-box">
        <span class="diagram-label">{{ diagramLabel }}</span>
        <span class="diagram-note">{{ diagramNote }}</span>
      </div>
      <div class="notes">
        <div v-for="(n, i) in notes" :key="i" class="note" :class="{ muted: n.muted }">
          <span class="note-dot"></span>
          <div class="note-text">
            <span class="note-heading"><MdInline :text="n.heading" /></span>
            <span class="note-desc"><MdInline :text="n.desc" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.diagram-01 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.heading-block {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 64px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.main {
  flex: 1;
  display: flex;
  gap: 72px;
}
.diagram-box {
  flex: 1;
  background: var(--panel);
  border: 1px dashed var(--line-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  box-sizing: border-box;
}
.diagram-label {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.diagram-note {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-4);
}
.notes {
  width: 420px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 44px;
}
.note {
  display: flex;
  align-items: baseline;
  gap: 22px;
}
.note-dot {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  flex-shrink: 0;
  background: var(--brand-git);
}
.note.muted .note-dot {
  border: 4px solid var(--line-2);
  box-sizing: border-box;
  background: var(--paper);
}
.note-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.note-heading {
  font-family: var(--font-sans);
  font-size: 30px;
  font-weight: 700;
  color: var(--ink);
}
.note.muted .note-heading {
  color: var(--ink-2);
}
.note-desc {
  font-family: var(--font-sans);
  font-size: 25px;
  line-height: 1.7;
  color: var(--ink-3);
}
</style>
