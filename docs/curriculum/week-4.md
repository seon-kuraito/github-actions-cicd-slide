# Week 4（8/15）

- 當日終點：
  - 像團隊一樣工作（Issue→分支→PR→review→merge），拿到第一個 CI 綠勾
- 注意：
  - 隔了停課週，P0 放記憶恢復頁
  - P7 為六週最重的 AI 段（MCP），溢出風險標記
- 練習採跨堂累積制：
  - 配對 P1 成立 → P2 互審 → P3 保護規則 → P5 workflow → P6 完整跑一輪 sprint 驗收流暢度

## Kit — 週 repo：`notify-w4-teamwork`（通知系統登場）

見 [docs/kit/week-4.md](../kit/week-4.md)（週 repo／skills／知識點清單）。

## P0 — Starting

- [ ] 簡報封面：GitHub Actions CI/CD 自動化與 AI 協作實務班（MODULE · TEAMWORK／2026.08.15 · 第四週）
- [ ] 本日目標：像團隊一樣工作，拿到第一個 CI 綠勾
- [ ] 記憶恢復術：兩週前的五題快問快答（8/8 停課後的回魂）

## P1 — PR 深化

- [ ] **【01】PR 的完整生命週期**
- [ ] 回看上週的 PR：從照做到理解
- [ ] 【？】上週的 PR 自己開自己合——真實團隊裡少了哪一步？
- [ ] 【！】少了 review——真團隊是「別人看過才合」，不是自己說了算
- [ ] PR 生命週期全圖：開 → 討論 → 修 → 合
- [ ] PR 頁面解剖：Conversation——討論都在這
- [ ] PR 頁面解剖：Commits 與 Files changed——改了什麼看這
- [ ] 合 PR 的三種按法：merge commit（留完整脈絡＋會合點）／squash and merge（整個 PR 揉成一個進 main，回收 W3、多數 repo 預設）／rebase and merge（每個線性重放、無會合點）
- [ ] Draft PR：還沒好，先讓人看方向
- [ ] PR 模板：repo 怎麼提供、開 PR 時怎麼出現
- [ ] 【？】一個改了 30 個檔案的 PR，你想 review 嗎？
- [ ] 【！】不想——太大根本 review 不動
- [ ] 好 PR 的條件：小、聚焦、說清楚
- [ ] *【01】章節實作：✋ 配對成立：分組 → 各自 Use this template 建好週 repo → clone → 開分支改一處 → 發暖身 PR*
- [ ] *【01】章節補充*
- [ ] >PR 與 branch 的關係再確認
- [ ] >同事看不懂你的 PR 怎麼辦

## P2 — Code Review 與協作者

- [ ] **【02】為什麼需要 review**
- [ ] review 在防什麼：品質、知識、共識
- [ ] 三種回應：comment／approve／request changes
- [ ] 【？】「這寫得很爛」跟「這裡可能漏了 edge case」——哪句你聽得進去？
- [ ] 怎麼給意見：對事不對人（好壞範例對照）
- [ ] 怎麼收意見：回覆、修正、re-request
- [ ] suggestion：直接給改法
- [ ] 接受 suggestion：Commit suggestion 按鈕（改動直接進分支）
- [ ] 【？】看完搭檔這個 PR，你要 comment／approve／request changes？
- [ ] 【！】小問題留 comment、有非改不可的 request changes、沒問題才 approve
- [ ] *【02】章節實作：✋ 互審：開搭檔的暖身 PR → Files changed → 行內留一個 comment＋一個 suggestion → 送出 review*
- [ ] *【02】章節補充*
- [ ] >review 的節奏：多久回、回多細
- [ ] >self-review：發出去之前先審自己一遍

