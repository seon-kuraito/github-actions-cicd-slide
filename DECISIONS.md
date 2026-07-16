# 內容規劃決策紀錄（v2）

課程：GitHub Actions CI/CD 自動化與 AI 協作實務班（2026/7/18–8/29，六個上課日，42h）
依據：`spec.csv` 課程大綱。v1 定案 2026-07-02；v2 重構定案 2026-07-04（每日結構、repo 策略、AI 線全面改版，v1 被推翻項目見文末）。v2.1 微調 2026-07-07：repo 策略切為「W1–W3 個人 Dashboard／W4–W6 通知系統」、capstone 改「完成自建的最後一哩」（推翻 v2 的「notify 自 W2 漸進快照」與「W6 Fork 完整系統一次跑完」）。

頁級課綱見 [docs/README.md](docs/README.md)（索引）。

## 貫穿原則

- spec 字面列出的項目**至少 slide 級出現**；深度與講授順序自由裁量。
- 與 spec 的差異**記錄成文件**（[docs/README.md](docs/README.md) 差異表），並於 W1 第一堂課向學員說明。
- 過時內容以繼任者替換，並保留一句「它是誰的繼任」。
- `week-N` deck ↔ 第 N 個上課日。Slides 繁體中文，指令與術語英文（中文用字細則見下節「中文用字統一」）。
- 內容**可以講不完，但不能提早結束**：必講頁前置、溢出頁（標 `(溢)`）後置。

## 中文用字統一（2026-07-16 起；①–⑥ 為 W1 deck 全量盤點，⑦ 於 2026-07-17 首次跨全六週收）

上節「Slides 繁體中文，指令與術語英文」在 W1 落地時長出的細則。**W2–W6 寫 deck 前先讀這節**；deck／curriculum／kit 三份同步（同 CLAUDE.md 的 curriculum↔kit 耦合規則）。總原則：**同一個東西只給一個名字；不同的東西不共用一個名字；引用系統／UI 的字，就用系統的字。**

- **① 資料夾 → 儲存庫（「專案」不在這條鏈上）**：**資料夾**＝檔案系統目錄，也是 VS Code 的工作單位——**「開啟」的受詞永遠是它**；**專案資料夾**＝複合詞，中心語仍是資料夾；**資料夾 ＋ `.git` ＝ 儲存庫**（repository／repo，接軌 GitHub UI；定義落點 W1【06】）。**專案**＝你的作品／工作這個**抽象概念**（「Git：專案的時光機」「公司專案 vs 個人專案」「skill 對所有專案生效」皆正確、勿動），**但不當作可被「開啟」的東西**。**決定性依據**：VS Code **沒有 project 概念**——app bundle 實測只有 `Open Folder`／command id `openFolder`／`openWorkspace`，`Open Project` **零筆**（有 project 概念的是 Visual Studio `.sln` 與 IntelliJ）。教「用 VS Code 開啟專案」＝教一個學員在 UI 上**找不到**的東西。W1 修 4 處（deck 3 ＋ kit 1）。
- **② 終端機（不用「命令列」）**：此物在 W1 曾有四個名字——終端機 39／shell 24／CLI 12／**命令列 5**。前三個各有定義落點且屬**不同層級**，全部保留：**終端機**＝視窗／app（W1【03】定義、且是章節標題）、**CLI**＝該頁定義的英文術語（CLI vs GUI）兼產品名（`Antigravity CLI`）、**shell**＝【03】另有落點。只有「命令列」**從未被定義**、是憑空的第四個名字，W1 收掉 4 處（現行犯＝heading 才寫「開啟終端機」、body 下一句就改叫「命令列」的那頁）。**例外——引用系統原文時保留**：macOS 彈窗「需要安裝命令列開發者工具」。
  - **改寫前先判斷它代稱哪一層——不是一律換成「終端機」**：(a) 指**操作的那個視窗** → 終端機（W1【12】「專門給命令列使用的通行證」→「給終端機使用」；同段更前面的【！】頁早已寫「PAT 就是給終端機使用的通行證」，屬 deck 內部前後不一致）；(b) 當成 **CLI 的中譯**、指「相對於 GUI 的那類工具／協作方式」→ 改成 **CLI**，換成終端機語意就壞（onboarding 的「AI 命令列工具」→「AI CLI 工具」、「命令列協作精神」→「CLI 協作精神」；「AI 終端機工具」不成立）。
  - **本條是貫穿原則、不限 W1**：首輪只盤 W1 deck，onboarding（整堂開場放映）與 DECISIONS 自身都漏掉，事後回補。**且盤點不是一次性的**：【12】那兩處是盤點定案**當天**潤飾文案時新長出來的——規則寫下來的理由正在於此。
- **③ 指令（**不**改成「命令」）——本條結論是「不用改」**：W1 盤點 指令 40／命令 10，**無任何一處把「命令」當「指令」的同義詞**。10 處「命令」全屬 (a) 專有名詞（`命令提示字元`、VS Code `命令面板`）或 (b) 引用系統原文（「不是內部或外部命令」「在 PATH 中安裝 'code' 命令」）。**為何不能反向統一成「命令」**：① 會讓 `命令提示字元` 不再讀得出是專有名詞——它認得出來，正因周圍都是「指令」；② **微軟繁中自己用「指令碼」**（`Set-ExecutionPolicy` 的錯誤訊息「因為這個系統上已停用**指令碼**執行」，deck 有引用）——「指令」是微軟的用字，非自創，改成「命令」反而與被引用的系統訊息打架。
- **④ 動詞：輸入／執行（不用「打」／「跑」）**：同一動作曾正式與口語版並存（同一頁並存「**執行**一次 `git config…`」與「手動**跑** `git…`」）。**受詞是指令時**一律用 輸入／執行，W1 收 9 處。**不在此列、保留**（非「對指令的動作」）：打字、打錯字、設定跑掉、「像引擎本身就能跑」、「**跑**一輪部署流程」／「Actions 還沒**跑**完」（pipeline，deck 無競爭的正式版）、「**跑**在終端機裡」。**盤點價值**：15 個「打」裡只有 4 個該改——別無差別取代。
- **⑤ 檔案總管——官方撞名，只在定義落點挑明，不全面加前綴**：`檔案總管` 同時是 Windows File Explorer 與 VS Code Explorer 的**官方繁中名**，撞名是微軟造成的、改名這條路不存在。W1 六處逐一放回上下文皆**不會被誤讀**（一處在 `PS` 的 Windows 欄且與「Finder」並列；一處 heading 寫「使用 VS Code…」；一處同句有「File → Open Folder」）。故**不全面加前綴**（只多贅字、換不到清晰度），改在**首次登場的定義落點**（W1【04】）挑明一次：「它和 Windows 的檔案總管同名，**但只顯示你開啟的這個資料夾**」——認可撞名 ＋ 講出真正差別（**範圍**：整台電腦 vs 這個資料夾）。此句是【06】（Finder／檔案總管／VS Code 藏 `.git` 的方式各異；VS Code 是 `files.exclude` 預設排除 `**/.git`，非「隱藏檔沒顯示」，前兩者的做法救不了）的前提。
- **⑥ 小名（遠端）vs 別名（指令）——兩個都是「另一個名字」，但指的東西不同層，不可互換（2026-07-16）**：
  - **別名 ＝ 幫「指令」取的另一個名字**，且**已有定義落點**：W1【03】「它可能是 shell 內建、==別名（alias）==，或 PATH 找到的外部程式」——附英文、釘死為三種指令來源之一；下游 7 處靠它吃飯（`ls 是 Get-ChildItem 的別名`、`ni`／`cp`／`mv`／`cat`／`rm` 的 PowerShell 對照），W5【30】的「npm scripts：指令的別名」也接這條。
  - **小名 ＝ 幫「遠端」取的名字**（`origin`）：【11】「本地幫這個遠端取的小名（下一段會用到）」→【13】「本機會用一個小名記住這個遠端」。
  - **為何 `origin` 不能叫別名**：它不是指令。改叫別名＝把【03】定義過、用了 8 次的字拿去指另一層的東西——**與②收掉「命令列」是同一把尺**（同物異名該收，**異物同名不能混**）。
  - **`origin`「代表網址」在 W1 的深度是正確的**（實測：`git remote get-url origin` 直接吐回該網址、`git ls-remote origin` 真的拿它去連線）。嚴格說 `origin` 底下掛的不只網址、還有 `remote.origin.fetch` 的 refspec（正是 `refs/remotes/origin/*` 的來源）。**【13】`git push` 那頁現行文案採精確版**（「origin 代表一組遠端設定，其中包含網址」）——因為同頁按鈕按下就會生出 `origin/main`，那顆 ref 正是 refspec 的產物，此頁是全 deck 唯一「講到那個深度有回報」的地方。**已收口（2026-07-17）**：原「待確認」——小名鋪了沒收、斷在半空。**收口落點＝【13】`git remote add` 那頁、不是 `git push`**：`remote add origin <url>` 正是幫遠端取小名的那一刻，指令自己就在示範這件事；終端機底部 note 補「origin 就是那個小名，之後的指令都用它代替那串網址」。`git push` 頁維持精確版不動（小名是入門說法、精確版是深化，一淺一深不衝突）。【11】被潤稿潤掉的「小名」一併補回（「這個名字」→「這個小名」），三拍恢復：【11】鋪 →【13】qa 再鋪 → `remote add` 收。

- **⑦ commit 的量詞：個（不用「顆」）——本條首次跨全六週一次收（2026-07-17）**：W1 deck 曾同時存在 顆 23／個 4，**但那 4 個「個」全在骨幹上**——【07】章節扉頁「版本快照：完成第一個 commit」、P3 段標題「Git 身分與第一個 commit」、kit 分組 `>【07】第一個 commit`、以及 **SEO／OG meta**（分享連結的預覽文案）。現況是「**骨幹說個、內文說顆**」，故**統一方向＝讓內文對齊骨幹**；反向要動章節扉頁＋段標題＋kit 分組＋SEO meta，churn 更大且動到脊椎。**「顆」的錨點在 W1 本來就不存在**：它之所以順口是呼應 commit graph 的圓點，但 W1 全段沒有線圖（`git-01` 只剩 `git diff` 一張、`--graph` 頁是一排 `*`）——**圓點是 W2 的語彙**。
  - **同輪修掉「第一顆快照」×4（【15】data-05）→「第一張快照」**：這是把 commit 的量詞套到**快照**上。快照是照片類、量詞是**張**，而 deck 自己的比喻正好在打臉它——【07】寫著「`git commit`：保存到儲存庫（**按下快門**）」「用**拍團體照**記住三層架構」。**按下快門留下的是一張，不是一顆。**（統一成「個」會矇混過去，但「張」才準且與比喻同源。）
  - **範圍＝全六週一次收（68 處），不是只做 W1**：W2 10／W3 25（reset／revert／cherry-pick／rebase 整章都在數 commit）／W4 2。**依據就是本節②的教訓**——「首輪只盤 W1」上次已被記錄成失誤、事後回補。且 **W2–W6 的 deck 尚未建**，此刻改 curriculum，未來 deck 直接繼承；等 deck 建好再改，成本翻數倍。
  - **本檔（DECISIONS）自身亦已收（2026-07-17）**：依②的教訓——「首輪只盤 W1 deck，onboarding 與 **DECISIONS 自身**都漏掉，事後回補」。但**盤完只改 3 處**（`git log -p` 每個 commit／學員的第一個 commit／同一個 hash）：本檔 26 個「顆」裡，其餘全在**別的層**，正是這條規則「證明哪些不用改」的價值。
  - **不動的「顆」（逐處放回上下文皆非 commit）**：本檔內的**線圖圓點**（`有沒有那一顆`／`ghost ＝這一顆即將到位`）、**按鈕**（`這顆鈕`／mac `三顆灰色視窗鈕`／`給一顆 toggle`）、**色票**（`被白底否決的那顆藍`／`那顆值是在什麼面積下調出來的`）、以及⑦自身**引述舊文案**的對照（`第一顆快照`→`第一張快照`，改掉就沒得比）；`那顆 ref` 亦留——**ref 不是 commit**，且 `GitSyncLanes` 就是把它畫成圓點。元件端：`PanelToggle.vue`／`git-files.vue` 的「這**顆**鈕」、`GitSyncLanes.vue`／`ShDirListing.vue` 的「那一**顆**」「點一**顆**」（線圖圓點／狀態點）、docs/README「**顆**粒度」（詞的一部分）。**元件註解是寫給開發者的，不在「deck／curriculum／kit 三份同步」的範圍內。**

