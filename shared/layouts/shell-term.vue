<script setup lang="ts">
import { computed } from 'vue'

type TermLine = { type: 'comment' | 'command' | 'output'; text: string }

const props = defineProps<{
  heading?: string
  file?: string
  lines?: TermLine[]
  win?: TermLine[]
}>()

/* 給了 win 才拆兩欄：左 macOS（$、紅黃綠燈）、右 Windows PowerShell（PS、右上 − □ ✕）。
 * 未給 win 的既有用法維持單一 macOS 終端機、版面不變。 */
const panels = computed(() => {
  const out = [{ os: 'mac', prompt: '$', lines: props.lines ?? [] }]
  if (props.win?.length) out.push({ os: 'win', prompt: 'PS', lines: props.win })
  return out
})
</script>

<template>
  <div class="slidev-layout shell-term">
    <PageNo />
    <div class="header">
      <div class="header-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-row">
      <span class="heading"><MdInline :text="heading" /></span>
      <span class="file">{{ file }}</span>
    </div>
    <div class="body">
      <div v-for="(panel, p) in panels" :key="p" class="terminal">
        <div class="terminal-head">
          <span v-if="panel.os === 'mac'" class="terminal-lights">
            <span class="light light-red"></span>
            <span class="light light-yellow"></span>
            <span class="light light-green"></span>
          </span>
          <span v-else class="win-controls">
            <svg class="win-ico" viewBox="0 0 12 12" aria-hidden="true"><path d="M1 6 H11" /></svg>
            <svg class="win-ico" viewBox="0 0 12 12" aria-hidden="true"><rect x="1.5" y="1.5" width="9" height="9" /></svg>
            <svg class="win-ico" viewBox="0 0 12 12" aria-hidden="true"><path d="M1.5 1.5 L10.5 10.5 M10.5 1.5 L1.5 10.5" /></svg>
          </span>
        </div>
        <div class="terminal-body">
          <template v-for="(line, i) in panel.lines" :key="i">
            <span v-if="line.type === 'command'" class="line-command"><span class="prompt">{{ panel.prompt }}</span> {{ line.text }}</span>
            <span v-else-if="line.type === 'comment'" class="line-comment">{{ line.text }}</span>
            <span v-else class="line-output">{{ line.text }}</span>
          </template>
        </div>
      </div>
    </div>
    <div class="footer">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.shell-term {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.header,
.footer {
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
.file {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--brand-git);
}
/* gap 對齊 git-01 的 .body（左 panel ↔ 右終端機）。 */
.body {
  flex: 1;
  display: flex;
  gap: 48px;
  min-height: 0;
}
/* 終端面板固定走 --dark-* token：兩模式皆深，不隨 html.dark 重映射。
 * min-width: 0 是拆兩欄的必要條件——flex item 預設 min-width: auto，
 * 會被 nowrap 的內容撐開、兩欄各自超過 50% 而擠爆版面。 */
.terminal {
  flex: 1;
  min-width: 0;
  background: var(--term-bg);
  border: 2px solid var(--dark-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.terminal-head {
  display: flex;
  align-items: center;
  padding: var(--term-pad-head);
}
.terminal-lights {
  display: flex;
  gap: 14px;
}
.light {
  width: 20px;
  height: 20px;
  border-radius: 999px;
}
.light-red {
  background: #ed6a5e;
}
.light-yellow {
  background: #f5be4f;
}
.light-green {
  background: #61c554;
}
/* Windows 側改掛 − □ ✕ 於右上（macOS 紅黃綠燈是 mac 專屬的視窗語彙，
 * 掛在 PowerShell 上會對不起來）。stroke 走 CSS 不走 presentation attribute
 * ——UnoCSS attributify 會去比對 SVG 屬性、把值當成 utility class。 */
.win-controls {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 30px;
}
.win-ico {
  width: 21px;
  height: 21px;
  fill: none;
  stroke: var(--dark-ink-2);
  stroke-width: 1;
  stroke-linecap: square;
}
/* 字級不隨拆欄變動。過長的行折行、不裁切（見下方 white-space: pre-wrap）：
 * 曾改成不折行＋橫向捲動，但投影片上沒人會捲，等於尾巴直接消失——折行至少讀得完整。
 * 過高則仍捲動（拆兩欄後行數會超出）。 */
.terminal-body {
  flex: 1;
  min-width: 0;
  padding: var(--term-pad-body);
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-family: var(--font-mono);
  font-size: 29px;
  line-height: 1.6;
  overflow-x: hidden;
  overflow-y: auto;
}
/* pre-wrap 而非預設值：預設會把連續空格壓成一個，終端機輸出的欄位對齊就全毀
 * （PowerShell 的表格、ls -l 都靠空格對齊）。pre-wrap 保留空格但仍准許折行。 */
.terminal-body > span {
  white-space: pre-wrap;
}
.line-command {
  color: var(--term-ink-cmd);
}
.line-command .prompt {
  color: var(--brand-git);
}
.line-comment {
  color: var(--term-ink-comment);
}
.line-output {
  color: var(--term-ink-out);
}
</style>
