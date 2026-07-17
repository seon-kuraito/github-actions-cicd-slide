<script setup lang="ts">
interface BulletItem {
  text?: string
  secondary?: boolean
}

defineProps<{
  heading?: string
  items?: BulletItem[]
}>()
</script>

<template>
  <div class="slidev-layout content-02">
    <PageNo />
    <div class="top-bar">
      <div class="top-left">
        <Eyebrow />
      </div>
    </div>
    <div class="text-block">
      <span class="heading"><MdInline :text="heading" /></span>
      <div class="bullets">
        <div v-for="(item, i) in items ?? []" :key="i" class="bullet-row" :class="{ secondary: item.secondary }">
          <span class="bullet-node"></span>
          <span class="bullet-text"><MdInline :text="item.text" /></span>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.content-02 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 72px 100px 140px;
  box-sizing: border-box;
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
/* heading ＋ bullets 綁成一組、root 改 justify-content: space-between 讓整組垂直置中
   （原本 heading 貼頂、bullets flex:1 各自置中，兩者間會撐出過大的空白）。gap 56px：
   content-01 的 44px 是為其散文 body 校準；此處是多列點、列點間距 52px，heading→列點
   取 56px（＝略大於列點間距）才讓 heading 清楚凌駕清單、不比列點之間還擠。 */
.text-block {
  display: flex;
  flex-direction: column;
  gap: 56px;
  max-width: 1500px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.bullets {
  display: flex;
  flex-direction: column;
  gap: 52px;
}
.bullet-row {
  display: flex;
  align-items: baseline;
  gap: 36px;
}
.bullet-node {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  flex-shrink: 0;
  transform: translateY(-2px);
  background: var(--brand-git);
}
.bullet-row.secondary .bullet-node {
  border: 5px solid var(--line-2);
  box-sizing: border-box;
  background: var(--paper);
}
.bullet-text {
  font-family: var(--font-sans);
  font-size: 36px;
  line-height: 1.7;
  color: var(--ink);
}
.bullet-row.secondary .bullet-text {
  color: var(--ink-3);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