- [ ] **【03】把隊友加進來（Collaborators）**
- [ ] 【？】搭檔要能推你的 repo，需要給他什麼？
- [ ] 【！】把他加成 Collaborator——repo 預設只有你能推，給了權限隊友才進得來
- [ ] 邀請流程：Settings → Collaborators → Add people
- [ ] 接受邀請：對方信箱／通知裡的那封信（最常漏的一步）
- [ ] 權限層級一覽
- [ ] *【03】章節實作：搭檔的 repo 出現在自己帳號下、能 push*
- [ ] *【03】章節補充*
- [ ] >CODEOWNERS 一瞥
- [ ] >外部貢獻者呢：fork-based 協作一瞥（capstone 伏筆）

## P3 — Issue 與分支保護

- [ ] **【04】團隊的待辦與討論區（Issue）**
- [ ] 【？】口頭說「記得修那個 bug」，三天後還有人記得嗎？
- [ ] 【！】不會——所以開 Issue，把它變成追得到的待辦
- [ ] Issue 的結構：標題、內文、留言串、右欄
- [ ] Issue 的生命週期：open → close（誰來關、怎麼關）
- [ ] closes #N：merge 時自動關 Issue 的魔法
- [ ] Labels：分類與顏色
- [ ] *【04】章節實作：開一張 Issue → 貼 label → 記下編號（P6 會用）*
- [ ] *【04】章節補充*
- [ ] >Milestone 與 Projects 一瞥
- [ ] >Issue 模板：讓回報有格式（週 repo 已內建）

- [ ] **【05】main 不能直推（Branch Protection）**
- [ ] GitHub Flow 完整圖：你正活在裡面 ★9
- [ ] 【？】半夜手滑直推 main，怎麼防？
- [ ] 【！】用 Branch Protection——設規則讓 main 不能直推
- [ ] 設定入口：Settings → Branches → Add branch ruleset
- [ ] required reviews：沒人看過不能進
- [ ] 【？】「機器人也要點頭」——它憑什麼判斷？
- [ ] required status checks：機器人也要點頭——它是誰？
- [ ] *【05】章節實作：✋ 累積練習：互加 Collaborator＋開保護規則 → 試直推被擋（截圖）→ 開 PR、搭檔 approve 才進得去*
- [ ] *【05】章節補充*
- [ ] >被擋下來的各種畫面
- [ ] >保護規則的例外：管理員 bypass 與它的風險

## P4 — CI 初見：概念 ★5

- [ ] **【06】人審完了，機器審什麼（CI/CD）**
- [ ] CI 是什麼：持續整合——每次改動都驗證
- [ ] CD 是什麼：持續交付／部署——驗證過就出貨
- [ ] 【？】五個人的分支拖兩週才合併，會發生什麼事？
- [ ] 【！】越拖衝突越大——最後變一場大合併惡夢
- [ ] 沒有 CI 的世界：merge day 恐懼
- [ ] GitHub Actions：住在 repo 裡的機器人
- [ ] *【06】章節實作：說得出 CI 與 CD 各自解決什麼*
- [ ] *【06】章節補充*
- [ ] >Actions 免費額度
- [ ] >CI 之外還有誰：Jenkins／GitLab CI 一瞥

## P5 — CI 初見：第一個 workflow ★5

- [ ] **【07】第一個 workflow**
- [ ] workflow 檔住哪：.github/workflows/
- [ ] 【？】你希望機器人在什麼時機自動醒來？
- [ ] 【！】on 決定它何時醒——push 時、開 PR 時都行，你設哪個事件它就等哪個
- [ ] 最小 workflow 逐行讀（上）：name 與 on
- [ ] 最小 workflow 逐行讀（下）：jobs、runs-on、steps
- [ ] ✋ 跟做：建檔 → 貼上 → commit → push
- [ ] Actions tab：找到你的第一個 run
- [ ] run 的內部：job → step → log 逐層點開
- [ ] 接上保護規則：required status checks 的選單裡選它
- [ ] *【07】章節實作：PR 上出現 checks 區塊*
- [ ] *【07】章節補充*
- [ ] >YAML 縮排陷阱初見
- [ ] >workflow 沒觸發？常見三因：分支、路徑、事件名

