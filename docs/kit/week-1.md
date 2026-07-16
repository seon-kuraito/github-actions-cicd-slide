# Week 1 週配套（Kit）

對應 deck：[../curriculum/week-1.md](../curriculum/week-1.md)。配套慣例見 [../README.md](../README.md)。

## 模板：課程模板庫（repo 名 deck 定名）

- 前三週主產物（產物①）＝**學員自建**的 `skill-dashboard`（非發下的 repo）：
  - 【15】走 init-first：學員 `mkdir` + `git init` 自建空儲存庫，再從課程模板庫
    **Code → Download ZIP** 把模板檔案灌進去，最後自己建遠端、`remote add`／`push`。
  - **發檔案、不發 repo**（2026-07-14 改制，取代原「學員以 Use this template 建立自己的版本」）：
    模板庫**直接承載**模板檔案於 **root**（定案 README「程式碼模板」待定項）。root 承載是必要條件——
    GitHub 無法只下載子資料夾，模板若放子資料夾，ZIP 會多包**兩層**。
  - ZIP 仍會多包一層 `<repo>-main/`：【15】Step 3 明講「只搬**裡面的檔案**」，這是該步唯一的教學重點。
- 內容（模板庫 root）：
  - `index.html`（Claude Design 出視覺）
  - `data.json`（姓名、頭像、知識點勾選、心得一行）
  - `skills/`（W1 skills）＋README（含求救方式）
- 無預埋分支、不設 template repo；學員的第一個 commit 即專案起點，整棵歷史都是他自己的
  （順向支持 W2–W3 在此 repo 上續教 Git）

## 本週 skills

`create-commit`（生成 commit message）。

## 知識點清單（Dashboard schema）

推導規則見 [../README.md](../README.md)。

- >【01】介紹 Git
- [ ] 版本控制概念
- [ ] Git 的誕生 ⟨加分⟩
- [ ] 集中式 vs 分散式 ⟨加分⟩
- >【02】安裝 Git
- [ ] 安裝 Git（mac／Win）
- [ ] 終端機選擇（mac Terminal／iTerm2・Win Windows Terminal＋PowerShell）
- [ ] Set-ExecutionPolicy RemoteSigned
- [ ] ExecutionPolicy 原理
- [ ] 安裝排雷 ⟨加分⟩
- >【03】終端機常見指令
- [ ] pwd
- [ ] ls
- [ ] cd
- [ ] mkdir
- [ ] git --version
- [ ] PATH 概念
- [ ] git 安裝排雷 ⟨加分⟩
- [ ] 拖曳當 cd 路徑 ⟨加分⟩
- [ ] open／explorer（開啟當前目錄）⟨加分⟩
- [ ] touch ⟨加分⟩
- [ ] cp ⟨加分⟩
- [ ] mv ⟨加分⟩
- [ ] cat ⟨加分⟩
- [ ] rm ⟨加分⟩
- >【04】安裝 VS Code
- [ ] VS Code（安裝＋開啟資料夾）
- [ ] code 指令入 PATH ⟨加分⟩
- [ ] VS Code 整合終端機 ⟨加分⟩
- >【05】Git 身分
- [ ] git config（user.name／user.email／--list）
- [ ] --global 差別
- [ ] .gitconfig 位置 ⟨加分⟩
- [ ] 專案級 name/email 覆寫 ⟨加分⟩
- >【06】初始化專案的 Git
- [ ] git init
- [ ] 認識 .git（勿動）
- [ ] git status
- [ ] init 錯了重來 ⟨加分⟩
- [ ] 圖形介面顯示隱藏檔 ⟨加分⟩
- >【07】第一個 commit
- [ ] 三層架構（工作目錄／暫存區／儲存庫）
- [ ] git add
- [ ] git commit
- [ ] commit message
- [ ] 日常循環（改→status→add→commit）
- [ ] git add . vs 指定檔案 ⟨加分⟩
- [ ] git commit --amend（改最後一個 commit 的訊息或內容）⟨加分⟩
- >【08】整理暫存區
- [ ] 部分提交
- [ ] git restore --staged
- [ ] add 後又改檔 ⟨加分⟩
- >【09】看懂歷史與差異
- [ ] git log（含 --oneline、--graph）
- [ ] git diff
- [ ] git log -n ⟨加分⟩
- [ ] git log -p ⟨加分⟩
- [ ] git diff --staged ⟨加分⟩
- >【10】忽略不該追蹤的檔案
- [ ] .gitignore（node_modules／.env／.DS_Store）
- [ ] git rm --cached 不回溯 ⟨加分⟩
- [ ] .gitignore 官方範本 ⟨加分⟩
- >【11】介紹 GitHub
- [ ] Git vs GitHub
- [ ] remote 概念
- [ ] GitHub 帳號
- [ ] public vs private
- [ ] GitLab ⟨加分⟩
- [ ] repo 頁面導覽 ⟨加分⟩
- >【12】設定 GitHub 的通行證
- [ ] PAT
- [ ] 為何用 PAT 不用帳密 ⟨加分⟩
- [ ] PAT 權限與期限 ⟨加分⟩
- >【13】綁定遠端 repo
- [ ] git remote add origin
- [ ] git branch -M
- [ ] master → main
- [ ] git push
- [ ] git clone
- [ ] 為何要求 main ⟨加分⟩
- [ ] init.defaultBranch 設為 main ⟨加分⟩
- >【14】Demo 畫面的 GitHub Pages
- [ ] GitHub Pages（手動設定）
- [ ] 部署非即時（Actions 伏筆）⟨加分⟩
- [ ] Pages 網址規則 ⟨加分⟩
- >【15】🔨 部署技能 Dashboard
- *整合實做，無新技能點*
- [ ] Pages 疑難三因 ⟨加分⟩
- [ ] JSON 格式排錯 ⟨加分⟩
- >【16】請一位 AI 副駕：Antigravity CLI
- [ ] AI 副駕概念（指令是文字，AI 讀寫得出）
- [ ] Antigravity CLI（雙平台安裝）
- [ ] Antigravity 繼任 Gemini CLI ⟨加分⟩
- >【17】把 AI 教成你的樣子：Agent Skills
- [ ] Agent Skills 概念
- [ ] SKILL.md 格式
- [ ] `create-commit`（AI 寫 commit 訊息）
- [ ] Context 觀念（載入 skill 會佔 context）
- [ ] skill 安裝在專案層級 ⟨加分⟩
