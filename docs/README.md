# 六週頁級課綱 — 總覽

42 堂課（6 日 × 7 堂 ×50 分）的頁級規劃。每頁只定標題，內容於逐週寫 deck 時落地。
決策脈絡見 [DECISIONS.md](../DECISIONS.md)。deck 頁級規劃見 [curriculum/](curriculum/)、週配套（repo／skills／知識點清單）見 [kit/](kit/)。

**進度標記（v1・2026-07-10）**：全六週頁級課綱＋kit 同步**定版（v1）**——【NN】依產物線連續編號、P6／P7 全編號化＋P8 瘦身、三種 flow 教學（W3 P5）、週 repo 發放原則入檔；onboarding 22 頁與 W1 為講師過稿定版。**v2 預計 8/8 停課週**：比照本輪 W1–W3 的梳理，再走一輪 W4–W6。無論 v1／v2，製作當週 deck 時實際內容與細節仍可能變動（模式：講師在週檔貼 code block 草稿 → 整合進頁級規劃並跨檔同步）。

## 標記說明

| 標記 | 意義 |
|---|---|
| `〔dN-x〕` | 對應 spec.csv 第 N 個上課日課表的第 x 項（AM/PM 分開編號）；僅用於標記跨週搬遷的 spec 項 |
| `★` | 與 spec 的差異點（彙整於下方差異表） |
| `(溢)` | 溢出頁：時間不足可跳過，永遠排在該堂尾端 |
| `✋` | sandbox 即幤練習頁 |
| `🧭` | 週 repo 導覽頁 |
| `🔨` | 情境挑戰卡（固定格式：劇情／目標／步驟提示／驗收條件／求救方式） |
| `✅` | Recap 頁（確認技能亮了＋口頭作業發布；實質 data.js 更新儀式在 P6 情境挑戰，隨當週 Git 技能長大） |
| `**【NN】標題**`／一般行／`【？】…`／`【！】…`／`*【NN】章節實作／補充*`／`>` 前綴行 | 頁級標記（全六週採用）：**編號只出現在區塊扉頁**（粗體整行）；區塊內一般行＝內容頁、`【？】`＝提問頁（刻意提問促思考、中段轉折用、每區塊至少一張）、`【！】`＝決策頁（**一張**投影片：對前面 `【？】` 的**拍板／答案**——給結論或決定性判準，1–2 句或關鍵字，**不是再問一次**；解釋交給內容頁承載，可複數知識點；**每區塊一張**——揭露型（`【？】→【！】`）或總結型（內容→`【！】`收結）皆可）、斜體整行＝lab-02 家族頁、帶 `【NN】` 前綴、兩型：`*【NN】章節實作：…*`＝驗收／示範頁（學員驗收，或講師 demo；台上實際跑一段）、`*【NN】章節補充*`＝章節補充分隔頁（放映切開主線與選讀；每個有溢出的區塊一張、緊接 `>` 群前）、`>` 前綴＝溢出補充頁（時間不足可跳過）——每區塊固定「扉頁 → 內容 →（提問／決策）→ 章節實作 → 章節補充分隔 → 補充」，提問頁、補充頁、決策頁各至少一張 |

**頁級落檔原則（寫 deck／給 AI 的認知）**：每個 `【？】`／`【！】` 都是**一張只有一行字**的投影片（1–2 句或關鍵字）——挑極簡模版，別塞段落或條列。標準節拍是 **`【？】` 問 → `【！】` 拍板**：`【？】` 把取捨拋成問句，`【！】` **緊接著給答案／結論**（「不行」「用 X」「看某條件」＋原因關鍵字，**不是再問一次**），後面的內容頁再展開解釋（可複數知識點）。也可反過來**先鋪知識點、`【！】` 收結論**。

**呈現格式**：curriculum 的頁級行（含 `【NN】` 扉頁）一律以 `- [ ] ` checkbox 呈現，供作者逐頁勾記建置進度；front-matter、`## Kit —` 指標、`## Spec 覆蓋` 非頁級，維持 `- `。

