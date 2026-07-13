---
theme: default
canvasWidth: 1920
title: Week 4
titleTemplate: "%s"
favicon: /favicon.svg
module: TEAMWORK
seoMeta:
  ogTitle: "GitHub Actions CI/CD 自動化與 AI 協作實務班 · 第四週"
  ogDescription: "像真正的團隊一樣用 GitHub 協作，從 Issue、branch、Pull Request、code review 到 Branch Protection，建立第一個 GitHub Actions workflow 並拿到 CI 綠勾。"
  twitterCard: "summary_large_image"
addons:
  - slidev-addon-shared
layout: cover-01
display: GitHub Actions CI/CD
heading: 自動化與 AI 協作實務班
date: 2026.08.15 · 第四週
---

<!-- ══════════ P0 · Starting（封面＝本頁 headmatter；W4 P0 共 3 頁，含停課後的記憶恢復頁，待補） ══════════ -->

---
layout: intro-01
heading: 上午目標
items:
  - { no: P1, heading: PR 深化, desc: PR 的完整生命週期、Draft 與好 PR 的條件 }
  - { no: P2, heading: Code Review 與協作者, desc: review 的三種回應與禮儀，把隊友加進來 }
  - { no: P3, heading: Issue 與分支保護, desc: 用 Issue 管理待辦，讓 main 不再被直接推送 }
---

<!-- ── P1 09:00–09:50 · 教學（PR 深化） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 10:00"
---

<!-- ── P2 10:00–10:50 · 教學（Code Review 與協作者） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 11:00"
---

<!-- ── P3 11:00–11:50 · 教學（Issue 與分支保護） ── -->

---
layout: break-02
sub: "休息一小時，下午回來繼續完成今天的實作任務"
badge: "BACK · 13:00"
---

---
layout: intro-01
heading: 下午目標
items:
  - { no: P4, heading: "CI 初見：概念", desc: 人審完了，機器審什麼——CI 與 CD 登場 }
  - { no: P5, heading: "CI 初見：第一個 workflow", desc: 親手寫下第一個 workflow，接上必要檢查 }
  - { no: P6, heading: 情境挑戰, desc: 從 Issue 到 merge，完整跑一輪 sprint }
  - { no: P7, heading: AI 協作全開, desc: 透過 MCP 串接 GitHub，讓 AI 代寫與代審 PR }
---

<!-- ── P4 13:00–13:50 · 教學（CI 初見：概念） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 14:00"
---

<!-- ── P5 14:00–14:50 · 教學（CI 初見：第一個 workflow） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 15:00"
---

<!-- ── P6 15:00–15:50 · 情境挑戰「完整跑一輪 sprint」 ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 16:00"
---

<!-- ── P7 16:00–16:50 · AI 段（MCP＋GitHub 串接、AI 代寫代審 PR）＋ P8 Ending（末 5 分） ── -->

---
layout: end-01
heading: 上午回顧
items:
  - { no: "01", text: "PR 承載提案、討論、修正與合併脈絡，是團隊協作的入口" }
  - { no: "02", text: "已完成一次互審，能用 comment、approve 與 request changes 表達判斷" }
  - { no: "03", text: "Issue、Collaborator 與 Branch Protection 已串成基本團隊工作流" }
---

---
layout: end-01
heading: 下午回顧
items:
  - { no: "04", text: "知道人審看意圖，CI 檢查每次變更是否仍然可整合" }
  - { no: "05", text: "第一個 workflow 已跑出綠勾，並成為 PR 合併前的必要檢查" }
  - { no: "06", text: "一輪 sprint 已從 Issue 走到 merge，沒有任何人直推 main" }
  - { no: "07", text: "AI 已透過 MCP 讀取 GitHub 脈絡，能先代寫與代審 PR" }
---

---
layout: content-01
heading: "下週預告：==測試與 Pipeline=="
body: 下週會把測試接進 pipeline，加上 cache、artifacts 與 matrix，讓每次 push 後測試都能自動跑到全綠。
---

---
layout: outro-02
sub: "感謝參與，下週同一時間見"
badge: "BACK · 08.22 09:00"
---
