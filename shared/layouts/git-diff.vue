<script setup lang="ts">
type DiffLine = { kind?: 'add' | 'del' | 'ctx'; no?: string | number; code: string }
type TermLine = { text?: string; kind?: 'cmd' | 'comment' | 'out' | 'dim' | 'note' | 'warn' }

defineProps<{
  heading?: string
  command?: string
  file?: string
  diff?: DiffLine[]
  terminal?: TermLine[]
}>()
</script>

<template>
  <div class="slidev-layout git-diff">
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
      <AiDiffPanel :file="file" :lines="diff" align="top" />
      <GitTerminal :lines="terminal" />
    </div>
  </div>
</template>

<!-- ai-01（AiDiffPanel ＋ AiChatPanel）的 git 版：**左側看改了哪幾行、右側跑 git 指令**。
     取 ai-01 而非 git-01 為底的判準＝「這頁有沒有圖可畫」，但要問對「**哪一種**圖」：
     `git diff` 一度被判「無圖可補」，因為當時只想到線圖；它的圖其實是**紅綠增刪面板**——
     那正是 AiDiffPanel 在畫的東西。判準與該次誤判見 DECISIONS「情境版型落地」。
     **名字照面板標籤（DIFF）取、不是照指令取**——與 `git-areas`（面板 FILE FLOW）同一把尺。
     撞到 `git diff` 只是巧合：日後 `git show` 這類同樣印 diff 的頁也用得上，名字不會說謊
     （反例＝原 `shell-mkdir`：用單一指令命名，多接一頁就開始說謊，已改名 `shell-dir`）。
     **終端機取 GitTerminal（`kind:` API）而非 ShTerminal（`type:`）**：【09】整段其餘五張都是
     git-term／GitTerminal，同一段混兩套終端機 API 會讓寫 deck 的人每頁重猜。
     無需寬度覆蓋：AiDiffPanel 自帶 width:1000px/flex-shrink:0，GitTerminal 為 flex:1
     ——與 ai-01 裡的 AiChatPanel 同尺寸行為，直接替身。
     **刻意沒有 toggle**（2026-07-17 加了又撤）：`git-files`／`git-areas`／`git-push` 的鈕演的是
     **狀態真的變了**（檔案進暫存區、軌道亮起）。但 **`git diff` 是唯讀的**——沒有狀態變化可演，
     硬湊一個「跑之前」只能捏造不存在的時刻：面板標著 `DIFF`、統計 `+0 −0`，讀起來是「git 說沒有差異」，
     可是差異明明存在、只是還沒問，而同一份內容又已經是改完的樣子。**面板是 git 的回答；還沒問的時候
     它不該存在。** 要加 toggle 前先確認這頁真的有兩個狀態，不是兩種視線。 -->
<style scoped>
.git-diff {
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
</style>
