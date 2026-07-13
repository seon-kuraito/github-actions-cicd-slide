<script setup lang="ts">
import { computed } from 'vue'

type GraphTag = { text: string; kind?: 'head' | 'brand' | 'muted' | 'deep' | 'conflict' }
type GraphNode = 'head' | 'brand' | 'gray' | 'faint' | 'deep' | 'pending'
type GraphCommit = {
  lane?: number
  node?: GraphNode
  tags?: GraphTag[]
  msg?: string
  bold?: boolean
  muted?: boolean
  hash?: string
  hashTone?: 'brand' | 'deep' | 'dim' | 'faint'
  bg?: 'tint'
}
type GraphEdge = { from: number; to: number; tone?: 'brand' | 'gray' | 'deep' | 'faint'; dashed?: boolean }
type GraphArc = { from: number; to: number }

const props = withDefaults(
  defineProps<{
    commits?: GraphCommit[]
    edges?: GraphEdge[]
    arcs?: GraphArc[]
  }>(),
  { commits: () => [], edges: () => [], arcs: () => [] },
)

const ROW = 96
const PAD_TOP = 40
const LANE_X = [52, 104]

const svgH = computed(() => PAD_TOP + ROW * props.commits.length + 10)
const nodeY = (i: number) => PAD_TOP + ROW * i + ROW / 2
const laneX = (i: number) => LANE_X[props.commits[i]?.lane ?? 0] ?? LANE_X[0]

// 色彩走 token（值＝原 hex，淺色不變）；品牌色跨模式恆定，中性色（gray/faint）深色隨頁翻轉。
const EDGE_COLOR = { brand: 'var(--brand-git)', gray: 'var(--ink-4)', deep: 'var(--brand-git-deep)', faint: 'var(--line-2)' } as const
const NODE_STROKE: Record<GraphNode, string> = {
  head: 'var(--brand-git)',
  brand: 'var(--brand-git)',
  gray: 'var(--ink-3)',
  faint: 'var(--line-2)',
  deep: 'var(--brand-git-deep)',
  pending: 'var(--brand-git-deep)',
}

function edgePath(e: GraphEdge): string {
  const x1 = laneX(e.from)
  const y1 = nodeY(e.from)
  const x2 = laneX(e.to)
  const y2 = nodeY(e.to)
  if (x1 === x2) return `M ${x1} ${y1} L ${x2} ${y2}`
  const yTurn = y1 - ROW // 跨 lane：離開 from 的第一格完成轉彎，之後直行
  const curve = `M ${x1} ${y1} C ${x1} ${y1 - 54} ${x2} ${yTurn + 54} ${x2} ${yTurn}`
  return yTurn === y2 ? curve : `${curve} L ${x2} ${y2}`
}

function arcPath(a: GraphArc): string {
  const x = laneX(a.from) + 32
  const y1 = nodeY(a.from)
  const y2 = nodeY(a.to) + 4
  return `M ${x} ${y1} C ${x + 44} ${y1 + 12} ${x + 44} ${y2 - 16} ${x} ${y2}`
}
function arcHead(a: GraphArc): string {
  const x = laneX(a.from) + 28
  const y2 = nodeY(a.to)
  return `M ${x + 14} ${y2 - 12} L ${x} ${y2} L ${x + 16} ${y2 + 10}`
}
</script>

