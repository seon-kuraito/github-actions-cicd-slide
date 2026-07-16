<script setup lang="ts">
import { computed } from 'vue'

type SyncCommit = { node?: 'head' | 'brand' | 'gray' | 'faint' | 'ghost'; hash?: string; hashTone?: 'deep' | 'dim' }
/* pending＝這條軌已知、但上面還沒有任何 ref。與 ghost 的差別是「有沒有那一顆」：
 * ghost ＝「這一顆即將到位」（畫虛線圓點），pending ＝「整條都還沒有東西」（無節點）。
 * labelTone＝**只給標籤文字用的色階**，省略時沿用 tone。用途＝軌亮起來、但標籤不跟著亮：
 * tone 原本同時綁線與標籤，而品牌色一上文字，頁面的藍就過量（W1 p155／p185 的 REMOTE 軌
 * 揭示後即如此——線與節點該亮，但 LOCAL／REMOTE 兩個標籤同時轉藍就太重）。 */
type SyncLane = {
  label?: string
  tone?: 'brand' | 'muted'
  labelTone?: 'brand' | 'muted'
  sharedUntil?: number
  pending?: boolean
  commits?: SyncCommit[]
}
type Transfer = {
  label?: string
  slots?: number[]
  dir?: 'down' | 'up'
  /* 標籤定位＝先選線條、再加偏移量。
   *  · labelAt：貼齊哪一支箭頭（值＝slots 裡的槽位號）。省略時退回「置中於各箭頭平均 x」
   *    ——設計稿的雙箭頭排法（slots:[2,3] → 705）靠這條，平均落在兩支之間的空隙、不撞。
   *  · labelDx／labelDy：自該線條起算的位移，未給為 0。
   * 為何需要 labelAt：單支（或奇數支）箭頭時平均正好等於某支箭頭的 x，文字會被箭頭穿過去
   * ——此時就明確選那條線、再推開，而不是靠隱式的碰撞偵測去猜。 */
  labelAt?: number
  labelDx?: number
  labelDy?: number
}

const props = withDefaults(
  defineProps<{
    lanes?: SyncLane[]
    transfers?: Transfer[]
    /* fill＝把主線拉滿整個 viewBox、並把 commit 群置中（預設 false＝設計稿的靠左槽位排法）。
     * 給資料稀疏的頁用：預設幾何假設「左邊共用歷史、右邊領先 commit」共約四格，撐得滿
     * 920 寬；首次 push（本地 1 顆／遠端全空）只用得到 slot 0，會整團擠在左緣、右側空
     * 700px，且 transfer 標籤（x＝slots 平均）會直接壓到 x=80 起算的 lane 標籤上。
     * 置中後 transfer 落在 460、遠離標籤區，兩個問題一起解。 */
    fill?: boolean
  }>(),
  { lanes: () => [], transfers: () => [], fill: false },
)

const LANE_Y = [150, 384]
const X0 = 180
const DX = 210
const X_START = 80
const X_END = 840
/* fill 時維持 DX 間距、整群置中；單顆即落在正中。非 fill 時完全走原式（git-03 不受影響）。 */
const slotCount = computed(() => Math.max(1, ...props.lanes.map((l) => l.commits?.length ?? 0)))
const slotX = (i: number) => {
  if (!props.fill) return X0 + DX * i
  const mid = (X_START + X_END) / 2
  return mid - ((slotCount.value - 1) * DX) / 2 + DX * i
}

