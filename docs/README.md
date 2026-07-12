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
| `✅` | Recap 頁（確認技能樹亮了＋口頭作業發布；實質 data.json 更新儀式在 P6 情境挑戰，隨當週 Git 技能長大） |
| `⟦可拆卸⟧` | 條件性內容（如 Copilot 授權到位才上） |
| `**【NN】標題**`／一般行／`【？】…`／`【！】…`／`*斜體行*`／`>` 前綴行 | 頁級標記（全六週採用）：**編號只出現在區塊扉頁**（粗體整行）；區塊內一般行＝內容頁、`【？】`＝提問頁（刻意提問促思考、中段轉折用、每區塊至少一張）、`【！】`＝決策頁（**一張**投影片：對前面 `【？】` 的**拍板／答案**——給結論或決定性判準，1–2 句或關鍵字，**不是再問一次**；解釋交給內容頁承載，可複數知識點；**每區塊一張**——揭露型（`【？】→【！】`）或總結型（內容→`【！】`收結）皆可）、斜體整行＝驗收／示範頁（學員驗收，或講師 demo；台上實際跑一段）、`>` 前綴＝溢出補充頁（時間不足可跳過）——每區塊固定「扉頁 → 內容 →（提問／決策）→ 驗收 → 補充」，提問頁、補充頁、決策頁各至少一張 |

**頁級落檔原則（寫 deck／給 AI 的認知）**：每個 `【？】`／`【！】` 都是**一張只有一行字**的投影片（1–2 句或關鍵字）——挑極簡模版，別塞段落或條列。標準節拍是 **`【？】` 問 → `【！】` 拍板**：`【？】` 把取捨拋成問句，`【！】` **緊接著給答案／結論**（「不行」「用 X」「看某條件」＋原因關鍵字，**不是再問一次**），後面的內容頁再展開解釋（可複數知識點）。也可反過來**先鋪知識點、`【！】` 收結論**。

**呈現格式**：curriculum 的頁級行（含 `【NN】` 扉頁）一律以 `- [ ] ` checkbox 呈現，供作者逐頁勾記建置進度；front-matter、`## Kit —` 指標、`## Spec 覆蓋` 非頁級，維持 `- `。

**【NN】編號規則**：編號**以「產物」為單位連續、不逐週重起**——兩條線各從 01 起、其後週續號：① Dashboard 線 W1→W2→W3（W1 起點，W2 續、W3 續）② 通知系統線 W4→W5→W6（W4 起點，W5 續、W6 續）。續號週從上一週最後一號 +1 起（現況：**W1 01–17、W2 18–31、W3 32–46**（W3 P6【44】發版塊、P7【45】【46】）；通知系統線 W4 01–11、W5 12–23、W6 24–30；curriculum 扉頁與 `docs/kit/` 分組同號平行）。**陷阱**：續號週的號碼是上游週塊數的**函數**——上游（尤其仍在初版滾動的 W4–W6）增刪任何一塊，下游整條要重算；跨週 prose 引用一律標 `W1【NN】` 等**來源週前綴**，才不會在重算時被連動。

## 知識點清單推導（→ `docs/kit/`）

各週知識點清單（`docs/kit/week-N.md` 的「知識點清單」節）由 deck 頁面推導，掛在 `【NN】` 區塊上：

- **分組**：`- >【NN】扉頁標題` 為可收合分組；底下 `- [ ] 關鍵字` 為可勾知識點（純關鍵字，收合與視覺於實做 Dashboard 時處理）。
- **P7 AI 段編號化（改制中，定案 2026-07-10 全面改）**：P7 的 AI 內容比照教學塊給 `【NN】` 編號（AI 工具與 Agent Skills 即技能樹節點）。**六週 P7 全數編號化完成**（`【AI】` 分組退場）：W1【16】【17】、W2【30】【31】、W3【45】【46】、W4【10】【11】、W5【22】【23】、W6【29】【30】。
- **顆粒度**：指令列舉型每指令一勾、概念型整塊一勾、旗標／變體折進主指令。
- **`⟨加分⟩`**：源自 `>` 溢出頁的選學技能。
- **`【！】` 決策頁**：**產生一個**「判準」知識點（與 `【？】` 相反），收該塊的取捨判斷（reset vs revert、merge vs rebase…），掛在對應 `【NN】` 分組下；承載其判準的內容頁與這個點合計仍只算一個、不重複計。
- **不產生知識點**：`【？】` 提問頁、`*斜體*` 驗收頁、伏筆／整合頁（例：預告、🔨 整合實做）。
- **onboarding 例外**：序章無 `【NN】`／技能，`docs/kit/onboarding.md` 改收「課程認知」checkbox，依序章性質分組（認知／目標／調整／節奏／資源／附加）。

