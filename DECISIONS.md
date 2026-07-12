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

固定件：**P0 Starting 章**（每份 deck 起頭：簡報封面＋上午目標；下午目標頁移至午休後，繼任原「本日目標」單頁；W4 加記憶恢復頁）／**週 repo 導覽頁**（🧭）／**情境挑戰卡**（🔨 固定格式：劇情、目標、步驟提示、驗收條件、求救方式）／**P8 Ending 章**（固定收尾四頁：✅ 上午回顧 → ✅ 下午回顧（確認技能樹亮了＋口頭發布回家任務；實質 data.json 更新儀式已移至 P6 情境挑戰，隨當週 Git 技能長大）→ 下週預告 → THANK YOU（badge 標下次上課時間）；繼任原「Recap → 預告」兩頁式；W6 為結業擴充版、CONGRATULATIONS 收尾）。P0／P8 為章節序、不佔獨立時段（P0 在首教學堂開頭、P8 在 P7 末 5 分）。骨架落地細節見視覺線「週 deck 骨架 v1（2026-07-12）」。
P7 為純 AI 段，頁面採「demo 劇本 + 跟做者指令框」雙用格式，Ending 章接於其後（時間上共用 P7 的最後 5 分鐘）。
無獨立開場回顧頁與作業頁（作業以 Ending 的預告頁＋口頭發布承載，維持 spec「辦理課後作業」合規）。
畫布規格：16:9、1920×1080 CSS px（全 deck `canvasWidth: 1920`，設計稿座標逐字照抄；繼任 980×551.25 Slidev 預設）、內容安全區＝設計稿 padding（上 72／左右 100／下 140）。

## 視覺線（templates.html 轉換，拷問輪定案 2026-07-09）

Claude Design 交接 `templates.html`（91 張版型：17 個通用類別＋git／github／ai／shell 主題雛形）＋ `spec.md`（tokens 與結構說明）。轉換為 Slidev 客製 layout，檢視載具為本機 `apps/templates` deck（cover-01 深色頁不轉）。

**定位（2026-07-12 補）**：brand 系列 layout（`git-*`／`gh-*`／`ai-*`／`sh-*`）＋參數化元件（`Git*`／`Gh*`／`Ai*`／`Sh*`）與 `apps/templates` 皆為**參考模版／視覺詞彙，非最終正式元件**；實作週投影片時逐情境客製（例：`git push` → 專屬 `git-push` layout，而非套通用 `git-03`）。開放問題：哪些參數化元件真的還值得資料驅動的通用性（如 `GitGraph`），哪些只是待複製改的骨架。

| 分支 | 決策 | 理由 |
|---|---|---|
| Layout 落點 | 直接進 `shared/`（slidev-addon-shared 加 `layouts/`） | templates deck 只是第一個消費者，六週 deck 直接繼承 |
| 畫布座標系 | 全專案 `canvasWidth: 1920`（推翻 980 canon，見「Deck 骨架 v2」畫布行） | 設計稿數值逐字照抄、永遠可與 templates.html diff |
| 內容介面 | Frontmatter YAML 一統天下，md body 棄用；YAML 字串內 `**粗體**`／`` `code` `` 由 addon inline 渲染 helper 處理 | 一張 slide＝一包可驗證資料，對 AI 批量產頁最友善 |
| 共用 chrome | eyebrow 走 deck 級 headmatter、頁碼由 `$page` 自動產生，逐頁可覆寫 | 739 頁免手填 |
| 變體機制 | 同一 layout 用 props 切換（`variant: dark`／`brand: github\|ai`）；chapter-01 深色保留 | 骨架單一事實來源，改版只改一處 |
| 主題雛形 20 張 | 同步 layout 化＋圖形元件化（GitGraph、WorkflowDAG、終端機模擬等） | W1（7/18）即消費 shell／git 圖形，在關鍵路徑上 |
| 圖形驗收 | 風格一致即可（色票／筆觸／字體／節奏），座標由元件自動排版 | 保住週 deck 作者介面，不被一次性像素對齊綁架 |
| 隔離機制 | `apps/templates` commit 進 git、`build.mjs` 排除名單擋掉 | 避開 gitignore 的 pnpm lockfile 陷阱，順勢成為常駐 style guide |
| 導覽組織 | 從 cover-01 起嚴格照設計稿類別與編號排序，畫面零外來物 | 檢視時與 templates.html 逐張對照 |
| 深色模式（2026-07-09 追加） | 全域機制：`html.dark`（Slidev 深色切換）下重映射中性 token（`--paper→--dark-bg`、`--ink→--dark-ink`、`--ink-3→--dark-ink-2`、`--line→--dark-line`、`--line-2→--dark-node`），所有 layout 隨 token 自動翻轉；「白字於品牌色」以 `#FFFFFF` 字面值釘住；chapter-02（滿版品牌）整頁鎖亮；chapter-01 深色示範頁併回單頁（templates deck 89 張） | 映射表由設計交接的兩張深色樣張逐色反推（樣張 SVG hex 亦吻合）；一處重映射即翻轉全部，不必逐 layout 寫深色邏輯 |