<template>
  <div class="git-graph">
    <svg class="graph-svg" width="150" :height="svgH" :viewBox="`0 0 150 ${svgH}`">
      <path
        v-for="(e, i) in edges"
        :key="`e${i}`"
        :d="edgePath(e)"
        fill="none"
        :stroke="EDGE_COLOR[e.tone ?? 'gray']"
        :stroke-width="e.tone === 'brand' && !e.dashed ? 5 : 4"
        :stroke-dasharray="e.dashed ? '6 8' : undefined"
      ></path>
      <template v-for="(a, i) in arcs" :key="`a${i}`">
        <path :d="arcPath(a)" fill="none" stroke="var(--brand-git-deep)" stroke-width="4" stroke-dasharray="6 8"></path>
        <path :d="arcHead(a)" fill="none" stroke="var(--brand-git-deep)" stroke-width="4" stroke-linejoin="round"></path>
      </template>
      <template v-for="(c, i) in commits" :key="`n${i}`">
        <template v-if="(c.node ?? 'gray') === 'head'">
          <circle :cx="laneX(i)" :cy="nodeY(i)" r="19" fill="none" stroke="var(--brand-git-soft)" stroke-width="4"></circle>
          <circle :cx="laneX(i)" :cy="nodeY(i)" r="12" fill="var(--brand-git)"></circle>
        </template>
        <circle
          v-else-if="c.node === 'pending'"
          :cx="laneX(i)"
          :cy="nodeY(i)"
          r="13"
          fill="var(--diff-del-bg)"
          stroke="var(--brand-git-deep)"
          stroke-width="4"
          stroke-dasharray="5 6"
        ></circle>
        <circle v-else :cx="laneX(i)" :cy="nodeY(i)" r="11" fill="var(--paper)" :stroke="NODE_STROKE[c.node ?? 'gray']" stroke-width="5"></circle>
      </template>
    </svg>
    <div v-for="(c, i) in commits" :key="i" :class="['commit-row', c.bg ? `bg-${c.bg}` : '']">
      <span v-for="(t, j) in c.tags ?? []" :key="j" :class="['commit-tag', `k-${t.kind ?? 'muted'}`]">{{ t.text }}</span>
      <span :class="['commit-msg', { 'is-bold': c.bold, 'is-muted': c.muted }]"><MdInline :text="c.msg" /></span>
      <span v-if="c.hash" :class="['commit-hash', `h-${c.hashTone ?? 'dim'}`]">{{ c.hash }}</span>
    </div>
  </div>
</template>

<style scoped>
.git-graph {
  flex: 1;
  position: relative;
  padding-top: 40px;
  box-sizing: border-box;
}
.graph-svg {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}
.commit-row {
  display: flex;
  align-items: center;
  gap: 18px;
  height: 96px;
  padding: 0 36px 0 150px;
}
.commit-row.bg-tint {
  background: var(--brand-git-tint);
}
.commit-tag {
  font-family: var(--font-mono);
  font-size: 19px;
}
.commit-tag.k-head {
  font-weight: 600;
  color: var(--paper);
  background: var(--ink);
  padding: 6px 14px;
}
.commit-tag.k-brand {
  font-weight: 600;
  color: var(--brand-git);
  border: 2px solid var(--brand-git);
  padding: 5px 14px;
}
.commit-tag.k-muted {
  font-weight: 500;
  color: var(--ink-3);
  border: 2px solid var(--line-2);
  padding: 5px 14px;
}
.commit-tag.k-deep {
  font-weight: 600;
  color: var(--brand-git-deep);
  border: 2px solid var(--brand-git-deep);
  padding: 5px 14px;
}
.commit-tag.k-conflict {
  font-weight: 600;
  /* 白字釘死（原 var(--paper) 於深色會翻成深色 → CONFLICT 讀不到）。 */
  color: #FFFFFF;
  background: var(--brand-git-deep);
  padding: 6px 14px;
}
.commit-msg {
  font-family: var(--font-sans);
  font-size: 27px;
  color: var(--ink);
}
.commit-msg.is-bold {
  font-weight: 700;
}
.commit-msg.is-muted {
  color: var(--ink-3);
}
.commit-hash {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
}
.commit-hash.h-brand {
  color: var(--brand-git);
}
.commit-hash.h-deep {
  color: var(--brand-git-deep);
}
.commit-hash.h-dim {
  color: var(--ink-3);
}
.commit-hash.h-faint {
  color: var(--ink-4);
}
</style>
