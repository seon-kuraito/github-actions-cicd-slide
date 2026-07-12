<script setup lang="ts">
withDefaults(defineProps<{ label?: string; meta?: string; padY?: number }>(), { padY: 20 })
</script>

<template>
  <div class="sh-panel">
    <div class="head">
      <span class="label">{{ label }}</span>
      <span v-if="meta" class="meta">{{ meta }}</span>
    </div>
    <div class="body" :style="{ '--pad-y': `${padY}px` }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.sh-panel {
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 44px;
  border-bottom: 1px solid var(--line);
}
.label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
.meta {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--pad-y) 0;
}
</style>