隨行約定：layout 命名＝設計稿 template id；design tokens 與 Google Fonts 由 addon styles 全域載入；templates deck 佔位文字逐字照抄設計稿。

交接檔處置（2026-07-10 確認棄置）：`templates.html`／`spec.md` 於轉換與逐張驗收完成後棄置、未進版控；視覺對照基準自此＝`apps/templates` deck 本身（設計稿數值已逐字固化在 layouts 內）。

深色模式待辦：樣張未覆蓋的延伸推導（`--ink-2`、`--ink-4`、`--panel`、三色 tint 深色值、講師照片佔位灰）待設計線回填定案。

深色治理四家族（2026-07-10 完成，取代前述「屬下一輪」）：git／github／ai／shell 圖形元件（`GitGraph`／`GitSyncLanes`／`GitAreaFlow`／`GhWorkflowDag`／`GhStatusIcon`／`AiAgentLoop`／`ShFileTree`）的 hardcode 中性 hex（面板／線／字／卡片底）全數改走 `var(--token)`——值＝原 hex，故**亮色像素不變**、深色由 `html.dark` 自動翻轉；品牌／語意色走對應 token（跨模式恆定），圓圈上的 ✓／✕ 釘 `#FFFFFF` 字面。機制：`fill`／`stroke` presentation attribute 可解析 `var()`（本機 Chrome 實測），毋須改寫成 CSS class。深色卡片底推導＝`var(--paper)`（比面板深一階、如「面板上挖的窗」）。並在 `html.dark` 補上 diff 綠／紅底＋字的深色 remap（`--diff-add/del-bg｜ink`，GitHub 深色 diff 調），一併修好 AiDiffPanel 的 diff 帶與 GhWorkflowDag 的 err 節點底。逐頁校驗：`apps/templates` git／github／ai／shell 全頁亮＋暗截圖過（亮色不變、深色不再有亮塊）。殘留：AiAgentLoop 的 MODEL／TOOLS 深紫節點字（`--brand-ai-deep`）於深色 tint 上略暗但可讀，隨三色 tint 深色值一併待設計線定案。

面板圓角範圍（2026-07-10）：全域 `.slidev-layout .panel { border-radius:14px }` 只服務終端機與其配對淺色面板；image-03 雙圖框剛好也叫 `class="panel"` 而被波及，改名 `class="frame"` 脫離匹配、維持方角（根因修法，非 `:not()` 排除）。

細部調整（2026-07-10，取代前述「chapter-02 滿版品牌鎖亮」）：**chapter-02（滿版品牌扉頁）退役刪除**，章節扉頁統一走 `chapter-01`（白底＋巨大出血編號）＋ `brand: git|github|ai` prop 切換強調色（編號／slug／eyebrow MODULE 同步；MODULE 名固定 ONBOARDING），三變體皆白底、深色隨 token 翻轉、無需釘 `--paper`。其餘：inline-code 深色底改 `--slidev-code-background: --dark-border`；eyebrow 分隔符改真圓點（垂直置中，取代下沉的「·」字元）。（終端機曾試 mac 三顆灰色視窗鈕＋倒角，2026-07-10 還原：灰鈕於深色底對比過低、去掉品牌狀態點後整體讀來太素，恢復原「標籤＋品牌色狀態點」直角面板。）

