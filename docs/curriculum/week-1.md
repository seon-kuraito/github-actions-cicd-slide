# Week 1（7/18）

- 當日終點：
  - 每位學員擁有一個公開的個人儀表板（GitHub Pages）
  - 裝好（或看過）AI
- 堂次結構（本週特例）：
  - P1 = [onboarding deck](onboarding.md)（`/`）整堂開場放映
  - 講完切入本 deck 自 P2 起。

## Kit — 無週儲存庫；學員自建 `skill-dashboard`（模板庫發 ZIP）

見 [docs/kit/week-1.md](../kit/week-1.md)（模板／skills／知識點清單）。

## P0 — 開場

- [x] 簡報封面：GitHub Actions CI/CD 自動化與 AI 協作實務班（MODULE · ORIGIN／2026.07.18 · 第一週）
- [x] 本週簡報 QR
- [x] 上午目標

## P2 — Git 入門與環境

- [x] **【01】Git：專案的「時光機」**
- [x] Git：分散式版本控制系統
- [x] 【？】你用過 Google Doc 的「版本紀錄」嗎？它能做什麼？
- [x] 【！】改壞或刪錯內容的時候，它能帶你回到先前的狀態
- [x] 用 Google Doc 想像版本控制
- [x] 為什麼需要版本控制？
- [x] 版本控制在解決什麼？
- [x] *【01】章節實作：開啟 Git 官網，點擊按鈕進入下載頁面*
- [x] *【01】章節補充：先多看一點 Git 的背景，理解它為什麼適合多人專案*
- [x] >Git 的誕生小故事：Linus 與兩週
- [x] >集中式（SVN 時代）
- [x] >分散式（Git）

- [x] **【02】Git：完成安裝與驗證**
- [x] 安裝 git
- [x] git --version：確認 Git 版本
- [x] 【？】為什麼工程師偏好用終端機，而不是一路點按鈕？
- [x] 【！】因為指令是文字——能複製、重複、自動化，也能交給 AI
- [x] macOS 的終端機
- [x] Windows 的終端機
- [x] Windows 先調整 PowerShell 執行原則
- [x] *【02】章節實作：執行 `git --version`，看到版本號就代表 Git 已經安裝成功*
- [x] *【02】章節補充：裝不起來時，通常先從系統環境與權限設定排查*
- [x] >git 指令找不到？安裝後沒重開終端機或沒加進 PATH
- [x] >安裝排雷：macOS 常見狀況
- [x] >安裝排雷：Windows 常見狀況

- [x] **【03】終端機：下達指令的「控制台」**
- [x] 終端機是什麼？（CLI vs GUI）
- [x] pwd：確認目前位置
- [x] ls：查看資料夾內容
- [x] cd：切換所在資料夾
- [x] mkdir：新增資料夾
- [x] 【？】相較於內建指令，為什麼輸入 git，終端機就知道要執行誰？
- [x] 【！】靠 PATH——系統找得到程式，指令才能執行
- [x] PATH：系統尋找程式的清單
- [x] 指令一定都靠 PATH 嗎？
- [x] *【03】章節實作：用 `mkdir hello-git` 建立專案資料夾，再用 pwd／ls 確認位置，最後 cd 進去*
- [x] *【03】章節補充：多認識幾個常用指令，之後使用終端機會更順手*
- [x] >ls -a：連隱藏檔一起看
- [x] >ls -l：看檔案詳細資訊
- [x] >cd ..：回到上一層
- [x] >cd -：切回上一個資料夾
- [x] >cd ~：回到使用者目錄
- [x] >cd＋滑鼠拖曳資料夾
- [x] >open / explorer：打開目前資料夾（拖曳的反向：終端機 → 圖形介面）
- [x] >mkdir -p：一次建多層資料夾
- [x] >touch：新增空白檔案
- [x] >cp：複製一份檔案
- [x] >mv：移動或重新命名
- [x] >cat：查看檔案內容
- [x] >rm：移除檔案
- [x] >rm -r：移除資料夾

