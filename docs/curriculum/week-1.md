# Week 1（7/18）

- 當日終點：
  - 每位學員擁有一個上線的個人 Dashboard（GitHub Pages）
  - 裝好（或看過）AI 副駕
- 堂次結構（本週特例）：
  - P1 = [onboarding deck](onboarding.md)（`/`）整堂開場放映
  - 講完切入本 deck 自 P2 起。

## Kit — 週 repo：`my-dashboard`

見 [docs/kit/week-1.md](../kit/week-1.md)（週 repo／skills／知識點清單）。

## P0 — Starting（2 頁）

- [ ] 簡報封面：MODULE · ORIGIN · 起點：從零到「我的東西上線了」
- [ ] 本日目標：技能樹 Dashboard 上線

## P2 — 認識 Git 與環境準備（42 頁）

- [ ] **【01】介紹 Git**
- [ ] Git 是什麼？（關鍵字：分散式版本控制系統）
- [ ] 【？】Google Doc 的版本紀錄，幫你躲過什麼災難？
- [ ] 【！】躲過「回不去」——每一版都留著，改壞、刪錯都能退回任一個時間點
- [ ] 什麼是版控？（用 Google Doc 做比喻＆解釋分散式概念）
- [ ] 為什麼需要版本控制？（final_final_v3、每天複製一份資料夾的悲劇）
- [ ] 版本控制在解決什麼？（快照、回溯、協作）
- [ ] *開啟 Git 官網*
- [ ] >集中式 vs 分散式：SVN 時代一頁對照
- [ ] >Git 的誕生小故事：Linus 與兩週

- [ ] **【02】安裝 Git**
- [ ] 安裝 git：macOS & Windows（windows 選 Vim）
- [ ] 【？】為什麼工程師偏好在終端機裡工作，而不是到處點按鈕？
- [ ] 【！】因為指令是文字——能複製、能重來、能自動化、能交給 AI；點按鈕留不下這些
- [ ] 選擇終端機（mac 使用內建的 Terminal，windows 使用／安裝 Windows Terminal——shell 用預設的 PowerShell，linux 使用發行版內建終端機）
- [ ] Windows 限定：解鎖指令碼執行——`Set-ExecutionPolicy RemoteSigned`（管理員開 PowerShell → 按 A → 重開終端機；今天 P7 的 AI CLI 與之後的 npm 都靠這步）
- [ ] *git --version 有輸出*
- [ ] >安裝排雷：macOS 常見狀況
- [ ] >安裝排雷：Windows 常見狀況
- [ ] >為什麼 PowerShell 預設擋指令碼：ExecutionPolicy 一分鐘版（Restricted vs RemoteSigned）

- [ ] **【03】終端機常見指令**
- [ ] pwd：我在哪
- [ ] ls：這裡有什麼
- [ ] cd：移動
- [ ] mkdir：建立資料夾
- [ ] rm：刪除檔案與資料夾（謹慎使用）
- [ ] git --version：指令從哪裡來（PATH 概念一分鐘版）
- [ ] 【？】終端機為什麼認得 git 這個字？
- [ ] 【！】靠 PATH——系統照 PATH 清單去找，才找得到 git
- [ ] 預告：今天還會用到其他的 PATH（gh & claude/codex/agy）
- [ ] *用 mkdir 建立一個空專案（資料夾），下一遍 pwd／ls，最後 cd 進去*
- [ ] >cd 可以用拖曳資料夾的方式
- [ ] >安裝排雷：git 常見狀況（如果有的話）

- [ ] **【04】安裝 VS Code**
- [ ] 【？】記事本也能寫 code，為什麼還要專門的編輯器？
- [ ] 【！】VS Code 不只是編輯器，是可裝套件的工作台——之後的 Git GUI（W2 的 Git Graph）、整合終端裡的 AI 副駕都長在這
- [ ] 安裝 VS Code：macOS & Windows
- [ ] 用 VS Code 打開專案資料夾
- [ ] *用 VS Code 打開剛剛 mkdir 的專案資料夾*
- [ ] >code：把 VS Code 加進 PATH（呼應【03】）
- [ ] >open：開啟當前目錄（mac `open .`／win `explorer .`／linux `xdg-open .`）
- [ ] >VS Code 整合終端：編輯器裡也有黑窗

## P3 — Git 身分與第一個 commit（31 頁）

- [ ] **【05】Git 身分**
- [ ] 【？】為什麼 Git 堅持要知道你是誰？
- [ ] 【！】因為每個 commit 都是用你的身分是寫進歷史的，不是拿來登入的
- [ ] git config：告訴 Git 你是誰
- [ ] git config --global user.name
- [ ] git config --global user.email
- [ ] git config --list
- [ ] 【？】公司專案跟個人專案想用不同 email，怎麼辦？
- [ ] --global 的差別（全域 vs 單一專案）
- [ ] *身分設定完成（git config --list＋用 VS Code 開啟 .gitconfig 確認）*
- [ ] >.gitconfig 的位置（Mac & Windows & Linux）
- [ ] >為專案設定不同的 name 與 email