元件層對齊（2026-07-10）：`shared/components` 全數重構至與 layouts 同一慣例 — 移除檔頭註解、inline style 歸零（靜態樣式進 `<style scoped>`、狀態差異走 `:class` modifier、參數化數值 props 以 CSS 變數注入）；SVG 幾何／色彩維持 attribute（非 CSS，不在此列）。88 頁 × 亮暗全量像素 diff 驗證 0px 差異。同輪盤點：無可棄用元件（`GhStatusIcon` deck 用量 0 但為 Gh 三面板內部 import 的葉子 icon；`WeekBadge` 為唯一被六週 deck 直接消費者，其餘 25 個皆由 layouts 消費）。

templates deck 結構重組（2026-07-10，張數改判 **85**，取代前述「89 張」「88 頁」；並鬆綁「導覽組織：嚴格照設計稿類別與編號」）：deck 自此為**經策展的活參考**，不再與棄置的 91-template 設計檔 1:1 對應。

- **新增兩類別（排序在 git 前）**：`statement`（巨型置中宣言：Q&A／THANK YOU／LUNCH，抽自 end-02／end-04／break-02）、`metric`（巨型數字：30→2 MIN／37 MINUTES，抽自 compare-04／story-04）。抽出即改名（含各 .vue 內部 `slidev-layout xxx`＋`.xxx{}` class）。
- **移除三版型**：break-03（倒數）、transition-01、transition-02（含 .vue）。
- **原類別遞補編號、無斷號**：end→01-02、break→01-02、transition→01、compare→01-04、story→01-05。只有 `apps/templates` 消費這些 layout（week／onboarding 未引用），改名不外溢。

同輪細部對齊（`apps/templates` 逐頁截圖驗）：
- **左側 panel header 統一**＝`.panel-head` padding `24px 44px`＋label `font-size: 24px`（對齊 git；github-01~03／`Ai*` 原 18px／23px 收斂，github-02 OPEN 徽章 padding 5→3px 免撐高 header）。
- `lab-04` 右側終端寬 780→**672px**（＝git/github/ai/shell 版型終端寬：左面板 1000＋gap 48）。
- qa 頁去右下角 think／answer／vote 佔位標籤；`qa-02` 背景「!」浮水印 `--brand-git-tint`→`--panel`（對齊 `qa-01`「?」）；`qa-04` 非 active 選項方框 `3px ink`→`1px line-2`＋字 `ink-3`（對齊 image-03 BEFORE／diagram-02 EXPECTED 淡框）。
- `diagram-02`（心智模型對照）圖上標籤改置圖下（對齊 `image-04` 圖→說明排版）。

statement 家族統一＋擴充（2026-07-11，張數 85→**84**，接續前一則）：
- **五頁一規格**：`statement-01~05`＝Q&A／THANK YOU／LUNCH／GROUP／BREAK，共用單一版面——置中 flex、gap `44`、**headline `font-display` 180px／700／ls −0.03em** ＋ **sub `font-sans` 36px／0.1em／ink-3** ＋ **底部 in-flow 有框 chip**（sub 下、置中群組內，三者逐列對齊）。品牌強調點依字而定（Q&A 的 `&`、THANK YOU 的 `YOU`、LUNCH 的 `.`；GROUP／BREAK 為單字無 accent、品牌色由底部 chip 承載）。原 01-03 字級／底部元素各異（headline 220/180/200、statement-01 contact 曾為 absolute 釘底），此輪收斂到上述單一規格。
- **再併入兩頁**：statement-04←qa-05（分組討論→**GROUP**，雙 chip：TIME accent／TEAM·3–4 人）、statement-05←break-01（中場休息→**BREAK**，品牌 badge）。英文只換 headline，副標與 badge 維持中文（同 01-03 慣例）。
- **連帶**：`break` 類別整個移除（break-01 併入 statement、break-02「即將開始」移除）；`qa` 收成 01-04。

