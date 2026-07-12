<script setup lang="ts">
interface Stage {
  tag?: string
  name?: string
  desc?: string
  active?: boolean
}

withDefaults(
  defineProps<{
    heading?: string
    stages?: Stage[]
  }>(),
  { stages: () => [] },
)

const ARROW = '→'
</script>

<template>
  <div class="slidev-layout diagram-05">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="stages">
      <template v-for="(s, i) in stages" :key="i">
        <span v-if="i > 0" class="stage-arrow">{{ ARROW }}</span>
        <div class="stage" :class="{ active: s.active }">
          <span class="stage-tag">{{ s.tag }}</span>
          <span class="stage-name"><MdInline :text="s.name" /></span>
          <span class="stage-desc"><MdInline :text="s.desc" /></span>
        </div>
      </template>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.diagram-05 {
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
.stages {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 40px;
}
.stage-arrow {
  font-family: var(--font-mono);
  font-size: 44px;
  color: var(--brand-git);
  flex-shrink: 0;
}
.stage {
  flex: 1;
  padding: 56px 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 1px solid var(--line-2);
}
.stage.active {
  border: 3px solid var(--brand-git);
}
.stage-tag {
  font-family: var(--font-mono);
  font-size: 24px;
  letter-spacing: 0.18em;
  font-weight: 500;
  color: var(--ink-3);
}
.stage.active .stage-tag {
  font-weight: 600;
  color: var(--brand-git);
}
.stage-name {
  font-family: var(--font-sans);
  font-size: 38px;
  font-weight: 900;
  color: var(--ink);
}
.stage-desc {
  font-family: var(--font-sans);
  font-size: 26px;
  line-height: 1.7;
  color: var(--ink-2);
}
</style>