## 六週地圖

| 週 | 日期 | Module | 主題 | 當日終點狀態 | 週 repo | P7 AI 段 | 頁數 |
|---|---|---|---|---|---|---|---|
| 門面 | 常駐 | MODULE · ONBOARDING | [Onboarding](curriculum/onboarding.md)（`/`）：課程介紹與索引 | 開課前公開 landing；第一堂開場放映 | —（`apps/onboarding`） | — | 22 |
| 1 | 7/18 | MODULE · ORIGIN | 從零到「我的東西上線了」 | 自己的 Dashboard 上線 | `my-dashboard`（模板＝產物①） | Antigravity 安裝＋解釋指令＋commit message | ~161 |
| 2 | 7/25 | MODULE · PARALLEL | 平行宇宙——分支與衝突 | 敢開分支、敢合併、敢面對衝突＋發出第一個 PR | 個人 Dashboard（分支/衝突情境） | 分支顧問＋AI 解衝突 | ~148 |
| 3 | 8/1 | MODULE · REWIND | 時光機與救援 | 搞砸了也救得回來的底氣＋首次發版 | 個人 Dashboard（救援/發版情境） | 救援顧問＋歷史整理 | ~152 |
| — | 8/8 | — | 停課 | | | | |
| 4 | 8/15 | MODULE · TEAMWORK | 團隊協作與 CI 初見 | 像團隊一樣工作、第一個綠勾 | `notify-w4-teamwork` | MCP＋GitHub 串接＋PR 描述＋AI review | ~114 |
| 5 | 8/22 | MODULE · PIPELINE | 測試與 Pipeline | push 之後測試自己跑、全綠 | `notify-w5-pipeline` | 生成／除錯 workflow YAML | ~136 |
| 6 | 8/29 | MODULE · LAUNCH | 交付日——容器化與 capstone | push 就部署、部署就通知；結業 | `notify-w6-shipping`（完成自建）＋上游 repo（參考/救援） | 併入 capstone＋Claude Code 壓軸 | ~78 |

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

[onboarding deck](curriculum/onboarding.md) 頁 7 向學員說明此表（第一堂開場放映即完成告知）。

| # | spec 原文 | 調整 | 理由 |
|---|---|---|---|
| 1 | 實作案例以 LINE Notify 為通知管道 | 改用 **LINE Messaging API 為主／Discord 備援**（webhook），e-mail 保留 | LINE Notify 已於 2025/3 終止服務 |
| 2 | Gemini CLI（day-4） | Antigravity CLI | 官方宣布之繼任工具 |
| 3 | 測試自動化（Node.js、Python、ASP.NET Core、PHP、JSP） | Node.js 深入＋Python 副實作（僅 CI）＋其餘以 matrix demo 與對照頁帶過 | 五個 stack 不可能在 4 小時內對初階學員成立；matrix 策略恰為 spec 技能指名項 |
| 4 | Docker 建置（暗示本機安裝） | Dockerfile 本機撰寫、build/push 於 GitHub Actions | BYOD 機器裝 Docker Desktop 風險高；「CI 代勞」即課程主旨 |
| 5 | CI/CD 概念＋第一個 Workflow 在 day-5 | 前移至 day-4 尾端 | 以 Branch Protection 的 required status checks 自然銜接，並紓解 day-5 負載 |
| 6 | SSH 金鑰設定在 day-1 | 挪至 W2；day-1 以 PAT/HTTPS 先行 | 降低首日負載（首日已含環境安裝＋Dashboard 上線） |
| 7 | fetch/pull 在 day-1 | 全數挪至 W2 | 同上；且與分支週的協作情境更契合 |
| 8 | PR 流程首見於 day-4 | W2 首見（分支概念與命名教完後，情境挑戰收尾發第一個 PR），day-4 深化為 review／保護／Issue | 好 PR = 好 branch＋好 commit，故隨分支週落地；W2 起每週練習以 PR 為載體 |
| 9 | Git Flow 工作流程詳解 | 降為歷史定位，並補 GitHub Flow（主流）＋GitLab Flow（環境分支）對照，三者各一【NN】（W3 P5）| 2026 業界主流已移轉，避免帶過時心智模型入職；GitLab Flow 補 spec 未涵蓋的 staging／環境概念，銜接 W4–W6 CD |
| 10 | 每日實作案例均為「CI/CD 部署通知系統」 | 兩大產物對半分：W1–W3 產物＝個人 Dashboard（產物①），W4 起＝通知系統（產物②） | 前三週需要「自己的東西上線」的擁有感與 solo Git 載體 |
| 11 | —（spec 無此結構） | 每堂 50 分、每日尾堂固定 AI 段＋Recap；每週發放 Agent Skills 與該週知識點（點亮技能樹 Dashboard） | 執行層設計，於 W1 P1 一併說明 |
| 12 | 其他說明欄列 Git Bash (Windows) | Windows 改用 PowerShell（Windows Terminal 預設 shell），並於 W1 環境設定加入 `Set-ExecutionPolicy RemoteSigned` 解鎖步驟 | 貼近 Windows 原生日常環境；npm 系工具（含 AI CLI）的 `.ps1` shim 需先解鎖，W1 一次做完 |