git／link 細修＋型別檢查（2026-07-11，張數 84→**83**，接續前一則）：
- **link 家族**：voting-steps 版型（原 link-02）移除；兩碼頁改成「link-01 中心組（QR＋橘 url＋灰 desc）**水平 ×2**」，字級／間距對齊 link-01（url 52／desc 32／群組內 gap 44），並遞補為 `link-02`。link 現＝01（單碼）／02（雙碼）。
- **git 線圖上色慣例**：主幹 commit 走橘（`node: brand`／`head`），feature 支線與「共用歷史」走灰（`gray`）；逐 deck 依語意標（git-01 chore、git-04 docs＋chore、git-05 feat UI＋docs＋chore 皆轉橘）。
- **`GitSyncLanes` 增能**：加 `sharedUntil` prop → lane 線雙色（前段共用歷史走 muted 灰、後段領先段走 lane tone）；無 ghost 的 lane 線改**收在最後一個 commit**（退役原「照設計稿 +110px 突出／延伸到 840」）；brand lane 的 label 由 `--ink` 解耦成 `--brand-git`（僅 LOCAL 受影響）。git-03 據此呈現「灰共用歷史＋橘領先 2 commit」。
- **`GitGraph` 深色**：CONFLICT 標籤字釘 `#FFFFFF`（原 `--paper` 深色會翻黑）；危險列紅底於深色加濃，走 scoped `html.dark`（不動共用 `--diff-del-bg`、ai diff 不受影響）。`GitAreaFlow` 非 active 區框線 `--line-2`→`--ink-3`。git-02 的 REPOSITORY 只留 commit message（移除 hash 行）。

型別檢查（新工具鏈，取代「完全無靜態檢查」現況）：`shared` 加 `vue-tsc --noEmit`（`pnpm typecheck` ／ `pnpm -C shared typecheck`）——只檢 `layouts`＋`components` 的 SFC（`setup/` 用 `#slidev/slides` 虛擬模組故排除）；`shared/tsconfig.json` 設 `strictTemplates: false`（放行 Slidev 全域元件／`$page` 等 tsc 不認得的名字，仍檢 `<script>` 的 props／邏輯），`@slidev/client` 以 `shared/slidev-shims.d.ts` 結構化 shim（比照 `setup/main.ts`、`constants/vite-env.d.ts` 的做法）。catalog 釘 `typescript`／`vue-tsc`。已驗證：注入型別錯誤 exit 1、乾淨時 exit 0。仍**無單元測試框架**（維持 CLAUDE.md「不設測試框架」取向，此為型別保險非測試）。

品牌色階規則釘死＋github／ai 主色改中間調（2026-07-11，接續前一則；不影響張數）：
- **色階規則（三系共用，先釘死免後手誤收斂）**：每支品牌色＝一支 4 階 ramp——`base`＝存在感（Eyebrow MODULE／chapter accent／inline-code／節點／線）、`-deep`＝強調、`-soft`＝**淺化品牌色（低對比安全場景）**、`-tint`＝底洗；深色只翻 `-tint`（base/deep/soft 恆定），全走色票零字面 hex（cover-01 殘留的字面 `#f05133` 已收斂為 `var(--brand-git)`）。
- **`-soft` 語意正名（非 bug，勿收斂）**：git 的 `-soft`＝HEAD 光暈環、ai 的 `-soft`＝深底面板文字（AiChatPanel／AiMonoPanel），落點不同但抽象職務一致＝「飽和 base 太重或對比不足時的淺化版」。
- **深底高亮＝該色相在深底可讀的品牌階**（非「大家都用同一階」）：git／shell 終端走 `--brand-git`（base，橘 #F05133 深底夠亮）；ai 終端走 `--brand-ai-soft`（base 紫太暗）；github 終端（GhCodePanel）不走品牌色、走語法著色 `--code-blue`／`--code-orange`。
- **由上導出的主色改動**：github／ai 的 base **只落在白底 chrome**（深底終端另走 code-blue／-soft，不碰 base），故 base 可偏亮。主色由交接暫定值改中間調：GitHub `#0969DA→#388BFD`、AI `#7C3AED→#8B5CF6`——白底仍可讀（~3–3.8:1，過 AA-large；本系品牌字皆 ≥24px mono）、且比原色輕盈。**取捨**：低於原色的 AA-normal 4.5（投影大字場景可接受）。`-deep`／`-soft`／亮色 `-tint` 維持原階（ramp 仍單調）；深色 `-tint` 的 rgba 由新 base 重導（github `rgba(56,139,253,.18)`／ai `rgba(139,92,246,.2)`）。**git 不動**（其 base 要扛深底終端）。曾試「主色＝終端淡色」（github #6CB6FF／ai #C4B5FD）但白底小字糊掉、退回中間調。驗證：p3／p4／p69／p74 亮＋暗截圖過。