**頁數標示（2026-07-14 立規；2026-07-16 收緊為無例外）**：**任何文件都不抄頁數**——curriculum 段標題、六週地圖頁數欄一律不標，不分 deck 已建未建。頁數是 deck 的**函數**，抄一份就必漂。要數就現查：deck **已建**＝ `slides.md` 的 `<!-- pN -->`（見記憶 `deck-pn-comments`：任何增刪／重排後自動重生）；deck **未建**＝**數該段的 bullet**——各段的 `data-05` 等**每一張**投影片都應有自己的 bullet（「1 bullet = 1 張」），逐張列即可自行數出張數，**毋須另記總數**。**兩個例外都在 2026-07-16 廢除，因為兩個都爛了**：①「未建的週保留 `（~NN 頁）` 規劃估值」——與同條的「毋須另記總數」自相矛盾（bullet 既然可數，`~NN` 就是同一個數字的第二份抄本），實測 W2–W6 共 **36 個教學段有 33 個與 bullet 數對不上**（清一色少算 1–3，bullet 逐年長、標題沒跟），**帶 `~` 的估值照漂**（W2/W3 的 P7 標 `~14`、實際 17）；只有 P0／P8 那種 2–3 個 bullet 的小段沒漂——**小到不會漂的才沒漂，不是規則有效**。②「六週地圖頁數欄」——**7 列錯 6 列**（門面標 22／實際 24、W2 `~148`／實際 179 差 31…），且唯一對的 W1 221 是插頁當天碰巧對上；最毒的是門面那個**不帶 `~`** 的 22：照規則它宣稱「實建張數」，卻從未被量過。W1 校正時亦已見同病：段標題與「實作頁數」兩套數字**六段裡各只剩一段是對的**。

**【NN】編號規則**：編號**以「產物」為單位連續、不逐週重起**——兩條線各從 01 起、其後週續號：① 儀表板線 W1→W2→W3（W1 起點，W2 續、W3 續）② 通知系統線 W4→W5→W6（W4 起點，W5 續、W6 續）。續號週從上一週最後一號 +1 起（現況：**W1 01–17、W2 18–31、W3 32–46**（W3 P6【44】發版塊、P7【45】【46】）；通知系統線 W4 01–11、W5 12–23、W6 24–30；`docs/kit/` 自 2026-07-17 改依課堂 P1–P7 分組、不再帶【NN】）。**陷阱**：續號週的號碼是上游週塊數的**函數**——上游（尤其仍在初版滾動的 W4–W6）增刪任何一塊，下游整條 curriculum 扉頁要重算（kit 已不連動）；跨週 prose 引用一律標 `W1【NN】` 等**來源週前綴**，才不會在重算時被連動。

## 知識點清單推導（→ `docs/kit/`）

各週知識點清單（`docs/kit/week-N.md` 的「知識點清單」節）由 deck 頁面推導；**分組＝課堂 P1–P7（2026-07-17 改制，取代原【NN】區塊分組），與技能儀表板的磚 1:1**——磚號＝堂號（每週 01–07；W1 的 P1 為 onboarding 放映、註記無知識點；W6 特例 P4–P6 為 capstone 合併段）：

