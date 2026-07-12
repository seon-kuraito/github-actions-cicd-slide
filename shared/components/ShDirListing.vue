<script setup lang="ts">
interface ShDirEntry {
  name: string
  kind?: 'dir' | 'file'
  meta?: string
  tag?: string
  hidden?: boolean
}

withDefaults(defineProps<{ entries?: ShDirEntry[] }>(), { entries: () => [] })

const isDir = (e: ShDirEntry) => (e.kind ? e.kind === 'dir' : e.name.endsWith('/'))
const isHidden = (e: ShDirEntry) => e.hidden ?? e.name.startsWith('.')
</script>

<template>
  <div class="dir-listing">
    <div v-for="(e, i) in entries" :key="i" class="entry">
      <svg class="entry-icon" width="28" height="28" viewBox="0 0 28 28">
        <path
          v-if="isDir(e)"
          d="M 3 8 L 11 8 L 13.5 11 L 25 11 L 25 22 L 3 22 Z"
          fill="none"
          :stroke="isHidden(e) ? '#D9D2CC' : '#8A837C'"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>
        <template v-else>
          <path d="M 7 4 L 17 4 L 22 9 L 22 24 L 7 24 Z" fill="none" :stroke="isHidden(e) ? '#D9D2CC' : '#B5AEA6'" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M 17 4 L 17 9 L 22 9" fill="none" :stroke="isHidden(e) ? '#D9D2CC' : '#B5AEA6'" stroke-width="2" stroke-linejoin="round"></path>
        </template>
      </svg>
      <span :class="['entry-name', { 'is-hidden': isHidden(e) }]">{{ e.name }}</span>
      <span v-if="e.tag" class="entry-tag">{{ e.tag }}</span>
      <span v-if="e.meta" :class="['entry-meta', { 'is-hidden': isHidden(e) }]">{{ e.meta }}</span>
    </div>
  </div>
</template>

<style scoped>
.dir-listing {
  display: flex;
  flex-direction: column;
}
.entry {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 22px 44px;
}
.entry:not(:last-child) {
  border-bottom: 1px solid var(--line);
}
.entry-icon {
  flex-shrink: 0;
}
.entry-name {
  font-family: var(--font-mono);
  font-size: 27px;
  color: var(--ink);
}
.entry-name.is-hidden {
  color: var(--ink-4);
}
.entry-tag {
  font-family: var(--font-mono);
  font-size: 18px;
  color: var(--ink-3);
  border: 1px solid var(--line-2);
  padding: 4px 12px;
}
.entry-meta {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 21px;
  color: var(--ink-3);
}
.entry-meta.is-hidden {
  color: var(--ink-4);
}
</style>
