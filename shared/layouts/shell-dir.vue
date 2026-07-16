<script setup lang="ts">
type TreeNode = {
  name: string
  kind?: 'dir' | 'file'
  children?: TreeNode[]
  highlight?: boolean
  dashed?: boolean
  badge?: string
  tag?: string
}
type TermLine = { type: 'cmd' | 'output' | 'comment'; text: string; comment?: string; accent?: boolean }

withDefaults(
  defineProps<{
    heading?: string
    command?: string
    panelLabel?: string
    panelMeta?: string
    path?: string[]
    tree?: TreeNode[]
    terminal?: TermLine[]
  }>(),
  { panelLabel: 'WORKING DIRECTORY' },
)
</script>

<template>
  <div class="slidev-layout shell-dir">
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
    <div class="panels">
      <ShPanel :label="panelLabel" :meta="panelMeta" align="top" :pad-y="44" class="panel">
        <div class="path-wrap">
          <ShPathBar :segments="path" />
        </div>
        <ShFileTree :nodes="tree" :row-font="26" :row-pad-y="13" :indent-step="44" />
      </ShPanel>
      <ShTerminal :lines="terminal" class="terminal" />
    </div>
  </div>
</template>

<!-- shell-01 的「麵包屑 ＋ 樹」情境版：**左側回答「你在檔案系統的哪裡、那裡有什麼」**，
     右側跑指令。取 shell-01 而非 shell-04（設計稿的通用 mkdir 基底）為底，是因為首個消費頁
     收在 pwd 上——麵包屑正好把 pwd 的輸出視覺化，shell-04 沒有；shell-04 的新資料夾慣例
     （樹上 dashed ＋ badge: NEW）改由頁面 frontmatter 沿用，兩邊各取所長。
     **通用、非單一情境**（2026-07-16 由 `shell-mkdir` 改名）：三個消費頁的指令全不同——
     W1 p45（`cd` ＋滑鼠拖曳，樹上標「你在這」）／p156（`git clone`，新資料夾冒出來）／
     p173（`mkdir`，同）——共通的是**位置與層級**這件事，不是 mkdir。原名只描述了三個裡的
     一個，且每加一頁就更歪；新名對齊面板自己的標題（WORKING DIRECTORY）。
     **與鄰居的分工**：vs `shell-03/04/05` ＝它們有樹但**沒有麵包屑**，答不出「你在哪」；
     vs `git-files` ＝那是平面列表（EXPLORER，「這個專案**裡面**有什麼」），本版型是巢狀樹
     ＋ 位置（「你在檔案系統的**哪裡**」）。選底判準見 DECISIONS「情境版型落地」。
     名字刻意不叫 shell-06——數字＝設計稿 template id（DECISIONS「視覺線」隨行約定），而
     設計稿只有 shell-01～05；非數字名即標示「情境客製、不進 templates」。結構與數值逐項
     對齊 shell-01。 -->
<style scoped>
.shell-dir {
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
.panels {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
.panel {
  width: 1000px;
  flex-shrink: 0;
}
.path-wrap {
  padding: 0 44px 34px;
}
.terminal {
  flex: 1;
}
</style>
