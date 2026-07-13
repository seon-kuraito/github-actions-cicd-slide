---
theme: default
canvasWidth: 1920
title: Week 5
titleTemplate: "%s"
favicon: /favicon.svg
module: PIPELINE
seoMeta:
  ogTitle: "GitHub Actions CI/CD 自動化與 AI 協作實務班 · 第五週"
  ogDescription: "深入 GitHub Actions Pipeline，學會 runner、workflow、YAML、Secrets、npm 與 Vitest 測試，加入 cache、coverage、artifacts 與 matrix，讓每次 push 後都自動驗證。"
  twitterCard: "summary_large_image"
addons:
  - slidev-addon-shared
layout: cover-01
display: GitHub Actions CI/CD
heading: 自動化與 AI 協作實務班
date: 2026.08.22 · 第五週
---

<!-- ══════════ P0 · Starting（封面＝本頁 headmatter，上午目標接在下） ══════════ -->

---
layout: intro-01
heading: 上午目標
items:
  - { no: P1, heading: Actions 架構深入, desc: event、job 與 runner，看懂 workflow 的全貌 }
  - { no: P2, heading: Marketplace 與 Secrets, desc: 用現成的 actions 加速，金鑰交給 Secrets 保管 }
  - { no: P3, heading: 專案結構與 npm, desc: 認識 npm 專案結構，為自動化測試鋪路 }
---

<!-- ── P1 09:00–09:50 · 教學（Actions 架構深入） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 10:00"
---

<!-- ── P2 10:00–10:50 · 教學（Marketplace 與 Secrets） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 11:00"
---

<!-- ── P3 11:00–11:50 · 教學（專案結構與 npm） ── -->

---
layout: break-02
sub: "休息一小時，下午回來繼續完成今天的實作任務"
badge: "BACK · 13:00"
---

---
layout: intro-01
heading: 下午目標
items:
  - { no: P4, heading: 測試進場, desc: 用 Vitest 寫測試，讓 push 後自動驗證 }
  - { no: P5, heading: Pipeline 完全體, desc: cache、artifacts 與 matrix 一次到位 }
  - { no: P6, heading: 情境挑戰, desc: 接手壞掉的 pipeline，把它修到全綠 }
  - { no: P7, heading: AI 寫 pipeline, desc: 讓 AI 生成與除錯 workflow YAML }
---

<!-- ── P4 13:00–13:50 · 教學（測試進場） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 14:00"
---

<!-- ── P5 14:00–14:50 · 教學（Pipeline 完全體） ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 15:00"
---

<!-- ── P6 15:00–15:50 · 情境挑戰「把 pipeline 修到全綠」 ── -->

---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 16:00"
---

<!-- ── P7 16:00–16:50 · AI 段（生成／除錯 workflow YAML）＋ P8 Ending（末 5 分） ── -->

---
layout: end-01
heading: 上午回顧
items:
  - { no: "01", text: "能從 workflow log 追到是哪個 event、job 或 step 在執行" }
  - { no: "02", text: "外部 action 已釘好版本，敏感資訊也已移進 Secrets" }
  - { no: "03", text: "package.json 已能描述依賴與 scripts，專案具備可重現的起手式" }
---

---
layout: end-01
heading: 下午回顧
items:
  - { no: "04", text: "Vitest 已在本機與 CI 都跑起來，紅燈能指向真正的失敗線索" }
  - { no: "05", text: "pipeline 已能省安裝時間、保留報告，並驗證多版本組合" }
  - { no: "06", text: "壞掉的 pipeline 已修回全綠，PR checks 也能被正確解讀" }
  - { no: "07", text: "AI 已能產生與除錯 YAML，你也知道該檢查縮排、事件與權限" }
---

---
layout: content-01
heading: "下週預告：==容器化與結業專題=="
body: 最後一週會用 Docker 打包你的通知服務並部署到 Render，做到 push 就部署、部署就通知，完成結業專題。
---

---
layout: outro-02
sub: "感謝參與，下週同一時間見"
badge: "BACK · 08.29 09:00"
---
