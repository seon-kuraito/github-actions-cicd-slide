# Week 6（8/29）

- 當日終點：
  - 一條龍完成——push 就測試、測試過就部署、部署完就通知
  - 結業
- 結構例外：
  - P4–P6 為 capstone（下半場，取代情境挑戰），AI 內容併入 P7、Ending 為結業擴充版
- 規格已定（拷問輪 2026-07-07，見 DECISIONS）：
  - capstone＝完成自建服務的最後一哩（container→Render＋webhook 通知），非 Fork 重跑
  - 通知管道：LINE 為主／Discord 備援；e-mail 保留 ★1
  - 衍生閘門：備課時實測各語言 container→Render，可行者升 hands-on

## Kit — 週 repo：你 W4–W5 養的通知服務 ＋ 上游 repo（fallback）

見 [docs/kit/week-6.md](../kit/week-6.md)（週 repo／skills／知識點清單）。

## P0 — Starting（2 頁）

- [ ] 簡報封面：GitHub Actions CI/CD 自動化與 AI 協作實務班（MODULE · LAUNCH／2026.08.29 · 第六週）
- [ ] 本日目標：push 就部署、部署就通知

## P1 — Docker 概念（14 頁）

- [ ] **【24】「在我電腦上可以跑」問題**
- [ ] 【？】把整台電腦打包寄給別人，可行嗎？
- [ ] 容器是什麼：把環境一起打包
- [ ] 【？】image 跟 container，哪個是「檔案」、哪個是「正在跑」？
- [ ] 【！】image 是檔案（像光碟）、container 是正在跑（像播放中）
- [ ] Docker 與 CI/CD 的關係
- [ ] 使用情境：什麼時候需要它
- [ ] 【？】BYOD 機器要不要裝 Docker Desktop？
- [ ] 【！】不裝——本機裝有環境風險＋不可重現，交給 CI build（代勞正是主旨）★4
- [ ] 講師 demo：docker run hello-world
- [ ] 講師 demo：docker run 我們的 notify image（今天的終點預告）
- [ ] *說得出 image／container 差別*
- [ ] >容器 vs 虛擬機
- [ ] >貨櫃比喻補完：標準化才是革命的重點

## P2 — Dockerfile（15 頁）

- [ ] **【25】環境的食譜（Dockerfile）**
- [ ] 【？】要讓一台空白電腦跑起 notify，要裝什麼、照什麼順序？
- [ ] 【！】Dockerfile 就是那份食譜——FROM→COPY→RUN→CMD 一行一步，把「裝什麼、什麼順序」寫成可重現的腳本
- [ ] FROM：從哪個底開始（node:20-alpine 是什麼意思）
- [ ] WORKDIR：容器裡的工作目錄
- [ ] COPY：把 code 放進去
- [ ] RUN：build 時執行（npm ci）
- [ ] CMD：啟動時執行
- [ ] RUN vs CMD 對照：蓋房子 vs 開燈
- [ ] 為 notify 寫 Dockerfile：逐行完成
- [ ] ✋ 跟做：Dockerfile 進 repo
- [ ] .dockerignore（呼應 .gitignore）
- [ ] *Dockerfile 全文讀得懂*
- [ ] >layer 與快取概念
- [ ] >底 image 怎麼挑

## P3 — CI build & push（12 頁）

- [ ] **【26】讓 CI 幫你打包出貨**
- [ ] 在 Actions 裡 build image ★4
- [ ] 【？】image 做好了要放哪，別人才拿得到？
- [ ] 【！】推到 registry——GitHub 自家的 GHCR 就行
- [ ] 權限：GITHUB_TOKEN 與 packages: write
- [ ] 登入：docker/login-action
- [ ] build-push-action：context、tags、push
- [ ] ✋ 跟做：workflow 上車、push 觸發
- [ ] 看結果：Packages 頁面有你的 image
- [ ] *Packages 出現 image*
- [ ] >Docker Hub 對照
- [ ] >image tag 策略