- **分組**：`- >PN — 堂標題` 為分組（堂標題照 curriculum 的 `## PN —` 標題，去 ★ 等標記）；底下 `- [ ] 關鍵字` 為可勾知識點（純關鍵字）。知識點仍由該堂的【NN】區塊頁面推導，只是收納單位改為堂——**【NN】重編號不再連動 kit**。
- **MILESTONE 註記**：每週清單末尾一行 `- *MILESTONE：成就名（裝飾磚，無知識點）*`，對應儀表板每週的裝飾磚；成就名＝當週終點狀態（六週地圖）。
- **P7 AI 段編號化（改制中，定案 2026-07-10 全面改）**：P7 的 AI 內容比照教學塊給 `【NN】` 編號（AI 工具與 Agent Skills 即儀表板知識點）。**六週 P7 全數編號化完成**（`【AI】` 分組退場）：W1【16】【17】、W2【30】【31】、W3【45】【46】、W4【10】【11】、W5【22】【23】、W6【29】【30】。
- **顆粒度**：指令列舉型每指令一勾、概念型整塊一勾、旗標／變體折進主指令。
- **`⟨加分⟩`**：源自 `>` 溢出頁的選學技能。
- **`【！】` 決策頁**：**產生一個**「判準」知識點（與 `【？】` 相反），收該塊的取捨判斷（reset vs revert、merge vs rebase…），收進該堂分組；承載其判準的內容頁與這個點合計仍只算一個、不重複計。
- **不產生知識點**：`【？】` 提問頁、`*斜體*`（`章節實作` 驗收頁＋`章節補充` 分隔頁）、伏筆／整合頁（例：預告、🔨 整合實做）。
- **例外——🔨 挑戰完成項（2026-07-17）**：情境挑戰塊可把「完成挑戰」本身入清單為該塊**唯一非加分項**（首例 W1【15】「部署『技能儀表板』頁面」）——完成即該塊在儀表板上的主線進度條 100%。與上條不衝突：整合實做仍不產生「新技能」點，完成項是**驗收位**、不是技能；W2–W6 的 🔨 塊是否比照，備課時逐塊定。
- **onboarding 例外**：序章無 `【NN】`／技能，`docs/kit/onboarding.md` 改收「課程認知」checkbox，依序章性質分組（認知／目標／調整／節奏／資源／附加）。

## 頁型 → 版型對照（deck 製作）

寫週 deck 時，curriculum 的頁型對應 `slidev-addon-shared` 版型如下（版型目錄與變體見 [DECISIONS.md](../DECISIONS.md)「視覺線」）。跨週通用、為預設起點；實作仍可逐情境客製（如 `git push` 專屬 layout，而非套通用 git-01）。

| 頁型（curriculum 性質） | 版型 | 備註 |
|---|---|---|
| `【NN】` 區塊扉頁 | `chapter-01` | `no`＝【NN】號、`heading`＝區塊名、`brand` 依產物線（git/github/ai） |
| git 指令 | `git-01` | `heading`＋`command`＋`terminal`；左側 COMMIT GRAPH 由 `commits`/`edges` 驅動 |
| shell 指令（pwd/ls/cd/mkdir/rm…） | `shell-01` | 左側 WORKING DIRECTORY 檔案樹＋右側終端 |
| `【？】` 提問 | `qa-01`（`?` 浮水印） | 一行字 |
| `【！】` 拍板 | `qa-02`（`!` 浮水印） | 一行字 |
| 純文字概念 | `content-01` | `heading`＋`body`（＋`note`） |
| 對照型概念（A vs B） | `diagram-02`（心智模型對照） | 圖上概念、圖下說明 |
| 流程／關係圖 | `diagram` 家族逐圖挑 | 線性流程→`diagram-04`/`05`、關係/註解圖→`diagram-01` |
| 安裝／設定（雙平台） | `tool-01` | 左 macOS／右 Windows 雙欄 |
| GitHub UI 畫面（註冊/設定/repo） | `image-01` | 截圖＋`imageNote` 標註 |
| `*【NN】章節實作*` 驗收／demo | 終端類→`git-01`/`shell-01`／`shell-term`；畫面類→`image-01` | 依該頁性質分 |
| `*【NN】章節補充*` 分隔頁 | `lab-02`（隨段染色） | 每個有溢出的區塊一張、緊接 `>` 群前 |
| 金句／宣言 | `content-03` | 置中巨型，僅明確宣言時用 |

終端內容慣例：`# 意圖註解 → $ 指令 → 輸出 → 底部高亮 note`（git-01 的 `terminal` 用 `kind: cmd/comment/out/dim/note/warn`；shell-01 用 `type: cmd/output/comment`＋`accent`）。