- **⑧ deck 的檔案敘事是連續的——每頁 show 的檔案，必須在那個時間點真的存在於學員的 repo（2026-07-17，一天抓到三次）**：
  ① `git restore --staged` 頁用 `secret.txt` 演示，但那個檔名**全 deck 只有那一處**；② `.gitignore` 的驗收要學員「確認被忽略的檔案不再出現」，
  但 `.env` **被三頁引用卻從沒有任何一頁叫學員建立它**（且唯一「出現」它的 `git add .` 是可跳過的 `>` 溢出頁）；③ `git diff` 頁演 `<p>hello</p>` → `<p>hello, world</p>`，
  但依 commit 歷史（`加上自我介紹段落`）那個檔案裡是「嗨，我是小明」。**三者都不會被任何工具擋下**——build 綠、typecheck 綠、頁面照常渲染，
  只有把整段的檔案狀態排成時間軸才看得出來。**寫任何終端機／面板內容前先問：這個檔案是哪一頁生出來的？** 若答不出來，它就是幽靈。
  （`.env` 的修法可當範本：不是刪掉引用，而是在**主線**給它一個誕生時刻——`>` 溢出頁不算，跳過的學員照樣沒有。）
- **⑨ 終端機輸出一律實跑驗證，不憑印象寫（2026-07-17）**：`git restore --staged` 頁掛的是 **`git reset` 的輸出**（`Unstaged changes after reset:`）——
  實跑證明 `git restore --staged` **成功時完全不印任何東西**。deck 教一個指令、卻 show 另一個指令的回應，而且**這比寫錯更難發現**：它看起來很合理。
  順帶的收穫是「沒有輸出」本身就是教學點（該頁現在寫「成功時不會印任何東西，用 `git status` 確認」）。**同理適用於旗標行為**：
  `git log -p` 每個 commit 佔 13 行、`--oneline -p` 只佔 8 行、`--graph` 在無分支時就是一排 `*`——這些都是實跑量出來的，不是查來的。

**方法論（W2–W6 沿用）**：每條都要 (1) **全量 grep**、(2) **逐處放回上下文判讀**、(3) 分辨「**真漂移**（同物異名，該收）」與「**官方撞名／專有名詞／引用系統原文**（不該動）」。九條裡 **③⑤ 兩條的結論是「不用改」**——盤點的價值不只在找出要改的，也在**證明哪些不用改**，否則下一輪會重問同一題。**⑥ 補上第三種情況**：不是「該不該收」，而是**兩個近義詞各有領地、要守住界線**——判斷法＝**問這個名字指的是哪一層的東西**（指令 vs 遠端），不是問哪個字比較順口。**反例警惕**：曾把 `ls -a` 同時寫成【03】與【06】兩張補充頁（連 `file:` 都逐字相同），kit 也各掛一條——重複不只發生在用字，也發生在頁面。

## 課程結構（v2 核心）

| # | 分支 | 決策 |
|---|------|------|
| 1 | 兩大產物 | **課程＝兩大產物，以 8/8 停課週對半分：①「技能 Dashboard」（W1–W3，個人、solo Git 載體）②「CI/CD 部署通知系統」（W4–W6，團隊，＝課程終點）。** 通知系統自 **W4 起逐週親手建**（W4 CI → W5 pipeline → W6 上半場容器化）；**W6 下半場 capstone＝完成最後一哩**（deploy＋notify），非 Fork 重跑；上游 repo 降參考／救援 fallback。**規格 W4→W6 增量長出**（見「通知系統規格」節）。 |
| 2 | 每日網格 | 7 堂 ×50 分（休 10 分）：P1–P5 教學 + sandbox 即幤練習 + GitHub 操作穿插；**P6 週 repo 情境挑戰**（當日技能重走一遍）；**P7 = AI 段 45 分 + Ending 5 分**。例外：W1 的 P1 為 onboarding 放映、W6 下半場（P4–P6）為 capstone。 |
| 3 | 週 repo | **W1–W3：個人 Dashboard** 為 P6 情境載體——solo Git 技能（W2 分支/衝突/PR、W3 救援/發版）皆在學員自己的 Dashboard 上逐步優化（技能與 repo 無關，用自己的東西擁有感最高）。**W4–W6：通知系統團隊 repo**（協作/CI/Docker/部署/通知——個人靜態 Dashboard 結構上做不到的都在此）。敘事弧 solo→team、personal→product；切點落在 8/8 放假週之後（W4）。省下 v2 的 `notify-w2`／`notify-w3` 兩個 repo。 |
| 4 | Dashboard（產物①）| **前三週主產物**。W1 建立（**init-first**：自建空 repo → 模板 ZIP 灌入 → commit → 建遠端 → push → Pages 手動上線；2026-07-14 改制，取代原「模板 → clone → 改資料 → push」，見表下條目）；**W2–W3 用當週 Git 技能逐步優化**（分支/衝突/PR、救援/發版），取代 v2 原「被動 Recap」。**技能點亮即其知識追蹤本體**（≠第二身分——名即所指；繼任 v2.1 前「全程兼知識追蹤」的副業框架）；W4 起退為每週 Recap。知識點見 `docs/kit/`。Pages 自動化部署為 W6 選配彩蛋。畫面歸 Claude Design，資料 schema 歸內容線。 |
| 5 | PR 時機 | **W2 首見 PR**（分支概念與命名教完後，於情境挑戰收尾發第一個 PR——好 PR = 好 branch＋好 commit，不提前到 W1 當儀式）；W4 深化為 review 文化、配對互審、Branch Protection、Issue；W2 起 PR 日常化；**配對互審輕線延續** W5（pipeline PR 走搭檔 approve）／W6（capstone 互驗部署），協作不鎖在 W4（2026-07-10 補）。 |
| 6 | W4 尾端前移 | spec day-5 的「CI/CD 概念 + 第一個 workflow」前移至 W4 P4，以 Branch Protection 的 required status checks 為橋；W5 專注測試/cache/artifacts/matrix。 |
| 7 | 受眾與角色 | 學員偏初階工程師、概念從零帶起；deck 混合偏講課主軸（指令效果上 slide、實作切 VS Code）；BYOD 為主，環境設定頁雙平台——Windows 用 **PowerShell**（Windows Terminal，W1 含 ExecutionPolicy 解鎖步驟）、mac 用 Terminal（spec 原列 Git Bash，差異記錄見 overview #12）。 |
| 8 | Onboarding deck | 課程介紹 8 頁自 W1 P1 移至 `apps/onboarding`（`/`，PR #12 取代 hub）：開課前公開 landing 兼第一堂開場放映，含 release-schedule 驅動的課程索引與 spec 差異說明頁；**課前環境準備刻意不放**（安裝全留 W1 課堂）。W1 P1 以版控初心開場、安裝拆進 P1–P2，密度紅區緩解。 |

W1【15】改走 init-first ＋ Dashboard 模板改發 ZIP（拷問輪定案 2026-07-14；推翻 v1 定版兩處，收 README「程式碼模板」待定項）：

- **問題**：【15】deck 張數與 curriculum 節點對不起來（curriculum 列 Step 1–7、deck 卻是 10 張，差額＝4 張從未被記錄的 `data-05`；且 curriculum 的「Step 7 你的網址誕生」根本沒有對應投影片）。重排時翻出更上游的洞——**原流程（Use this template → clone）根本複習不到【13】剛教的 `git remote add`／`git branch -M`**：clone 會自動綁好 origin，那兩個指令直接被跳過。
- **起手式＝init-first（九步）**：`mkdir` → `git init` → 下載模版 → 編輯資料 → `add`+`commit` → 建遠端 repo → `remote add`+`branch -M`+`push` → 設定 Pages → 瀏覽公開頁面。P6 因此**完整重演 P5**。**「網頁 template ＋ 本地 mkdir」是死路**（遠端已有 commit、本地 init 為空，push 撞 unrelated histories），故 template 與 init-first 不可混用，必須二選一。
- **模板管道＝課程模板庫 Download ZIP**（取代 Use this template）：模板檔案**直接承載於庫的 root**——root 是必要條件，GitHub 無法只下載子資料夾，模板放子資料夾會讓 ZIP 多包**兩層**。ZIP 仍多包一層 `<repo>-main/`，由【15】Step 3 文案「只搬**裡面的檔案**」承擔（不另開排錯頁：一句話能防的事不需要教人爬坑）。棄用 `curl`+`unzip`：Windows 要再開一套語法，W1 不值得。
- **發放原則改制**：「狀態＝產物模板」**發檔案、不發 repo**（原「Use this template 發一次」作廢）。W1 自此**無週 repo**，產物①＝學員自建的 `skill-dashboard`。副作用是正向的：學員的第一個 commit 即專案起點，整棵歷史都是他自己的，順向支持 W2–W3 續教 Git。**W4 的通知服務週 repo 屬「預埋」類、仍走 template repo，不受此條影響。**
- **repo 歸屬釐清**：P5 全程 `hello-git` 沙箱、【15】獨佔 `skill-dashboard` 生命週期（同輪修掉【11】章節實作誤叫學員建產物① repo、【13】卻去綁 `hello-git` 的既存 bug）。
- **版面**：九步各配一張 `data-05`（四格**滑動視窗**，`起始格 = clamp(step−1, 1, 6)`）＋ heading 帶 `07 / 09` 絕對計數。**`data-05` 零程式碼改動**——視窗是 per-slide frontmatter 採出來的。取捨：滑動後長條退化為**局部**進度（`trackFill` 算的是可見四格的 index），全局感改由計數器承載；曾試加絕對 `fill` prop **更糟**（視窗 [6-9] 填到 78% 會點亮未做的 ⑧⑨），滑動視窗與全局長條數學上不相容，局部化是唯一自洽解。
- **載具分工**（**載具已於 2026-07-15 全面改制，見視覺線「情境版型落地」**；此處保留當時的判斷脈絡）：終端機動作走 `git-01`（`git init`／`add`+`commit`／三行 push）與 `lab-01`（`mkdir`，比照【03】慣例，shell 非 git）；五個網頁動作走 `image-01`（截圖佔位，defer 未變）。原「每個 step 都配 git-01」不可行——九步有五步在瀏覽器發生。step 1／2 定名為「建立專案資料夾」／「初始化儲存庫」（`mkdir` 建的是資料夾，「變成儲存庫」正是 `git init` 幹的事，與【06】對齊）。
- **qa 落點**：qa-01/02（Pages 會立刻更新嗎）夾在 step 8（設定 Pages）與 step 9（瀏覽）之間——「等一輪部署」是真實空檔，也讓 step 9 有存在理由。段中 qa 有先例（【03】）。
- **張數**：【15】17→**25 張**，deck 213→**221**。**curriculum 自此逐張列 `data-05`**，讓「1 bullet = 1 張」嚴格成立——這正是本輪對不起來的根因。【NN】編號不動（無增刪 block）。
- **同輪校正：curriculum 不再標頁數**（W1）。對帳發現漂移遠不只【15】——段標題與 L12「實作頁數」**兩套數字、六段裡各只剩一段是對的**（標題僅 P2 55 對、實作頁數僅 P5 38 對），且兩套語意從未定義（標題的 55 是「扣掉分隔頁」、我一度把 P6 設成「實際張數」25，同檔並存兩種算法）。**裁決＝移除、不是校正**：頁數是 deck 的函數，抄一份到 curriculum 必漂。deck 已建的週，段標題與分段頁數全數拿掉，真相收斂到 `slides.md` 的 `<!-- pN -->`（增刪／重排後自動重生）；deck 未建的週維持 `（~NN 頁）` 規劃估值（`~` 即估值標記）。「六週地圖」頁數欄同理：`~NN` 估值／無 `~` 實建（onboarding 22、W1 221）。規則入 README「頁數標示」。同輪修掉 curriculum L18 對 P6 的舊四階段描述。

