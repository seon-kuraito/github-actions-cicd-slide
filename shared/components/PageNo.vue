<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps<{ color?: string }>()

const { $page, $frontmatter } = useSlideContext()

const text = computed(() => {
  const explicit = ($frontmatter as Record<string, unknown>)?.pageNo
  const n = explicit != null ? String(explicit) : String($page.value)
  return n.padStart(2, '0')
})
</script>

<template>
  <span class="page-no" :style="color ? { color } : undefined">{{ text }}</span>
</template>
