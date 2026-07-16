<script setup lang="ts">
import { computed, ref } from 'vue'

type SyncCommit = { node?: 'head' | 'brand' | 'gray' | 'faint' | 'ghost'; hash?: string; hashTone?: 'deep' | 'dim' }
/* pending: true ＝整條淡色虛線、無節點（軌已知但還沒有任何 ref）；語意見 GitSyncLanes。 */
type SyncLane = { label?: string; tone?: 'brand' | 'muted'; pending?: boolean; commits?: SyncCommit[] }
type Transfer = { label?: string; slots?: number[]; dir?: 'down' | 'up' }
type TermLine = { text?: string; kind?: 'cmd' | 'comment' | 'out' | 'dim' | 'note' | 'warn' }

const props = withDefaults(
  defineProps<{
    heading?: string
    command?: string
    /* 「指令跑之前」的狀態（無 laneToggle 時就是唯一狀態）。 */
    lanes?: SyncLane[]
    transfers?: Transfer[]
    meta?: string
    /* 「指令跑之後」的狀態——**整份重寫，不是差異**。給了 laneToggle 才會被用到；
     * 各自省略時沿用「之前」那份（如 p154 的遠端軌前後不變，就不必重寫 transfers）。
     * 注意 `transfersOn: []` 與「省略」不同義：前者＝揭示後箭頭消失（p155），後者＝不變。 */
    lanesOn?: SyncLane[]
    transfersOn?: Transfer[]
    metaOn?: string
    terminal?: TermLine[]
    /* 給了才長出面板右下角的 toggle 按鈕（機制同 git-files 的 statusToggle）：預設**未揭示**
     * ＝指令還沒跑，按下切到 *On 那份，再按一次切回。用途＝台上現場演示「跑這行指令之前／
     * 之後」——靜態圖只畫得出結果，畫不出「這個東西是被那行指令生出來的」。
     * 預設未揭示＝對齊 git-files：兩者的預設都是「指令跑之前」，按鈕往「之後」走。
     * 兩個 label 皆為當下狀態要顯示的字（labelOn 省略時沿用 label）。 */
    laneToggle?: { label: string; labelOn?: string }
  }>(),
  { lanes: () => [], transfers: () => [] },
)

const PANEL_LABEL = 'SYNC STATUS'

/* **前後兩態各寫一份、整份替換**，而不是在 lane／transfer 上掛差異旗標。
 * 理由＝旗標不收斂：W1【13】三頁各自要改的東西全不一樣——p153 是「軌的存在與否」、
 * p154 是「標籤換值」、p155 是「ghost 變實心＋軌色點亮＋箭頭消失」——照差異走的話每頁都得
 * 長一個新旗標（實際長到 toggle／labelOn 兩個，p155 還要再三個），且 p155 的箭頭方向與
 * 「藏軌時連帶收箭頭」那條既有邏輯**相反**。整份替換零新機制、任何變化都表達得出來，代價
 * 只是資料重寫一次——而 frontmatter 讀起來反而直接看得到兩態，不必推旗標怎麼交互。 */
const revealed = ref(false)
const shownLanes = computed(() => (revealed.value && props.lanesOn ? props.lanesOn : props.lanes))
const shownTransfers = computed(() => (revealed.value && props.transfersOn ? props.transfersOn : props.transfers))
const shownMeta = computed(() => (revealed.value && props.metaOn != null ? props.metaOn : props.meta))
</script>

<template>
  <div class="slidev-layout git-push">
    <PageNo />
    <div class="header-row">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="command">{{ command }}</span>
    </div>
    <div class="body">
      <div class="panel">
        <div class="panel-head">
          <span class="panel-label">{{ PANEL_LABEL }}</span>
          <span class="panel-meta">{{ shownMeta }}</span>
        </div>
        <GitSyncLanes :lanes="shownLanes" :transfers="shownTransfers" fill />
        <PanelToggle v-if="laneToggle" v-model="revealed" :label="laneToggle.label" :label-on="laneToggle.labelOn" />
      </div>
      <GitTerminal :lines="terminal" />
    </div>
  </div>
</template>

<!-- git-03（SYNC STATUS 雙軌同步圖）的 git push 情境版：本地 commit 推上遠端。取 git-03
     而非 git-01 為底的判準同 git-files——「這頁有沒有線圖可畫」：push 的重點是本地與遠端
     兩條軌的落差，git-01 的單軌 COMMIT GRAPH 講不出「遠端還沒有」（原 p185 那個面板就是
     空的）。名字刻意不叫 git-06——數字＝設計稿 template id（DECISIONS「視覺線」隨行約定），
     設計稿只有 git-01～05；非數字名即標示「此張非交接件」。結構與數值逐項對齊 git-03。 -->
<style scoped>
.git-push {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 48px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.command {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-git);
}
.body {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
.panel {
  width: 1000px;
  flex-shrink: 0;
  border: 2px solid var(--line);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 36px;
  border-bottom: 2px solid var(--line);
}
.panel-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: var(--ink-3);
}
/* meta 為品牌色粗體（↑ ahead 2），與 git-01 的中性 meta 不同 */
.panel-meta {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
</style>