產物① repo 定名 `skill-dashboard`（2026-07-14；原 `my-skill-tree` 作廢，全庫 20 處已改）：

- **`my-` 冗於網址**：repo 名即 GitHub Pages 路徑，`帳號.github.io/my-skill-tree` 的「我」在帳號段已經講過一次。
- **「tree」與產物不符（決定性理由）**：模板 UI 是**卡片牆**。skill tree 隱含**解鎖依賴**（先 A 才能 B），卡片牆是**獨立收集**——而課程模型正是「每週點亮該週那批知識點」，收集、非依賴。卡片牆是對的設計，tree 是錯的字。
- **為何不用完整名**：`skill-tree-dashboard`（＝ onboarding slug `product/skill-tree-dashboard`）20 字元、3 連字號；W1 第三小時學員要打四次（`mkdir`／`cd`／New repository／網址列），**打錯即 404**。故必丟一半——丟 tree 保 dashboard（形式真實）優於丟 dashboard 保 tree（隱喻失真）。次選 `skill-tree` 敗在同一條；`dashboard-skills` 詞序反（中心語在後＝「dashboard 的技能」），且學員帳號是作品集、不是 namespace，前綴賺不回成本。
- **已定案（2026-07-17）**：中文定名改「**技能 Dashboard**」（Skill Dashboard），tree／卡片牆落差就此收掉——同 repo 改名那把尺：樹隱含解鎖依賴、卡片牆是獨立收集，英文當時丟 tree 保 dashboard，中文走到同一點。**repo 名連動重評的結論＝`skill-dashboard` 不動**：中文名與 repo 名自此 1:1 對譯（技能＝skill），「若改名須連動重評」的顧慮自動消解。**連帶收掉單獨立足的「技能樹」**（樹不存在了，點亮的受詞改成技能或 Dashboard：「技能樹點亮」→「技能點亮」、「確認技能樹亮了」→「確認技能亮了」、「Dashboard 技能樹亮了 W2 這批點」→「Dashboard 亮了 W2 這批點」）；「技能樹頁面」→「技能頁面」（【15】章名與下午目標 desc）；onboarding 章節 slug `product/skill-tree-dashboard` → `product/skill-dashboard`。**hello-git 沙箱的 `<h1>我的技能樹</h1>` 改 `<h1>Hello, Git!</h1>`**——一石二鳥：沙箱頁名不再撞產品名（與「P5 全程 hello-git／【15】獨佔 skill-dashboard」的歸屬釐清同一件事），且對齊【03】補充頁 `cat index.html` 早已印出的 `<h1>Hello, Git!</h1>`，檔案敘事（⑧）反而更連續。範圍＝docs＋兩份 deck 32 處＋本檔活段落 3 處；本節上方的定名理由段（2026-07-14）依慣例保留舊名。

用詞：「儲存庫」vs「專案」（2026-07-14 定案，W1 全 deck 校過；六週通用）：

- **界線**：**「儲存庫」＝ Git 概念（資料夾 ＋ `.git`）**，凡涉及 Git／GitHub 機制一律用它；**「專案」＝ 日常泛稱**（你在做的那個東西），與版控無關的場合用它。判準句已內建於 deck：W1【06】「把 `.git` 刪掉，這個**專案**就退回『沒有版本控制』的狀態」——同一個東西，失去 `.git` 就不再是儲存庫、但仍是專案。
- **不可全面改用「專案」**（曾評估、否決）：**GitHub 上 `Projects` 是另一個產品**（看板式專案管理，個人頁與 `Repositories` 併列為分頁），deck 講「專案」會讓學員點錯分頁；且 `New repository`、PAT 的 `repo` scope、Pages 網址吃的 repo name 等 UI 用字全對不上，「本地專案 ↔ 遠端專案」也講不通。**術語跟著 GitHub UI 走，不自創。**
- **定義落點＝【06】`git init`**（原缺）：原本「儲存庫」從未被介紹，首次出現在 P4【08】三層架構圖即當已知詞用（**該圖已於 2026-07-16 前移【07】**，此處保留當時的位置以存脈絡）。改由【06】承擔——`git init` 正是資料夾變成儲存庫的瞬間，且**終端機輸出本來就印著 `Initialized empty Git repository`**，定義直接錨在螢幕上的字（`git init` 頁的 note 指認、`.git` 頁正式定義「資料夾 ＋ `.git` ＝ 儲存庫」並預告 GitHub 上會到處看到）。連帶【06】扉頁「專案初始化」→「**儲存庫初始化**」、slug `git/project-init`→`git/repo-init`。
- **「倉庫」廢用**（第三個譯法，與【11】「GitHub 像**車庫**」的比喻互撞）：【01】改「存著一份完整的歷史」（保住分散式的重點、且此時尚未教儲存庫）、【11】的「本地與遠端」頁改「你電腦上那一份」。
- **同輪對齊**：`mkdir` 一律「建立**專案資料夾**」（【03】章節實作原「建立空專案」，對齊【15】step 1）；`git init` 一律「初始化**儲存庫**」（P0 上午目標／P8 回顧原「初始化專案」，對齊【15】step 2）；【13】扉頁「將專案連結到 GitHub」→「把本地接上 GitHub」（該段內文本就全講儲存庫）；【17】skill 生效範圍那句混用 → 統一「專案」（skill 生效範圍與 Git 無關）。
- **未動（刻意）**：【06】「git status：看**專案**現在的狀態」（顯示的是工作目錄／暫存區，泛稱更貼，且剛定義完不宜術語轟炸）；【11】「**專案**要設定成 public 還是 private？」——此時學員尚未建 repo，屬鋪陳；待【11】文案調整時一併決定。

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
- **實裝定案（2026-07-15 四方查證）**：安裝＝官方 `install.sh`／`install.ps1`（官方 repo ＋ 兩支腳本 HTTP 200 ＋ 腳本內 `TARGET_DIR="$HOME/.local/bin"`／`BINARY_PATH="$TARGET_DIR/agy"` ＋ 本機實裝，四者吻合）——**非 npm 發佈**，flat native build、**免裝 Node.js**（deck 勿寫成 `npm i -g`）。**skills 的安裝落點＝專案層 `.agents/skills/<name>/SKILL.md`**（`agy` binary 內含該字面路徑）——與上條不衝突：repo 發的是**素材**，`.agents/skills/` 是**裝進專案**的位置。deck 只用到 `agy`／`agy --version`，已對過實際 CLI。
- Claude Code 為 W6 壓軸講師 demo。（Copilot 可拆卸模組已於 2026-07-13 移除，見已廢棄決策。）
- 六週 AI 分配：W1 安裝+解釋指令+commit message／W2 gh 上手＋AI 動手（建 repo→開 PR 全鏈）／W3 救援顧問+歷史整理／W4 **MCP + GitHub 串接** + PR 描述 + AI code review／W5 生成與除錯 workflow YAML／W6 併入 capstone + **Render MCP** + Claude Code 壓軸（Cloudflare 表演）。MCP 節點成對：W4 GitHub MCP、W6 Render MCP（皆為「AI ↔ 工具」層，非 CI/CD 管線本身）。

## Deck 骨架 v2（即視覺線版型需求）

固定件：**P0 Starting 章**（每份 deck 起頭：簡報封面＋上午目標；下午目標頁移至午休後，繼任原「本日目標」單頁；W4 加記憶恢復頁）／**週 repo 導覽頁**（🧭）／**情境挑戰卡**（🔨 固定格式：劇情、目標、步驟提示、驗收條件、求救方式）／**P8 Ending 章**（固定收尾四頁：✅ 上午回顧 → ✅ 下午回顧（確認技能亮了＋口頭發布回家任務；實質 data.json 更新儀式已移至 P6 情境挑戰，隨當週 Git 技能長大）→ 下週預告 → THANK YOU（badge 標下次上課時間）；繼任原「Recap → 預告」兩頁式；W6 為結業擴充版、CONGRATULATIONS 收尾）。P0／P8 為章節序、不佔獨立時段（P0 在首教學堂開頭、P8 在 P7 末 5 分）。骨架落地細節見視覺線「週 deck 骨架 v1（2026-07-12）」。
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

深色模式待辦（**2026-07-13 收案**）：原列「樣張未覆蓋的延伸推導（`--ink-4`、`--panel`、三色 tint 深色值、講師照片佔位灰）待設計線回填定案」——設計交接檔既於 2026-07-10 棄置，「設計線回填」前提失效；前三項實際已自行推導入 `html.dark` 並經多輪亮暗全量截圖驗證，就地定案（`--ink-4: #6e6e6e`、`--panel→--dark-panel`、三色 tint rgba——github／ai 已隨 2026-07-11 新主色重導）。照片佔位灰同樣已解：淺色 `#E3E3E3`（設計稿字面值）、深色經 `--intro02-photo-ph` 映射 `--dark-node`，且唯一正式消費者（onboarding 講師頁）已傳實照，佔位僅現於 local-only templates 參考頁。AiAgentLoop 深紫節點字殘留亦由 2026-07-11「深色 tint 上的深紫字修正」解掉。四項全數收案，無遺留待辦。（`--ink-2` 已於 2026-07-12 回填 `#CDCDCD`——原折疊進 `--dark-ink-2` 使 ink-2／ink-3 深色同值、次要文字階層塌陷（onboarding 講師頁的 bio vs sub 可見）；值照淺色階梯明度比例內插，深色四階 `#E6E6E6→#CDCDCD→#ABABAB→#6e6e6e` 與淺色同構。）

深色治理四家族（2026-07-10 完成，取代前述「屬下一輪」）：git／github／ai／shell 圖形元件（`GitGraph`／`GitSyncLanes`／`GitAreaFlow`／`GhWorkflowDag`／`GhStatusIcon`／`AiAgentLoop`／`ShFileTree`）的 hardcode 中性 hex（面板／線／字／卡片底）全數改走 `var(--token)`——值＝原 hex，故**淺色像素不變**、深色由 `html.dark` 自動翻轉；品牌／語意色走對應 token（跨模式恆定），圓圈上的 ✓／✕ 釘 `#FFFFFF` 字面。機制：`fill`／`stroke` presentation attribute 可解析 `var()`（本機 Chrome 實測），毋須改寫成 CSS class。深色卡片底推導＝`var(--paper)`（比面板深一階、如「面板上挖的窗」）。並在 `html.dark` 補上 diff 綠／紅底＋字的深色 remap（`--diff-add/del-bg｜ink`，GitHub 深色 diff 調），一併修好 AiDiffPanel 的 diff 帶與 GhWorkflowDag 的 err 節點底。逐頁校驗：`apps/templates` git／github／ai／shell 全頁亮＋暗截圖過（淺色不變、深色不再有亮塊）。殘留：AiAgentLoop 的 MODEL／TOOLS 深紫節點字（`--brand-ai-deep`）於深色 tint 上略暗但可讀，隨三色 tint 深色值一併待設計線定案。

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
- **由上導出的主色改動**：github／ai 的 base **只落在白底 chrome**（深底終端另走 code-blue／-soft，不碰 base），故 base 可偏亮。主色由交接暫定值改中間調：GitHub `#0969DA→#388BFD`、AI `#7C3AED→#8B5CF6`——白底仍可讀（~3–3.8:1，過 AA-large；本系品牌字皆 ≥24px mono）、且比原色輕盈。**取捨**：低於原色的 AA-normal 4.5（投影大字場景可接受）。`-deep`／`-soft`／淺色 `-tint` 維持原階（ramp 仍單調）；深色 `-tint` 的 rgba 由新 base 重導（github `rgba(56,139,253,.18)`／ai `rgba(139,92,246,.2)`）。**git 不動**（其 base 要扛深底終端）。曾試「主色＝終端淡色」（github #6CB6FF／ai #C4B5FD）但白底小字糊掉、退回中間調。驗證：cover／intro／git／ai 四族各取一張，亮＋暗截圖過。

