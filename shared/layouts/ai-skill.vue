<script setup lang="ts">
defineProps<{
  heading?: string
  meta?: string
  sections?: { label: string; text: string; active?: boolean }[]
  doc?: { text: string; tone?: 'accent' | 'body' | 'dim'; prefix?: string }[]
}>()
</script>

<template>
  <div class="slidev-layout ai-skill">
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
      <AiPromptAnatomy :sections="sections" align="top" :pad-y="0" />
      <AiMonoPanel variant="doc" :lines="doc" />
    </div>
  </div>
</template>

<!-- ai-02（左 PROMPT ANATOMY 欄位解剖／右 mono 文件）的 SKILL.md 情境版：左側講「有哪些欄位、
     各自幹嘛」，右側擺一份真的 SKILL.md。名字刻意不叫 ai-06——數字＝設計稿 template id
     （DECISIONS「視覺線」隨行約定），設計稿只有 ai-01～05；非數字名即標示「情境客製、不進
     templates」。結構與數值逐項對齊 ai-02。
     **`---` 陷阱（本頁必踩）**：SKILL.md 的 frontmatter 分隔線寫成字面 `---` 會被 Slidev 在
     YAML 之前就切掉——**引號無效**，且症狀是「該行變空字串、其後整個 doc 陣列消失」，畫面照常
     渲染、build 與 typecheck 全綠，只有截圖看得出來（原 p211 即為此壞了一段時間）。故消費頁
     必須寫 "\x2D\x2D\x2D"（雙引號 YAML 轉義），見 CLAUDE.md「`---` trap」。 -->
<style scoped>
.ai-skill {
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
