<script setup lang="ts">
withDefaults(
  defineProps<{
    status?: 'ok' | 'err' | 'running' | 'skip' | 'queued'
    size?: number
  }>(),
  { status: 'ok', size: 26 },
)
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 26 26">
    <!-- 語意色（ok/err）與品牌色（running）跨模式恆定；圓圈上的 ✓/✕ 釘白；skip/queued 灰圈走 --line-2 隨頁翻。 -->
    <template v-if="status === 'ok'">
      <circle cx="13" cy="13" r="12" fill="var(--ok)"></circle>
      <path d="M 7 13 L 11.5 17.5 L 19 9" fill="none" stroke="#FFFFFF" stroke-width="3"></path>
    </template>
    <template v-else-if="status === 'err'">
      <circle cx="13" cy="13" r="12" fill="var(--err)"></circle>
      <path d="M 8 8 L 18 18 M 18 8 L 8 18" fill="none" stroke="#FFFFFF" stroke-width="3"></path>
    </template>
    <template v-else-if="status === 'running'">
      <circle cx="13" cy="13" r="11" fill="none" stroke="var(--brand-github)" stroke-width="3.5"></circle>
      <circle cx="13" cy="13" r="4.5" fill="var(--brand-github)"></circle>
    </template>
    <template v-else-if="status === 'skip'">
      <circle cx="13" cy="13" r="11" fill="none" stroke="var(--line-2)" stroke-width="3.5"></circle>
      <path d="M 7 13 L 19 13" fill="none" stroke="var(--line-2)" stroke-width="3.5"></path>
    </template>
    <template v-else>
      <circle cx="13" cy="13" r="11" fill="none" stroke="var(--line-2)" stroke-width="3.5"></circle>
    </template>
  </svg>
</template>