- [x] **【04】VS Code：撰寫程式的「工作台」**
- [x] 【？】只用記事本寫程式，會少了哪些工作上的幫手？
- [x] 【！】VS Code 把檔案、終端機、Git 與 AI 放在同一個工作台
- [x] 安裝 VS Code
- [x] 使用 VS Code 開啟資料夾
- [x] *【04】章節實作：從「File → Open Folder」選擇剛建立的專案資料夾，左側檔案總管出現資料夾名稱就代表成功*
- [x] *【04】章節補充：把 VS Code 和終端機接起來，工作時就少切幾個視窗*
- [x] >code：從終端機開啟 VS Code
- [x] >VS Code 整合終端：編輯器裡也有黑窗

## P3 — Git 身分與首個 commit

- [x] **【05】Git 身分：留下作者署名**
- [x] 【？】Git 為什麼要先知道這份作品是誰在編輯？
- [x] 【！】因為每一個版本，都需要留下清楚的作者署名
- [x] git config：告訴 Git 你是誰
- [x] git config --global：設定名字與 email
- [x] git config --list：確認目前設定
- [x] 【？】公司專案和個人專案需要不同 email，該怎麼設定？
- [x] 【！】在專案資料夾內設定一次，就能覆蓋全域身分
- [x] 全域身分是預設值：`--global` 放平常最常用的名字和 email；公司或特定專案需要不同身分時，就在專案資料夾內另外設定一次
- [x] *【05】章節實作：執行 `git config --list`，確認 user.name 和 user.email 已經寫進 Git 設定*
- [x] *【05】章節補充：身分設定其實寫在檔案裡，也可以依專案分開管理*
- [x] >Git 設定存在哪裡？
- [x] >為單一專案改身分

- [x] **【06】儲存庫初始化：開始用 Git 追蹤**
- [x] git init：讓資料夾開始被追蹤
- [x] 【？】如果不小心刪掉 .git，這個專案會怎麼樣？
- [x] 【！】檔案還在，但 Git 歷史會不見，資料夾會退回普通資料夾
- [x] .git 讓資料夾變成儲存庫
- [x] git status：查詢目前狀態
- [x] *【06】章節實作：新增 index.html 後執行 `git status`，確認它出現在 Untracked files*
- [x] *【06】章節補充：初始化後多出的 .git 很重要，先知道去哪裡找它，以及 init 錯資料夾時怎麼救援*
- [x] >git init 錯地方了？
- [x] >找出被隱藏的 .git 資料夾

- [x] **【07】版本快照：完成第一個 commit**
- [x] 三層架構：檔案目前在哪裡
- [x] 用「拍團體照」記住三層架構
- [x] git add：放進暫存區（入鏡）
- [x] git commit：保存到儲存庫（拍照）
- [x] 【？】commit 前，為什麼要先把變更放進暫存區？
- [x] 【！】暫存區讓你先挑選，哪些變更要進入這次 commit
- [x] 日常循環：修改 → status → add → commit
- [x] *【07】章節實作：對 index.html 重複三次「修改 → add → commit」，最後用 `git log --oneline` 確認三個 commit*
- [x] *【07】章節補充：add 的範圍會影響 commit 內容，方便和精準要自己取捨*
- [x] >git add .：將所有變更放進暫存區
- [x] >git commit --amend：修改訊息
- [x] >git commit --amend：修改內容
- [x] ✅ 上午回顧

## P4 — 暫存、歷史與忽略

- [x] 下午目標

- [x] **【08】暫存區：整理要提交的變更**
- [x] 【？】改動混在一起時，怎麼讓 commit 仍然清楚？
- [x] 【！】用暫存區分批整理，把不同目的的變更拆開提交
- [x] 暫存區為什麼存在？
- [x] git restore --staged：移出暫存區，取消暫存但不刪檔案、不改內容
- [x] *【08】章節實作：新增 style.css 與 main.js，再指定檔名分別「add → commit」，把兩個變更拆成兩個乾淨的 commit*
- [x] *【08】章節補充：add 只收下當下的版本，後面又改了檔案，就要再確認一次暫存區*
- [x] >add 之後又改了檔案會怎麼樣？

