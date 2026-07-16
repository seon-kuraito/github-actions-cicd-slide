<script setup lang="ts">
import { computed } from 'vue'

interface ShDirEntry {
  name: string
  kind?: 'dir' | 'file'
  meta?: string
  tag?: string
  hidden?: boolean
  /* git 檔案狀態：'new'＝新增、'modified'＝已編輯。設了就同時染檔名／圖示並在右側點一顆
   * 圓點（--status-new／--status-modified）。對齊學員螢幕上會看到的樣子：VS Code 檔案總管
   * 就是這樣標未追蹤／已 add（綠）與已修改（琥珀）的檔案。刻意不吃品牌重映——這是 git 狀態
   * 語意色（同 --code-red/-orange 的分工），不是品牌指針，故 github 段裡也維持原色。
   * 注意 CLI 與 GUI 不一致：終端機 `git status` 的未追蹤檔是**紅**的，add 之後才轉綠；
   * 故此旗標只適合用在「已 add」或以 GUI 視角呈現的頁。 */
  status?: 'new' | 'modified'
  /* 巢狀：給了就往下展一層，逐層縮排（EXPLORER 本來就是樹——面板既然模擬 VS Code 檔案
   * 總管，扁平才是缺陷）。未給的頁完全走原本的扁平排法，故既有消費頁不受影響。
   * 與 ShFileTree 的分工：那邊是 shell 的 WORKING DIRECTORY（有麵包屑、無 git 狀態），
   * 這邊是 git 視角的 EXPLORER（有 status 圓點、無麵包屑）。 */
  children?: ShDirEntry[]
}

const props = withDefaults(defineProps<{ entries?: ShDirEntry[] }>(), { entries: () => [] })

/* 攤平成 (節點, 深度)，縮排走 depth。 */
const rows = computed(() => {
  const out: { e: ShDirEntry; depth: number }[] = []
  const walk = (list: ShDirEntry[], depth: number) => {
    for (const e of list) {
      out.push({ e, depth })
      if (e.children) walk(e.children, depth + 1)
    }
  }
  walk(props.entries, 0)
  return out
})

const isDir = (e: ShDirEntry) => (e.kind ? e.kind === 'dir' : e.name.endsWith('/'))
const isHidden = (e: ShDirEntry) => e.hidden ?? e.name.startsWith('.')
/* 狀態色優先於隱藏灰：有 git 狀態的檔案是該頁的主角。 */
const strokeOf = (e: ShDirEntry, base: string) =>
  e.status ? `var(--status-${e.status})` : isHidden(e) ? 'var(--line-2)' : base
</script>

<template>
  <div class="dir-listing">
    <div v-for="({ e, depth }, i) in rows" :key="i" class="entry" :style="{ '--depth': depth }">
      <svg class="entry-icon" width="28" height="28" viewBox="0 0 28 28">
        <path
          v-if="isDir(e)"
          d="M 3 8 L 11 8 L 13.5 11 L 25 11 L 25 22 L 3 22 Z"
          fill="none"
          :stroke="strokeOf(e, 'var(--ink-3)')"
          stroke-width="2"
          stroke-linejoin="round"
        ></path>
        <template v-else>
          <path d="M 7 4 L 17 4 L 22 9 L 22 24 L 7 24 Z" fill="none" :stroke="strokeOf(e, 'var(--ink-4)')" stroke-width="2" stroke-linejoin="round"></path>
          <path d="M 17 4 L 17 9 L 22 9" fill="none" :stroke="strokeOf(e, 'var(--ink-4)')" stroke-width="2" stroke-linejoin="round"></path>
        </template>
      </svg>
      <span :class="['entry-name', { 'is-hidden': isHidden(e) }, e.status && `is-${e.status}`]">{{ e.name }}</span>
      <span v-if="e.tag" class="entry-tag">{{ e.tag }}</span>
      <span v-if="e.meta" :class="['entry-meta', { 'is-hidden': isHidden(e) }]">{{ e.meta }}</span>
      <span v-if="e.status" :class="['entry-dot', `is-${e.status}`]" aria-hidden="true"></span>
    </div>
  </div>
</template>

<style scoped>
.dir-listing {
  display: flex;
  flex-direction: column;
}
.entry {
  display: flex;
  align-items: center;
  gap: 20px;
  /* 列高固定、不參與 flex 擠壓：父層放不下時該由面板捲動（ShPanel 的 scrollY），
   * 而不是把最後幾列壓矮到字被切掉——後者量起來「溢出 0」，只有截圖看得出來。 */
  flex-shrink: 0;
  /* 左內距＝基準 44px ＋ 每層 40px（--depth 由逐列的 inline style 給，扁平頁恆為 0）。 */
  padding: 22px 44px 22px calc(44px + var(--depth, 0) * 40px);
}
.entry:not(:last-child) {
  border-bottom: 2px solid var(--line);
}
.entry-icon {
  flex-shrink: 0;
}
.entry-name {
  font-family: var(--font-mono);
  font-size: 27px;
  color: var(--ink);
}
.entry-name.is-hidden {
  color: var(--ink-4);
}
/* 加粗＋上色成對出現，比照姊妹元件 ShFileTree 標記新節點的慣例（圖示與檔名一起走）。
 * 用 --status-* 而非 --diff-add-ink：後者是給「綠底帶上的字」調的（AiDiffPanel 的
 * .is-add＝--diff-add-bg 底 ＋ --diff-add-ink 字），拿到白紙面上會過重。 */
.entry-name.is-new {
  color: var(--status-new);
  font-weight: 700;
}
.entry-name.is-modified {
  color: var(--status-modified);
  font-weight: 700;
}
/* 右欄狀態圓點：純裝飾（故 aria-hidden），資訊由檔名顏色承載。取代原本的權限字串
 * ——權限在 W1 只出現在【03】的選讀補充頁，且 PowerShell 根本不顯示 Unix 權限，
 * 對半數 BYOD 學員是沒看過的東西；面板既已是 EXPLORER（VS Code），權限也不該在。 */
.entry-dot {
  margin-left: auto;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  flex-shrink: 0;
}
.entry-dot.is-new {
  background: var(--status-new);
}
.entry-dot.is-modified {
  background: var(--status-modified);
}
.entry-tag {
  font-family: var(--font-mono);
  font-size: 18px;
  color: var(--ink-3);
  border: 2px solid var(--line-2);
  padding: 4px 12px;
}
.entry-meta {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 21px;
  color: var(--ink-3);
}
.entry-meta.is-hidden {
  color: var(--ink-4);
}
</style>
