# 內容規劃決策紀錄（v2）

課程：GitHub Actions CI/CD 自動化與 AI 協作實務班（2026/7/18–8/29，六個上課日，42h）
依據：`spec.csv` 課程大綱。v1 定案 2026-07-02；v2 重構定案 2026-07-04（每日結構、repo 策略、AI 線全面改版，v1 被推翻項目見文末）。v2.1 微調 2026-07-07：repo 策略切為「W1–W3 個人 Dashboard／W4–W6 通知系統」、capstone 改「完成自建的最後一哩」（推翻 v2 的「notify 自 W2 漸進快照」與「W6 Fork 完整系統一次跑完」）。

頁級課綱見 [docs/README.md](docs/README.md)（索引）。

## 貫穿原則

- spec 字面列出的項目**至少 slide 級出現**；深度與講授順序自由裁量。
- 與 spec 的差異**記錄成文件**（[docs/README.md](docs/README.md) 差異表），並於 W1 第一堂課向學員說明。
- 過時內容以繼任者替換，並保留一句「它是誰的繼任」。
- `week-N` deck ↔ 第 N 個上課日。Slides 繁體中文，指令與術語英文。
- 內容**可以講不完，但不能提早結束**：必講頁前置、溢出頁（標 `(溢)`）後置。

## 課程結構（v2 核心）

| # | 分支 | 決策 |
|---|------|------|
| 1 | 兩大產物 | **課程＝兩大產物，以 8/8 停課週對半分：①「技能樹 Dashboard」（W1–W3，個人、solo Git 載體）②「CI/CD 部署通知系統」（W4–W6，團隊，＝課程終點）。** 通知系統自 **W4 起逐週親手建**（W4 CI → W5 pipeline → W6 上半場容器化）；**W6 下半場 capstone＝完成最後一哩**（deploy＋notify），非 Fork 重跑；上游 repo 降參考／救援 fallback。**規格 W4→W6 增量長出**（見「通知系統規格」節）。 |
| 2 | 每日網格 | 7 堂 ×50 分（休 10 分）：P1–P5 教學 + sandbox 即幤練習 + GitHub 操作穿插；**P6 週 repo 情境挑戰**（當日技能重走一遍）；**P7 = AI 段 45 分 + Ending 5 分**。例外：W1 的 P1 為 onboarding 放映、W6 下半場（P4–P6）為 capstone。 |
| 3 | 週 repo | **W1–W3：個人 Dashboard** 為 P6 情境載體——solo Git 技能（W2 分支/衝突/PR、W3 救援/發版）皆在學員自己的 Dashboard 上逐步優化（技能與 repo 無關，用自己的東西擁有感最高）。**W4–W6：通知系統團隊 repo**（協作/CI/Docker/部署/通知——個人靜態 Dashboard 結構上做不到的都在此）。敘事弧 solo→team、personal→product；切點落在 8/8 放假週之後（W4）。省下 v2 的 `notify-w2`／`notify-w3` 兩個 repo。 |
| 4 | Dashboard（產物①）| **前三週主產物**。W1 建立（模板 → clone → 改資料 → push → Pages 手動上線）；**W2–W3 用當週 Git 技能逐步優化**（分支/衝突/PR、救援/發版），取代 v2 原「被動 Recap」。**技能樹點亮即其知識追蹤本體**（≠第二身分——名即所指；繼任 v2.1 前「全程兼知識追蹤」的副業框架）；W4 起退為每週 Recap。知識點見 `docs/kit/`。Pages 自動化部署為 W6 選配彩蛋。畫面歸 Claude Design，資料 schema 歸內容線。 |
| 5 | PR 時機 | **W2 首見 PR**（分支概念與命名教完後，於情境挑戰收尾發第一個 PR——好 PR = 好 branch＋好 commit，不提前到 W1 當儀式）；W4 深化為 review 文化、配對互審、Branch Protection、Issue；W2 起 PR 日常化；**配對互審輕線延續** W5（pipeline PR 走搭檔 approve）／W6（capstone 互驗部署），協作不鎖在 W4（2026-07-10 補）。 |
| 6 | W4 尾端前移 | spec day-5 的「CI/CD 概念 + 第一個 workflow」前移至 W4 P4，以 Branch Protection 的 required status checks 為橋；W5 專注測試/cache/artifacts/matrix。 |
| 7 | 受眾與角色 | 學員偏初階工程師、概念從零帶起；deck 混合偏講課主軸（指令效果上 slide、實作切 VS Code）；BYOD 為主，環境設定頁雙平台——Windows 用 **PowerShell**（Windows Terminal，W1 含 ExecutionPolicy 解鎖步驟）、mac 用 Terminal（spec 原列 Git Bash，差異記錄見 overview #12）。 |
| 8 | Onboarding deck | 課程介紹 8 頁自 W1 P1 移至 `apps/onboarding`（`/`，PR #12 取代 hub）：開課前公開 landing 兼第一堂開場放映，含 release-schedule 驅動的課程索引與 spec 差異說明頁；**課前環境準備刻意不放**（安裝全留 W1 課堂）。W1 P1 以版控初心開場、安裝拆進 P1–P2，密度紅區緩解。 |

