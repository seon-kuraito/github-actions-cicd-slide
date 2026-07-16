<script setup lang="ts">
type TermLine = { text?: string; kind?: 'cmd' | 'comment' | 'out' | 'dim' | 'note' | 'warn' }

defineProps<{
  heading?: string
  command?: string
  terminal?: TermLine[]
}>()
</script>

<template>
  <div class="slidev-layout git-term">
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
      <GitTerminal :lines="terminal" />
    </div>
  </div>
</template>

<!-- git-01 去掉左圖面板：指令沒有圖可配（commit graph／區域流／同步線都無意義）時用這張，
     終端機吃滿整個寬度。名字刻意不叫 git-06——數字＝設計稿 template id（DECISIONS
     「視覺線」隨行約定），而設計稿只有 git-01～05；非數字名即標示「此張非交接件」。
     結構與數值逐項對齊 git-01，只差 .body 不再放 .panel。 -->
<style scoped>
.git-term {
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
  min-height: 0;
}
</style>
