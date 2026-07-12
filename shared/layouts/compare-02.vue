<script setup lang="ts">
withDefaults(
  defineProps<{
    heading?: string
    oldTag?: string
    oldSteps?: string[]
    newTag?: string
    newSteps?: string[]
  }>(),
  { oldSteps: () => [], newSteps: () => [] },
)

const ARROW = '→'
</script>

<template>
  <div class="slidev-layout compare-02">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="heading-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="flows">
      <div class="flow old">
        <span class="flow-tag">{{ oldTag }}</span>
        <div class="chain">
          <template v-for="(s, i) in oldSteps" :key="i">
            <span v-if="i > 0" class="chain-arrow">{{ ARROW }}</span>
            <span class="step"><MdInline :text="s" /></span>
          </template>
        </div>
      </div>
      <div class="flow new">
        <span class="flow-tag">{{ newTag }}</span>
        <div class="chain">
          <template v-for="(s, i) in newSteps" :key="i">
            <span v-if="i > 0" class="chain-arrow">{{ ARROW }}</span>
            <span class="step"><MdInline :text="s" /></span>
          </template>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.compare-02 {
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
.flows {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
}
.flow {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.flow-tag {
  font-family: var(--font-mono);
  font-size: 24px;
  letter-spacing: 0.18em;
}
.old .flow-tag {
  font-weight: 500;
  color: var(--ink-3);
}
.new .flow-tag {
  font-weight: 600;
  color: var(--brand-git);
}
.chain {
  display: flex;
  align-items: center;
  gap: 24px;
}
.old .chain {
  flex-wrap: wrap;
}
.chain-arrow {
  font-family: var(--font-mono);
  font-size: 30px;
  color: var(--ink-3);
}
.step {
  font-family: var(--font-sans);
  font-size: 28px;
  padding: 20px 32px;
  white-space: nowrap;
}
.old .step {
  color: var(--ink-2);
  border: 1px solid var(--line-2);
}
.new .step {
  font-weight: 700;
  color: var(--ink);
  border: 3px solid var(--brand-git);
}
</style>