## P6 — 情境挑戰「完整跑一輪 sprint」

（setup 已在 P1–P5 累積完成：配對、互審、保護規則、workflow 全部就位——本堂驗收的是流暢度）

- [ ] **【08】🔨 sprint 上半場：從 Issue 到 PR（你是作者）**
- [ ] 🧭 Step 0：notify-w4 的 Issue 板與小隊現況
- [ ] 【？】這輪 sprint，你們小隊會卡在哪一步？先押注
- [ ] Step 1：各認領一張 Issue（assign 給自己）
- [ ] Step 2：開分支（命名帶上 issue 編號）
- [ ] Step 3：開發 → commit → push → 發 PR（描述帶 closes #N）
- [ ] *【08】章節實作：你的 PR 掛上小隊看板，等人審*
- [ ] *【08】章節補充*
- [ ] >PR 描述沒寫清楚，reviewer 會先來問什麼

- [ ] **【09】🔨 sprint 下半場：從 review 到 merge（你是把關者）**
- [ ] 【？】搭檔的 PR 來了，你先看 code 還是先看 checks？
- [ ] 【！】兩個都要——人審看邏輯、機器審看綠勾，缺一不可（回收 P2＋P5）
- [ ] Step 4：互審——至少一個 comment＋一次修正
- [ ] Step 5：checks 全綠、取得搭檔 approve → merge——Issue 自動關閉
- [ ] *【09】章節實作：兩張關閉的 Issue＋兩個 merged PR，全程無人直推 main*
- [ ] *【09】章節補充*
- [ ] >進階：走一次 request changes 流程

## P7 — AI 協作全開（溢出風險段）

- [ ] **【10】AI 代寫代審 PR**
- [ ] 【？】開 PR、審 PR 這種例行功夫，AI 能不能代勞？
- [ ] 【！】能——`write-pr` 生描述、`review-pr` 當第一位 reviewer；但它看語法不看意圖，人審仍是最後一關
- [ ] Demo：AI 生成 PR 描述（skill: `write-pr`）〔d4-PM②〕
- [ ] Demo：AI 當第一位 reviewer（skill: `review-pr`）〔d4-PM③〕
- [ ] 邊界頁：AI review 抓得到與抓不到的

- [ ] **【11】MCP：把 GitHub 接上 AI**
- [ ] 【？】gh 讓 AI 用指令，但還是隔一層——能不能讓 AI 直接讀你的 repo？
- [ ] 【！】MCP 就是那個接口——「AI ↔ 工具」的通用橋（今天串 GitHub，W6 壓軸再串 Render）
- [ ] MCP 是什麼：AI 的 USB 接口〔d4-PM④〕
- [ ] MCP 串 GitHub：讓 AI 直接讀你的 repo〔d4-PM⑤〕
- [ ] Demo：AI 讀 Issue→開分支→發 PR 全程〔d4-PM⑤〕
- [ ] *【11】章節實作：AI 全程不用你打指令，跑完 Issue→PR*
- [ ] *【11】章節補充*
- [ ] >降級備援：gh 版加深——MCP 不順（W4 備課實測或現場炸）就讓 AI 用 gh 走同一條鏈（gh issue view → 開分支 → gh pr create，回收 W2），少掉的只有「協定」那一課
- [ ] 今天帶走的 skills

## P8 — Ending

- [ ] ✅ Recap：打開儀表板，點亮 W4 這批技能（協作＋CI 首綠勾）
- [ ] 下週預告＋課前準備：測試與 Pipeline——**回家先裝 Node LTS、用 `npm -v` 驗證**（Windows 若噴「指令碼已停用」→ 回看 W1 的 ExecutionPolicy 頁）

## Spec 覆蓋

day-4 AM ①–⑥ 全數；day-4 PM ②③④⑤ 移入 P7（①工具改 Antigravity 已於 W1 安裝 ★2、⑥實作案例併入 P6 與 P7）；前收 day-5 ①②④與第一個 workflow 實作 ★5。