終端裝飾語意層 `-term`＋衝突頁去紅（2026-07-11，接續前一則；不影響張數）：
- **新增 `-term` 語意層（取代前一則的「深底高亮直接引用 base/soft」做法）**：對話/日誌終端（GitTerminal／AiChat·Mono）的品牌裝飾改走**角色命名**的 `--brand-{x}-term`，不再直接引用 ramp 的 base/soft——使用端規則收斂成一句「終端裝飾＝`--brand-{x}-term`」，base/soft 的「為何這裡那裡不同」收進 token 定義註解。值＝各色相「深底又亮又不失色」的專調：`--brand-git-term: #FF7A45`（比 base #F05133 亮，滿足「終端高亮不可與品牌 ramp 同色」）、`--brand-ai-term: #C4B5FD`（＝原 `-soft` 值，等值 repoint、ai 無視覺變化）。原則不變（用該色相在深底可讀的亮色），只是換成命名即用途的獨立層。**github 程式碼終端不在此列**（GhCodePanel 走語法層 code-blue/orange，是語法高亮非品牌指針）。曾探討「三系終端內外同色」：git 內外同 base 是橘色相甜蜜點（深底 ~4.7:1）而非規則，強行讓 ai 內外同 base 會過暗（實驗 p74-78 後退回 soft 亮度）。
- **git-04（p67）衝突頁去紅、融入 git 常規視覺**：左側線圖高亮列 `bg: danger`（紅 `--diff-del-bg`）→ `bg: tint`（橘 `--brand-git-tint`，同其他 git 頁），衝突改由 **CONFLICT 標籤**（白字深橘）＋ `MERGING · 1 conflict` meta 呈現；終端 CONFLICT／UU 兩行 `warn`（珊瑚橘 `--code-orange`）→ `dim`（輸出灰 `--dark-ink-2`，同其他 git 頁的輸出行慣例：`UU` 對應 git-02 的 `A validation.js`）；語意改用灰 `comment` 註解說明、各置於**所說明那行的正上方**；橘色高亮的 `# →` 行動註解維持在最下（與其他頁對齊）。pending 衝突節點的淡紅填色（`--diff-del-bg`）保留。
- **`bg: danger` 退場（取代前一則「危險列紅底於深色加濃」）**：全 deck 無人使用，移除 `GitGraph` 的 `.commit-row.bg-danger` 亮/深樣式 ＋ `bg?` 型別的 `'danger'` 選項（GitGraph＋git-01/04/05 四處）。`--diff-del-bg` token 保留（仍服務 pending 節點填色、AiDiffPanel、Gh* 面板）。typecheck 綠。