## Spec 覆蓋核對

覆蓋以各週檔末的 `## Spec 覆蓋` 為單一事實來源（逐項對照該日 spec 課表）；`〔dN-x〕` 僅用於標記跨週搬遷的 spec 項（現存於 W4／W6 的 P7 AI 段）。差異僅有上表 11 項，其餘照 spec 字面覆蓋。

## 兩大產物與發放

- **兩大產物（8/8 對半分）**：① 技能樹 Dashboard（W1–W3，個人）② CI/CD 通知系統（W4–W6，團隊＝終點）。
- **簡報連結**：onboarding deck（`/`，含 release-schedule 驅動的課程索引）＋各週 `/week-N`。
- **Agent Skills**：Antigravity CLI skills/自訂指令＋prompt 降級版，隨週 repo `skills/` 目錄發放（無新週 repo 的 W2–W3 改以 skills repo 下載連結發）；各週清單見週檔。
- **週 repo 發放原則（發「狀態」、不發「練習」）**：操作定義一律住在 deck 頁級（`✋` 行即腳本），不另打包。起始狀態三分：**自建 ≤2 分鐘且自建即複習**→現場自建（丟棄式 sandbox，W2–W3；災情現場製造是教學設計）；**學員蓋不出或不值得蓋**→預埋成週 repo（W4 協作素材、W5 壞 pipeline）；**狀態＝產物模板**→發一次（W1 Dashboard）。技術限制順向支持：Use this template 不帶完整 commit 歷史，「歷史型」練習（reflog／rebase -i／cherry-pick）本就發不動，只能自建。
- **技能樹 Dashboard**（正式定名，＝產物①）：學員個人 repo（W1 建立、W2–W3 用 Git 技能優化）＋GitHub Pages；技能樹點亮即其知識追蹤本體；資料模型為單一 JSON；知識點清單（指令/概念級）見各週 [`kit/`](kit/) 的「知識點清單」節，即 Dashboard schema 與 Claude Design 的視覺單位。
- **發問管道**：GitHub Issue（onboarding 頁 21 announced；用課程教的工具發問，本身即教學）。

## 製作節奏與閘門

W1 全套（deck＋Dashboard 模板＋W1 skills）趕 7/18；W2–6 逐週滾動提前一週。
閘門：Antigravity 驗證（7/14 前）／通知系統規格拷問輪（**已定案 7/7**）／通知管道（**LINE 主・Discord 備援**）／Copilot 授權確認（W4 前）。**衍生小閘門**：W6 備課時實測各語言 container→Render。
W6 capstone（P4–P6）＝完成自建系統的最後一哩（deploy＋notify），非 Fork 重跑；規格已定案（見 DECISIONS「通知系統規格」）。
