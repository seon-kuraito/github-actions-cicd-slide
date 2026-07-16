---
theme: default
canvasWidth: 1920
title: Onboarding
titleTemplate: "%s"
favicon: /favicon.svg
module: ONBOARDING
seoMeta:
  ogTitle: "GitHub Actions CI/CD 自動化與 AI 協作實務班 · 課程導覽"
  ogDescription: "六週實作課程，從 Git 版本控制、GitHub 協作與 GitHub Actions CI/CD，一路走到 Docker 部署、通知系統與 AI 協作。從這裡掌握課程設計、技能 Dashboard 與每週重點。"
  twitterCard: "summary_large_image"
addons:
  - slidev-addon-shared
layout: cover-01
display: GitHub Actions CI/CD
heading: 自動化與 AI 協作實務班
date: 2026.07.18 · 課程導覽
---

<!-- p2 -->
---
layout: link-01
image: /qr-slides.png
heading: 課程簡報
url: github-actions-cicd-slide.seonkuraito.com
---

<!-- p3 -->
---
layout: content-03
heading: 你是老闆，還是員工？
cite: "破冰環節 · 用幾個問題快速暖場"
---

<!-- p4 -->
---
layout: content-03
heading: 最常接觸哪一種程式語言？
cite: "破冰環節 · 用幾個問題快速暖場"
---

<!-- p5 -->
---
layout: content-03
heading: 偏好淺色還是深色模式？
cite: "破冰環節 · 用幾個問題快速暖場"
---

<!-- p6 -->
---
layout: intro-02
heading: 傅劍軒
sub: 資深前端工程師 · 火箭隊培訓營 JS 組教練
bio: 過去四年協助超過 30 位學員轉職前端工程師。具備軟體工程師、活動講師與平面設計背景，擅長把產業經驗與設計思維帶回培訓體系。
tags:
  - { label: frontend, active: true }
  - { label: backend }
  - { label: infra }
  - { label: ai-cowork }
photo: /fu-jyan-sywan.png
handle: "@seonkuraito"
---

<!-- p7 -->
---
layout: image-01
slug: about/bootcamp-rocket
heading: 火箭隊培訓營
body: 位於高雄的軟體工程師培訓營，透過七個月的扎實訓練、實戰經驗與教練陪跑，培養能解決問題、銜接職場需求的軟體人才；這門課延續同樣的精神，把 Git、CI/CD 與 AI 協作放回真實工作流程中練習。
image: /bootcamp-rocket.jpg
alt: 火箭隊培訓營
---

<!-- p8 -->
---
layout: diagram-03
heading: 為什麼是 Git？
layers:
  - { tag: LAYER 03, name: AI 協作, desc: AI 幫你改的每一步，都需要能追蹤、能驗收、也能退回 }
  - { tag: LAYER 02, name: GitHub 協作與 CI/CD, desc: PR、code review、自動測試與部署，最後都靠 commit 串起來 }
  - { tag: LAYER 01, name: Git 版本控制, desc: 這是整套流程的地基——接下來六週的每一步，都會蓋在它上面, active: true }
---

<!-- p9 -->
---
layout: data-01
heading: 為什麼不學 AI 就好？
cols:
  - label: ai-only/
    heading: 它說什麼，你只能信
    desc: AI 產出的指令與程式碼，如果你無法「判斷」對錯，改壞了就不知道壞在哪裡，也很難回到上一步——速度再快，也只是在製造風險。
  - label: ai + basics/
    heading: 它做什麼，你都能驗收
    desc: 看得懂 diff、會用版本控制，AI 的每個改動就能被檢查、被保留，也能在需要時退回——這時它才真正替你加速。
    active: true
---

<!-- p10 -->
---
layout: diagram-04
heading: 為什麼不直接實作？
steps:
  - { label: 寫程式 }
  - { label: commit }
  - { label: push }
  - { label: 自動測試, active: true }
  - { label: 建置打包, active: true }
  - { label: 部署上線, active: true }
  - { label: 發送通知 }