**區段品牌覆寫**：一個教學段對應一個品牌主題，**該段所有頁一律染該色——含 git/AI 終端，以及收束該段的 break**（break 隨「它所收束的那一堂」走色，非導入的下一堂）。git 段用預設（橘、免掛 class）；GitHub／AI 段的 `chapter-01` 扉頁用 `brand:` prop、其餘頁（含終端、break）掛 `class: brand-github`／`class: brand-ai`（`shared/styles/base.css` 提供，remap 該頁 `--brand-git*`）。W1 對照：**P2–P4 git（橘）· P5–P6 github（藍，含【13】綁遠端／push／clone 等對 GitHub 的 git 指令）· P7 ai（紫）**。

## 六週地圖

| 週 | 日期 | Module | 主題 | 當日終點狀態 | 週 repo | P7 AI 段 |
|---|---|---|---|---|---|---|
| 門面 | 常駐 | MODULE · ONBOARDING | [Onboarding](curriculum/onboarding.md)（`/`）：課程介紹與索引 | 開課前公開 landing；第一堂開場放映 | —（`apps/onboarding`） | — |
| 1 | 7/18 | MODULE · ORIGIN | 從零到「我的東西上線了」 | 自己的儀表板上線 | 無週 repo；學員自建 `skill-dashboard`（產物①），模板檔案由課程模板庫發檔 | Antigravity 安裝＋解釋指令＋commit message |
| 2 | 7/25 | MODULE · PARALLEL | 平行宇宙——分支與衝突 | 敢開分支、敢合併、敢面對衝突＋發出第一個 PR | 個人儀表板（分支/衝突情境） | 分支顧問＋AI 解衝突 |
| 3 | 8/1 | MODULE · REWIND | 時光機與救援 | 搞砸了也救得回來的底氣＋首次發版 | 個人儀表板（救援/發版情境） | 救援顧問＋歷史整理 |
| — | 8/8 | — | 停課 | | | |
| 4 | 8/15 | MODULE · TEAMWORK | 團隊協作與 CI 初見 | 像團隊一樣工作、第一個綠勾 | `notify-w4-teamwork` | MCP＋GitHub 串接＋PR 描述＋AI review |
| 5 | 8/22 | MODULE · PIPELINE | 測試與 Pipeline | push 之後測試自己跑、全綠 | `notify-w5-pipeline` | 生成／除錯 workflow YAML |
| 6 | 8/29 | MODULE · LAUNCH | 交付日——容器化與 capstone | push 就部署、部署就通知；結業 | `notify-w6-shipping`（完成自建）＋上游 repo（參考/救援） | 併入 capstone＋Claude Code 壓軸 |

Module 名為各 deck 封面與視覺識別（WeekBadge 等）用的英文＋中文雙語主題，敘事弧：
序章 ONBOARDING → 起源 ORIGIN → 平行 PARALLEL → 倒帶 REWIND → 協作 TEAMWORK → 流水線 PIPELINE → 發射 LAUNCH。

## 每日網格（固定模板）

| 堂 | 時間 | 內容形狀 |
|---|---|---|
| P1–P3 | 09:00–11:50 | 教學＋✋sandbox＋GitHub 操作穿插 |
| P4–P5 | 13:00–14:50 | 教學（銜接段常放這裡） |
| P6 | 15:00–15:50 | 🧭 週 repo 導覽 → 🔨 情境挑戰（當日技能重走） |
| P7 | 16:00–16:50 | AI 示範 45 分（demo 劇本＋跟做指令框）＋ P8 Ending 5 分（✅ Recap → 下週預告／課前準備） |

每份 deck 以「**P0 — Starting**」章起頭（簡報封面＋本日目標；W4 加記憶恢復頁）、以「**P8 — Ending**」章收尾。**P0／P8 是章節序、不是獨立時段**：P0 佔首個教學堂的開頭（W1 即 P2 的開頭）、P8 佔 P7 的最後 5 分鐘。週級配套（週 repo、本週 skills、知識點清單）統一收於 [kit/](kit/)；curriculum 頁級檔只在 P0 前留單一 `Kit —` 指標（`Kit —` 標籤與 `P0 —`／`P8 —` 同款，明示非教學堂）。
W1 例外：P1 為 [onboarding deck](curriculum/onboarding.md) 整堂放映，教學自 P2 起。
W6 例外（下半場）：P4–P6 為 capstone，AI 內容併入 P7、Ending 為結業擴充版。