## P4–P6 — Capstone「完成你的通知系統最後一哩」（~20 頁）

- [ ] **【27】🔨 接上部署：Dockerfile → GHCR → Render 拉起來跑**
- [ ] 🧭 capstone 導覽：你的服務現在缺什麼——Dockerfile、deploy、通知（對照 W4–W5 養到哪）
- [ ] 【？】從 push 到手機跳通知，中間會經過幾站？
- [ ] 全流程地圖：push → CI 測試 → build image → push GHCR → Render 拉來跑 → webhook 通知
- [ ] Step 1：為你的服務補上 Dockerfile（回收 P2）
- [ ] Step 2：workflow 加 build & push GHCR（回收 P3）
- [ ] Step 3：Render 接上你的 GHCR image（設 registry 認證）→ Deploy Hook
- [ ] *push 一次，Render 上你的服務跑起來了（先不管通知）*
- [ ] >救援 fallback：自己的 repo 收不了？Fork 講師完整版照樣出貨

- [ ] **【28】🔨 接上通知，一條龍跑完**
- [ ] 【？】部署成功了，怎麼讓它自己回報一聲？
- [ ] 【！】deploy 後接一個 webhook step——把 Secret 存的 LINE/Discord URL 打出去，這才是「部署後通知」（≠部署本身）
- [ ] Step 4：webhook（LINE/Discord）存成 Secret（回收 W5）→ 加 notify step
- [ ] Step 5：push 一次 → CI→GHCR→Render→通知一條龍跑完
- [ ] Step 6：搭檔互驗——交換服務、各自 trigger 對方一次，確認對方頻道也跳通知（W4 配對收官）
- [ ] *手機／頻道跳出「已部署」的那一刻——你的，跟搭檔的*
- [ ] >e-mail 通知對照
- [ ] >彩蛋：Dashboard 部署也自動化（學習基地 CI 化）

## P7 — AI 壓軸（~10 頁）

- [ ] **【29】AI 進到部署層：優化與 Render MCP**
- [ ] 【？】workflow 跑起來了，AI 還能幫上什麼？
- [ ] 【！】往部署層走——`optimize-workflow` 幫你精簡、Render MCP 讓 AI 直接部署／查服務（呼應 W4 GitHub MCP，同一種「AI ↔ 工具」的橋）
- [ ] Demo：AI 優化你的 workflow（skill: `optimize-workflow`）〔d6-PM③〕
- [ ] Demo：AI 用 **Render MCP** 部署／查你的服務——AI 直接操作 Render
- [ ] >MCP 成對回收：W4 GitHub、W6 Render，都是「AI ↔ 工具」層、非管線本身

- [ ] **【30】壓軸：AI 的天花板，你才是駕駛**
- [ ] 【？】如果 AI 連部署都能一句話做完，那你學這六週幹嘛？
- [ ] 壓軸 Demo：一個指令 → Claude Code 從 0 全自動把 front+back 部署到 Cloudflare、無人介入（純表演，不考慮複現）
- [ ] 【！】因為你看得懂它每一步在做什麼，你才是駕駛——這六週就是「看得懂」的底氣
- [ ] AI 協作收官心法：你是駕駛，它是副駕（agent 的天花板，也是你的起點）

## P8 — Ending：結業（6 頁）

- [ ] 六週回顧：從 final_final_v3 到自動部署
- [ ] 你現在會的東西：知識點總覽（Dashboard 全亮）
- [ ] 下一步學習地圖
- [ ] 資源怎麼帶走：repo、skills、簡報
- [ ] ✅ 最終 Recap：打開 Dashboard，點亮 W6 這批技能——技能樹最後一次全亮
- [ ] 謝幕＋訓後動態調查預告

## Spec 覆蓋

day-6 AM ①–⑤ 全數（build/push 於 CI ★4）；day-6 PM ①（管道替換 ★1、e-mail 保留）②③④ 全數。