終端裝飾語意層 `-term`＋衝突頁去紅（2026-07-11，接續前一則；不影響張數）：
- **新增 `-term` 語意層（取代前一則的「深底高亮直接引用 base/soft」做法）**：對話/日誌終端（GitTerminal／AiChat·Mono）的品牌裝飾改走**角色命名**的 `--brand-{x}-term`，不再直接引用 ramp 的 base/soft——使用端規則收斂成一句「終端裝飾＝`--brand-{x}-term`」，base/soft 的「為何這裡那裡不同」收進 token 定義註解。值＝各色相「深底又亮又不失色」的專調：`--brand-git-term: #FF7A45`（比 base #F05133 亮，滿足「終端高亮不可與品牌 ramp 同色」）、`--brand-ai-term: #C4B5FD`（＝原 `-soft` 值，等值 repoint、ai 無視覺變化）。原則不變（用該色相在深底可讀的淺色），只是換成命名即用途的獨立層。**github 程式碼終端不在此列**（GhCodePanel 走語法層 code-blue/orange，是語法高亮非品牌指針）。曾探討「三系終端內外同色」：git 內外同 base 是橘色相甜蜜點（深底 ~4.7:1）而非規則，強行讓 ai 內外同 base 會過暗（ai 族全段實驗後退回 soft 亮度）。
- **git-04 衝突頁去紅、融入 git 常規視覺**：左側線圖高亮列 `bg: danger`（紅 `--diff-del-bg`）→ `bg: tint`（橘 `--brand-git-tint`，同其他 git 頁），衝突改由 **CONFLICT 標籤**（白字深橘）＋ `MERGING · 1 conflict` meta 呈現；終端 CONFLICT／UU 兩行 `warn`（珊瑚橘 `--code-orange`）→ `dim`（輸出灰 `--dark-ink-2`，同其他 git 頁的輸出行慣例：`UU` 對應 git-02 的 `A validation.js`）；語意改用灰 `comment` 註解說明、各置於**所說明那行的正上方**；橘色高亮的 `# →` 行動註解維持在最下（與其他頁對齊）。pending 衝突節點的淡紅填色（`--diff-del-bg`）保留。
- **`bg: danger` 退場（取代前一則「危險列紅底於深色加濃」）**：全 deck 無人使用，移除 `GitGraph` 的 `.commit-row.bg-danger` 亮/深樣式 ＋ `bg?` 型別的 `'danger'` 選項（GitGraph＋git-01/04/05 四處）。`--diff-del-bg` token 保留（仍服務 pending 節點填色、AiDiffPanel、Gh* 面板）。typecheck 綠。

github 段內的 git 終端隨段翻藍（2026-07-14，收前兩則的交叉點；不影響張數）：「**github 段裡的 git 終端頁**」原本卡在兩條文件化規則的夾縫——區段染色（P5–P6 走 github 藍）說該藍、終端原色（`-term` 不動、git/shell 終端頁「刻意不掛」品牌類）說該橘。結果 W1【13】的 git 終端頁掛了 `class: brand-github` 卻**只染一半**：標題旁 command 標籤（吃 `--brand-git`）翻藍、GitTerminal 內高亮（吃 `--brand-git-term`）仍橘。**裁決＝區段染色優先**：`-term` 家族補上 github 成員，`.brand-github` 連 `-term` 一起重映——新增 `--brand-github-term: #6CB6FF`＋`.brand-github { --brand-git-term: var(--brand-github-term) }`。**色值理由**：不能用 base `#388BFD`（那是白底 chrome 調的，深底 `--term-bg #2a2a2a` 上只有 4.29:1、比同族都暗）；#6CB6FF 深底 6.68:1，落在 git 5.55 與 ai 7.77 之間（即前述「主色＝終端淡色」實驗被白底否決的那顆藍，改當獨立 `-term` 階就無白底問題）。**取代**：base.css 原「git/shell 終端頁刻意不掛、只重映 ramp、-term 不動」作廢；L116「github 終端不走品牌色」與 L120「github 程式碼終端不在此列」**僅就 GhCodePanel 仍成立**（語法高亮非品牌指針），git 終端已改隨段染色。**`.brand-ai` 不需比照**：AI 對話/日誌終端（AiChat／AiMono）本就直接引用 `--brand-ai-term`、不靠 remap。**影響面**：只有 GitTerminal 的 `.ln-note`／`.prompt`，且只在掛 brand-github 的頁（現況＝W1【13】的 git 終端頁）。

終端系統色統一＋git／github 面板細修（2026-07-11，接續前一則；不影響張數）：
- **終端表面色統一為灰**：`--term-bg` 淺色從 `#1F1F1F`（近黑）改 `#2a2a2a`（＝原深色值），兩模式一致；`--term-hl` 提到 `#383838`（否則與新底同色、AiChatPanel 對話泡泡消失）；html.dark 的冗餘覆寫已刪。git／github／ai／shell 四類終端底色皆轉灰。
- **終端 `#` 註解統一高亮**：GitTerminal `.ln-comment` 灰（`--ink-3`）→ `--brand-git-term`、ShTerminal `.line-comment`/`.cmd-comment` → `--brand-git`；GhCodePanel（`--code-blue`）、Ai note（`--brand-ai-term`）本就高亮。全終端 `#` 註解自此皆品牌色高亮，與白色指令、灰色輸出三層分明。
- **終端 error／warning 分工**：新增 `--code-red: #F85149`（GitHub 深色 diff 紅、恆定），`GhCodePanel .k-err`（FAIL）從 `--code-orange` 改 `--code-red` → 讀作「失敗」而非「警告」，並與左側面板 `--err #CF222E` 紅一致（修 github 族 run failed 頁左紅右橘的不一致）；`--code-orange` 保留給 warning。（語意 `--err` 深底 ~2.5:1 太暗、不適用終端。）
- **git 終端輸出統一 `dim`**：所有 git 終端指令輸出行走 `dim`（`--dark-ink-2`）——git-01 唯一的 `out`（Merge made by the 'ort' strategy）收斂、git-04 的 CONFLICT／UU 亦 `out`→`dim`。`kind: out`（亮輸出）現全 deck 無人用，**保留**為可用行類型（非棄用做法，異於 `bg: danger`）。
- **git 終端每指令意圖註解**：git 族四張從「頂部一行總註解」改為「每個 `$` 指令上方一行意圖註解」（git-01～03 補齊、git-04 把 CONFLICT／UU 說明併入指令註解），底部橘色 `# →` 行動指針保留。
- **git commit graph 一致性**：「chore: 專案初始化」殘留的 `muted: true`＋`hashTone: faint`（與自身 `node: brand` 及同輩 commit 矛盾、應為轉橘節點時漏改）移除 → 深字＋`--ink-3` dim hash，與 docs/feat 一致（git 族）。
- **github-02 PR 面板重設計**：左側從「CI checks 清單（`GhChecksPanel`）」改為「PR 生命週期」——分支列 `main ← feature/login`（base 前、`←` 指向 main）、GitHub PR 頁籤 chrome、時間軸（開 PR → approved → 可合併，末節點環狀強調比照線圖 head）、merge 按鈕通過檢查後轉綠（`--ok`）；依「資訊太密」再精簡（刪頁籤列、移除 checks 節點、放大剩餘、間距收斂）；右側 gh 終端改為 create → checks → merge 工作流弧線。**`GhChecksPanel` 已刪除**（唯一消費者移除後孤兒，`checks`/`Check`/`Status` 相關型別一併清）。typecheck 綠。

左側 panel-head 右側 meta 統一（2026-07-11，接續前一則；不影響張數）：所有左側 panel 標題列右側統一為**灰色描述型 meta**（`--ink-3`）——git/github 本已灰；AI 補齊：AiPromptAnatomy 衍生「N 段結構」、AiAgentLoop default「model ⇄ tools」新增右側 meta，AiCodeReview 的「AI 標註」badge 紫（`--brand-ai`）→ 灰；AiDiffPanel（±號帶色 stat）、AiContextPanel（hint）本已灰不動。**保留語意色特例**（使用者定案）：github-02 的 `OPEN` 狀態徽章、github-04 的 `✕ failure` 紅——屬狀態/警示信號、非描述型 meta，改灰會損語意。typecheck 綠。

panel-head 對齊 body ＋ 左標籤精簡（2026-07-11，接續前一則；不影響張數）：
- **panel-head 左右 padding 對齊 body**：git panel-head `24px 44px`→`24px 36px`（對齊 GitGraph commit-row 右 36px，使 meta「main ← feature/login」與 hash「f7a8b9c」右緣切齊）；github-02 pr-body `48px`→`44px`（對齊 panel-head 44px）；GhRunLog（body 44px）、AI 五元件（body rows 44px）本已與 head 44px 對齊、不動。
- **左標籤（panel-label）只留全大寫英文**：去掉非大寫尾綴——github-02「PULL REQUEST · #128」→「PULL REQUEST」、github-03/04「RUN LOG · deploy.yml/ci.yml」→「RUN LOG」、github-05「MATRIX · test」→「MATRIX」；AiDiffPanel heading「DIFF · login.js」→「DIFF」、AiCodeReview「CODE · profile.js」→「CODE」（檔名等資訊改由標題列 meta 承載）。
- **git-03 meta 去橘**：`↑ ahead 2` 的 `.panel-meta` 由 `--brand-git`＋`font-weight:600` → `--ink-3`（與其他 git 頁 meta 一致）。
- **github 族 run 編號查核（結論：無需改）**：兩頁 steps 實為同一 pipeline（Set up job→checkout→npm ci→npm test→deploy→cleanup，差在 test 過/失敗），舊 `deploy.yml`/`ci.yml` panelLabel 與 steps 矛盾、經上述標籤精簡後移除；#1042（running）→ #1043（failed）遂成同一 workflow 連續執行、running 那張在前，合理。

終端註解層次化（2026-07-11，接續前一則；取代前述「終端 `#` 註解統一高亮」）：全數高亮太搶眼，改為兩層——**中間的意圖註解走暗色**（GitTerminal `.ln-comment`、ShTerminal `.line-comment`／`.cmd-comment` → 新增 `--dark-ink-3: #757575`，比輸出 `--dark-ink-2 #ABABAB` 再暗一階、兩模式恆定），**只留最底一則 note 高亮**（GitTerminal `.ln-note`、ShTerminal `.line-comment.is-accent` 維持 `--brand-git`(-term)；github/ai 終端本就只有一則 note，維持 `--code-blue`／`--brand-ai-term`）。並將所有 note 前綴「# → 」統一改「# 」（去箭頭，slides.md 19 處；`# → ` 只出現在 note 前綴，內文如「HEAD → main」不受影響）。

逐頁細修（2026-07-11，接續前一則；不影響張數）：
- **git-03 的 GitSyncLanes**：ghost 虛線改收在最後一個 commit（`L 840` → `L slotX(cs.length-1)`），不再延伸超出節點。
- **AiPromptAnatomy**：全部 section label 統一為 03 的紫（原 01/02/04 用 base、03 用 deep），改為淺色 deep／深色 soft（mode-flip，全 label 一致、對比高）。
- **AiAgentLoop**：tool call（右，實線）與 result（左，虛線）迴圈曲線重畫成鏡射於 x=480，MODEL 端接底邊、TOOLS 端接**左右側邊**（x=380／580），兩箭頭都落在框邊緣可見（原 tool call 箭頭藏在 TOOLS 框內、且左右不對稱）；edge-label 移到 TOOLS 兩側（避免壓線）。箭頭尖角個別微調（刻意、非對稱）：result 箭頭尖端釘在虛線終點、中軸對齊該處切線（貼線不歪）；tool call 箭頭繞尖端略逆時針傾一點。
- **AiCodeReview**：note-card（HIGH RISK）上下 margin 8px→24px，不擠 L24/L25。
- **深色 badge 白字**：AiContextPanel `.badge-in`（IN）、ShFileTree `.node-badge`（你在這/現在/NEW）、`.node-chip.is-hl`（highlight 的 `.` chip）文字由 `--paper`（深色翻黑）釘死 `#FFFFFF`（白字 brand 底、兩模式恆定；chip 非 highlight 的 `--ink` 底不動，避免白疊白）。