calloutTag: KEY POINT
calloutText: CI/CD 不是單一指令，而是一條由多個節點串起來的流程。照著範例做一遍也許會動，但一旦失敗，你要知道斷在哪裡、該從哪裡修起。先把節點逐一補齊，這條流程才真正屬於你。
---

<!-- p11 -->
---
layout: compare-04
heading: 六週會完成兩個上線作品
options:
  - name: 技能 Dashboard
    slug: W1–W3
    items:
      - 完成自己的儲存庫、版本歷史與公開網址
      - 前三週會用這個作品練習 Git、GitHub 與作品維護
      - 每學會一個知識點就點亮一格，最後形成你的學習紀錄
  - name: CI/CD 部署通知系統
    slug: W4–W6
    items:
      - 練習開 Issue、發 PR 與互相審查
      - 後三週會聚焦自動化與部署，逐步把流程親手串起來
      - 完成 push 之後自動測試、部署與通知的一條龍流程
---

<!-- p12 -->
---
layout: image-01
slug: product/skill-dashboard
heading: 技能 Dashboard——第一個上線作品
body: 第一週會從模板建立自己的版本，部署到 GitHub Pages 公開上線。之後每學會一個知識點，就在 Dashboard 上點亮一格；未來第二、三週的分支、衝突與救援技巧，也會直接用在這個作品上。
imageLabel: DASHBOARD PREVIEW
imageNote: 1000 × 800 · placeholder
---

<!-- p13 -->
---
layout: diagram-05
heading: CI/CD 部署通知系統——push 之後全自動
stages:
  - { tag: PUSH, name: git push, desc: 把通過檢查的 commit 推上 GitHub，讓遠端流程接手後續工作 }
  - { tag: PIPELINE, name: 自動測試 → 自動部署, desc: GitHub Actions 接手測試，通過後把服務部署到雲端平台, active: true }
  - { tag: NOTIFY, name: LINE 通知, desc: 部署完成後，自動發送訊息到你的手機或團隊頻道 }
---

<!-- p14 -->
---
layout: data-01
heading: 課程調整：通知管道
cols:
  - label: before/
    heading: LINE Notify
    desc: 原課綱使用的通知服務，已於 2025 年 3 月終止，現在無法再申請或串接。
    icon: /line-notify.png
  - label: after/
    heading: LINE Messaging API
    desc: 課程改以 LINE Messaging API 實作，e-mail 通知照課綱保留，核心要練的 webhook 概念不變。
    active: true
    icon: /line-messaging-api.png
---

<!-- p15 -->
---
layout: data-01
heading: 課程調整：AI 工具
cols:
  - label: before/
    heading: Gemini CLI
    desc: 原課綱採用的 AI CLI 工具，已於 2026 年 6 月 18 日起停止服務免費與 AI Pro / Ultra 使用者的請求。
    icon: /gemini-cli.png
  - label: after/
    heading: Antigravity CLI
    desc: 課程改以 Antigravity CLI 作為 AI 副駕主力，保留原本的 CLI 協作精神，也補上更完整的工作流示範。
    active: true
    icon: /antigravity-cli.png
---

<!-- p16 -->
---
layout: content-02
heading: 課程調整：順序重排，總量不減反增
items:
  - { text: "**課程順序重排** — SSH 金鑰與 Pull Request 移到第二週，CI/CD 概念前移到第四週。" }
  - { text: "**AI 每週實作** — 原課綱 AI 只安排半天，調整後每週都會安排 AI 協作練習。" }
  - { text: "**重組並加量** — 課綱列出的項目都會涵蓋，並整理成更適合這門課的學習安排。" }
  - { text: "**技術範圍聚焦** — 以 Node.js 與 Python 作為示範載體，其餘語言提供對照範例。" }
---

