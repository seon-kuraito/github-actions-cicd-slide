<script setup lang="ts">
defineProps<{ week: string | number }>()
</script>

<template>
  <span class="shared-week-badge">Week {{ week }}</span>
</template>

<style scoped>
.shared-week-badge {
  display: inline-block;
  padding: 0.2em 0.6em;
  border-radius: 0.4em;
  font-size: 0.8em;
  background: var(--slidev-theme-primary, #42b883);
  color: #fff;
}
</style>