## 通知系統規格（拷問輪定案 2026-07-07）

W4–W6 的通知系統＝一個會跑的簡單服務，經 **CI 測試 → CD 部署到會運行的平台 → 部署後發通知**。學員動手的是 **pipeline（`.yml`／`Dockerfile`／`webhook`）**，不是 app 內容。

- **三段職責別混**：CI＝Actions 跑測試（服務語言不重要）｜CD＝把 container 部署到會**運行**的平台｜通知＝deploy 後 webhook 發訊息（Secret 驅動，**≠部署**；LINE/Discord 是通知目的地不是 CD）。
- **主線平台**：JS container → **Render**（免卡）。CD 由 workflow 驅動（`test → curl Render Deploy Hook → 部署 → notify`），**不用 Render 自動部署**（否則跳過學生的 yml）。Render 免費層冷啟動 30–60s → 當「serverless 冷啟動」教學點。
- **無畫面需求**：不做前端 UI；**Vite 移除**，W5 原 npm/Vite 段改深化 Docker/CD＋CI 測試。
- **多語言（PHP/JSP/.NET）**：Docker ＝語言萬能轉接頭，同一條 pipeline 只換 `Dockerfile` base image＋測試指令。先講師 demo＋給檔、願意學員自練。**衍生閘門**：W6 備課時實測各語言 container→Render，可行者升 hands-on（PHP 機率高；JSP/Tomcat、.NET image 大 build 慢，保守維持 demo）。此為滿足「對外宣傳語言、避免剝奪感」的可複製配方。
- **通知管道**：**LINE 為主／Discord 備援**（LINE Messaging API 繁瑣，可能改講師 demo、hands-on 走 Discord webhook）；e-mail 依 spec 保留。notify＝`formatMessage` 純函式組訊息 + 薄 adapter → webhook。
- **AI 壓軸（W6 P7 finale）**：一個指令、AI 全自動把 front+back 部署到 Cloudflare、無人介入；**純表演、不考慮複現**，展示 CI/CD＋AI 天花板（full-circle：Cloudflare 單 Worker ＝ slides 現有部署）。**配一個【？】收束**（W6 deck 動工時設計）：「AI 一指令就做完，那你學這六週幹嘛？」→ demo →「**因為你看得懂它每一步，你才是駕駛**」——harness 核心，也是 demo 壓到最後、非開場的因果理由。
- **同輪其他定案**：W3 救援情境＝**課堂現場腳本刻意在 Dashboard 製造災難再救**（非模板預埋 rescue 分支）。

## AI 線（v2）

- **每週 P7 固定 AI 段**（45 分 ×6，總量超過 spec day-4 下午的實質內容）；demo 為主、自由跟做；W1 P7 含雙平台安裝。
- **Antigravity CLI 單主力**（Gemini CLI 官方繼任）；**Agent Skills 以 Antigravity 的 skills/自訂指令為載體**，隨週 repo 的 `skills/` 目錄發放。
- Copilot 為可拆卸模組（W4 P7 一頁節點，授權到位才上）；Claude Code 為 W6 壓軸講師 demo。
- 六週 AI 分配：W1 安裝+解釋指令+commit message／W2 gh 上手＋AI 動手（建 repo→開 PR 全鏈）／W3 救援顧問+歷史整理／W4 **MCP + GitHub 串接** + PR 描述 + AI code review／W5 生成與除錯 workflow YAML／W6 併入 capstone + **Render MCP** + Claude Code 壓軸（Cloudflare 表演）。MCP 節點成對：W4 GitHub MCP、W6 Render MCP（皆為「AI ↔ 工具」層，非 CI/CD 管線本身）。

## Deck 骨架 v2（即視覺線版型需求）

