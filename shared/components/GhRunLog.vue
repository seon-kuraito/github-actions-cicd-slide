<script setup lang="ts">
import GhStatusIcon from './GhStatusIcon.vue'

type Status = 'ok' | 'err' | 'running' | 'skip' | 'queued'
interface Step {
  name: string
  meta?: string
  status?: Status
}

withDefaults(defineProps<{ steps?: Step[] }>(), { steps: () => [] })

const st = (s: Step): Status => s.status ?? 'ok'
</script>

<template>
  <div class="run-log">
    <div v-for="s in steps" :key="s.name" :class="['step-row', `st-${st(s)}`]">
      <GhStatusIcon :status="st(s)" :size="26" />
      <span :class="['step-name', `st-${st(s)}`]">{{ s.name }}</span>
      <span :class="['step-meta', `st-${st(s)}`]">{{ s.meta }}</span>
    </div>
  </div>
</template>

<style scoped>
.run-log {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
}
.step-row {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 44px;
}
.step-row.st-running {
  background: var(--brand-github-tint);
}
.step-row.st-err {
  background: var(--diff-del-bg);
}
.step-name {
  font-family: var(--font-mono);
  font-size: 25px;
  color: var(--ink);
}
.step-name.st-err {
  color: var(--err);
  font-weight: 600;
}
.step-name.st-running {
  color: var(--brand-github);
  font-weight: 600;
}
.step-name.st-skip,
.step-name.st-queued {
  color: var(--ink-4);
}
.step-meta {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 21px;
  color: var(--ink-3);
}
.step-meta.st-err {
  color: var(--err);
  font-weight: 600;
}
.step-meta.st-running {
  color: var(--brand-github);
}
.step-meta.st-skip,
.step-meta.st-queued {
  color: var(--ink-4);
}
</style>
