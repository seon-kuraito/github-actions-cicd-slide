<script setup lang="ts">
import { computed } from 'vue'

type DagStatus = 'ok' | 'err' | 'running' | 'skip' | 'queued'
interface DagJob {
  name: string
  status?: DagStatus
}

const props = withDefaults(
  defineProps<{
    trigger?: string
    stages?: DagJob[][]
    parallelLabel?: string
  }>(),
  { stages: () => [] },
)

// 版面常數（templates.html #github-01 SVG 數值）
const CY = 230
const TRIG = { x: 30, w: 170, h: 64 }
const NODE_W = 210
const LAST_W = 180
const NODE_H = 64
const ROW_GAP = 156
const AREA_L = 256
const AREA_R = 968

// 色彩走 token（值＝原 hex，淺色像素不變），深色由 html.dark 重映射自動翻轉。
// 品牌／語意色跨模式恆定；卡片底 var(--paper)、面板色 var(--panel)、線 var(--line-2)。
const NODE_STYLE: Record<DagStatus, { fill: string; stroke: string; text: string }> = {
  ok: { fill: 'var(--paper)', stroke: 'var(--line-2)', text: 'var(--ink)' },
  err: { fill: 'var(--diff-del-bg)', stroke: 'var(--err)', text: 'var(--err)' },
  running: { fill: 'var(--brand-github-tint)', stroke: 'var(--brand-github)', text: 'var(--brand-github)' },
  skip: { fill: 'var(--paper)', stroke: 'var(--line-2)', text: 'var(--ink-4)' },
  queued: { fill: 'var(--paper)', stroke: 'var(--line-2)', text: 'var(--ink-4)' },
}

interface DagNode {
  name: string
  status: DagStatus
  x: number
  y: number
  w: number
  cy: number
  ix: number
}

const cols = computed<DagNode[][]>(() => {
  const n = props.stages.length
  if (!n) return []
  const widths = props.stages.map((_, i) => (i === n - 1 ? LAST_W : NODE_W))
  const total = widths.reduce((a, b) => a + b, 0)
  const gap = n > 1 ? (AREA_R - AREA_L - total) / (n - 1) : 0
  let x = AREA_L
  return props.stages.map((jobs, i) => {
    const colX = x
    x += widths[i] + gap
    return jobs.map((job, k) => {
      const cy = CY + (k - (jobs.length - 1) / 2) * ROW_GAP
      return { name: job.name, status: job.status ?? 'ok', x: colX, y: cy - NODE_H / 2, w: widths[i], cy, ix: colX + 34 }
    })
  })
})

const nodes = computed(() => cols.value.flat())

const edges = computed(() => {
  const out: { d: string; stroke: string }[] = []
  const cs = cols.value
  if (!cs.length) return out
  const push = (x1: number, y1: number, x2: number, y2: number, toRunning: boolean) => {
    const mx = (x1 + x2) / 2
    out.push({
      d: y1 === y2 ? `M ${x1} ${y1} L ${x2} ${y2}` : `M ${x1} ${y1} C ${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`,
      stroke: toRunning ? 'var(--brand-github)' : 'var(--line-2)',
    })
  }
  if (props.trigger) for (const b of cs[0]) push(TRIG.x + TRIG.w, CY, b.x, b.cy, b.status === 'running')
  for (let i = 0; i < cs.length - 1; i++)
    for (const a of cs[i]) for (const b of cs[i + 1]) push(a.x + a.w, a.cy, b.x, b.cy, b.status === 'running')
  return out
})

const parallelAt = computed(() => {
  const col = cols.value.find((c) => c.length > 1) ?? cols.value[0]
  if (!col?.length) return null
  return { x: col[0].x + col[0].w / 2, y: Math.min(...col.map((n) => n.y)) - 22 }
})

const runningLabels = computed(() =>
  nodes.value.filter((n) => n.status === 'running').map((n) => ({ x: n.x + n.w / 2, y: n.y - 22 })),
)
</script>

<template>
  <svg width="996" height="460" viewBox="0 0 996 460">
    <path v-for="(e, i) in edges" :key="`e${i}`" :d="e.d" fill="none" :stroke="e.stroke" stroke-width="4"></path>
    <template v-if="trigger">
      <rect :x="TRIG.x" :y="CY - TRIG.h / 2" :width="TRIG.w" :height="TRIG.h" fill="var(--panel)" stroke="var(--line-2)" stroke-width="2"></rect>
      <text class="dag-label" :x="TRIG.x + TRIG.w / 2" :y="CY + 9" text-anchor="middle" fill="var(--ink-2)">{{ trigger }}</text>
    </template>
    <template v-for="n in nodes" :key="`${n.x}-${n.cy}`">
      <rect :x="n.x" :y="n.y" :width="n.w" :height="NODE_H" :fill="NODE_STYLE[n.status].fill" :stroke="NODE_STYLE[n.status].stroke" stroke-width="2"></rect>
      <template v-if="n.status === 'ok'">
        <circle :cx="n.ix" :cy="n.cy" r="13" fill="var(--ok)"></circle>
        <path :d="`M ${n.ix - 6} ${n.cy} L ${n.ix - 1} ${n.cy + 5} L ${n.ix + 7} ${n.cy - 5}`" fill="none" stroke="#FFFFFF" stroke-width="3"></path>
      </template>
      <template v-else-if="n.status === 'err'">
        <circle :cx="n.ix" :cy="n.cy" r="13" fill="var(--err)"></circle>
        <path :d="`M ${n.ix - 5} ${n.cy - 5} L ${n.ix + 5} ${n.cy + 5} M ${n.ix + 5} ${n.cy - 5} L ${n.ix - 5} ${n.cy + 5}`" fill="none" stroke="#FFFFFF" stroke-width="3"></path>
      </template>
      <template v-else-if="n.status === 'running'">
        <circle :cx="n.ix" :cy="n.cy" r="12" fill="none" stroke="var(--brand-github)" stroke-width="4"></circle>
        <circle :cx="n.ix" :cy="n.cy" r="5" fill="var(--brand-github)"></circle>
      </template>
      <template v-else>
        <circle :cx="n.ix" :cy="n.cy" r="12" fill="none" stroke="var(--line-2)" stroke-width="4"></circle>
        <path v-if="n.status === 'skip'" :d="`M ${n.ix - 6} ${n.cy} L ${n.ix + 6} ${n.cy}`" fill="none" stroke="var(--line-2)" stroke-width="4"></path>
      </template>
      <text
        :class="['dag-label', `st-${n.status}`]"
        :x="n.x + (n.status === 'running' ? 60 : 62)"
        :y="n.cy + 8"
        text-anchor="start"
        :fill="NODE_STYLE[n.status].text"
        >{{ n.name }}</text
      >
    </template>
    <text v-if="parallelLabel && parallelAt" class="dag-note" :x="parallelAt.x" :y="parallelAt.y" text-anchor="middle" fill="var(--ink-3)">{{ parallelLabel }}</text>
    <text v-for="(p, i) in runningLabels" :key="`r${i}`" class="dag-note" :x="p.x" :y="p.y" text-anchor="middle" fill="var(--brand-github)">running</text>
  </svg>
</template>

<style scoped>
/* SVG 文字的字級只能走 style/class，不可寫成 presentation attribute（attributify 誤傷）。 */
.dag-label {
  font-family: var(--font-mono);
  font-size: 22px;
}
.dag-label.st-err,
.dag-label.st-running {
  font-weight: 600;
}
.dag-note {
  font-family: var(--font-mono);
  font-size: 20px;
}
</style>