## 與 spec.csv 的差異記錄

[onboarding deck](curriculum/onboarding.md) 的「課程調整」三頁（通知管道／AI 工具／順序重排）向學員說明此表（第一堂開場放映即完成告知）。

| # | spec 原文 | 調整 | 理由 |
|---|---|---|---|
| 1 | 實作案例以 LINE Notify 為通知管道 | 改用 **LINE Messaging API 為主／Discord 備援**（webhook），e-mail 保留 | LINE Notify 已於 2025/3 終止服務 |
| 2 | Gemini CLI（day-4） | Antigravity CLI | 官方宣布之繼任工具 |
| 3 | 測試自動化（Node.js、Python、ASP.NET Core、PHP、JSP） | 以 Node.js 與 Python 作為示範載體，其餘以 matrix demo 與對照頁帶過 | 五個 stack 不可能在 4 小時內對初階學員成立；matrix 策略恰為 spec 技能指名項 |
| 4 | Docker 建置（暗示本機安裝） | Dockerfile 本機撰寫、build/push 於 GitHub Actions | BYOD 機器裝 Docker Desktop 風險高；「CI 代勞」即課程主旨 |
| 5 | CI/CD 概念＋第一個 Workflow 在 day-5 | 前移至 day-4 尾端 | 以 Branch Protection 的 required status checks 自然銜接，並紓解 day-5 負載 |
| 6 | SSH 金鑰設定在 day-1 | 挪至 W2；day-1 以 PAT/HTTPS 先行 | 降低首日負載（首日已含環境安裝＋儀表板上線） |
| 7 | fetch/pull 在 day-1 | 全數挪至 W2 | 同上；且與分支週的協作情境更契合 |
| 8 | PR 流程首見於 day-4 | W2 首見（分支概念與命名教完後，情境挑戰收尾發第一個 PR），day-4 深化為 review／保護／Issue | 好 PR = 好 branch＋好 commit，故隨分支週落地；W2 起每週練習以 PR 為載體 |
| 9 | Git Flow 工作流程詳解 | 降為歷史定位，並補 GitHub Flow（主流）＋GitLab Flow（環境分支）對照，三者各一【NN】（W3 P5）| 2026 業界主流已移轉，避免帶過時心智模型入職；GitLab Flow 補 spec 未涵蓋的 staging／環境概念，銜接 W4–W6 CD |
| 10 | 每日實作案例均為「CI/CD 部署通知系統」 | 兩大產物對半分：W1–W3 產物＝個人儀表板（產物①），W4 起＝通知系統（產物②） | 前三週需要「自己的東西上線」的擁有感與 solo Git 載體 |
| 11 | —（spec 無此結構） | 每堂 50 分、每日尾堂固定 AI 段＋Recap；每週發放 Agent Skills 與該週知識點（點亮技能儀表板） | 執行層設計，於 W1 P1 一併說明 |
| 12 | 其他說明欄列 Git Bash (Windows) | Windows 改用 PowerShell（Windows Terminal 預設 shell），並於 W1 環境設定加入 `Set-ExecutionPolicy RemoteSigned` 解鎖步驟 | 貼近 Windows 原生日常環境；npm 系工具（含 AI CLI）的 `.ps1` shim 需先解鎖，W1 一次做完 |

## Spec 覆蓋核對

覆蓋以各週檔末的 `## Spec 覆蓋` 為單一事實來源（逐項對照該日 spec 課表）；`〔dN-x〕` 僅用於標記跨週搬遷的 spec 項（現存於 W4／W6 的 P7 AI 段）。差異僅有上表 11 項，其餘照 spec 字面覆蓋。

## 兩大產物與發放

