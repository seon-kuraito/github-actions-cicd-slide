<script setup lang="ts">
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
/* back＝箭頭反指（右→左），給逆向操作用（`git restore --staged` 把檔案從暫存區退回工作目錄）。
 * hidden＝該格完全不畫箭頭（例：restore 頁與 commit 無關，不該佔一支箭頭）；88px 欄位仍保留
 * 當間距，否則區塊會位移。**必須是明確旗標、不能用「沒給就不畫」**：p88 三層架構首發頁整個
 * 沒有 arrows key，靠的正是「沒給＝畫無標籤灰箭頭」指出流向（add／commit 的字要到 p90／p91
 * 才登場）——把兩者混為一談會讓那頁的箭頭無聲消失。 */
type Arrow = { label?: string; active?: boolean; back?: boolean; hidden?: boolean }

withDefaults(defineProps<{ areas?: Area[]; arrows?: Arrow[] }>(), { areas: () => [], arrows: () => [] })
</script>

<template>
  <div class="area-flow">
    <template v-for="(a, i) in areas" :key="i">
      <div :class="['area', `is-${a.state ?? 'solid'}`]">
        <span class="area-label">{{ a.name }}</span>
        <div class="area-items">
          <span
            v-for="(it, j) in a.items ?? []"
            :key="j"
            :class="['area-item', `tone-${it.tone ?? 'default'}`, { 'is-sans': it.sans, 'is-bold': it.bold }]"
            ><template v-if="it.indent">&nbsp;&nbsp;</template><span v-if="it.flag" :class="['item-flag', `ft-${it.flagTone ?? 'brand'}`]">{{ it.flag }}</span><template v-if="it.flag">&nbsp;</template>{{ it.text }}</span
          >
        </div>
      </div>
      <div v-if="i < areas.length - 1" class="arrow-col">
        <template v-if="!arrows[i]?.hidden">
          <span :class="['arrow-label', { 'is-active': arrows[i]?.active }]">{{ arrows[i]?.label }}</span>
          <svg width="56" height="24" viewBox="0 0 56 24" :class="{ 'is-back': arrows[i]?.back }">
            <path d="M 2 12 H 44" fill="none" :stroke="arrows[i]?.active ? 'var(--brand-git)' : 'var(--ink-3)'" stroke-width="4"></path>
            <path d="M 38 3 L 52 12 L 38 21" fill="none" :stroke="arrows[i]?.active ? 'var(--brand-git)' : 'var(--ink-3)'" stroke-width="4" stroke-linejoin="round"></path>
          </svg>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.area-flow {
  flex: 1;
  display: flex;
  align-items: stretch;
  gap: 0;
  padding: 48px 40px;
}
/* state 控制框線語意：dashed（工作區、未受控）/ active（品牌色高亮）/ solid（一般）。 */
.area {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* 非 active 區框線用 --ink-3（＝「commit →」箭頭灰，比 --line-2 明顯）；亮暗皆隨 token 翻。 */
  border: 2px solid var(--ink-3);
}
.area.is-dashed {
  border-style: dashed;
}
.area.is-active {
  border: 3px solid var(--brand-git);
  background: var(--brand-git-tint);
}
.area-label {
  padding: 20px 28px;
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.14em;
  /* 非 active 的 heading 底線同框線用 --ink-3（不用更淡的 --line/-2）：底線與卡片外框同一階，
   * 只有 active 區才靠 brand-git 亮起——「淡」是留給 active/非 active 的對比，不是框內再分階。 */
  border-bottom: 2px solid var(--ink-3);
  color: var(--ink-3);
}
.is-dashed .area-label {
  border-bottom: 2px dashed var(--ink-3);
}
.is-active .area-label {
  border-bottom-color: var(--brand-git);
  color: var(--brand-git);
}
/* 左右內距 28 → 22（2026-07-16，**偏離設計稿的少數數值之一**）：三區各約 236–242px 內寬，
 * 28px 只留 180–186px 給文字，連 templates 自己的 git-02 參考頁都撐不住——`feat: 登入表單驗證`
 * （182.2px）與 W1 p88 的 `a1b2c3d 新增首頁`（193.6px）皆折行。22px 給到 192px，兩者都收得住。
 * 這是共用元件、git-02 與 git-areas 同吃：**不做 git-areas 側的 scoped 覆寫**——參考頁自己壞掉
 * 卻讓客製頁正常，正是 DECISIONS「templates 是現行視覺參考」最不該出現的狀況。
 * 上下維持 24px（垂直沒有壓力，動它只是無謂偏離）。 */
.area-items {
  flex: 1;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.area-item {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--ink);
}
.area-item.is-sans {
  font-family: var(--font-sans);
}
.area-item.is-bold {
  font-weight: 600;
}
.area-item.tone-muted {
  color: var(--ink-3);
}
.area-item.tone-dim {
  color: var(--ink-4);
}
.item-flag {
  font-weight: 600;
  color: var(--brand-git);
}
.item-flag.ft-deep {
  color: var(--brand-git-deep);
}
.item-flag.ft-ok {
  color: var(--ok);
}
.arrow-col {
  width: 88px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.arrow-label {
  font-family: var(--font-mono);
  font-size: 19px;
  line-height: 1.5;
  /* 空標籤不會生出線盒 → 實高 0 → arrow-col 是 center 對齊，箭頭就往上跑 14px，跟有標籤的頁
   * 對不齊（p88 三層架構首發頁只要流向不要字，正是這樣比 p90／p91 高 14.25px，翻頁時箭頭會跳）。
   * min-height 撐住線盒，讓「有沒有字」不再影響箭頭位置。1.5em＝1.5×19px＝28.5px，與上一行同源。 */
  min-height: 1.5em;
  color: var(--ink-3);
}
.arrow-label.is-active {
  color: var(--brand-git);
}
/* 鏡射整支 svg 而非另寫一組反向 path：兩支路徑（軸線＋箭頭）得各自鏡射，算錯一個座標就歪；
 * scaleX 一定對稱。用 class 不用 style/attr——attributify 會咬 SVG 的呈現屬性（見 CLAUDE.md）。 */
.arrow-col svg.is-back {
  transform: scaleX(-1);
}
</style>
