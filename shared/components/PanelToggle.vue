<script setup lang="ts">
/* 左側面板右下角的操作鈕：台上現場演示「這行指令跑之前／之後」。
 *
 * **本元件只負責 chrome（外觀、位置、狀態機），不負責語意**——切換的是什麼，由消費版型
 * 決定：git-files 切「檔案的 git 狀態」（染色消失＝commit 完成後 VS Code 檔案總管就不再
 * 標色）、git-push 切「整條軌的存在與否」（remote add 跑完前，本機不知道 origin 存在）。
 * 面板裡裝的東西各版型根本不同（GitGraph 的 commits／GhRunLog 的 steps／ShFileTree 的
 * tree／AiDiffPanel 的 diff……），沒有一個 toggle 語意能一體適用，故不強求。
 *
 * 用法＝v-model 交出狀態，版型自己拿去過濾／改寫資料：
 *   <PanelToggle v-model="revealed" :label="x.label" :label-on="x.labelOn" />
 *
 * **預設一律停在「之前」**（消費端的 ref 初值給 false）：兩個現有消費者皆然，按鈕往
 * 「之後」走、再按收回。慣例見 DECISIONS「面板 toggle 鈕」。 */
defineProps<{
  /* 當下狀態要顯示的字（不是「按了會怎樣」）。labelOn 省略時沿用 label。 */
  label: string
  labelOn?: string
}>()

const model = defineModel<boolean>({ default: false })
</script>

<template>
  <!-- .stop 是必要的、不是保險：Slidev 的滑鼠點擊會推進 clicks／翻頁，不擋掉就是
       「按一下按鈕順便跳下一頁」。 -->
  <button type="button" class="panel-toggle" @click.stop="model = !model">
    {{ model ? (labelOn ?? label) : label }}
  </button>
</template>

<style scoped>
/* **必須絕對定位**：左面板多為 flex column，按鈕留在流裡會吃掉高度——git-push 上就讓
 * GitSyncLanes 的 .sync-lanes（flex: 1 ＋ align-items: center）從 541.6 縮到 480、置中餘量
 * 歸零，整組軌道往上跳 30.8px（SVG 本身沒變形，恆 480——症狀是位移不是壓縮，比對相鄰頁
 * 才看得出來）。這顆鈕恆為浮在面板右下角的 chrome，不參與內容的高度分配。
 * 定位基準＝base.css 的 .slidev-layout .panel（position: relative，涵蓋全部 23 個左面板）。
 *
 * 偏移：水平 40px、垂直 40px（2026-07-16 定案：由原 44/44 往右 4px、往下 4px；距面板 border-box
 * 右下邊各 42px＝40 ＋ 2px 邊框）。**跨版型同值**——這顆鈕是共用語彙，學生在 p153 與 p181 看到
 * 的必須是同一顆；曾讓 git-push 取 36px 去對齊自己 panel-head 的內距（24px 36px），與 p181 差
 * 8px、退回。跨版型一致 > 與各自 panel-head 對齊。 */
.panel-toggle {
  position: absolute;
  right: 40px;
  bottom: 40px;
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--ink);
  background: transparent;
  border: 2px solid var(--ink);
  padding: 9px 20px;
  cursor: pointer;
}
/* 全程走 --ink，**兩個 toggle 狀態不換色**——切換由文案承載（label／labelOn），顏色只表達
 * hover。曾讓按下狀態翻品牌色，但那顆按鈕在 github 段會變藍、和頁面上真正的品牌指針
 * （標題旁 command、終端 $）混為一談。
 * hover ＝空心轉實心（不是換色）。曾試 hover 換成終端機高亮色 --brand-git-term，但 -term
 * 家族是專為深底（#2a2a2a／#1F1F1F）調的，於淺色紙面對比僅 2.06（深色頁 7.67）——淺色模式
 * 下 hover 反而讓字變淡、回饋方向相反。**填滿與否不依賴色彩對比**，兩模式皆成立：只用一張
 * 色票，空心時字＝框，實心時該色轉為底、字讓位給 var(--paper)（隨模式翻）。 */
.panel-toggle:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}
/* 按下不做位移（原 translateY(1px) 已移除）：回饋只由 hover 的空心→實心承載，按鈕位置在
 * 切換前後恆定。 */
</style>