終端系統色統一＋git／github 面板細修（2026-07-11，接續前一則；不影響張數）：
- **終端表面色統一為灰**：`--term-bg` 亮色從 `#1F1F1F`（近黑）改 `#2a2a2a`（＝原深色值），兩模式一致；`--term-hl` 提到 `#383838`（否則與新底同色、AiChatPanel 對話泡泡消失）；html.dark 的冗餘覆寫已刪。git／github／ai／shell 四類終端底色皆轉灰。
- **終端 `#` 註解統一高亮**：GitTerminal `.ln-comment` 灰（`--ink-3`）→ `--brand-git-term`、ShTerminal `.line-comment`/`.cmd-comment` → `--brand-git`；GhCodePanel（`--code-blue`）、Ai note（`--brand-ai-term`）本就高亮。全終端 `#` 註解自此皆品牌色高亮，與白色指令、灰色輸出三層分明。
- **終端 error／warning 分工**：新增 `--code-red: #F85149`（GitHub 深色 diff 紅、恆定），`GhCodePanel .k-err`（FAIL）從 `--code-orange` 改 `--code-red` → 讀作「失敗」而非「警告」，並與左側面板 `--err #CF222E` 紅一致（修 p72 左紅右橘的不一致）；`--code-orange` 保留給 warning。（語意 `--err` 深底 ~2.5:1 太暗、不適用終端。）
- **git 終端輸出統一 `dim`**：所有 git 終端指令輸出行走 `dim`（`--dark-ink-2`）——git-01 唯一的 `out`（Merge made by the 'ort' strategy）收斂、p67 CONFLICT／UU 亦 `out`→`dim`。`kind: out`（亮輸出）現全 deck 無人用，**保留**為可用行類型（非棄用做法，異於 `bg: danger`）。
- **git 終端每指令意圖註解**：p64-67 從「頂部一行總註解」改為「每個 `$` 指令上方一行意圖註解」（p64-66 補齊、p67 把 CONFLICT／UU 說明併入指令註解），底部橘色 `# →` 行動指針保留。
- **git commit graph 一致性**：「chore: 專案初始化」殘留的 `muted: true`＋`hashTone: faint`（與自身 `node: brand` 及同輩 commit 矛盾、應為轉橘節點時漏改）移除 → 深字＋`--ink-3` dim hash，與 docs/feat 一致（p64/67/68）。
- **github-02（p70）PR 面板重設計**：左側從「CI checks 清單（`GhChecksPanel`）」改為「PR 生命週期」——分支列 `main ← feature/login`（base 前、`←` 指向 main）、GitHub PR 頁籤 chrome、時間軸（開 PR → approved → 可合併，末節點環狀強調比照線圖 head）、merge 按鈕通過檢查後轉綠（`--ok`）；依「資訊太密」再精簡（刪頁籤列、移除 checks 節點、放大剩餘、間距收斂）；右側 gh 終端改為 create → checks → merge 工作流弧線。**`GhChecksPanel` 已刪除**（唯一消費者移除後孤兒，`checks`/`Check`/`Status` 相關型別一併清）。typecheck 綠。

左側 panel-head 右側 meta 統一（2026-07-11，接續前一則；不影響張數）：所有左側 panel 標題列右側統一為**灰色描述型 meta**（`--ink-3`）——git/github 本已灰；AI 補齊：AiPromptAnatomy 衍生「N 段結構」、AiAgentLoop default「model ⇄ tools」新增右側 meta，AiCodeReview 的「AI 標註」badge 紫（`--brand-ai`）→ 灰；AiDiffPanel（±號帶色 stat）、AiContextPanel（hint）本已灰不動。**保留語意色特例**（使用者定案）：github-02 的 `OPEN` 狀態徽章、github-04 的 `✕ failure` 紅——屬狀態/警示信號、非描述型 meta，改灰會損語意。typecheck 綠。