// 色彩走 token（值＝原 hex，淺色不變）；品牌色恆定，中性色深色隨頁翻轉。
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
//  · pending → 整條淡色虛線、**無節點**（軌已知但還沒有任何 ref）。
//  · 有 ghost → 實線到最後一個實心 commit、之後淡色虛線延伸（遠端待補）。
//  · 無 ghost → 線收在最後一個 commit（不超出節點）；若給 sharedUntil，前段（共用歷史）
//    走 muted 灰、後段（領先 commit）走 lane tone。
function laneSegments(lane: SyncLane, li: number) {
  const y = laneY(li)
  const tone = LANE_TONE[lane.tone ?? 'brand']
  const cs = lane.commits ?? []
  /* pending 必須先於下面的分支：commits 空陣列會讓 ghost 的 findIndex 落空、掉進最後那條
   * 「無 ghost」的 return，畫成**實線**——而 pending 的語意正是「還沒有東西」，實線恰恰相反。
   * 實例：W1 p153 的 `git remote add` 跑完後，.git/config 只多了 remote.origin.url 與
   * remote.origin.fetch 兩行，refs/remotes/ 仍是空的（git branch -r 沒東西、rev-parse
   * origin/main 直接 fatal）——遠端追蹤分支要等 fetch／push 才生得出來。
   * 線一律拉到 X_END：軌道本身＝時間軸，「上面沒東西」不等於「軌道比較短」。 */
  if (lane.pending) {
    return [{ d: `M ${X_START} ${y} L ${X_END} ${y}`, stroke: 'var(--line-2)', w: 4, dash: '4 10' as string | undefined }]
  }
  const g = cs.findIndex((c) => c.node === 'ghost')
  /* fill 時線一律拉到 viewBox 右緣（軌道本身＝時間軸，不隨 commit 數收短）；
   * 非 fill 時維持原行為：線收在最後一個 commit、不超出節點。 */
  const end = props.fill ? X_END : slotX(cs.length - 1)
  if (g >= 0) {
    const solidEnd = g === 0 ? X_START : slotX(g - 1)
    return [
      { d: `M ${X_START} ${y} L ${solidEnd} ${y}`, stroke: tone.line, w: 5, dash: undefined as string | undefined },
      { d: `M ${solidEnd} ${y} L ${end} ${y}`, stroke: 'var(--line-2)', w: 4, dash: '4 10' },
    ]
  }
  const s = lane.sharedUntil
  if (s != null && s >= 0) {
    const split = slotX(s)
    return [
      { d: `M ${X_START} ${y} L ${split} ${y}`, stroke: LANE_TONE.muted.line, w: 5, dash: undefined as string | undefined },
      { d: `M ${split} ${y} L ${end} ${y}`, stroke: tone.line, w: 5, dash: undefined as string | undefined },
    ]
  }
  return [{ d: `M ${X_START} ${y} L ${end} ${y}`, stroke: tone.line, w: 5, dash: undefined as string | undefined }]
}

function transferGeom(t: Transfer) {
  if ((t.dir ?? 'down') === 'down')
    return { y1: LANE_Y[0] + 86, y2: LANE_Y[1] - 54, tipY: LANE_Y[1] - 50, backY: LANE_Y[1] - 66, labelY: LANE_Y[0] + 142 }
  return { y1: LANE_Y[1] - 86, y2: LANE_Y[0] + 54, tipY: LANE_Y[0] + 50, backY: LANE_Y[0] + 66, labelY: LANE_Y[1] - 142 }
}
/* 定位＝先選線條、再加偏移量（見 Transfer 的 labelAt／labelDx／labelDy）。
 * 有 labelAt → 錨在該支箭頭上、套位移、左對齊（位移把文字推離線條）。
 * 無 labelAt → 置中於各箭頭平均 x（設計稿雙箭頭排法），位移仍可疊加。 */
function transferLabelGeom(t: Transfer): { x: number; y: number; anchor: 'middle' | 'start' } {
  const baseY = transferGeom(t).labelY + (t.labelDy ?? 0)
  const dx = t.labelDx ?? 0
  if (t.labelAt != null) return { x: slotX(t.labelAt) + dx, y: baseY, anchor: 'start' }
  const xs = (t.slots ?? []).map(slotX)
  const mid = xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0
  return { x: mid + dx, y: baseY, anchor: 'middle' }
}
</script>

<template>
  <div class="sync-lanes">
    <svg class="lanes-svg" width="920" height="480" viewBox="0 0 920 480">
      <template v-for="(lane, li) in lanes" :key="li">
        <text class="lane-label" x="80" :y="laneY(li) - 54" text-anchor="start" :fill="LANE_TONE[lane.labelTone ?? lane.tone ?? 'brand'].label">
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
        <text
          class="transfer-label"
          :x="transferLabelGeom(t).x"
          :y="transferLabelGeom(t).y"
          :text-anchor="transferLabelGeom(t).anchor"
          fill="var(--brand-git)"
        >
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