- [x] **【09】歷史與差異：找出改了哪些地方**
- [x] git log：查看提交紀錄
- [x] git log --oneline：一行一筆
- [x] git log --graph：文字線圖
- [x] 【？】只知道檔案有改，怎麼看出到底改了哪裡？
- [x] 【！】比對內容差異用 git diff，確認歷史紀錄用 git log
- [x] git diff：查看未暫存改動
- [x] *【09】章節實作：先用 `git log --oneline` 看歷史，再用 `git diff` 看目前改動，分清楚時間軸和內容差異*
- [x] *【09】章節補充：log 與 diff 都還有常用旗標：限制列出的數量、連同改動一起看，以及查看已經暫存的差異*
- [x] >git log -n：指定顯示數量
- [x] >git log -p：附上變更差異
- [x] >git diff --staged：查看暫存區改動

- [x] **【10】忽略清單：排除不該追蹤的檔案**
- [x] 不是每個檔案都該進 Git
- [x] 【？】準備讓 Git 追蹤前，哪些檔案應該要先略過？
- [x] 【！】祕密、本機設定、可重建的檔案，都先放進忽略清單
- [x] .gitignore 常見規則
- [x] .gitignore 生效後的樣子
- [x] *【10】章節實作：新增 `.env` 寫一行假密碼，`git status` 會看到它；把它加進 `.gitignore` 後再跑一次，確認它從清單消失*
- [x] *【10】章節補充：先釐清 .gitignore 的常見誤會，再用範本快速建立忽略清單*
- [x] >.gitignore 不會回溯
- [x] >.gitignore 範本哪裡找？

## P5 — GitHub 介紹與設定

- [x] **【11】GitHub：把儲存庫放到雲端**
- [x] Git 與 GitHub：工具與平台
- [x] 本地與遠端：同一個專案，兩份儲存庫
- [x] 【？】既然 Git 在本機就能記錄版本，為什麼還需要 GitHub？
- [x] 【！】因為 GitHub 讓版本不只留在自己的電腦，之後才能分享、協作與部署
- [x] 註冊帳號與個人頁導覽
- [x] public 與 private 的差異
- [x] 【？】專案要設定成 public，還是設定成 private？
- [x] 【！】public 任何人都看得到，private 只限你和受邀的人
- [x] *【11】章節實作：在 GitHub 建立名為 hello-git 的 public 儲存庫，建立完成後記下頁面上的 push 指令*
- [x] *【11】章節補充：GitHub 之外還有其他平台，也認識一下儲存庫頁面的常用功能*
- [x] >GitHub 之外的託管平台
- [x] >GitHub 頁面導覽

- [x] **【12】通行證：取得 GitHub 推送權限**
- [x] 【？】你 push 到 GitHub 時，它怎麼知道真的是你？
- [x] 【！】靠 token 而不是密碼，PAT 就是給終端機使用的通行證
- [x] 「通行證」是什麼概念？
- [x] 產生 PAT 的位置
- [x] *【12】章節實作：到 Developer settings 產生 PAT，勾選「最小權限」並設定到期日，產生後立刻複製保存*
- [x] *【12】章節補充：通行證的安全性，關鍵在於「不用主密碼」和「限制權限範圍」*
- [x] >為什麼不能用帳號密碼？
- [x] >最小權限原則

- [x] **【13】遠端儲存庫：把本地接上 GitHub**
- [x] 【？】本地儲存庫和 GitHub 上的儲存庫，一開始認得彼此嗎？
- [x] 【！】要先設定 remote，才會知道要推到哪個 GitHub 儲存庫
- [x] git remote：接上遠端儲存庫
- [x] git branch -M：把主分支改成 main
- [x] git push：推上遠端
- [x] git clone：複製一份遠端儲存庫
- [x] *【13】章節實作：把 commit push 到遠端，再換個資料夾 clone下來，確認 GitHub 上真的有你的版本*
- [x] *【13】章節補充：設定新專案預設使用 main，之後就不用每次手動改分支名稱*
- [x] >為什麼現在都用 main？
- [x] >讓 git init 預設就是 main

