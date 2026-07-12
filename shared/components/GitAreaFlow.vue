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
type Arrow = { label?: string; active?: boolean }

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
        <span :class="['arrow-label', { 'is-active': arrows[i]?.active }]">{{ arrows[i]?.label }}</span>
        <svg width="56" height="24" viewBox="0 0 56 24">
          <path d="M 2 12 H 44" fill="none" :stroke="arrows[i]?.active ? 'var(--brand-git)' : 'var(--ink-3)'" stroke-width="4"></path>
          <path d="M 38 3 L 52 12 L 38 21" fill="none" :stroke="arrows[i]?.active ? 'var(--brand-git)' : 'var(--ink-3)'" stroke-width="4" stroke-linejoin="round"></path>
        </svg>
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
  border: 1px solid var(--ink-3);
}
.area.is-dashed {
  border-style: dashed;
}
.area.is-active {
  border: 2px solid var(--brand-git);
  background: var(--brand-git-tint);
}
.area-label {
  padding: 20px 28px;
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.14em;
  border-bottom: 1px solid var(--line);
  color: var(--ink-3);
}
.is-dashed .area-label {
  border-bottom: 1px dashed var(--line-2);
}
.is-active .area-label {
  border-bottom-color: var(--brand-git);
  color: var(--brand-git);
}
.area-items {
  flex: 1;
  padding: 24px 28px;
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
  color: var(--ink-3);
}
.arrow-label.is-active {
  color: var(--brand-git);
}
</style>