panel-head 對齊 body ＋ 左標籤精簡（2026-07-11，接續前一則；不影響張數）：
- **panel-head 左右 padding 對齊 body**：git panel-head `24px 44px`→`24px 36px`（對齊 GitGraph commit-row 右 36px，使 meta「main ← feature/login」與 hash「f7a8b9c」右緣切齊）；github-02 pr-body `48px`→`44px`（對齊 panel-head 44px）；GhRunLog（body 44px）、AI 五元件（body rows 44px）本已與 head 44px 對齊、不動。
- **左標籤（panel-label）只留全大寫英文**：去掉非大寫尾綴——github-02「PULL REQUEST · #128」→「PULL REQUEST」、github-03/04「RUN LOG · deploy.yml/ci.yml」→「RUN LOG」、github-05「MATRIX · test」→「MATRIX」；AiDiffPanel heading「DIFF · login.js」→「DIFF」、AiCodeReview「CODE · profile.js」→「CODE」（檔名等資訊改由標題列 meta 承載）。
- **git-03（p66）meta 去橘**：`↑ ahead 2` 的 `.panel-meta` 由 `--brand-git`＋`font-weight:600` → `--ink-3`（與其他 git 頁 meta 一致）。
- **p71/p72 run 編號查核（結論：無需改）**：兩頁 steps 實為同一 pipeline（Set up job→checkout→npm ci→npm test→deploy→cleanup，差在 test 過/失敗），舊 `deploy.yml`/`ci.yml` panelLabel 與 steps 矛盾、經上述標籤精簡後移除；#1042（p71 running）→ #1043（p72 failed）遂成同一 workflow 連續執行、p71 在前，合理。

終端註解層次化（2026-07-11，接續前一則；取代前述「終端 `#` 註解統一高亮」）：全數高亮太搶眼，改為兩層——**中間的意圖註解走暗色**（GitTerminal `.ln-comment`、ShTerminal `.line-comment`／`.cmd-comment` → 新增 `--dark-ink-3: #757575`，比輸出 `--dark-ink-2 #ABABAB` 再暗一階、兩模式恆定），**只留最底一則 note 高亮**（GitTerminal `.ln-note`、ShTerminal `.line-comment.is-accent` 維持 `--brand-git`(-term)；github/ai 終端本就只有一則 note，維持 `--code-blue`／`--brand-ai-term`）。並將所有 note 前綴「# → 」統一改「# 」（去箭頭，slides.md 19 處；`# → ` 只出現在 note 前綴，內文如「HEAD → main」不受影響）。

逐頁細修（2026-07-11，接續前一則；不影響張數）：
- **p66 GitSyncLanes**：ghost 虛線改收在最後一個 commit（`L 840` → `L slotX(cs.length-1)`），不再延伸超出節點。
- **p75 AiPromptAnatomy**：全部 section label 統一為 03 的紫（原 01/02/04 用 base、03 用 deep），改為亮色 deep／深色 soft（mode-flip，全 label 一致、對比高）。
- **p76 AiAgentLoop**：tool call（右，實線）與 result（左，虛線）迴圈曲線重畫成鏡射於 x=480，MODEL 端接底邊、TOOLS 端接**左右側邊**（x=380／580），兩箭頭都落在框邊緣可見（原 tool call 箭頭藏在 TOOLS 框內、且左右不對稱）；edge-label 移到 TOOLS 兩側（避免壓線）。箭頭尖角個別微調（刻意、非對稱）：result 箭頭尖端釘在虛線終點、中軸對齊該處切線（貼線不歪）；tool call 箭頭繞尖端略逆時針傾一點。
- **p77 AiCodeReview**：note-card（HIGH RISK）上下 margin 8px→24px，不擠 L24/L25。
- **深色 badge 白字**：AiContextPanel `.badge-in`（IN）、ShFileTree `.node-badge`（你在這/現在/NEW）、`.node-chip.is-hl`（highlight 的 `.` chip）文字由 `--paper`（深色翻黑）釘死 `#FFFFFF`（白字 brand 底、兩模式恆定；chip 非 highlight 的 `--ink` 底不動，避免白疊白）。

高亮 note 置底（2026-07-11，補「終端註解層次化」那則）：高亮 note 除了是最後一則、還用 `margin-top: auto` 推到終端機**最底一行**（比照 AiChatPanel `.chat-note`；content 靠上、note 貼底、中間留白）。GitTerminal `.ln-note`、ShTerminal `.line-comment.is-accent` 鎖 class；GhCodePanel／AiMonoPanel 因 note 的 tone/kind 與 `##`／語法行共用，改鎖 `.code-line`／`.mono-line:last-child`（已驗證各終端 note 恆為最後一行）。五類終端（git／shell／gh-code／ai-mono／ai-chat）一致。