- [ ] **【06】初始化專案的 Git**
- [ ] git init：讓資料夾開始被追蹤
- [ ] 【？】git init 之後，資料夾裡多了什麼？
- [ ] 【！】多了一個隱藏的 .git——整個版控就活在裡面，刪了它就退回沒版控
- [ ] .git 資料夾是什麼（不要動它）
- [ ] git status：察看專案的狀態
- [ ] *使用 git status 確認專案當前的狀態*
- [ ] >init 錯資料夾怎麼辦（刪掉 .git 重來）
- [ ] >看見隱藏的 .git：ls -a 與檔案總管的顯示設定

- [ ] **【07】第一個 commit**
- [ ] git add：放上暫存區
- [ ] git commit：拍下快照＋commit message（中文）
- [ ] 【？】為什麼要分兩步——先 add 再 commit？
- [ ] 【！】暫存區是為了讓你挑——先選哪些變更進這次 commit
- [ ] git status：隨時看狀態
- [ ] 日常循環：改 → status → add → commit
- [ ] git commit --amend：剛發現上一顆 commit 訊息打錯——改掉它（還沒 push，安全）
- [ ] *建立 index.html 並連做三個 commit（變更都發生在 index.html），使用 git status 確認狀態*
- [ ] >git add . 與指定檔案的差別

## P4 — 三層架構、歷史與 .gitignore（27 頁）

- [ ] **【08】三層架構與部分提交**
- [ ] 三層架構：工作目錄 → 暫存區 → 儲存庫
- [ ] 三層架構的比喻：拍團體照（就位 → 構圖 → 快門）
- [ ] 【？】改了三個檔案但只想先交出一個，怎麼辦？
- [ ] 【！】git add 只加那一個檔案——暫存區是逐檔挑的，三個變更能拆成三顆乾淨的 commit
- [ ] 暫存區為什麼存在：部分提交
- [ ] *改三個檔案，使用 git add 指定檔案，發成三個 commit*
- [ ] >git restore --staged：放錯暫存區的後悔藥
- [ ] >add 之後又改了檔案會怎樣（三層的常見誤會）

- [ ] **【09】看懂歷史與差異**
- [ ] git log：時光的目錄
- [ ] git log --oneline 與常用參數
- [ ] 【？】只知道「有改過」，怎麼看到「改了什麼」？
- [ ] 【！】git diff 看逐行改了什麼、git log 看改過幾次——一個看內容、一個看時間軸
- [ ] git diff：改了什麼一目了然
- [ ] git diff --staged
- [ ] *使用 git log 與 git diff 確認專案當前的狀態*
- [ ] >git log --graph：文字版的分支圖（下週接 GUI）
- [ ] >git log -p：歷史連同差異一起看

- [ ] **【10】忽略不該追蹤的檔案**
- [ ] .gitignore：不是每個檔案都要追蹤
- [ ] 【？】哪些檔案不該進版控？（密碼？肥大的依賴？）
- [ ] 【！】不能外流的（密碼）＋能重生的（node_modules、產物）——這兩種都別追蹤
- [ ] .gitignore 常見規則：node_modules、.env、.DS_Store
- [ ] *新增一個 .gitignore，設定忽略 html 並確認效果（新增第二個未追蹤的 html，看它從 git status 消失）*
- [ ] >.gitignore 不回溯：已追蹤的 index.html 不受影響，要先 git rm --cached
- [ ] >.gitignore 範本哪裡找：GitHub 官方 templates

## P5 — GitHub 初登場：從 push 到 Pages（40 頁）

- [ ] **【11】介紹 GitHub**
- [ ] Git vs GitHub（引擎與車庫）
- [ ] 【？】code 只存在自己的電腦上，會有什麼風險？
- [ ] 【！】就這麼一份、全在本機——機器掛了或整個 repo 搞爛，連 Git 歷史都一起沒；遠端才是你存在別處的備份
- [ ] 註冊帳號與個人頁導覽
- [ ] 本地與遠端的關係圖：remote 概念
- [ ] public 與 private repo 的差異
- [ ] 【？】你的 Dashboard 要 public 還是 private？
- [ ] 【！】public——Pages 免費層只吃 public，作品集本來就要被看見
- [ ] *新增一個 Repo（畫面要出現「…or push an existing repository from the command line」）*
- [ ] >介紹 GitLab
- [ ] >GitHub repo 頁面各區塊導覽

