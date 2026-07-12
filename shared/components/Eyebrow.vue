<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps<{
  module?: string
  mainColor?: string
  subColor?: string
}>()

const { $frontmatter, $slidev } = useSlideContext()

const name = computed(
  () =>
    props.module ??
    ($frontmatter as Record<string, unknown>)?.module as string | undefined ??
    (($slidev?.configs ?? {}) as Record<string, unknown>).module as string | undefined ??
    'ONBOARDING',
)
</script>

<template>
  <span class="eyebrow" :style="mainColor ? { color: mainColor } : undefined">
    <span class="eyebrow-label">MODULE</span>
    <span class="eyebrow-dot"></span>
    <span class="eyebrow-sub" :style="subColor ? { color: subColor } : undefined">{{ name }}</span>
  </span>
</template>
