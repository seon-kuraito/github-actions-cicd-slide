<script setup lang="ts">
type SyncCommit = { node?: 'head' | 'brand' | 'gray' | 'faint' | 'ghost'; hash?: string; hashTone?: 'deep' | 'dim' }
type SyncLane = { label?: string; tone?: 'brand' | 'muted'; sharedUntil?: number; commits?: SyncCommit[] }
type Transfer = { label?: string; slots?: number[]; dir?: 'down' | 'up' }

withDefaults(defineProps<{ lanes?: SyncLane[]; transfers?: Transfer[] }>(), { lanes: () => [], transfers: () => [] })

const LANE_Y = [150, 384]
const X0 = 180
const DX = 210
const slotX = (i: number) => X0 + DX * i

// 色彩走 token（值＝原 hex，亮色不變）；品牌色恆定，中性色深色隨頁翻轉。
const LANE_TONE = {
  brand: { line: 'var(--brand-git)', label: 'var(--brand-git)' },
  muted: { line: 'var(--ink-4)', label: 'var(--ink-3)' },
} as const
const NODE_STROKE = { head: 'var(--brand-git)', brand: 'var(--brand-git)', gray: 'var(--ink-3)', faint: 'var(--line-2)', ghost: 'var(--brand-git)' } as const
const HASH_FILL = { deep: 'var(--brand-git-deep)', dim: 'var(--ink-3)' } as const

function laneY(i: number): number {
  return LANE_Y[i] ?? LANE_Y[0]
}

// lane 主線：
//  · 有 ghost → 實線到最後一個實心 commit、之後淡色虛線延伸（遠端待補）。
//  · 無 ghost → 線收在最後一個 commit（不超出節點）；若給 sharedUntil，前段（共用歷史）
//    走 muted 灰、後段（領先 commit）走 lane tone。
function laneSegments(lane: SyncLane, li: number) {
  const y = laneY(li)
  const tone = LANE_TONE[lane.tone ?? 'brand']
  const cs = lane.commits ?? []
  const g = cs.findIndex((c) => c.node === 'ghost')
  if (g >= 0) {
    const solidEnd = g === 0 ? 80 : slotX(g - 1)
    return [
      { d: `M 80 ${y} L ${solidEnd} ${y}`, stroke: tone.line, w: 5, dash: undefined as string | undefined },
      { d: `M ${solidEnd} ${y} L ${slotX(cs.length - 1)} ${y}`, stroke: 'var(--line-2)', w: 4, dash: '4 10' },
    ]
  }
  const end = slotX(cs.length - 1)
  const s = lane.sharedUntil
  if (s != null && s >= 0) {
    const split = slotX(s)
    return [
      { d: `M 80 ${y} L ${split} ${y}`, stroke: LANE_TONE.muted.line, w: 5, dash: undefined as string | undefined },
      { d: `M ${split} ${y} L ${end} ${y}`, stroke: tone.line, w: 5, dash: undefined as string | undefined },
    ]
  }
  return [{ d: `M 80 ${y} L ${end} ${y}`, stroke: tone.line, w: 5, dash: undefined as string | undefined }]
}

function transferGeom(t: Transfer) {
  if ((t.dir ?? 'down') === 'down')
    return { y1: LANE_Y[0] + 86, y2: LANE_Y[1] - 54, tipY: LANE_Y[1] - 50, backY: LANE_Y[1] - 66, labelY: LANE_Y[0] + 142 }
  return { y1: LANE_Y[1] - 86, y2: LANE_Y[0] + 54, tipY: LANE_Y[0] + 50, backY: LANE_Y[0] + 66, labelY: LANE_Y[1] - 142 }
}
function transferLabelX(t: Transfer): number {
  const xs = (t.slots ?? []).map(slotX)
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0
}
</script>

<template>
  <div class="sync-lanes">
    <svg class="lanes-svg" width="920" height="480" viewBox="0 0 920 480">
      <template v-for="(lane, li) in lanes" :key="li">
        <text class="lane-label" x="80" :y="laneY(li) - 54" text-anchor="start" :fill="LANE_TONE[lane.tone ?? 'brand'].label">
          {{ lane.label }}
        </text>
        <path
          v-for="(s, si) in laneSegments(lane, li)"
          :key="`s${si}`"
          :d="s.d"
          fill="none"
          :stroke="s.stroke"
          :stroke-width="s.w"
          :stroke-dasharray="s.dash"
        ></path>
        <template v-for="(c, ci) in lane.commits ?? []" :key="`c${ci}`">
          <template v-if="c.node === 'head'">
            <circle :cx="slotX(ci)" :cy="laneY(li)" r="19" fill="none" stroke="var(--brand-git-soft)" stroke-width="4"></circle>
            <circle :cx="slotX(ci)" :cy="laneY(li)" r="12" fill="var(--brand-git)"></circle>
          </template>
          <circle
            v-else-if="c.node === 'ghost'"
            :cx="slotX(ci)"
            :cy="laneY(li)"
            r="13"
            fill="var(--brand-git-tint)"
            stroke="var(--brand-git)"
            stroke-width="4"
            stroke-dasharray="5 6"
          ></circle>
          <circle v-else :cx="slotX(ci)" :cy="laneY(li)" r="11" fill="var(--paper)" :stroke="NODE_STROKE[c.node ?? 'gray']" stroke-width="5"></circle>
          <text
            v-if="c.hash"
            :class="['slot-hash', { 'is-deep': c.hashTone === 'deep' }]"
            :x="slotX(ci)"
            :y="laneY(li) + 56"
            text-anchor="middle"
            :fill="HASH_FILL[c.hashTone ?? 'dim']"
          >
            {{ c.hash }}
          </text>
        </template>
      </template>
      <template v-for="(t, ti) in transfers" :key="`t${ti}`">
        <template v-for="s in t.slots ?? []" :key="s">
          <path
            :d="`M ${slotX(s)} ${transferGeom(t).y1} L ${slotX(s)} ${transferGeom(t).y2}`"
            fill="none"
            stroke="var(--brand-git)"
            stroke-width="4"
            stroke-dasharray="8 8"
          ></path>
          <path
            :d="`M ${slotX(s) - 12} ${transferGeom(t).backY} L ${slotX(s)} ${transferGeom(t).tipY} L ${slotX(s) + 12} ${transferGeom(t).backY}`"
            fill="none"
            stroke="var(--brand-git)"
            stroke-width="4"
            stroke-linejoin="round"
          ></path>
        </template>
        <text class="transfer-label" :x="transferLabelX(t)" :y="transferGeom(t).labelY" text-anchor="middle" fill="var(--brand-git)">
          {{ t.label }}
        </text>
      </template>
    </svg>
  </div>
</template>

<style scoped>
.sync-lanes {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lanes-svg {
  overflow: visible;
}
/* SVG 文字的字級只能走 style/class，不可寫成 presentation attribute（attributify 誤傷）。 */
.lane-label {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 600;
}
.slot-hash {
  font-family: var(--font-mono);
  font-size: 21px;
}
.slot-hash.is-deep {
  font-weight: 600;
}
.transfer-label {
  font-family: var(--font-mono);
  font-size: 21px;
  font-weight: 600;
}
</style>