高亮 note 置底（2026-07-11，補「終端註解層次化」那則）：高亮 note 除了是最後一則、還用 `margin-top: auto` 推到終端機**最底一行**（比照 AiChatPanel `.chat-note`；content 靠上、note 貼底、中間留白）。GitTerminal `.ln-note`、ShTerminal `.line-comment.is-accent` 鎖 class；GhCodePanel／AiMonoPanel 因 note 的 tone/kind 與 `##`／語法行共用，改鎖 `.code-line`／`.mono-line:last-child`（已驗證各終端 note 恆為最後一行）。五類終端（git／shell／gh-code／ai-mono／ai-chat）一致。

深色 tint 上的深紫字修正（2026-07-11，接續前一則）：`--brand-ai-deep`（#5B21B6 深紫）當**文字**疊在會隨深色變深的 `brand-ai-tint`／`paper` 底上時，深色模式下深疊深、對比極低（淺色則深字淺底、正常）。修法＝**隨模式翻轉**：淺色維持 deep，深色改 `--brand-ai-soft`（淺字深底）——AiPromptAnatomy 的 section label（統一全部 label：`html.dark .section-label`）、AiAgentLoop 的 MODEL／TOOLS 節點字（加 `.is-accent` class → `html.dark .node-text.is-accent { fill: --brand-ai-soft }`）。解掉前述「AiAgentLoop 深紫節點字於深色 tint 上略暗」的殘留。通則：任何「brand-*-deep 當文字 × brand-*-tint／paper 當底」都須此翻轉，deep 只適合亮底。

週 deck 骨架 v1（2026-07-12，張數 83→**84**；視覺線首次長成正式週 deck）：七份 deck（W1 範本定稿講師潤稿 → W2–6 複製，各週變數取自 docs/curriculum 的 P 堂標題）建立通用框架頁，教學內容以 HTML 註解標記 P 堂空檔、逐堂填入。

- **骨架序列（13 頁）**：封面（`cover-01` 併入 headmatter，slide 1 即封面、免空白首頁）→ 上午目標 → BREAK ×2 → LUNCH → 下午目標 → BREAK ×3 → 上午回顧 → 下午回顧 → 下週預告 → THANK YOU。W6 特例（12 頁）：下午目標僅兩列（`P4-6` 結業專題＋P7 AI 壓軸）、無下週預告、結尾 CONGRATULATIONS。
- **封面慣例**：display／heading 固定課程全名（GitHub Actions CI/CD／自動化與 AI 協作實務班），逐週只變 MODULE（headmatter `module:`，Eyebrow／cover 同吃）與 date「2026.MM.DD · 第X週」。
- **目標頁（intro-01）**：以 P 堂為節點（上午 P1–P3、下午 P4–P7），desc 為自然語句、不帶【NN】；`.agenda` padding-top 48→80（+32 視覺留白）；`.agenda-no` 加 `white-space: nowrap`（W6「P4-6」長編號溢入 gap、不折行）。
- **休息頁**：BREAK（statement-05）sub「休息十分鐘，走動一下、補水，整理剛剛的指令」；LUNCH（statement-03）sub「休息一小時…」；badge 統一「BACK · HH:MM」（時刻＝下堂開始）。
- **Ending 四頁**（繼任骨架 v2「固定收尾兩頁」，該節已同步改）：回顧拆上午／下午（end-01 ×2，成果式語句）→ 下週預告（content-01，「下週預告：」後 `==橘色高亮==`；W3 版為「兩週後見」＋8/8 停課說明）→ THANK YOU（statement-02，badge「BACK · MM.DD 09:00」；W3 sub 提停課；W6 改 CONGRATULATIONS）。
- **元件／版型層**：`MdInline` 新增 `==text==` → 品牌橘 accent 語法（與 `**bold**`／`` `code` `` 同層）；statement-02 增選填 `badge` prop（同 03/05 樣式、列於 contacts 前）；**statement-06 新增**（CONGRATULATIONS 固定字、整字品牌橘；家族 180px 容不下 15 字母、降 148px 並註記）；statement-03 LUNCH 整字轉品牌橘、去橘色句點；end-01 footer 改「有 `next` 才渲染」（無 next 時分隔線與橘字一併不出）、`.items` 改 `flex-start` 固定列距（取代自適應置中，回顧頁不同項數節奏一致）。
- **配色**：週 deck 未釘 `colorSchema`（auto、跟觀看者系統；亮暗皆逐頁驗過）。

左上頁標題字級統一（2026-07-12，接續前一則；不影響張數）：所有「左上角頁標題」家族 layout 的 `.heading` 統一 **68px**（基準＝data-01；原 60–80px 散值為設計稿殘留的不一致）——涵蓋 content-01/02、data 全系、diagram 全系、compare 全系、tool 全系、admin 全系、shell-term／lab-04、image-01/03/04、end-01/02、metric-01、intro-03/04、story-04、qa-04 與 git／github／ai／shell 四系（共 48 檔）。**排除（非左上頁標題、字級屬版面本體）**：cover、chapter-01、intro-01/02、content-03（金句）、lab-02、qa-01/02/03（提問展示）、image-02/05（標題不在左上）、story-01/02/03/05、statement 家族、metric-02。驗證：templates 高風險 20 頁＋onboarding 4 頁淺色截圖過（brand 系 heading 與右側 command chip 無擠壓、qa-04 長題目未折行）、typecheck 綠。

展示型標題階梯化（2026-07-12，接續前一則；不影響張數）：前一則排除的展示型標題，把「差 2–12px 的偽層級」收斂成**四階字級階梯 68／84／108／180**——巨型層 108（story-02 110→108、lab-02 120→108，與 chapter-01／intro-02 對齊）；置中宣言層 84（story-01 88→84、story-03 76→84、content-03 金句 64→84——金句原本比頁標題還小、升回核心重量，與 qa-01/02、intro-01 同層）；image-05 60→68 歸隊頁標題層（位置在圖下≠字級特殊）。**維持的差異（有語意）**：statement 180／statement-06 148（既有紀錄）、qa-03 60（960px 圖旁的空間約束）、story-05 引言 56（引用 vs 宣言是不同聲部）、image-02 40（圖說）、cover-01、metric-02 340（一次性身分）。驗證：templates 相關頁截圖過（story-03 兩行轉折句於 84 收得下）、typecheck 綠。

圖片 prop 撞 Slidev 保留字（2026-07-12，接續前一則；不影響張數）：`image-01/02/05`、`link-01` 的頂層 prop `src` 改名 **`image`**（對齊 qa-03 既有命名）——`src` 是 Slidev per-slide frontmatter 保留字（import 外部 .md 當該頁內容），傳實圖路徑時整頁被吞掉（onboarding 首次傳實圖才曝露；templates deck 只用佔位框從未觸發）。陣列項目內的 `src`（image-03/04 panels·figures、link-02 qrs）不在 frontmatter 頂層、不受影響。陷阱已同步記入 CLAUDE.md。

diagram-04 zoom→callout 正名（2026-07-13）：prop `zoomTag`/`zoomText` → `calloutTag`/`calloutText`（CSS class 同步 `.zoom*`→`.callout*`）——onboarding 把框當「流程結論」用（tag 文案 KEY POINT、三節點高亮），原「放大單節點」的 zoom 語意已不涵蓋全部用法，改用法中立的 callout；templates 參考頁維持 ZOOM IN · STEP 02 示範原始用法。兩個消費者（onboarding／templates）已同步改 key。

diagram-04 zoom 框滿版（2026-07-12，接續前一則；不影響張數）：`.zoom` 移除 `max-width: 1400px`（設計稿逐字值）、改隨內容安全區滿寬 1720——onboarding 定案時嫌 1400 收太窄；流程鏈同輪拆成 7 節點（寫程式→commit→push→自動測試→建置打包→部署上線→發送通知，與課程 pipeline 順序一致），單行剛好與 zoom 框等寬。

data-01 增選填區塊 icon（2026-07-12，接續前一則；不影響張數）：`cols` 項目新增 `icon?: string`，絕對定位於區塊右下角（`right: 48 / bottom: 44`），**固定 88px 高**＋`max-width: 280`＋`object-fit: contain`（小圖放大、大圖縮小，SVG 原生尺寸不作數——`max-*` 只縮不放的陷阱）。首個消費者：onboarding「課程調整」頁的 before/after 品牌 logo。

MdInline 增連結語法（2026-07-13）：`[文字](網址)` → `<a>`，樣式＝品牌高亮＋底線（並以 `border-bottom: none` 蓋掉 Slidev 預設主題給 `a` 的 1px dashed，免疊雙線）。跨 deck 深連結一律走**相對路徑**（如 `/week-1/1`）——onboarding 與週 deck 同 origin 部署，正式／測試 domain 由瀏覽器自動解析，毋須 env 切換；本機 dev 因單 deck 起服務、連結不可用屬預期。首個消費者：onboarding 轉場頁 → `/week-1/1`。

淺色灰階調深（2026-07-13）：投影場景下原交接值對比太低（小字與邊框讀不清），淺色四支灰 token 共壓兩階——`--ink-3` `#8A837C→#6B645E`（白底對比 3.4→4.7:1，過 AA-normal）、`--ink-4` `#B5AEA6→#9A938B`、`--line` `#E5DED8→#CFC6BE`、`--line-2` `#D9D2CC→#BFB6AD`。階梯順序與主從關係不變；深色模式各有映射、不受影響。原值留存於 tokens.css 註解。**護欄**：`--ink-3` 已逼近 `--ink-2`（#55504B），再壓會糊掉「次要 vs 輔助」的層級——之後若還嫌淡，該調的是字級或字重，不是再加深。

淺色底調暖（2026-07-13，接續灰階調深）：`--paper` `#FFFFFF→#FBFAF8`（柔白）——純白投影過亮，且原白底與暖灰中性系（panel／line）色溫不合；新值介於白與 `--panel #F5F1ED` 之間、保住 paper→panel 層差。調校軌跡：第一階 `#FBF9F6` 暖度略高 → 曾試更深的 `#F8F5F1`（紙感佳但 panel 層差剩 3–4/通道、退回）→ 定於 `#FBFAF8`（同亮度、R−B 色偏 5→3）。深色不受影響；各處釘死的 `#FFFFFF` 字面值（白字於品牌色）刻意不隨動。

hairline 邊框升 2px（2026-07-13，接續灰階調深；同為投影可讀性）：全 layouts＋components 的 **1px 邊框（含 border 分隔線）一律升 2px**（114 處——1920 畫布縮放放映後 1px 會掉到 0.7px 以下、時隱時現）。原有 4 處 2px 中階強調（data-03 表頭線、AiCodeReview／GhMatrixGrid／GitAreaFlow 的 active 框）同步升 3px 保住 +1 強調差，併入品牌強調層。層級現況：**2px hairline → 3px 強調 → 4–8px 裝飾粗線**；SVG stroke（最細 2）不在此列、未動。

結業頁改版與 LUNCH 去橘（2026-07-13，不影響張數）：statement-06 headline 由 CONGRATULATIONS（15 字母塞不下、降 148px 的家族例外）改為固定字「COURSE **COMPLETE**」——回歸家族 180px，品牌橘只留 COMPLETE 單字 accent（同 THANK YOU 的 YOU）；CONGRATULATIONS 降為底部 badge 承載，badge 並由品牌橘改為灰 chip 同款（`--ink-2`／`--line-2`；26px／600 維持）。statement-03 LUNCH 同步去整字橘（→ `--ink`）。兩消費者（week-6／templates）改傳 `badge: CONGRATULATIONS`；前述階梯化條目的「statement-06 148」例外就此消失，statement 家族 headline 全數歸隊 180。

statement 家族拆分正名（2026-07-13，接續前一則；不影響張數）：六頁 statement 依語意拆成兩家族並改名——**收尾儀式頁 `outro-*`**（與 intro-* 成對）：outro-01←statement-01（Q&A）、outro-02←statement-02（THANK YOU）、outro-03←statement-06（COURSE COMPLETE），編號＝時序（段落收尾→日收尾→課程結業）；**課間中場頁 `break-*`**：break-01←statement-05（BREAK，回歸其前身 break-01 舊名、亦為最常用頁）、break-02←statement-03（LUNCH）、break-03←statement-04（GROUP）。檔名（git mv 保留歷史）、內部 class、七份 deck 的 layout key 全數同步；templates 參考頁重排為 outro-01→03、break-01→03。歷史條目照慣例維持舊名不回改。

