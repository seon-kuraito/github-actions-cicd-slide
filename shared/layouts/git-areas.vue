<script setup lang="ts">
import { computed, ref } from 'vue'

type AreaItem = {
  flag?: string
  flagTone?: 'deep' | 'ok' | 'brand'
  text?: string
  tone?: 'default' | 'muted' | 'dim'
  sans?: boolean
  bold?: boolean
  indent?: boolean
}
type Area = { name?: string; state?: 'dashed' | 'active' | 'solid'; items?: AreaItem[] }
/* back＝箭頭反指（逆向操作，如 `git restore --staged`）；hidden＝該格不畫箭頭（例：restore 頁
 * 與 commit 無關）。**「沒給 arrows」≠「hidden」**——沒給是畫無標籤灰箭頭（p88 靠這個）。
 * 細節見 GitAreaFlow。 */
type Arrow = { label?: string; active?: boolean; back?: boolean; hidden?: boolean }
type TermLine = { text?: string; kind?: 'cmd' | 'comment' | 'out' | 'dim' | 'note' | 'warn' }

const props = withDefaults(
  defineProps<{
    heading?: string
    command?: string
    /* 「指令跑之前」的狀態（無 areaToggle 時就是唯一狀態）。 */
    meta?: string
    areas?: Area[]
    arrows?: Arrow[]
    /* 「指令跑之後」的狀態——**整份重寫，不是差異**（理由同 git-push：三層的變化每頁不同，
     * 旗標不收斂）。給了 areaToggle 才會被用到；各自省略時沿用「之前」那份。 */
    areasOn?: Area[]
    arrowsOn?: Arrow[]
    metaOn?: string
    terminal?: TermLine[]
    /* 給了才長出面板右下角的 toggle 按鈕（機制／預設同 git-push 的 laneToggle）：預設**未揭示**
     * ＝指令還沒跑，按下切到 *On 那份，再按一次切回。用途＝台上現場演示「跑這行 git add 之前／
     * 之後」——例如 `git add .` 把 index.html 與 .env 一起掃進暫存區，靜態圖畫不出「這是被那行
     * 指令一次搬進去的」。兩個 label 皆為當下狀態要顯示的字（labelOn 省略時沿用 label）。 */
    areaToggle?: { label: string; labelOn?: string }
  }>(),
  { areas: () => [], arrows: () => [] },
)

const PANEL_LABEL = 'FILE FLOW'

const revealed = ref(false)
const shownAreas = computed(() => (revealed.value && props.areasOn ? props.areasOn : props.areas))
const shownArrows = computed(() => (revealed.value && props.arrowsOn ? props.arrowsOn : props.arrows))
const shownMeta = computed(() => (revealed.value && props.metaOn != null ? props.metaOn : props.meta))
</script>

<template>
  <div class="slidev-layout git-areas">
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
        <GitAreaFlow :class="{ 'has-toggle': areaToggle }" :areas="shownAreas" :arrows="shownArrows" />
        <PanelToggle v-if="areaToggle" v-model="revealed" :label="areaToggle.label" :label-on="areaToggle.labelOn" />
      </div>
      <GitTerminal :lines="terminal" />
    </div>
  </div>
</template>

<!-- git-02（FILE FLOW 三區流向圖）的 W1【07】情境版：**同一張三層圖連演三頁**——p88 立模型
     （三層架構：檔案的三個位置）→ p90 `git add`（add 箭頭亮）→ p91 `git commit`（commit
     箭頭亮）。一頁改一件事，圖不換、只換哪一區／哪一支箭頭活著；【08】的 `git restore
     --staged`（反向箭頭）亦適用。
     **為什麼不直接用 git-02**：git-02 是設計稿基底、進 templates（數字尾＝基底詞彙表，見
     DECISIONS「情境版型落地」），本張是逐情境客製的起點，之後 W1 要動它不該回頭改基底。
     **名字為什麼不叫 `git-flow`**：面板標籤是 FILE FLOW，照 `shell-dir`（面板 WORKING
     DIRECTORY）的前例本該取名 `git-flow`——但 **git-flow 在 Git 世界是 Vincent Driessen
     的分支模型**，在一門 Git 課裡撞這個名字，學生一 google 就走到完全不同的東西。改對齊
     `areas` prop：**git-areas 涵蓋 add／commit／restore 而不偏袒任何一個**（教訓來自
     `shell-mkdir` → `shell-dir`：用單一指令命名，多接一頁名字就開始說謊）。
     名字刻意不叫 git-06——數字＝設計稿 template id（DECISIONS「視覺線」隨行約定），設計稿
     只有 git-01～05；非數字名即標示「情境客製、不進 templates」。結構與數值逐項對齊 git-02。 -->
<style scoped>
.git-areas {
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
.panel-meta {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink-3);
}
/* 有 toggle 鈕的頁（p97）才把三區底部讓出約一個按鈕高度：git-areas 的三區 align-items:
 * stretch 撐滿整個面板高，PanelToggle（絕對定位、右下 44px）會壓到最右 REPOSITORY 框的下緣
 * ——git-push 的雙軌是垂直置中、下方本就留白，git-areas 沒有。只在有鈕時縮（無鈕的 p88/90/91/98
 * 維持滿高），故走條件 class；用 :deep 穿進 GitAreaFlow 的 .area-flow，改的是「本頁這一份」的
 * 內距，不動元件本體、也不影響 templates 的 git-02。 */
.panel :deep(.area-flow.has-toggle) {
  padding-bottom: 112px;
}
</style>