深色 tint 上的深紫字修正（2026-07-11，接續前一則）：`--brand-ai-deep`（#5B21B6 深紫）當**文字**疊在會隨深色變深的 `brand-ai-tint`／`paper` 底上時，深色模式下深疊深、對比極低（亮色則深字淺底、正常）。修法＝**隨模式翻轉**：亮色維持 deep，深色改 `--brand-ai-soft`（淺字深底）——AiPromptAnatomy 的 section label（p75 後統一全部 label：`html.dark .section-label`）、AiAgentLoop 的 MODEL／TOOLS 節點字（加 `.is-accent` class → `html.dark .node-text.is-accent { fill: --brand-ai-soft }`）。解掉前述「AiAgentLoop 深紫節點字於深色 tint 上略暗」的殘留。通則：任何「brand-*-deep 當文字 × brand-*-tint／paper 當底」都須此翻轉，deep 只適合亮底。

週 deck 骨架 v1（2026-07-12，張數 83→**84**；視覺線首次長成正式週 deck）：七份 deck（W1 範本定稿講師潤稿 → W2–6 複製，各週變數取自 docs/curriculum 的 P 堂標題）建立通用框架頁，教學內容以 HTML 註解標記 P 堂空檔、逐堂填入。

- **骨架序列（13 頁）**：封面（`cover-01` 併入 headmatter，slide 1 即封面、免空白首頁）→ 上午目標 → BREAK ×2 → LUNCH → 下午目標 → BREAK ×3 → 上午回顧 → 下午回顧 → 下週預告 → THANK YOU。W6 特例（12 頁）：下午目標僅兩列（`P4-6` 結業專題＋P7 AI 壓軸）、無下週預告、結尾 CONGRATULATIONS。
- **封面慣例**：display／heading 固定課程全名（GitHub Actions CI/CD／自動化與 AI 協作實務班），逐週只變 MODULE（headmatter `module:`，Eyebrow／cover 同吃）與 date「2026.MM.DD · 第X週」。
- **目標頁（intro-01）**：以 P 堂為節點（上午 P1–P3、下午 P4–P7），desc 為自然語句、不帶【NN】；`.agenda` padding-top 48→80（+32 視覺留白）；`.agenda-no` 加 `white-space: nowrap`（W6「P4-6」長編號溢入 gap、不折行）。
- **休息頁**：BREAK（statement-05）sub「休息十分鐘，走動一下、補水，整理剛剛的指令」；LUNCH（statement-03）sub「休息一小時…」；badge 統一「BACK · HH:MM」（時刻＝下堂開始）。
- **Ending 四頁**（繼任骨架 v2「固定收尾兩頁」，該節已同步改）：回顧拆上午／下午（end-01 ×2，成果式語句）→ 下週預告（content-01，「下週預告：」後 `==橘色高亮==`；W3 版為「兩週後見」＋8/8 停課說明）→ THANK YOU（statement-02，badge「BACK · MM.DD 09:00」；W3 sub 提停課；W6 改 CONGRATULATIONS）。
- **元件／版型層**：`MdInline` 新增 `==text==` → 品牌橘 accent 語法（與 `**bold**`／`` `code` `` 同層）；statement-02 增選填 `badge` prop（同 03/05 樣式、列於 contacts 前）；**statement-06 新增**（CONGRATULATIONS 固定字、整字品牌橘；家族 180px 容不下 15 字母、降 148px 並註記）；statement-03 LUNCH 整字轉品牌橘、去橘色句點；end-01 footer 改「有 `next` 才渲染」（無 next 時分隔線與橘字一併不出）、`.items` 改 `flex-start` 固定列距（取代自適應置中，回顧頁不同項數節奏一致）。
- **配色**：週 deck 未釘 `colorSchema`（auto、跟觀看者系統；亮暗皆逐頁驗過）。

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