link 家族改版：URL 讓位大標（2026-07-13，不影響張數）：onboarding「課程簡報」頁定案時嫌 mono 52px 橘 URL 當大標太長——link-01／link-02 統一改為三層：**QR 實照加 2px `--line-2` 灰框**（QR 白底在淺色 `--paper` 上幾乎無邊界；佔位框原有虛線不動）→ **heading 名稱**（新 prop；沿用 content-03 置中宣言層規格 sans 84／900／ls 0.04em；link-02 每欄收 760 寬）→ **URL 品牌 badge**（沿用 outro／break 家族 badge 規格 mono 26／600 橘字橘框，「品牌色由底部 chip 承載」慣例）。原 desc 副標整層移除（首版曾降為家族 sub 36 規格、隨即定案砍掉——名稱＋badge 已足，資訊少一層）；link-02 的 qrs 項目 key `url`／`desc` → `heading`／`url`（項目內 `src` 不變）。消費者：onboarding 傳「課程簡報」、templates 兩頁補 heading 佔位。

W1 deck 生產帶出的 shared 層增修（2026-07-13，接續前一則；首份完整教學 deck 落地時新增）：
- **區段品牌覆寫原語**：`base.css` 新增 `.brand-github`／`.brand-ai`——把該頁 `--brand-git*` ramp remap 成對應品牌，供 GitHub/AI 主題段**整段染色（含終端與收束該段的 break）**；掛在 slide frontmatter 的 `class:`，chapter-01 仍用既有 `brand:` prop。規則、break 判準與 W1 對照見 docs/README「區段品牌覆寫」。
- **`data-05` 進度軸語意化**：原 `now` 與 `todo` 同樣暗（`now` 形同無效）→ 改為 `now`＋`done` 皆點亮填色、只有 `todo` 空心；新增 `.track-fill`（品牌色連線，寬度 computed＝`L/N×(100% + 56px)`、填到最後一個點亮節點）。節點與連線逐頁前進、亮了不熄。W1 P6 四階段部署進度軸首消費。
- **`intro-01`／`end-01` 新增選填 per-item `brand?`**：目標頁／回顧頁可逐項掛 `brand-{git|github|ai}`，編號依該項主題上色（W1 下午目標／回顧的 P5–P7 逐項染）。
- **shell-term／lab-02 用途分工（W1 確立）**：`shell-term`＝全寬單一終端（無左 panel，用於純終端機頁如 shell basics）；`lab-02`＝置中巨型單指令 spotlight，**定為「驗收／demo」專用版型**（學生建立「此版型＝該動手」印象）。
- chapter-01 巨型出血數字曾試 tabular 對齊（逐位 `1ch`／容器 `2ch` 靠左），因窄數字（如 11）右側留白**還原**為原右錨定自然渲染（無淨變更、僅記錄嘗試）。

based deck 圖片 prop 撞 BASE：全 image 版型 base-resolve（2026-07-14，接續前一則；W1 掃碼追課頁帶出）：
- **陷阱**：image 系版型把 frontmatter 圖片路徑當根絕對值 `/foo.png` 傳給 runtime `:src`，但 Vite 不改寫 runtime 綁定，`/foo.png` 於瀏覽器解析到 **origin 根**——base `/` 的 onboarding 正確，base `/week-N/` 的週 deck 卻會抓到根目錄**同名檔**（＝部署在根的 onboarding 資產），畫面有圖、**但是錯的圖**（非破圖，最難察覺）。W1 P0「本週簡報」QR（link-01、首張實圖落在 based deck）曝露：正式站會載入 onboarding 的課程首頁 QR 而非 week-1 QR。
- **修法**：新增 `shared/utils/with-base.ts` 的 `withBase(path)`——`BASE_URL.replace(/\/$/,'') + '/' + path.replace(/^\//,'')`，外部 URL／protocol-relative／`data:` 直通、`undefined` 原樣返回。套到**所有** 10 處吃實圖的 `:src`：link-01/02、image-01～05、qa-03、intro-02（`photo`）、data-01（`col.icon`）。授權寫法維持 `image: /foo.png` 不變；onboarding（base `/`）輸出不變（仍 `/foo.png`），週 deck 得 `/week-N/foo.png`。tsconfig `include` 補 `utils/**/*.ts`。
- **驗證**：`withBase` 六案單測全過（週 deck→`/week-1/qr-slides.png`、onboarding→`/qr-slides.png`、巢狀路徑、外部／data URI 直通、undefined）；`pnpm build` 組裝後 `dist/qr-slides.png`（onboarding QR）與 `dist/week-1/qr-slides.png`（week-1 QR）為**相異兩檔**，證實週 deck 載自身 QR；typecheck ＋ 七份 deck build 全綠。

終端機框架 padding 抽 token（2026-07-14）：**七個終端機表面**（五元件 GitTerminal／ShTerminal／AiChatPanel／AiMonoPanel／GhCodePanel ＋兩個內嵌終端版型 shell-term／lab-04——皆為「mac 紅黃綠燈＋head＋body」同構）原本各自寫死框架 padding（head `32 32 16`、body `48 32 32`），一致純靠手動同步、極易 drift（改元件忘了內嵌副本就默默不齊）。抽成 tokens.css 的 **`--term-pad-head`／`--term-pad-body`**，七處全改 `var()`——改一處＝七處同步。同輪把 body 上緣 **48→32**（shell-term 先手改、其餘跟進統一）。驗證：無殘留字面值、14 處 var 引用、typecheck ＋ build 綠。（內部元素 padding——AiChatPanel 對話泡泡 `22 28`、GhCodePanel 徽章 `4 16`——非框架、維持各自值不收斂。）

終端機文字色抽 token ＋輸出轉白（2026-07-14，接續前一則）：投影下終端註解對比不足，連調三輪（註解 token 化 → 提亮 → 輸出轉白）、每輪改多處重複引用又踩過 drift（shell-term 註解曾漂成 `--ink-3` 而非 `--dark-ink-3`）→ 一併抽 token 收束。
- **抽 token**：新增 tokens.css 的 **`--term-ink-cmd`／`--term-ink-out`／`--term-ink-comment`**，四個 shell/git 終端（GitTerminal／ShTerminal／shell-term／lab-04）的指令／輸出／註解全改引用——改一處＝四處同步。（AI chat/mono、gh code 面板文字語意不同、非 cmd/output/comment，不納入。）
- **值＋變更**：cmd／out 皆 `var(--dark-ink)`（白）——**`--term-ink-out` 轉白，推翻本檔前述「git 終端輸出統一 dim」**（原輸出 `--dark-ink-2 #ABABAB`）：指令與輸出同亮、僅 `$` 前綴區分，讓註解成為唯一暗階、對比拉開；`--term-ink-comment: #969696`（原 `--dark-ink-3 #757575` 於深底 #2a2a2a ~3.3:1 太暗，提亮靠近輸出但仍低一階保層級）。`--dark-ink-3` 唯一消費者即終端註解，抽出後成孤兒、移除。
- **終端背景**：`--term-bg #2a2a2a` 早已兩模式恆定（無 html.dark 覆寫、7 終端全用 `background: var(--term-bg)`）——本輪確認無需改（原要求「淺色終端背景比照深色」已滿足）。
- 驗證：`--dark-ink-3` 全域 0 refs、shell/git 輸出無 `--dark-ink-2`、typecheck ＋ build 綠。

「章節補充」分隔頁（2026-07-14，骨架約定；同日改版）：每個【NN】區塊的溢出（`>` 補充）段之前新增一張分隔頁，放映時把「主線內容」與「選讀補充」明確切開。**改用 `lab-02`**（與實作頁同版型，比 story-01 更貼「動手做」的節奏；原 story-01 版太靜態）：heading「【NN】章節補充」（對應 curriculum）／command「`# optional`」（mono、帶游標、隨段染色）／sub「時間不足可跳過」灰。W1 共 **17 張**（【01】–【15】＋【16】【17】），deck 195→**212**。**隨段染色（已做）**：`lab-02` 的 command／游標吃 `--brand-git`，故 git 段（P2–4，10 張）留橘、github 段（P5–6，5 張）掛 `class: brand-github` 翻藍、ai 段（P7，2 張）掛 `class: brand-ai` 翻紫。**成對的「章節實作」頁（2026-07-14 deck 文案定版）**：每【NN】的驗收／demo `lab-02` 頁（P7【16】兩張，W1 共 18 張）同步改 heading「【NN】章節實作」／command「`$ hands-on`」，原 heading＋原指令整併進 sub（指令以 code 保留，如 `` `git-scm.com` ``），與章節補充頁成對、對齊 curriculum 的 `*【NN】章節實作／補充*`。deck 文案僅 W1 已套（W2–W6 尚為骨架）。W2–W6 deck 製作時比照此約定。

情境版型落地：判準、命名與 templates 界線（2026-07-15；取代 W1【15】「載具分工」的載具指派）：基底版型（`git-*`／`github-*`／`ai-*`／`shell-*`／`lab-*`）本就是**逐情境客製的起點**（2026-07-12 定位），W1 P5／P6 首次大量落地，同輪把三件事收成規則。

