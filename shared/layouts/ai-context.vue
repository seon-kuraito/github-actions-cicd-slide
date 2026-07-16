<script setup lang="ts">
defineProps<{
  heading?: string
  meta?: string
  hint?: string
  files?: { name: string; desc?: string; size?: string; in?: boolean }[]
  doc?: { text: string; tone?: 'accent' | 'body' | 'dim'; prefix?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout ai-context">
    <PageNo />
    <div class="header-row">
      <div class="header-left">
        <Eyebrow main-color="var(--brand-ai)" />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="meta">{{ meta }}</span>
    </div>
    <div class="panels">
      <AiContextPanel :hint="hint" :files="files" align="top" :pad-y="0" />
      <AiMonoPanel variant="doc" :lines="doc" />
    </div>
  </div>
</template>

<!-- ai-05（左 CONTEXT 面板／右 mono 文件）的 context 情境版：左側列出「這次對話裡有什麼、
     各佔多少」，右側講機制。名字刻意不叫 ai-06——數字＝設計稿 template id（DECISIONS
     「視覺線」隨行約定），設計稿只有 ai-01～05；非數字名即標示「情境客製、不進 templates」。
     結構與數值逐項對齊 ai-05。
     **內容分工**：右側不要複述左側。左側已用 IN／OUT ＋ 檔案大小具體演示 context 的組成，
     右側該講左側演示不出來的「為什麼會佔著」；兩邊講同一句話（原本 hint 與 doc 末行都是
     「用得到再載，別塞滿」）等於浪費半個版面。 -->

<style scoped>
.ai-context {
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
.meta {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-ai);
}
.panels {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
</style>