<!-- p17 -->
---
layout: intro-01
heading: "一天的\n學習流程"
items:
  - { no: P1-3, heading: 上午教學, desc: 先建立觀念，再穿插 Git 與 GitHub 操作練習 }
  - { no: P4-5, heading: 下午教學, desc: 接續上午進度，補齊當天任務需要的知識點與觀念 }
  - { no: P6, heading: 情境挑戰, desc: 用當天學到的技能，完成一個貼近真實工作的任務 }
  - { no: P7, heading: AI 協作, desc: 每天最後一堂進入 AI 教學，示範如何把 AI 放進開發流程 }
---

<!-- p18 -->
---
layout: data-04
heading: 時間節奏
stats:
  - value: "7"
    unit: " PERIODS"
    heading: 每天堂數
    desc: 09:00 開始、17:00 結束，上下午有明確目標與推進節奏
    active: true
  - value: "50"
    unit: " MIN"
    heading: 每堂長度
    desc: 每堂專注五十分鐘，在概念講解與實作練習之間切換
  - value: "10"
    unit: " MIN"
    heading: 休息時間
    desc: 起來走動一下、補充水分，也沉澱一下剛學到的知識點與觀念
---

<!-- p19 -->
---
layout: tool-02
heading: 課程資源
cards:
  - { tag: SLIDES, name: 課程簡報, desc: "課堂主線與課後複習入口，會隨每週進度逐步解鎖\n\n", url: github-actions-cicd/slides }
  - { tag: TEMPLATES, name: 程式碼模板, desc: "Dashboard 等模板會從這裡發放，課後提問也在這裡開 GitHub Issue\n\n", url: github-actions-cicd/templates }
  - { tag: SKILLS, name: Agent Skills, desc: "寫給 AI 的任務規格，會跟著每週教材一起發放\n\n", url: github-actions-cicd/skills }
---

<!-- p20 -->
---
layout: content-01
heading: 簡報逐週解鎖——上課日早上開放
body: 六週簡報集中在這個課程網站，作為課堂主線與課後複習的固定入口；已解鎖的週次可隨時回來查看，包含當週目標、操作步驟、練習任務與延伸提醒，之後查指令、複習觀念或確認作業方向也能回到同一個地方。
note: "解鎖時間：==每週六 08:00 解鎖，同步更新當週課程資源=="
---

<!-- p21 -->
---
layout: content-01
heading: 遇到問題——請開 GitHub Issue
body: 不管是操作卡住、觀念想不明白，或想把今天內容套到工作情境，都先把背景說清楚；包含遇到的情境、已經試過的做法、卡住的地方與想確認的問題，線索越完整，同學和老師越能釐清問題。
note: "發問規則：==建立 GitHub 帳號後，問題請統一開 Issue=="
---

<!-- p22 -->
---
layout: content-01
heading: Agent Skills——AI 的工作規格
body: Agent Skills 是寫給 AI 的任務規格，把標準做法、限制條件、輸出格式與檢查重點整理成檔案；當工作流程被明確寫下來，AI 就比較能穩定照同一套規則執行，也能在 commit、PR 或除錯等任務中重複使用。
note: "核心觀念：==把重複的工作方式沉澱成規格，能讓 AI 穩定協作=="
---

<!-- p23 -->
---
layout: story-05
quote: 「你不用一開始就很厲害，但你要開始才能夠很厲害。」
attribution: "　—— 廖洧杰 · 六角學院創辦人"
context: 這門課會從第一個 commit 出發，帶你透過每週任務逐步熟悉 Git、CI/CD 與 AI 協作，把流程、工具與判斷力訓練成真正能應用在工作的習慣。
---

<!-- p24 -->
---
layout: content-01
heading: "接下來：[從零開始，把自己的作品上線](/week-1/1)"
body: 接著進入第一週簡報，先理解版本控制為什麼重要，再建立自己的技能 Dashboard，並在今天結束前把它公開上線。
---
