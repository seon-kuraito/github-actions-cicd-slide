<script setup lang="ts">
import { computed } from 'vue'

interface ShTreeNode {
  name: string
  kind?: 'dir' | 'file'
  children?: ShTreeNode[]
  highlight?: boolean
  dashed?: boolean
  badge?: string
  tag?: string
  label?: string
  chip?: string
}

const props = withDefaults(
  defineProps<{
    nodes?: ShTreeNode[]
    rowFont?: number
    rowPadY?: number
    indentBase?: number
    indentStep?: number
  }>(),
  { nodes: () => [], rowFont: 27, rowPadY: 15, indentBase: 44, indentStep: 48 },
)

const rows = computed(() => {
  const out: { node: ShTreeNode; depth: number }[] = []
  const walk = (nodes: ShTreeNode[], depth: number) => {
    for (const n of nodes) {
      out.push({ node: n, depth })
      if (n.children) walk(n.children, depth + 1)
    }
  }
  walk(props.nodes, 0)
  return out
})

const isDir = (n: ShTreeNode) => (n.kind ? n.kind === 'dir' : n.name.endsWith('/'))
</script>

<template>
  <div class="file-tree" :style="{ '--row-font': `${rowFont}px`, '--row-pad-y': `${rowPadY}px` }">
    <div
      v-for="(r, i) in rows"
      :key="i"
      :class="['tree-row', { 'is-hl': r.node.highlight }]"
      :style="{ '--indent': `${indentBase + r.depth * indentStep}px` }"
    >
      <svg class="tree-icon" width="28" height="28" viewBox="0 0 28 28">
        <path
          v-if="isDir(r.node)"
          d="M 3 8 L 11 8 L 13.5 11 L 25 11 L 25 22 L 3 22 Z"
          fill="none"
          :stroke="r.node.highlight || r.node.dashed ? 'var(--brand-git)' : 'var(--ink-3)'"
          :stroke-width="r.node.highlight || r.node.dashed ? 2.4 : 2"
          :stroke-dasharray="r.node.dashed ? '5 4' : undefined"
          stroke-linejoin="round"
        ></path>
        <template v-else>
          <path d="M 7 4 L 17 4 L 22 9 L 22 24 L 7 24 Z" fill="none" stroke="var(--ink-4)" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M 17 4 L 17 9 L 22 9" fill="none" stroke="var(--ink-4)" stroke-width="2" stroke-linejoin="round"></path>
        </template>
      </svg>
      <span :class="['node-name', { 'is-bold': r.node.highlight || r.node.dashed, 'is-new': r.node.dashed }]">{{ r.node.name }}</span>
      <span v-if="r.node.badge" class="node-badge">{{ r.node.badge }}</span>
      <span v-else-if="r.node.tag" class="node-tag">{{ r.node.tag }}</span>
      <template v-else-if="r.node.label || r.node.chip">
        <span v-if="r.node.label" :class="['node-label', { 'is-hl': r.node.highlight }]">{{ r.node.label }}</span>
        <span v-if="r.node.chip" :class="['node-chip', { 'is-hl': r.node.highlight, 'is-alone': !r.node.label }]">{{ r.node.chip }}</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.file-tree {
  display: flex;
  flex-direction: column;
}
.tree-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: var(--row-pad-y) 44px var(--row-pad-y) var(--indent);
}
.tree-row.is-hl {
  background: var(--brand-git-tint);
}
.tree-icon {
  flex-shrink: 0;
}
.node-name {
  font-family: var(--font-mono);
  font-size: var(--row-font);
  color: var(--ink);
}
.node-name.is-bold {
  font-weight: 700;
}
.node-name.is-new {
  color: var(--brand-git);
}
.node-badge {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  background: var(--brand-git);
  padding: 5px 14px;
}
.node-tag {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 20px;
  color: var(--ink-3);
  border: 2px solid var(--line-2);
  padding: 5px 14px;
}
.node-label {
  margin-left: auto;
  font-family: var(--font-sans);
  font-size: 22px;
  color: var(--ink-3);
}
.node-label.is-hl {
  font-weight: 600;
  color: var(--brand-git);
}
.node-chip {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 600;
  color: var(--paper);
  background: var(--ink);
  padding: 6px 18px;
}
.node-chip.is-hl {
  font-weight: 700;
  color: #ffffff;
  background: var(--brand-git);
}
.node-chip.is-alone {
  margin-left: auto;
}
</style>
