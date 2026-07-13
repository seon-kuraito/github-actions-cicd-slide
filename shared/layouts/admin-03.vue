<script setup lang="ts">
defineProps<{
  heading?: string
  groups?: { label?: string; members?: { name?: string; muted?: boolean }[] }[]
}>()
</script>

<template>
  <div class="slidev-layout admin-03">
    <PageNo />
    <div class="head-row">
      <div class="head-left">
        <Eyebrow />
      </div>
    </div>
    <div class="title-block">
      <span class="heading"><MdInline :text="heading" /></span>
    </div>
    <div class="groups-grid">
      <div v-for="(group, gi) in groups" :key="gi" class="group-card">
        <span class="group-label">{{ group.label }}</span>
        <div class="members">
          <span v-for="(member, mi) in group.members" :key="mi" class="member" :class="{ muted: member.muted }">{{ member.name }}</span>
        </div>
      </div>
    </div>
    <div class="foot-row">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.admin-03 {
  display: flex;
  flex-direction: column;
  padding: 72px 100px 140px;
  box-sizing: border-box;
  gap: 56px;
}
.head-row,
.foot-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.title-block {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.heading {
  font-family: var(--font-sans);
  font-size: 68px;
  font-weight: 900;
  line-height: 1.3;
  color: var(--ink);
  letter-spacing: 0.04em;
}
.groups-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-content: center;
}
.group-card {
  border: 2px solid var(--line-2);
  padding: 44px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.group-label {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--brand-git);
}
.members {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.member {
  font-family: var(--font-sans);
  font-size: 28px;
  color: var(--ink);
}
/* 候補／未定成員淡化 */
.member.muted {
  color: var(--ink-3);
}
</style>