- **選底判準＝「這頁有沒有圖可畫」**：不是「這頁是不是 git 指令」。`git init` 當下還沒有任何 commit、`git config` 根本無圖可配——套 `git-01` 只會得到一個**空的 COMMIT GRAPH 面板**。**判準要問兩層**（2026-07-16 同日被打臉兩次，兩個盲點方向相反）：①**圖的種類**——「有沒有圖」≠「有沒有*線圖*」。`git status` 的圖是**資料夾**不是線圖：`git-files` 的 EXPLORER 用 `status: new` 把 untracked 染綠，正好與終端機的 `Untracked files:` 互為兩種語言（`git init`／`git status`／`.gitignore` 三頁皆已循此轉 `git-files`）。**同一個盲點咬了兩次**：`git status` 與 `git diff` 都曾被列為「真的無圖可補」，但 `git diff` 的圖是**紅綠增刪面板**（2026-07-17 轉 `git-diff`）——問「有沒有圖」時，要把**資料夾、增刪面板、麵包屑、本地↔遠端落差**都算進去，「圖」不等於「線圖」。**W1 自此完全不用 `git-01`**（`grep -c "layout: git-01" apps/week-1/slides.md` ＝ 0）：那條「空 COMMIT GRAPH 待補」的清單，最後不是被補完的，是被**證明整條問錯問題**——三張各自的答案是資料夾／全寬終端／增刪面板，沒有一張需要線圖。②**圖的時間點**——有圖可畫 ≠ 現在該畫，還要問「**這個圖，學員在這一頁讀得懂嗎**」：W1【09】`git log` 的線圖畫得出來（本輪畫了又撤），但該頁之前沒教過 `--graph`（那是同章的**補充**、排在該頁之後，且註明「下週接 GUI」），畫了等於把學員還沒拿到的視覺語彙先端上桌——**該頁刻意留空面板；要動它得連順序一起重排，不能只補圖**。**頁碼與張數一律不入文件**（同「curriculum 不再標頁數」的裁決：那是 deck 的函數，抄一份必漂——本條原本自帶的「15→12→8 張」逐頁清單就爛掉過，把三張早已轉走的頁列為待補、連 `chapter-01` 章節封面都算在內）：現查 `grep -n "layout: git-01" apps/week-1/slides.md`，再看有無 `commits:`。**`git-01` 自此只留給真的有線圖可說的頁**；無圖可畫者改挑「左側放得下什麼」：目錄狀態→`git-files`、本地↔遠端落差→`git-push`、整個資料夾憑空出現／你必須站在它外面（`git clone`：位置與層級的事，麵包屑講得出來、平面列表講不出來）→`shell-dir`、什麼都放不下→`git-term`（全寬終端）。
- **落地清單**（**九張、皆非數字尾**；`grep -L "layout: <name>" apps/templates/slides.md` 可驗它們不在 templates。**刻意不記頁碼**：頁碼是 deck 的函數、抄一份必漂——本條原本逐一標註的八組頁碼於 2026-07-17 實測**七抽七全錯**，且全是安靜指錯人而非壞掉，故一律改以「哪一段／哪個指令」定位，要現查就 `grep -n "layout: <name>" apps/week-1/slides.md`）：`git-term`（git-01 去左圖＝全寬終端／**什麼都放不下時的歸宿**：`git config`、`git log` 全家）、`shell-dir`（shell-01＋麵包屑／**通用**：`cd`、`git clone`、`mkdir`——共通點是**位置與層級**，麵包屑講得出來、平面列表講不出來）、`git-files`（shell-02 的 git 版＝EXPLORER／**通用**：`git init`、`git status`、`.gitignore`、`add`+`commit`——共通點是**資料夾內容怎麼變**）、`git-push`（git-03 的 lanes／**通用**：【13】的 remote add／branch -M／push 教學三拍＋【15】首次 push——共通點是**本地↔遠端落差**）、`git-areas`（git-02 的 FILE FLOW 三區流／【07】立模型後連演 add／commit，【08】的 `restore --staged` 亦適用——2026-07-16 為它補了反向箭頭 `back` 與 `hidden`）、`git-diff`（**ai-01 的 git 版**＝AiDiffPanel ＋ GitTerminal／`git diff`、`--staged`——共通點是**改了哪幾行**；2026-07-17 新增，同輪為 AiDiffPanel 補 `align`，預設 `center` 故 ai-01 零回歸）、`shell-term`（原 lab-01／全寬單一終端，與 `git-term` 結構對稱）、`ai-skill`、`ai-context`。**命名避開 `git-flow`**：面板標籤是 `FILE FLOW`、照 `shell-dir` 的前例本該叫它，但 **git-flow 在 Git 世界是 Vincent Driessen 的分支模型**——在一門 Git 課裡撞這個名字，學生一 google 就走到別的東西去；改對齊 `areas` prop，且**涵蓋 add／commit／restore 而不偏袒任何一個**（教訓來自 `shell-mkdir` → `shell-dir`：用單一指令命名，多接一頁名字就開始說謊）。**前綴跟「內容」走而非基底家族**（`git-files`／`git-diff` 內部全為 `Sh*`／`Ai*` 元件）——寫 deck 的人照內容找版型。
- **命名＝基底／客製的唯一信號**：**數字尾 ＝ 基底詞彙表 ＝ 有 templates 頁**；**非數字尾 ＝ 情境客製 ＝ 不進 templates**。原判準「數字＝設計稿 template id」**降為次要**——設計稿已棄置、templates 才是現行參考，「是不是交接件」已是考古題；真正要一眼分辨的是「這張能不能自由改」。同輪 **`lab-01` → `shell-term`**（全寬單一終端，與 `git-term` 結構對稱；21 處使用點、tokens.css 3 處註解、README 對照表、本檔 5 處同步改名）並**移出 templates**——它雖出身交接批次（`a3fdc33` 一次 81 檔），但性質是「隨情境客製的 shell 終端」，留在 templates 會讓上述信號兩個方向都失效。現況：**八個**非數字版型（`git-term`／`git-files`／`git-push`／`git-areas`／`shell-dir`／`shell-term`／`ai-context`／`ai-skill`）全數不在 templates，規則自洽。
- **推論**：`templates` 自此**不再是「每個 layout 一頁」**——`shared/layouts` 有而 templates 沒有，是**預期狀態**，不是缺口，別去「補齊」。

左側 panel 面底上色 ＋ Ai 族併入 `.panel`（2026-07-15，接續前一則；補「面板圓角範圍（2026-07-10）」那則；不影響張數）：左側 panel 原本**整塊透明**，只靠 2px `--line` 邊框撐出範圍——量測 head 與 body 皆**就是頁面底色本身**（`head/page` 對比 **1.000**，兩模式皆是），而旁邊終端機是實色面（`--term-bg`，淺色下與紙面 **13.76**）。並排時左邊只是四條邊框、右邊才是個面。

- **面底＝新 token `--panel-face`（淺色 `#F6F5F3`；深色 → `--dark-panel`，不分家）**：首版直接沿用既有的 `--panel`（同為「離紙面一階」語意），**淺色下讀成髒、當天退回**。分家理由＝**面積**：`--panel #F5F1ED` 是為**小色塊**調的（佔位框／卡片／節點底／麵包屑），那些地方要「看得出是一塊」故容得下較高對比與暖度；同一個值鋪滿 1000×470 的面板就成泛黃舊紙。**暖度才是主因**——`--panel` 的 R−B＝**8**，是 `--paper`（R−B＝**3**）的 2.7 倍，而本檔「淺色底調暖」那則記載 `--paper` 定案時**已否決過 R−B＝5**（「暖度略高」）。故 `--panel-face` 對齊 `--paper` 的中性度（R−B＝3）並淡一階：`face/page` 淺色 **1.045**（原 `--panel` 為 1.077）／深色 **1.148**。`--panel` 本身**不動**，17 個既有消費者不受影響（這正是分家而非改值的理由）。**教訓**：沿用 token 時，語意對不代表**值**對——那顆值是在什麼面積下調出來的，是選色的一部分。
- **head 與 body 同底、整塊一個面**（曾試 head 釘 `--paper`／只有 body 上底，退回）：① 右側終端機的 head（紅黃綠燈那條）與 body 本就同為 `--term-bg`、中間無分隔，左右是並排的一對，左邊拆兩色即不對稱；② head 的界線已由自帶的 `border-bottom` ＋ 大寫 mono ＋ `letter-spacing .18em` ＋ `--ink-3`（淡於 body 的 `--ink`）畫過三次，再加色塊是重複編碼，且本設計系統通篇**描邊驅動、無陰影層疊**，拆 head/body 等於為一條 chrome 引進第二套文法；③ **深色沒有空間**：可用色帶只有 頁 `#1F1F1F` → 終端 `#2a2a2a` ＝ **1.148**，body 佔掉 `#2a2a2a` 後，head 想分開只剩「回到頁面色（＝本次要修的問題）」「亮過終端（chrome 大過內容，且 `#333333` 正是終端邊框色 `--dark-border`）」「取中間值 ~1.05 一階（投影會糊掉，同 `--qa-watermark` 註解已載明的失敗類別）」。**只在淺色成立的規則不是規則。**
- **深色撞色（已知、刻意，勿當 bug 修回）**：`--panel` 於深色 ＝ `--dark-panel #2A2A2A` ＝ `--term-bg #2a2a2a`，故深色下左面板與右終端**同色**（量測 `body/term` **1.000**），僅靠紅黃綠燈與等寬白字區分（邊框 `#383838` vs `#333333` 差 1.03、看不出）。上述 1.148 色帶內**無第二個選擇**；取捨＝與其取一個既不像紙也不像終端的中間值，不如讓「浮起的面 ＝ `#2a2a2a`」在深色下一致。淺色無此問題（面 vs 終端 **12.77**）。
- **Ai 族併入 `.panel`（單一來源）**：「左側 panel」原有**三種實作**、root 樣式逐字相同（`width:1000px` ＋ `border:2px solid var(--line)` ＋ `border-radius:14px` ＋ `.panel-head`）——手寫 `.panel`（git-01~05／git-push／github-01~05，11 個）、`ShPanel` 元件（shell-01~05／shell-dir／git-files，7 個）、`Ai*` 元件（AiContextPanel／AiPromptAnatomy／AiAgentLoop／AiCodeReview／AiDiffPanel，5 元件／7 版型）。只有 Ai 族沒掛 `class="panel"`，於是各自在 scoped style **複製**了 border-radius（即 2026-07-10 那則的「ai 左面板為 Ai* 元件、各自於 scoped style 加同值」）。本輪五個 Ai 元件 template 補掛 `panel` class、刪除複製的圓角 → **`.slidev-layout .panel` 自此是全 deck 左側 panel 的唯一選擇器，涵蓋 23 個版型**，圓角與面底皆一處供給（否則本次要把同一段背景色再貼 5 份）。2026-07-10 那則的 image-03「改名 `class="frame"` 脫離匹配」仍成立，且正是此選擇器**須被策展**的理由——往這條規則加東西前，先確認 `class="panel"` 的成員清單。
- **`align`／`padY` prop 擴及 Ai 左面板（同輪）**：`AiContextPanel`／`AiPromptAnatomy` 補上與 `ShPanel` **同名同義**的兩個 prop（`align: 'center'|'top'`、`padY`）——body 預設垂直置中，段落／列數少時內容會浮在面板正中央、與標題列脫開。客製頁 `ai-context`／`ai-skill` 傳 `align="top" :pad-y="0"` 讓內容從 head 下緣長下來（比照 `git-files`／`shell-dir` 的既有用法）；**預設值維持各元件原行為**（AiContextPanel 20、AiPromptAnatomy 12），基底頁 ai-05／ai-02 逐張截圖確認未受影響。左側面板三族自此連「內容對齊」的介面也一致。
- **驗證**：templates 20 頁（三族全含）＋ week-1 當時的六個客製版型頁**亮暗全量截圖**；逐張像素取樣確認 `head/page` 1.045（淺）／1.148（深）、`head/body` 1.000、`body/term` 12.77（淺）／1.000（深）、face 的 R−B＝3。typecheck ＋ 七份 deck build 綠。

面板 toggle 鈕＝「指令跑之前／之後」的現場演示（2026-07-16；`git-files` 既有、`git-push` 本輪補上，同輪抽成 `PanelToggle` 元件）：面板右下角給一顆 toggle，讓台上可以來回演示同一頁的前後兩態——**靜態圖畫不出「這個東西是被那行指令生出來的」**，只能畫出結果。

- **chrome 是單一來源、語意不是**：`shared/components/PanelToggle.vue` 只管外觀／位置／狀態機（`v-model` 交出布林），**切換的是什麼由消費版型決定**。定位基準放在 base.css 的 `.slidev-layout .panel`（加 `position: relative`）——**23 個左面板一次到位**，版型端擺進 `<PanelToggle>` 就定得住位，不必各自補（對無 toggle 的面板無副作用）。抽離經回歸量測確認**行為完全保留**（`git-push` 三拍＋`git-files`＋【15】首次 push 五頁，數值與抽離前逐項相同）。
- **成員與各自切什麼**：`git-files` 的 `statusToggle`（W1【15】提交變更）切**檔案的 git 狀態**（染色與圓點消失＝commit 完成後 VS Code 檔案總管就不再標色）；`git-push` 的 `laneToggle`（W1【13】三拍＋【15】首次 push）切**整份 lanes／transfers／meta**。
- **【13】三拍 ＋【15】回收（W1 落地全貌）**：`git-push` 的四張構成一條線——`remote add`（生出 `REMOTE` 虛線軌）→ `branch -M`（`LOCAL · master` → `· main`，遠端軌**原封不動**，因為那是純本機操作）→ `push`（兩軌同色點亮、同一個 hash、箭頭消失）。**【15】的首次 push 是實作頁、逐項比照【13】的 `push`**（兩態的 labels／節點數／dash／箭頭／meta 全同），只有 heading、command 與終端機不同——學生在【13】拆著學過，實作時看到同一張圖合起來，重複是**回收**不是冗餘。
  - **前一頁的結束狀態 ＝ 下一頁的起始狀態**（`remote add` 揭示後 ＝ `branch -M` 預設，量測逐項相同）。這是三拍能連成線的前提，改任何一頁都要回頭對這條。
  - **PAT 提示由【15】回流【13】（2026-07-16）**：`Username: ...`／`Password: ...` 兩行 ＋「**輸入時欄位沒有變化是正常的**，直接貼上剛剛複製的 token」原本只在【15】（實作頁）。但**學生第一次真的被要求輸入 PAT 是在【13】**（教 `git push` 的當下），故把這段回流。原文寫成單行 `Username: 你的帳號　Password: 貼上剛剛的 PAT`——那是**教學指示**、不是終端機真的會顯示的東西；改成兩行提示 ＋ 把教學意圖移進 comment，畫面才與學生實際看到的一致。「欄位沒有變化」這條是**踩點警告**：貼上 token 時終端機不回顯，不先講學生會以為沒貼進去。
