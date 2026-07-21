# Week 1 週配套（Kit）

對應 deck：[../curriculum/week-1.md](../curriculum/week-1.md)。配套慣例見 [../README.md](../README.md)。

## 模板：課程模板庫（repo 名 deck 定名）

- 前三週主產物（產物①）＝**學員自建**的 `skill-dashboard`（非發下的 repo）：
  - 【15】走 init-first：學員 `mkdir` + `git init` 自建空儲存庫，再從課程模板庫
    下載模板檔案灌進去，最後自己建遠端、`remote add`／`push`。
  - **發檔案、不發 repo**（2026-07-14 改制，取代原「學員以 Use this template 建立自己的版本」）：
    模板庫**直接承載**模板檔案（定案 README「程式碼模板」待定項）；維護走**網頁上傳**（雲端硬碟式，
    不經本地版控——GitHub 仍替每次上傳生成 commit）。
  - 取用＝deck QR／url badge **直鏈模板資料夾頁**，學員在頁面下載兩檔（2026-07-18 改制：
    原「Download ZIP 整包＋Step 3 文案承擔 `<repo>-main/dashboard/` 層級」退場；07-17「dashboard／skills
    同層分離防誤搬」的動機由依週分層繼續承擔）。
- 內容（2026-07-18 起**依週分層**：root＝`README.md`＋逐週 `W{N}/`）：
  - `W1/templates/skill-dashboard/`：`index.html`（單檔承載畫面與程式——樣式與 JS 全數內聯，學員不需要編輯）
    ＋`data.js`（姓名、主力語言、知識點勾選——畫面唯一的資料源，學員只編輯這個檔）
  - `W1/skills/`（W1 skills，P7 安裝到專案的 `.agents/skills/` 用）
- 無預埋分支、不設 template repo；學員的第一個 commit 即專案起點，整棵歷史都是他自己的
  （順向支持 W2–W3 在此 repo 上續教 Git）

## 本週 skills

`create-commit`（生成 commit message）。

## 知識點清單（儀表板 schema）

推導規則見 [../README.md](../README.md)。分組＝課堂 P1–P7（對應儀表板磚 01–07）。

- >P1 — 課程導覽
- *整堂放映序章 deck，無知識點（課程認知收在 [onboarding kit](onboarding.md)）*
- >P2 — Git 入門與環境
- [x] 版本控制概念
- [x] Git 的誕生 ⟨加分⟩
- [x] 集中式 vs 分散式 ⟨加分⟩
- [x] 安裝 Git（mac／Win）
- [x] git --version
- [x] 終端機選擇（mac Terminal／iTerm2・Win Windows Terminal＋PowerShell）
- [x] Set-ExecutionPolicy RemoteSigned
- [x] ExecutionPolicy 原理
- [x] git 安裝排雷 ⟨加分⟩
- [x] 安裝排雷 ⟨加分⟩
- [x] pwd
- [x] ls
- [x] cd
- [x] mkdir
- [x] PATH 概念
- [x] 拖曳當 cd 路徑 ⟨加分⟩
- [x] open／explorer（開啟當前目錄）⟨加分⟩
- [x] touch ⟨加分⟩
- [x] cp ⟨加分⟩
- [x] mv ⟨加分⟩
- [x] cat ⟨加分⟩
- [x] rm ⟨加分⟩
- [x] VS Code（安裝＋開啟資料夾）
- [x] code 指令入 PATH ⟨加分⟩
- [x] VS Code 整合終端機 ⟨加分⟩
- >P3 — Git 身分與首個 commit
- [x] git config（user.name／user.email／--list）
- [x] --global 差別
- [x] .gitconfig 位置 ⟨加分⟩
- [x] 專案級 name/email 覆寫 ⟨加分⟩
- [x] git init
- [x] 認識 .git（勿動）
- [x] git status
- [x] init 錯了重來 ⟨加分⟩
- [x] 圖形介面顯示隱藏檔 ⟨加分⟩
- [x] 三層架構（工作目錄／暫存區／儲存庫）
- [x] git add
- [x] git commit
- [x] commit message
- [x] 日常循環（改→status→add→commit）
- [x] git add . vs 指定檔案 ⟨加分⟩
- [x] git commit --amend（改最後一個 commit 的訊息或內容）⟨加分⟩
- >P4 — 暫存、歷史與忽略
- [x] 部分提交
- [x] git restore --staged
- [x] add 後又改檔 ⟨加分⟩
- [x] git log（含 --oneline、--graph）
- [x] git diff
- [x] git log -n ⟨加分⟩
- [x] git log -p ⟨加分⟩
- [x] git diff --staged ⟨加分⟩
- [x] .gitignore（node_modules／.env／.DS_Store）
- [x] git rm --cached 不回溯 ⟨加分⟩
- [x] .gitignore 官方範本 ⟨加分⟩
- >P5 — GitHub 介紹與設定
- [x] Git vs GitHub
- [x] remote 概念
- [x] GitHub 帳號
- [x] public vs private
- [x] GitLab ⟨加分⟩
- [x] repo 頁面導覽 ⟨加分⟩
- [x] PAT
- [x] 為何用 PAT 不用帳密 ⟨加分⟩
- [x] PAT 權限與期限 ⟨加分⟩
- [x] git remote add origin
- [x] git branch -M
- [x] master → main
- [x] git push
- [x] git clone
- [x] 為何要求 main ⟨加分⟩
- [x] init.defaultBranch 設為 main ⟨加分⟩
- [x] GitHub Pages（手動設定）
- [x] 部署非即時（Actions 伏筆）⟨加分⟩
- [x] Pages 網址規則 ⟨加分⟩
- >P6 — GitHub Pages 部署頁面
- [x] 部署「技能儀表板」頁面
- [x] Pages 疑難三因 ⟨加分⟩
- [x] data.js 資料格式排錯 ⟨加分⟩
- >P7 — AI 開發助理
- [x] AI 副駕概念（指令是文字，AI 讀寫得出）
- [x] Antigravity CLI（雙平台安裝）
- [x] Antigravity 繼任 Gemini CLI ⟨加分⟩
- [x] Agent Skills 概念
- [x] SKILL.md 格式
- [x] `create-commit`（AI 寫 commit 訊息）
- [x] Context 觀念（載入 skill 會佔 context）
- [x] skill 作用層級（User Global vs 專案層）⟨加分⟩
- *MILESTONE：部署「技能儀表板」頁面（裝飾磚，無知識點）*
