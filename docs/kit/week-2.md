# Week 2 週配套（Kit）

對應 deck：[../curriculum/week-2.md](../curriculum/week-2.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：你的儀表板（W1 建立）

- 本週不發新 repo——分支/衝突/PR 都在**你自己的儀表板** 上練，改的是自己的東西、擁有感最高。
- 情境**現場製造**：儀表板是 W1 由模板 ZIP 灌進自建 repo（2026-07-14 改制，原為 Use this template），兩者都不會把分支帶過來，所以 W2 的兩條衝突功能線由 P6 挑戰卡引導你**當場開**（不是 clone 現成的）。
- ✋ sandbox：P1–P5 的即幤練習另開丟棄式 sandbox，與儀表板分開、別讓試手 commit 污染作品。
- 本週 skills：無週 repo 承載——deck 一頁提供 skills repo 下載連結（W2–W3 皆用此載體）。

## 本週 skills

`create-branch`、`create-commit`（W1 版升級）、`create-pr`——AI 透過 gh 接手 branch→PR 的成套 skills。（`create-repo`／`remote-repo` 移至 W3）

## 知識點清單（儀表板 schema）

推導規則見 [../README.md](../README.md)。分組＝課堂 P1–P7（對應儀表板磚 01–07）。

- >P1 — 分支概念
- [ ] 分支概念
- [ ] HEAD
- [ ] 分支的實體（.git/refs）⟨加分⟩
- [ ] git branch
- [ ] git switch（含 -c）
- [ ] checkout vs switch ⟨加分⟩
- [ ] 切換時的未 commit 變更 ⟨加分⟩
- [ ] 分支命名規範（feature/、fix/）
- [ ] Conventional Commits
- [ ] 團隊為什麼在乎命名 ⟨加分⟩
- [ ] Conventional Commits scope ⟨加分⟩
- >P2 — 歷史漫遊、GUI 與 SSH
- [ ] git checkout（指定 hash）
- [ ] detached HEAD
- [ ] detached HEAD 的 commit 會被回收 ⟨加分⟩
- [ ] checkout 單一檔案舊版本 ⟨加分⟩
- [ ] Git Graph（安裝＋讀圖）
- [ ] SourceTree 一瞥
- [ ] git log --graph 對照 ⟨加分⟩
- [ ] Git Graph 右鍵操作 ⟨加分⟩
- [ ] SSH 金鑰（公鑰／私鑰）
- [ ] ssh-keygen
- [ ] 公鑰上傳 GitHub
- [ ] PAT vs SSH ⟨加分⟩
- [ ] 多帳號 SSH config ⟨加分⟩
- >P3 — 合併與遠端同步
- [ ] git merge
- [ ] Fast-forward
- [ ] Three-way merge
- [ ] --no-ff ⟨加分⟩
- [ ] git branch -d（刪已合併分支）⟨加分⟩
- [ ] git fetch
- [ ] origin/main
- [ ] git pull
- [ ] pull --rebase ⟨加分⟩
- [ ] git remote -v ⟨加分⟩
- >P4 — rebase 與抉擇
- [ ] git rebase
- [ ] merge vs rebase 判斷
- [ ] rebase 黃金法則（推過的不 rebase）
- [ ] rebase 衝突處理 ⟨加分⟩
- [ ] rebase 改寫 hash ⟨加分⟩
- >P5 — 衝突實戰
- [ ] 衝突標記（<<<、===、>>>）
- [ ] VS Code merge editor
- [ ] 解衝突流程
- [ ] 解衝突不外包 AI（人的判斷）
- [ ] merge --abort ⟨加分⟩
- [ ] 合併單位（同檔不同區塊）⟨加分⟩
- [ ] 語意衝突（Git／AI 都看不見）⟨加分⟩
- >P6 — 情境挑戰「兩條功能線撞在一起了」＋第一個 PR
- [ ] merge 順序思考 ⟨加分⟩
- [ ] Pull Request（提案→審核→合併）
- [ ] git push -u origin
- [ ] Compare & pull request
- [ ] Merge PR＋刪分支
- [ ] 為何用 PR 不直改 main ⟨加分⟩
- [ ] PR 開錯方向重開 ⟨加分⟩
- >P7 — AI 動手做：讓 AI 接手 branch → PR
- [ ] `gh`（GitHub CLI：安裝＋auth login）
- [ ] `create-branch`（AI 開分支）
- [ ] `create-commit`（AI 發 commit，W1 版升級）
- [ ] `create-pr`（AI 用 gh 開 PR）
- [ ] AI 邊界：AI 開的 PR 看過再合 ⟨加分⟩
- *MILESTONE：發出第一個 PR（裝飾磚，無知識點）*