- **`git-push` 走「前後兩態各寫一份、整份替換」，不是差異旗標（2026-07-16 改制，推翻同日稍早的旗標作法）**：`lanes`／`transfers`／`meta` ＝之前，`lanesOn`／`transfersOn`／`metaOn` ＝之後，各自省略時沿用「之前」那份。**`transfersOn: []` 與省略不同義**：前者＝揭示後箭頭消失（`push` 那張），後者＝不變。
  - **推翻理由＝旗標不收斂**。首版照差異走，結果【13】三頁各自要改的東西全不一樣，每頁都長一個新旗標：`remote add` 要 `toggle: true`（軌的存在與否）、`branch -M` 要 `labelOn`（標籤換值）、`push` 還要再三個（ghost→實心節點、tone muted→brand、箭頭消失）。**且 `push` 的箭頭方向與既有邏輯相反**——原本寫的是「藏軌時連帶收箭頭」（防止箭頭指向不存在的軌），`push` 要的卻是「揭示後才收箭頭」，硬塞就是再加一個反向旗標。三頁三種需求、零重疊，這是模型不對的訊號，不是巧合。
  - **代價與回報**：資料重寫一次（`remote add` 的 LOCAL 軌寫兩遍）換零新機制、任何變化都表達得出來；而 frontmatter 讀起來反而**直接看得到兩態**，不必在腦中推旗標怎麼交互。**`pending` 留著**——它是渲染狀態（怎麼畫這條軌）不是切換機制（切到哪一態），兩者不同層。
- **兩種 primitive，刻意不統一**：`git-push` ＝**整份替換**；`git-files` ＝**抹除屬性**（項目兩邊都在，只有某個欄位變）。形狀不同，硬抽成一個會是過度抽象。
- **版型端不預先開孔（2026-07-16 定案，勿事後「補齊」）**：曾考慮把「存在性」primitive 一次鋪到全部陣列驅動的面板（`GitGraph` commits／`GhRunLog` steps／`ShFileTree` tree……，約 14 個版型）。**否決理由＝沒有消費頁就是在猜**：git-01 該濾 `commits` 還是連 `edges` 一起濾？濾掉 commit 而 edge 還指著它，就是下一條「箭頭指向空白」的同族 bug——而那個坑正是**因為 `remote add` 那張真實頁面**才被發現的。**每接一個都要有頁面當測試**。同理於本節「templates 不再是每個 layout 一頁」：`shared/layouts` 有而別處沒有，是預期狀態、不是缺口。
  - **新增消費者的成本 ≈ 4 行**（哪一頁需要，當下決定它切什麼）：① prop `xxxToggle?: { label: string; labelOn?: string }`；② `const revealed = ref(false)`；③ computed 過濾／改寫該版型自己的資料；④ template 擺 `<PanelToggle v-model="revealed" :label="…" :label-on="…" />`。
- **預設一律停在「之前」**：兩個版型皆 `ref(false)` ＝ 指令還沒跑的狀態，按鈕往「之後」走、再按收回。兩個 label 都是**當下狀態要顯示的字**（`labelOn` 省略時沿用 `label`）。
- **`@click.stop` 是必要的、不是保險**：Slidev 的滑鼠點擊會推進 clicks／翻頁，不擋掉就是「按一下按鈕順便跳下一頁」。
- **收東西時要連帶收依賴它的繪製**：軌不畫、箭頭就不能畫——箭頭的幾何寫死在兩條軌之間（`GitSyncLanes` 的 `LANE_Y`），目標軌不存在時它照畫，變成一支指向空白的箭頭。改制後這件事由「整份替換」自然涵蓋（該態沒有那條軌，就別在該態的 `transfers` 裡放箭頭），不再需要連帶邏輯。
- **`GitSyncLanes` 新增 `pending`（2026-07-16）＝整條淡色虛線、無節點**。與 `ghost` 的差別是「有沒有那一顆」：`ghost` ＝這一顆即將到位（畫虛線圓點），`pending` ＝整條都還沒有東西。**必須先於 ghost 分支攔截**：`commits` 空陣列會讓 ghost 的 `findIndex` 落空、掉進「無 ghost」那條 return 畫成**實線**，而 pending 的語意正好相反。
  - **這條是為了修一個事實錯誤，不是美觀**：`git remote add origin <url>` **只寫兩行 config**（`remote.origin.url` ＋ `remote.origin.fetch`）——實測 `git branch -r` 空、`refs/remotes/` 空、`git rev-parse origin/main` 直接 fatal。**遠端追蹤分支要等 fetch／push 才生得出來**，故 `remote add`／`branch -M` 的遠端軌不該有 `origin/main` 標籤、也不該有節點。`·` 後面那格裝的是 **ref**，`origin` 是遠端名稱、不是 ref，塞進去是類別錯誤——那格跟著分支走，沒有 ref 就空著。**`origin/main` 在【13】只出現一次：`push` 按下按鈕的那一刻**，正是 push 建立它的那一刻。
- **按鈕恆為絕對定位、偏移量兩版型同值（`right/bottom: 44px`）**：這顆鈕是**浮在面板右下角的 chrome，不參與內容的高度分配**。原先兩邊都走流內排法（`margin-top: auto` ＋ `align-self: flex-end`），於 `git-files` 沒事（列表短、吃不滿），移植到 `git-push` 就出事——左面板是 flex column，按鈕在流裡吃掉高度，`GitSyncLanes` 的 `.sync-lanes`（`flex: 1` ＋ `align-items: center`）從 **541.6 縮到 480**，置中餘量歸零，**整組軌道往上跳 30.8px**（線 y 546.4 vs `branch -M`／`push` 的 577.2）。SVG 本身沒被壓縮（恆 480），**症狀是位移不是變形**，比對相鄰頁才看得出來。改絕對定位後三頁軌道等高。
  - **偏移量的判準改了（推翻同日稍早的「抄原則不抄數字」）**：曾主張 `git-files` 的 44px 是對齊 `ShPanel` head 內距（`24px 44px`），故 `git-push` 該取 36px 對齊自己的 `.panel-head`（`24px 36px`）。**推翻理由——這顆鈕是跨版型共用的語彙**，學生在 `git-push` 與 `git-files` 看到的必須是同一顆；跨版型一致 **>** 與各自 panel-head 對齊。兩版型皆 `right/bottom: 44px`（距面板 border-box 邊 46px＝44 ＋ 2px 邊框），量測兩顆右緣同為 x=1054、y=842。
  - **`:active` 下沉改走 `transform: translateY(1px)`**：絕對定位已用 `bottom` 錨定，再給 `top: 1px` 會讓 top/bottom 同時成立、把按鈕拉長。
  - **定位基準走共用選擇器**（base.css 的 `.slidev-layout .panel`），不是 `ShPanel` 內部、也不是各版型自己補——`.panel` 本就是全 deck 左面板的唯一選擇器（見前一則「Ai 族併入 `.panel`」）。ShPanel 的 `.body` 開了 `overflow-y: auto`，但它不是按鈕的 containing block，故不裁切、不隨捲動；`.panel` 自身的 `overflow: hidden` 也裁不到（偏移量在面板內）。`elementFromPoint` 打在按鈕中心確認命中按鈕本身。
- **驗證**：`remote add` 亮暗雙模式、切換前後各一張截圖；確認按下後 `PageNo` 仍為 153（`.stop` 生效）、且 **`LOCAL` 軌 y 座標前後不動**（`LANE_Y[0]` 固定，只有 REMOTE 進出）——toggle 只該讓 delta 動，不該讓畫面整團跳位。改絕對定位後逐頁量測：`git-push` 四張的 `.sync-lanes` 皆 541.6、SVG y 皆 427.2、第一條軌 y 皆 **577.2**；`git-files` 按鈕位置前後分毫未動（視覺無變更）。typecheck 綠。
- **驗證腳本的坑（本輪踩到並更正）**：Slidev 把鄰頁一起留在 DOM，`document.querySelector('.slidev-page')` 抓到的是**上一頁**。症狀陰險——資料整批位移一格後「看起來全對」，還一度讓人誤判「URL 比 `<!-- pN -->` 標記多 1、標記漂了」（實為 URL＝pN，標記無誤）。**取當前頁必須用可見性過濾**（`getBoundingClientRect` ＋ `offsetParent`），並以頁面自己的 `PageNo` 徽章對帳。另：Slidev 的縮放 transform 會讓 puppeteer 的 `elementHandle.click()` 算不出座標（`Node is either not clickable`），改用 `evaluate` 內的 DOM `.click()`。

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

- [x] **Antigravity CLI 實地驗證** — **閘門收束 2026-07-13**（原訂 ≈7/14）。原綁三項，逐項落地：①**安裝**——已本機實裝、無難度，risk 消。②**skills/自訂指令機制**——即便機制不成熟，fallback＝把 `SKILL.md` 內容當 prompt 貼給 AI（內聯、無損），且此動作**正是 W1【17】「Context 觀念（載入 skill 會佔 context）」的教學內容本身**——失敗模式即課程內容，故不再是硬前置。③**MCP 串 GitHub**——W1 P7（【16】Antigravity 安裝＋指令、【17】skills）根本無 MCP，該項屬 **W4【11】**（8/15），錯置進 W1 定稿閘門 → **遷 W4 備課驗**（W4 課綱已有 gh 內聯降級，不需獨立硬閘門）。原「prompt 包（檔案結構已預留）」降級路線隨之簡化為上述②的內聯貼法。
- [x] **通知系統規格拷問輪** — 已跑（2026-07-07），結論見「通知系統規格」節。**衍生小閘門**：W6 備課時實測各語言 container→Render，可行者升 hands-on（PHP 機率高；JSP/.NET 保守維持 demo）。
- [x] **通知管道定案** — LINE 為主／Discord 備援；e-mail 保留（見「通知系統規格」節）。
- [ ] **W6 環境分支雙環境實測** — W6 備課時：preparing↔production 能否以 GitHub Environments ＋ 兩個 Render service（或改用既有 Cloudflare 兩 env）做出；決定 GitLab Flow 在 W6 是 hands-on 或維持概念收尾。**已知**：單一 deploy target 靠 env var 切不出兩個 live 環境（需兩 target 各帶 env var）；GitHub Pages 一 repo 僅一站，不適用此題。

## 已廢棄決策（供追溯）

| 決策 | 廢棄原因 |
|---|---|
| 單一學員 repo 從零自建、六週長大（雙軌 `site/`+`notify/`） | 改為每週情境 repo + W6 capstone；雙軌構想移交 capstone 規格輪 |
| AI 內容集中 week-4 下午 | 改為每週 P7；MCP 仍錨定 W4 |
| 骨架四固定件（開場地圖／實作題卡／收尾三頁／cheat sheet） | 改為 v2 骨架（見上）；開場回顧與收尾三頁式取消 |
| 講師參考 repo 打 `week-N-done` tag 當救援點 | 由每週獨立情境 repo 天然取代 |
| 每天 2 個實作案例（AM/PM 各一） | 精簡為每週 1 個（P5–P6 情境挑戰） |
| 每週 skills 同包附工具無關 prompt 降級版（v2） | 2026-07-10 取消：預設學員皆裝 Antigravity，逐週 prompt 版形同冗件；Antigravity 驗證失敗的 prompt 包降級路線亦於 2026-07-13 隨閘門收束簡化為「貼 SKILL.md 當 prompt」的內聯做法（見閘門節），不再是預留檔案結構 |
| Copilot 可拆卸模組（W4 P7 一頁）＋授權採購閘門 | 2026-07-13 移除：AI 線已定案 Antigravity CLI（Google 免費帳戶）單主力；授權採購屬辦訓單位、不在講師管轄，閘門無人可關 → 模組與閘門一併退場。`⟦可拆卸⟧` 標記隨唯一使用者移除而自 docs/README 標記表下架 |