- [ ] **【12】設定 GitHub 的通行證**
- [ ] 【？】GitHub 怎麼確認推東西的人是你本人？
- [ ] 【！】靠 token 不靠密碼——PAT 是給機器讀的通行證，權限、期限你自己框
- [ ] 「通行證」的概念是什麼？（其他託管平台也會有）
- [ ] PAT 設定方式（SSH 下週介紹）
- [ ] *產生一組 PAT 並妥善保存（下一段 push 會用到）*
- [ ] >為什麼不能用帳號密碼而是 PAT
- [ ] >PAT 的權限範圍與期限：最小權限原則

- [ ] **【13】綁定遠端 repo**
- [ ] 【？】本地的 repo 跟 GitHub 上的空 repo，誰認識誰？
- [ ] 【！】本來誰都不認識——git remote add origin 綁上後，origin 就是本地幫遠端取的小名
- [ ] git remote add origin：把本地綁上遠端
- [ ] git push
- [ ] 分支重新命名（master -> main）
- [ ] origin 標籤
- [ ] 【？】換一台電腦要繼續開發，第一步是什麼？
- [ ] git clone（展示遠端與 origin 概念）
- [ ] *push 遠端，然後重新 clone 下來*
- [ ] >為什麼 GitHub 要求 main
- [ ] >怎麼設定 git init 就預設 main

- [ ] **【14】Demo 畫面的 GitHub Pages**
- [ ] 【？】一個 html 要讓全世界看到，最少需要什麼？
- [ ] 【！】一個 public repo ＋開 Pages——GitHub 就免費幫你當主機（網址自動產生）
- [ ] 什麼是 GitHub Pages
- [ ] 設定 GitHub Pages 分支
- [ ] *前面練習的 index.html 能夠在 GitHub Pages 顯示*
- [ ] >部署不是即時的：部署狀態哪裡看（Actions tab 伏筆）
- [ ] >Pages 的網址規則：username.github.io/repo

## P6 — 情境挑戰：部署技能樹 Dashboard（13 頁）

- [ ] **【15】🔨 實做：部署「技能樹 Dashboard」**
- [ ] Step 1：Use this template 建立你的 repo
- [ ] Step 2：git clone 到本地
- [ ] Step 3：改 data.json——你的名字與第一批技能
- [ ] Step 4：commit
- [ ] Step 5：push
- [ ] Step 6：GitHub Pages 手動設定
- [ ] 【？】push 完，網頁會馬上更新嗎？
- [ ] 【！】不會——Pages 要跑一輪部署（Actions 在動），等一下再重整
- [ ] Step 7：你的網址誕生
- [ ] *輸入 URL*
- [ ] >Pages 沒出現畫面？常見三因：分支選錯、路徑不對、還在部署中
- [ ] >data.json 改壞了？JSON 格式排錯（逗號、引號、括號）

## P7 — AI 初見面（~16 頁）

- [ ] **【16】請一位 AI 副駕：Antigravity CLI**
- [ ] 【？】為什麼工程師現在都帶一個 AI 副駕？
- [ ] 【！】指令是文字，AI 讀得懂也寫得出——幫你解釋指令、寫 commit，方向盤仍在你手上
- [ ] Antigravity CLI 是什麼：Gemini CLI 的繼任者
- [ ] 安裝 Antigravity CLI（Windows 若噴「指令碼已停用」→ 回看【02】的 ExecutionPolicy）
- [ ] *請 AI 解釋你今天打過的指令*
- [ ] *請 AI 寫 commit 訊息（預期格式與文案會不符合預期）*
- [ ] >Antigravity 是 Gemini CLI 官方繼任：為何換、差在哪

- [ ] **【17】把 AI 教成你的樣子：Agent Skills**
- [ ] 【？】AI 寫的 commit 不合你要的格式，怎麼辦？
- [ ] 【！】給它一份 skill——SKILL.md 把「你要的樣子」寫成規則，AI 照著做
- [ ] Agent Skills 是什麼？
- [ ] SKILL.md 格式
- [ ] 安裝 Agent Skills（skill: `create-commit`）
- [ ] *請 AI 再寫一次 commit 訊息，對照跟剛剛差在哪*
- [ ] Context 觀念（載入 skill 會佔 context）
- [ ] >skill 安裝在 User Global 層級

## P8 — Ending（2 頁）

- [ ] ✅ Recap：打開 Dashboard，確認第一批技能點亮了（實質更新已在 P6【15】commit→push 上線）
- [ ] 下週預告：平行宇宙——分支與衝突＋回家小任務（口頭發布）

## Spec 覆蓋

day-1 AM ①–⑩ 全數（順序重排）；day-1 PM ①③④⑤⑧ 全數、②僅 PAT（SSH→W2 ★6）、⑥⑦ fetch/pull 全數挪 W2 ★7、⑨（cd/ls/pwd）前移至 P2、⑪實作案例改 Dashboard 載體 ★10。PR 首見改落 W2（★8）。
