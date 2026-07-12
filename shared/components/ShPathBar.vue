<script setup lang="ts">
withDefaults(defineProps<{ segments?: string[] }>(), { segments: () => [] })
</script>

<template>
  <div class="path-bar">
    <template v-for="(s, i) in segments" :key="i">
      <span v-if="i > 0" class="sep">›</span>
      <span :class="['seg', { current: i === segments.length - 1 }]">{{ s }}</span>
    </template>
  </div>
</template>

<style scoped>
.path-bar {
  display: flex;
  align-items: center;
  gap: 14px;
}
.sep {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-4);
}
.seg {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-2);
  background: var(--panel);
  padding: 6px 16px;
}
.seg.current {
  font-weight: 600;
  color: var(--brand-git);
  background: var(--brand-git-tint);
}
</style>