- **兩大產物（8/8 對半分）**：① 技能儀表板（W1–W3，個人）② CI/CD 通知系統（W4–W6，團隊＝終點）。
- **簡報連結**：onboarding deck（`/`，含 release-schedule 驅動的課程索引）＋各週 `/week-N`。
- **Agent Skills**：Antigravity CLI skills/自訂指令＋prompt 降級版，隨週 repo `skills/` 目錄發放（無新週 repo 的 W2–W3 改以程式碼模板連結發）；各週清單見週檔。
- **程式碼模板**（規劃暫名「課程模板庫」，deck 定名；2026-07-13 追記；onboarding 資源頁 announced）：單一 repo＝模板發放處（儀表板、Agent Skills 等）＋官方提問處（發問 Issue 掛此 repo）。**載體關係已定案（2026-07-14，取代原「收連結或直接承載，於 W1 kit 製作時定」）＝直接承載**；**結構自 2026-07-18 依週分層**（繼任 07-17「dashboard／skills 同層分離」——防學員誤搬 `skills/` 的動機由週分層繼續承擔）：root＝`README.md`＋逐週 `W{N}/`，週資料夾內 `templates/`（產物模板，W1＝`templates/skill-dashboard/` 的 `index.html`＋`data.js`——畫面與程式全數內聯於單一 `index.html`，學員只搬這兩個檔案）＋`skills/`（該週 Agent Skills）。**取用＝deck QR 直鏈模板資料夾頁**（`W1/templates/skill-dashboard/`），學員在頁面下載兩檔灌入自建 repo——原「Code → Download ZIP 整包」敘事退場（deck 已無 ZIP 字樣；「GitHub 無法只下載子資料夾」的事實不變，逐檔下載已無此需求）。維護走網頁上傳（雲端硬碟式，不經本地版控）。此庫**不設為 template repo**（儀表板不再走「Use this template」；W4 的通知服務週 repo 屬「預埋」類、仍走 template repo，不受此條影響）。
- **週 repo 發放原則（發「狀態」、不發「練習」）**：操作定義一律住在 deck 頁級（`✋` 行即腳本），不另打包。起始狀態三分：**自建 ≤2 分鐘且自建即複習**→現場自建（丟棄式 sandbox，W2–W3；災情現場製造是教學設計）；**學員蓋不出或不值得蓋**→預埋成週 repo（W4 協作素材、W5 壞 pipeline）；**狀態＝產物模板**→**發檔案、不發 repo**（W1 儀表板：學員自建 `skill-dashboard`，模板檔案由課程模板庫取檔灌入（QR 直鏈模板資料夾）；2026-07-14 改制，取代原「Use this template 發一次」）。技術限制順向支持：發檔（不論逐檔或 ZIP）／Use this template 皆不帶完整 commit 歷史，「歷史型」練習（reflog／rebase -i／cherry-pick）本就發不動，只能自建；反過來說，發檔案讓學員的第一顆 commit 就是專案起點，整棵歷史都是他自己的。
- **技能儀表板**（正式定名，＝產物①）：學員個人 repo（W1 建立、W2–W3 用 Git 技能優化）＋GitHub Pages；技能點亮即其知識追蹤本體；資料模型為單一 `data.js`（`window.DASHBOARD_DATA` 物件，免 fetch、`file://` 直開可看）；知識點清單（指令/概念級）見各週 [`kit/`](kit/) 的「知識點清單」節，即儀表板 schema 與 Claude Design 的視覺單位。
- **發問管道**：GitHub Issue，掛在程式碼模板 repo（onboarding 資源頁預告、「遇到問題——請開 GitHub Issue」頁 announced；用課程教的工具發問，本身即教學）。

## 製作節奏與閘門

W1 全套（deck＋儀表板的模板檔案＋W1 skills）趕 7/18；W2–6 逐週滾動提前一週。
閘門：Antigravity 驗證（**收束 7/13**：安裝已驗、skills fallback 內聯化；MCP 項遷 W4 備課）／通知系統規格拷問輪（**已定案 7/7**）／通知管道（**LINE 主・Discord 備援**）。**衍生小閘門**：W6 備課時實測各語言 container→Render。
W6 capstone（P4–P6）＝完成自建系統的最後一哩（deploy＋notify），非 Fork 重跑；規格已定案（見 DECISIONS「通知系統規格」）。