- [x] **【14】GitHub Pages：作品的「展示台」**
- [x] 【？】想讓一個 HTML 網頁被全世界看到，最少需要什麼？
- [x] 【！】只要 public 儲存庫加上 Pages，GitHub 就能產生公開網址
- [x] 什麼是 GitHub Pages？
- [x] 設定 GitHub Pages 分支
- [x] *【14】章節實作：打開 GitHub Pages 頁面，看到畫面顯示就代表部署成功*
- [x] *【14】章節補充：GitHub Pages 上線需要部署時間，網址也有固定的命名規則*
- [x] >部署不是即時的
- [x] >Pages 的網址規則

## P6 — GitHub Pages 部署頁面

- [x] **【15】🔨 儀表板：公開你的技能頁面**
- [x] Step · 01 / 09
- [x] 建立專案資料夾
- [x] Step · 02 / 09
- [x] 初始化儲存庫
- [x] Step · 03 / 09
- [x] 下載模板
- [x] 掃碼取得課程模板
- [x] Step · 04 / 09
- [x] 編輯資料
- [x] Step · 05 / 09
- [x] 提交變更
- [x] Step · 06 / 09
- [x] 建立遠端儲存庫
- [x] Step · 07 / 09
- [x] 綁定並推送遠端
- [x] Step · 08 / 09
- [x] 設定 GitHub Pages
- [x] 【？】push 之後，GitHub Pages 會立刻更新嗎？
- [x] 【！】不會立刻更新，Pages 需要先完成一輪部署
- [x] Step · 09 / 09
- [x] 瀏覽公開頁面
- [x] *【15】章節實作：打開 GitHub Pages 頁面，確認你的技能儀表板已經公開*
- [x] *【15】章節補充：如果儀表板沒出現，先從部署設定和資料格式檢查起*
- [x] >Pages 畫面沒有出現？
- [x] >data.js 改壞了？

## P7 — AI 開發助理

- [x] **【16】Antigravity CLI：終端機裡的「AI 幫手」**
- [x] Antigravity CLI 是什麼
- [x] 安裝 Antigravity CLI
- [x] 【？】為什麼工程師現在會把 AI 放進日常開發？
- [x] 【！】AI 適合當開發助理，幫你查資料、解釋狀況、先寫草稿
- [x] *【16】章節實作：先整理暫存區，再請 AI 依「這次暫存的改動」撰寫 commit 草稿，之後再決定要採用、修改或重寫*
- [x] *【16】章節補充：理解網頁 Chat 與終端機 CLI 的差別，以及 CLI 可用 tools 對開發流程的影響*
- [x] >Chat 和 CLI 差在哪？

- [x] **【17】Skills：AI 的「工作說明書」**
- [x] 【？】AI 寫出的 commit 訊息不符合你的習慣，該怎麼辦？
- [x] 【！】把規則寫成 skills，讓 AI 每次都照同一套方式工作
- [x] 從「提醒一次」變成「固定規則」
- [x] skills 長什麼樣子？
- [x] 掃碼取得 create-commit skill
- [x] 安裝 create-commit skill
- [x] 載入 skill 會佔用 context
- [x] *【17】章節實作：安裝 create-commit 後，請 AI 以「剛剛那則 commit 草稿」再寫一次，對照套用規則前後的差異*
- [x] *【17】章節補充：看懂 skill 的作用層級，知道同一套規則會在哪些專案生效*
- [x] >skill 裝在哪一層？

## P8 — Ending（前置 story-01 收工轉場一頁）

- [x] 轉場：「你的技能儀表板已經上線 🎉」
- [x] ✅ 下午回顧
- [x] 下週預告：分支與衝突
- [x] THANK YOU（outro-02；badge BACK · 07.25 09:00）

## Spec 覆蓋

day-1 AM ①–⑩ 全數（順序重排）；day-1 PM ①③④⑤⑧ 全數、②僅 PAT（SSH→W2 ★6）、⑥⑦ fetch/pull 全數挪 W2 ★7、⑨（cd/ls/pwd）前移至 P2、⑪實作案例改儀表板載體 ★10。PR 首見改落 W2（★8）。