固定件：**P0 Starting 章**（每份 deck 起頭：簡報封面＋本日目標；W4 加記憶恢復頁）／**週 repo 導覽頁**（🧭）／**情境挑戰卡**（🔨 固定格式：劇情、目標、步驟提示、驗收條件、求救方式）／**P8 Ending 章**（每份 deck 固定收尾兩頁：✅ Recap（確認技能樹亮了＋口頭發布回家任務；實質 data.json 更新儀式已移至 P6 情境挑戰，隨當週 Git 技能長大）→ 下週預告／課前準備；W6 為結業擴充版）。P0／P8 為章節序、不佔獨立時段（P0 在首教學堂開頭、P8 在 P7 末 5 分）。
P7 為純 AI 段，頁面採「demo 劇本 + 跟做者指令框」雙用格式，Ending 章接於其後（時間上共用 P7 的最後 5 分鐘）。
無獨立開場回顧頁與作業頁（作業以 Ending 的預告頁＋口頭發布承載，維持 spec「辦理課後作業」合規）。
畫布規格：16:9、1920×1080 CSS px（全 deck `canvasWidth: 1920`，設計稿座標逐字照抄；繼任 980×551.25 Slidev 預設）、內容安全區＝設計稿 padding（上 72／左右 100／下 140）。

## 技術決策（v1 存活項）

| 分支 | 決策 | 備註 |
|---|---|---|
| 前端/建置 | **無前端畫面**（通知系統＝服務＋通知器）；**Vite 移除**，W5 改深化 Docker/CD＋CI 測試 | 見「通知系統規格」節 |
| 測試 | Vitest 主力；Python pytest 副實作**只在 CI 跑**；ASP.NET/PHP/JSP 以 matrix demo + 一頁帶過 | |
| Docker | 學員寫 Dockerfile + workflow；build 在 Actions，**CD 部署到 Render**（container 運行）；多語言同 pipeline 換 base image；本機體驗講師 demo | 見「通知系統規格」節 |
| Git Flow | 三種 flow 都教、各一【NN】（W3 P5）：Git Flow（歷史定位，中偏淺）／GitHub Flow（W4 落地，深）／GitLab Flow（環境分支，W5/W6 伏筆，中）；深度不等權 | 定案 2026-07-10；避免初階學員帶過時 Git Flow 機制入職。W6 是否 hands-on GitLab Flow 見閘門 |
| 通知管道 | **LINE 為主／Discord 備援**；notify＝`formatMessage` 純函式 + 薄 adapter → webhook；e-mail 依 spec 保留 | 拷問輪定案（見上） |

## 產物節奏與待辦閘門

**節奏**：W1 全套（week-1 deck、Dashboard 模板、W1 skills、六週頁級課綱）趕 7/18；W2–6 的 repo/skills/deck 逐週滾動、提前一週完成。

- [ ] **Antigravity CLI 實地驗證** — **week-1 deck 定稿前**（≈7/14）：MCP 串 GitHub、Windows/Git Bash 安裝、skills/自訂指令機制成熟度。降級路線：prompt 包（檔案結構已預留）。
- [x] **通知系統規格拷問輪** — 已跑（2026-07-07），結論見「通知系統規格」節。**衍生小閘門**：W6 備課時實測各語言 container→Render，可行者升 hands-on（PHP 機率高；JSP/.NET 保守維持 demo）。
- [x] **通知管道定案** — LINE 為主／Discord 備援；e-mail 保留（見「通知系統規格」節）。
- [ ] **Copilot 授權採購確認** — 影響 W4 P7 可拆卸模組上不上。
- [ ] **W6 環境分支雙環境實測** — W6 備課時：preparing↔production 能否以 GitHub Environments ＋ 兩個 Render service（或改用既有 Cloudflare 兩 env）做出；決定 GitLab Flow 在 W6 是 hands-on 或維持概念收尾。**已知**：單一 deploy target 靠 env var 切不出兩個 live 環境（需兩 target 各帶 env var）；GitHub Pages 一 repo 僅一站，不適用此題。

## 已廢棄決策（供追溯）

| 決策 | 廢棄原因 |
|---|---|
| 單一學員 repo 從零自建、六週長大（雙軌 `site/`+`notify/`） | 改為每週情境 repo + W6 capstone；雙軌構想移交 capstone 規格輪 |
| AI 內容集中 week-4 下午 | 改為每週 P7；MCP 仍錨定 W4 |
| 骨架四固定件（開場地圖／實作題卡／收尾三頁／cheat sheet） | 改為 v2 骨架（見上）；開場回顧與收尾三頁式取消 |
| 講師參考 repo 打 `week-N-done` tag 當救援點 | 由每週獨立情境 repo 天然取代 |
| 每天 2 個實作案例（AM/PM 各一） | 精簡為每週 1 個（P5–P6 情境挑戰） |
| 每週 skills 同包附工具無關 prompt 降級版（v2） | 2026-07-10 取消：預設學員皆裝 Antigravity，逐週 prompt 版形同冗件；**Antigravity 整線驗證失敗的 prompt 包降級路線不受影響**（仍在閘門節） |
