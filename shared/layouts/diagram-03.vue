<script setup lang="ts">
interface Layer {
  tag?: string
  name?: string
  desc?: string
  active?: boolean
}

withDefaults(
  defineProps<{
    heading?: string
    layers?: Layer[]
  }>(),
  { layers: () => [] },
)
</script>

<template>
  <div class="slidev-layout diagram-03">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="layers">
      <div v-for="(l, i) in layers" :key="i" class="layer" :class="{ active: l.active }">
        <div class="layer-card">
          <span class="layer-tag">{{ l.tag }}</span>
          <span class="layer-name"><MdInline :text="l.name" /></span>
        </div>
        <span class="layer-desc"><MdInline :text="l.desc" /></span>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.diagram-03 {
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
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.layers {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
}
.layer {
  display: flex;
  align-items: stretch;
  gap: 48px;
}
.layer-card {
  flex: 1;
  padding: 36px 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 32px;
  border: 2px solid var(--line-2);
  background: var(--panel);
}
.layer.active .layer-card {
  border: 3px solid var(--brand-git);
  background: none;
}
.layer-tag {
  font-family: var(--font-mono);
  font-size: 23px;
  letter-spacing: 0.16em;
  font-weight: 500;
  color: var(--ink-3);
}
.layer.active .layer-tag {
  font-weight: 600;
  color: var(--brand-git);
}
.layer-name {
  font-family: var(--font-sans);
  font-size: 34px;
  font-weight: 700;
  color: var(--ink-2);
}
.layer.active .layer-name {
  font-weight: 900;
  color: var(--ink);
}
.layer-desc {
  width: 420px;
  flex-shrink: 0;
  align-self: center;
  font-family: var(--font-sans);
  font-size: 25px;
  line-height: 1.7;
  color: var(--ink-3);
}
.layer.active .layer-desc {
  color: var(--ink-2);
}
</style>
