# Week 1 週配套（Kit）

對應 deck：[../curriculum/week-1.md](../curriculum/week-1.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：`my-dashboard`

- 前三週主產物（產物①）：
  - 學員以 Use this template 建立自己的版本
- 內容：
  - `index.html`（Claude Design 出視覺）
  - `data.json`（姓名、頭像、知識點勾選、心得一行）
  - `skills/`（W1 skills）＋README（含求救方式）
- 無預埋分支；情境即「把它變成自己的並上線」

## 本週 skills

`create-commit`（生成 commit message）。

## 知識點清單（Dashboard schema）

推導規則見 [../README.md](../README.md)。

- >【01】介紹 Git
- [ ] 版本控制概念
- [ ] 集中式 vs 分散式 ⟨加分⟩
- [ ] Git 的誕生 ⟨加分⟩
- >【02】安裝 Git
- [ ] 安裝 Git（mac／Win）
- [ ] 終端機選擇（Windows Terminal＋PowerShell）
- [ ] Set-ExecutionPolicy RemoteSigned
- [ ] 安裝排雷 ⟨加分⟩
- [ ] ExecutionPolicy 原理 ⟨加分⟩
- >【03】終端機常見指令
- [ ] pwd
- [ ] ls
- [ ] cd
- [ ] mkdir
- [ ] rm
- [ ] PATH 概念
- [ ] 拖曳當 cd 路徑 ⟨加分⟩
- [ ] git 安裝排雷 ⟨加分⟩
- >【04】安裝 VS Code
- [ ] VS Code（安裝＋開專案）
- [ ] code 指令入 PATH ⟨加分⟩
- [ ] open（開啟當前目錄）⟨加分⟩
- [ ] VS Code 整合終端機 ⟨加分⟩
- >【05】Git 身分
- [ ] git config（user.name／user.email／--list）
- [ ] --global 差別
- [ ] .gitconfig 位置 ⟨加分⟩
- [ ] 專案級 name/email 覆寫 ⟨加分⟩
- >【06】初始化專案的 Git
- [ ] git init
- [ ] git status
- [ ] 認識 .git（勿動）
- [ ] init 錯了重來 ⟨加分⟩
- [ ] ls -a 看隱藏檔 ⟨加分⟩
- >【07】第一個 commit
- [ ] git add
- [ ] git commit
- [ ] commit message
- [ ] 日常循環（改→status→add→commit）
- [ ] git add . vs 指定檔案 ⟨加分⟩
- [ ] git commit --amend（改最後一顆 commit 訊息）
- >【08】三層架構與部分提交
- [ ] 三層架構（工作目錄／暫存區／儲存庫）
- [ ] 部分提交
- [ ] git restore --staged ⟨加分⟩
- [ ] add 後又改檔 ⟨加分⟩
- >【09】看懂歷史與差異
- [ ] git log（含 --oneline）
- [ ] git diff（含 --staged）
- [ ] git log --graph ⟨加分⟩
- [ ] git log -p ⟨加分⟩
- >【10】忽略不該追蹤的檔案
- [ ] .gitignore（node_modules／.env／.DS_Store）
- [ ] git rm --cached 不回溯 ⟨加分⟩
- [ ] .gitignore 官方範本 ⟨加分⟩
- >【11】介紹 GitHub
- [ ] Git vs GitHub
- [ ] GitHub 帳號
- [ ] remote 概念
- [ ] public vs private
- [ ] GitLab ⟨加分⟩
- [ ] repo 頁面導覽 ⟨加分⟩
- >【12】設定 GitHub 的通行證
- [ ] PAT
- [ ] 為何用 PAT 不用帳密 ⟨加分⟩
- [ ] PAT 權限與期限 ⟨加分⟩
- >【13】綁定遠端 repo
- [ ] git remote add origin
- [ ] git push
- [ ] master → main
- [ ] git clone
- [ ] 為何要求 main ⟨加分⟩
- >【14】Demo 畫面的 GitHub Pages
- [ ] GitHub Pages（手動設定）
- [ ] 部署非即時（Actions 伏筆）⟨加分⟩
- [ ] Pages 網址規則 ⟨加分⟩
- >【15】🔨 部署技能樹 Dashboard
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
- [ ] skill 安裝在 User Global 層級 ⟨加分⟩
