---
theme: default
canvasWidth: 1920
title: Week 6
titleTemplate: "%s"
favicon: /favicon.svg
module: LAUNCH
seoMeta:
  ogTitle: "GitHub Actions CI/CD 自動化與 AI 協作實務班 · 第六週"
  ogDescription: "迎接 CI/CD 最終交付日：用 Dockerfile 將通知服務容器化，透過 GitHub Actions build image 並推送 GHCR，再部署到 Render，實現 push 後自動測試、部署與 LINE 或 Discord 通知。"
  twitterCard: "summary_large_image"
addons:
  - slidev-addon-shared
layout: cover-01
display: GitHub Actions CI/CD
heading: 自動化與 AI 協作實務班
date: 2026.08.29 · 第六週
---

<!-- ══════════ P0 · Starting（封面＝本頁 headmatter，上午目標接在下） ══════════ -->

---
layout: intro-01
heading: 上午目標
items:
  - { no: P1, heading: Docker 概念, desc: 理解容器是什麼，以及它如何成為跨語言部署的共通介面 }
  - { no: P2, heading: Dockerfile, desc: 親手寫 Dockerfile，打包你的通知服務 }
  - { no: P3, heading: CI build & push, desc: 讓 Actions 自動 build image 並推上 GHCR }
---

<!-- ── P1 09:00–09:50 · 教學（Docker 概念） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 10:00"
---

<!-- ── P2 10:00–10:50 · 教學（Dockerfile） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 11:00"
---

<!-- ── P3 11:00–11:50 · 教學（CI build & push） ── -->

---
layout: break-02
sub: "休息一小時，下午回來繼續完成今天的實作任務"
badge: "BACK · 13:00"
---

---
layout: intro-01
heading: 下午目標
items:
  - { no: P4-6, heading: "結業專題：完成最後一哩", desc: 讓你的通知系統做到 push 就部署、部署就通知 }
  - { no: P7, heading: AI 壓軸, desc: 觀摩一個指令部署全站的天花板 demo，收束六週學習 }
---

<!-- ── P4 13:00–13:50 · 結業專題（上）—— P4–P6 為連續結業專題時段 ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 14:00"
---

<!-- ── P5 14:00–14:50 · 結業專題（中） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 15:00"
---

<!-- ── P6 15:00–15:50 · 結業專題（下）—— deploy＋notify 驗收 ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 16:00"
---

<!-- ── P7 16:00–16:50 · AI 壓軸（Render MCP＋Claude Code 一鍵部署表演）＋ P8 Ending：結業擴充版（6 頁，待設計） ── -->

---
layout: end-01
heading: 上午回顧
items:
  - { no: "01", text: "能分辨 image 與 container，也知道部署時為什麼要先打包環境" }
  - { no: "02", text: "Dockerfile 已進 repo，服務啟動所需步驟被寫成可重現的食譜" }
  - { no: "03", text: "GHCR 已出現你的 image，CI 具備打包與推送能力" }
---

---
layout: end-01
heading: 下午回顧
items:
  - { no: "04", text: "通知服務已接上 Render，部署環境與服務狀態都能確認" }
  - { no: "05", text: "workflow 已串起測試、打包、推送 image 與部署觸發" }
  - { no: "06", text: "webhook 通知已接上，push 後能完成部署並送出通知" }
  - { no: "07", text: "看過一個指令部署全站的壓軸 demo，也能回頭拆解背後流程" }
---

---
layout: outro-03
sub: "六週旅程完成，感謝參與 🎉"
badge: CONGRATULATIONS
---
