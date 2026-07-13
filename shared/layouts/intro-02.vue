<script setup lang="ts">
interface SkillTag {
  label?: string
  active?: boolean
}

defineProps<{
  heading?: string
  sub?: string
  bio?: string
  tags?: SkillTag[]
  photo?: string
  photoLabel?: string
  handle?: string
}>()
</script>

<template>
  <div class="slidev-layout intro-02">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="main">
      <div class="text-col">
        <div class="name-block">
          <span class="heading"><MdInline :text="heading" /></span>
          <span class="sub"><MdInline :text="sub" /></span>
        </div>
        <span class="bio"><MdInline :text="bio" /></span>
        <div class="tags">
          <span v-for="(tag, i) in tags ?? []" :key="i" class="tag" :class="{ active: tag.active }">{{ tag.label }}</span>
        </div>
      </div>
      <div class="photo-col">
        <img v-if="photo" :src="photo" class="photo" />
        <div v-else class="photo-placeholder">
          {{ photoLabel }}
        </div>
        <div class="handle-row">
          <span class="handle">{{ handle }}</span>
          <span class="handle-dot"></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.intro-02 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.main {
  flex: 1;
  display: flex;
  gap: 120px;
  align-items: center;
}
.text-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.name-block {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 108px;
  font-weight: 900;
  line-height: 1.2;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.sub {
  font-family: var(--font-sans);
  font-size: 36px;
  font-weight: 500;
  color: var(--ink-3);
}
.bio {
  font-family: var(--font-sans);
  font-size: 31px;
  line-height: 1.85;
  color: var(--ink-2);
  max-width: 890px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.tag {
  font-family: var(--font-mono);
  font-size: 25px;
  font-weight: 500;
  padding: 12px 28px;
  /* 非 active 標籤＝幽靈態：文字與邊框同色（對照 .tag.active 的文字借框色同構）；
   * 曾用 --line-2 太淡，升一階 --ink-4。 */
  color: var(--ink-4);
  border: 2px solid var(--ink-4);
}
.tag.active {
  color: var(--brand-git);
  border: 2px solid var(--brand-git);
}
.photo-col {
  width: 560px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.photo {
  width: 560px;
  height: 560px;
  object-fit: cover;
  border: 2px solid var(--line);
  background: var(--panel);
  display: block;
}
.photo-placeholder {
  width: 560px;
  height: 560px;
  object-fit: cover;
  border: 2px solid var(--line);
  background: var(--panel);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--intro02-photo-ph, #e3e3e3);
  color: var(--ink-3);
  font-family: var(--font-mono);
  font-size: 22px;
  letter-spacing: 0.08em;
}
.handle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--line);
  border-top: none;
  padding: 20px 28px;
}
.handle {
  font-family: var(--font-mono);
  font-size: 24px;
  color: var(--ink-3);
}
.handle-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: var(--brand-git);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<style>
/* 照片佔位灰 #E3E3E3 是設計稿字面值（非 token），深色樣張未覆蓋 —
 * 深色下映射到 --dark-node（延伸推導，2026-07-13 就地定案，見 DECISIONS.md 視覺線）。 */
html.dark .slidev-layout.intro-02 {
  --intro02-photo-ph: var(--dark-node);
}
</style>
