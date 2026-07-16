<script setup lang="ts">
import { computed, ref } from 'vue'

type DirEntry = {
  name: string
  kind?: 'dir' | 'file'
  meta?: string
  tag?: string
  hidden?: boolean
  status?: 'new' | 'modified'
  children?: DirEntry[]
}
type TermLine = { type: 'cmd' | 'output' | 'comment'; text: string; comment?: string; accent?: boolean }

const props = withDefaults(
  defineProps<{
    heading?: string
    command?: string
    panelLabel?: string
    panelMeta?: string
    entries?: DirEntry[]
    terminal?: TermLine[]
    /* 給了才長出面板右下角的 toggle 按鈕：按下＝把所有 entry 的 git 狀態抹掉（染色與圓點
     * 消失、檔名回預設色），再按一次還原。用途＝台上現場對照「commit 前／後」——commit
     * 完成後 VS Code 的檔案總管就不再標色，這顆按鈕讓那個瞬間可以來回演示。
     * 兩個 label 皆為當下狀態要顯示的字（labelOn 省略時沿用 label）。 */
    statusToggle?: { label: string; labelOn?: string }
  }>(),
  /* EXPLORER＝VS Code 側邊欄檔案總管的標題（基底 shell-02 維持 DIRECTORY LISTING）。
   * 兩者的心智模型不同、不可混用：ls 不知道 git 狀態，只有 VS Code 的檔案總管會依
   * git 狀態幫檔名上色（ShDirListing 的 status: 'new'）。面板既然這樣染色，標題就得跟著
   * 說自己是哪一個。 */
  { panelLabel: 'EXPLORER' },
)

const cleared = ref(false)
/* 遞迴清除：entries 可巢狀，只清頂層會讓子節點仍然染色（toggle 看起來只做了一半）。 */
const stripStatus = (list: DirEntry[]): DirEntry[] =>
  list.map((e) => ({
    ...e,
    status: undefined,
    ...(e.children ? { children: stripStatus(e.children) } : {}),
  }))
const shownEntries = computed(() => (cleared.value ? stripStatus(props.entries ?? []) : props.entries))
</script>

<template>
  <div class="slidev-layout git-files">
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
      <ShPanel :label="panelLabel" :meta="panelMeta" :pad-y="0" align="top" scroll-y class="panel">
        <ShDirListing :entries="shownEntries" />
        <PanelToggle v-if="statusToggle" v-model="cleared" :label="statusToggle.label" :label-on="statusToggle.labelOn" />
      </ShPanel>
      <ShTerminal :lines="terminal" :font-size="24" :line-height="1.5" class="terminal" />
    </div>
  </div>
</template>

<!-- shell-02（ls -la 的目錄列表）的 git 版：**左側看資料夾內容怎麼變、右側跑 git 指令**。
     取 shell-02 而非 git-01 為底的判準＝「這頁有沒有線圖可畫」：git init 當下還沒有任何
     commit（原 p175 的 COMMIT GRAPH 面板就是空的），而真正的教學重點是資料夾裡多了什麼
     ——正是 DIRECTORY LISTING 在講的事。git-01 留給真的有線圖可說的頁。
     通用、非單一情境：W1 p175（git init → 冒出 .git/）與 p181（add+commit → 收進 index.html
     ／data.json）共用，差異全在 frontmatter 的 entries 與 terminal。
     前綴刻意跟「內容」而非「基底家族」走（git- 而非 shell-）：這是 git 指令頁，寫 deck 的人
     照內容找版型；代價是檔名 git-* 但內部全為 Sh* 元件，故在此註明。名字刻意不叫 git-06
     ——數字＝設計稿 template id（DECISIONS「視覺線」隨行約定），設計稿只有 git-01～05；
     非數字名即標示「此張非交接件」。
     結構與數值逐項對齊 shell-02，只差 ShPanel 加 align="top"：列表是「清單」，該從上緣長
     下來；ShPanel 預設垂直置中（設計稿的列表夠長、看不出差別），列表短時會浮在面板正中央。 -->
<style scoped>
.git-files {
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
.terminal {
  flex: 1;
}
</style>
