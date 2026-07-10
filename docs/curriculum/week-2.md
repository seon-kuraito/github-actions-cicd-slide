# Week 2（7/25）

- 當日終點：
  - 敢開分支、敢合併、敢面對衝突
  - 發出人生第一個 PR（自 W1 移入——好 PR = 好 branch＋好 commit，故隨分支週落地）
  - SSH 換裝完成
  - fetch/pull 補課完成

## Kit — 週 repo：你的 Dashboard（W1 建立）

見 [docs/kit/week-2.md](../kit/week-2.md)（週 repo／skills／知識點清單）。

## P0 — Starting（2 頁）

- [ ] 簡報封面：MODULE · PARALLEL · 平行宇宙：分支與衝突
- [ ] 本日目標：開分支、合併、解衝突，發出第一個 PR

## P1 — 分支概念（32 頁）

- [ ] **【18】為什麼需要分支**
- [ ] 【？】想試大改動又怕改壞，你現在會怎麼做？
- [ ] 【！】開一條分支去試——壞了整條丟掉，main 一點都不會被碰到
- [ ] 分支是什麼？（便利貼指標）
- [ ] 分支不是資料夾複製：一個資料夾、多條世界線
- [ ] HEAD 是什麼？
- [ ] 【？】HEAD、main、commit——誰指著誰？
- [ ] 【！】HEAD 指著你所在的分支、分支指著它最新那顆 commit——一路指下去
- [ ] 三者關係圖：HEAD → branch → commit
- [ ] *git log --oneline 找到 `HEAD -> main`，說出 HEAD 現在指著誰*
- [ ] >分支的實體：.git/refs 裡的一個小檔案

- [ ] **【19】建立與切換分支**
- [ ] git branch：查看分支清單（`*` 是你在的地方）
- [ ] git branch \<name\>：建立分支（建立≠切換）
- [ ] 【？】git branch 建完之後，你「站」在新分支上嗎？
- [ ] 【！】沒有——git branch 只建立分支，要另外用 git switch 過去
- [ ] git switch \<name\>：切換分支（checkout 的新家）
- [ ] git switch -c：建立並切換一次完成
- [ ] 切換之後看什麼：git status 與 git log 的變化
- [ ] *✋ 開兩條分支 → 各切換一次 → 在其中一條發一顆 commit → 回 main 比較 log*
- [ ] >checkout vs switch：舊指令還到處都是
- [ ] >切換分支時手上有未 commit 的變更會怎樣（下週 stash 伏筆）

- [ ] **【20】命名是團隊的默契**
- [ ] 分支命名規範：feature/、fix/ 前綴
- [ ] 【？】三個月後的你，看得懂 fix2-final-new 是哪條分支嗎？
- [ ] 【！】名字是寫給三個月後的你和隊友看的——feature/、fix/ 前綴讓分支自己交代來意
- [ ] 好名字 vs 壞名字：對照範例
- [ ] Conventional Commits：type 總覽（feat／fix／docs／chore…）
- [ ] Conventional Commits：格式解剖 `type(scope): subject`
- [ ] *開一條 feature/ 分支、發一顆合規的 commit*
- [ ] >團隊為什麼在乎命名
- [ ] >Conventional Commits 的 scope：feat(site): …

## P2 — 歷史漫遊、GUI 與 SSH（33 頁）

- [ ] **【21】時光旅行**
- [ ] git checkout \<hash\>：回到過去看看
- [ ] 【？】回到過去的 commit 之後，在那裡改東西會怎樣？
- [ ] 【！】改得了，但留不住——那些 commit 沒分支接、之後會被回收
- [ ] detached HEAD：你現在不在任何分支上
- [ ] 迷路了怎麼回家：git switch main
- [ ] *git log 抄下兩個 commit 前的 hash → checkout 過去 → 看檔案內容 → switch main 回家*
- [ ] >detached HEAD 上的 commit 會被回收
- [ ] >只想看不想動：checkout 單一檔案的舊版本

- [ ] **【22】用眼睛看分支**
- [ ] 安裝 Git Graph：VS Code 擴充功能市集
- [ ] Git Graph 開啟與介面導覽（VS Code 上週已裝）
- [ ] 【？】這三條線，你說得出誰從誰長出來嗎？
- [ ] 【！】別在腦子裡追 hash——Git Graph 把每條世界線、每個交會點直接畫給你看
- [ ] 讀圖法：一條線一個世界
- [ ] 讀圖法：merge 的交會點長怎樣
- [ ] SourceTree 一瞥：另一種選擇
- [ ] *在 Git Graph 找到自己剛開的分支與那顆 commit*
- [ ] >git log --graph 與 GUI 的對照（回收 W1）
- [ ] >Git Graph 上直接操作：右鍵選單一瞥

- [ ] **【23】把通行證換成鑰匙（SSH）**
- [ ] 【？】PAT 每次 push 都要處理，有沒有一勞永逸的方式？
- [ ] 【！】把通行證換成鑰匙——SSH 金鑰設定一次，之後 push 免再貼 token
- [ ] SSH 金鑰是什麼：一對鑰匙（公鑰／私鑰）
- [ ] ssh-keygen：產生金鑰（指令與一路 Enter 的三個問題）
- [ ] 鑰匙放在哪：~/.ssh 裡的兩個檔案
- [ ] 複製公鑰：cat＋複製（mac `pbcopy`／win `clip`）
- [ ] 【？】公鑰跟私鑰，哪一把可以給別人？
- [ ] 【！】公鑰——私鑰只留自己，絕不外流
- [ ] 交給 GitHub：Settings → SSH and GPG keys → New SSH key
- [ ] *ssh -T git@github.com 打招呼成功*
- [ ] >PAT vs SSH：什麼時候用哪個
- [ ] >一台電腦多把鑰匙：多帳號的 SSH config 一瞥

## P3 — 合併與遠端同步（23 頁）

- [ ] **【24】把世界線收回來（merge）**
- [ ] 【？】合併有方向嗎——A 合 B 跟 B 合 A 一樣嗎？
- [ ] 【！】不一樣——合併有方向
- [ ] git merge \<branch\>：站在哪裡、合併誰（方向很重要）
- [ ] Fast-forward：什麼都沒發生的合併
- [ ] Three-way merge：三方會談
- [ ] 【？】兩種 merge 之後，歷史線長得一樣嗎？
- [ ] 【！】不一樣——FF 不留痕、three-way 留一顆 merge commit
- [ ] merge commit 長什麼樣：兩個 parent
- [ ] *開分支發 commit → 回 main FF merge；再讓兩邊都有 commit → three-way merge，Git Graph 對照兩種形狀*
- [ ] >--no-ff：強制留下合併痕跡
- [ ] >merge 完的分支要刪嗎：git branch -d 的時機

- [ ] **【25】遠端同步的完整拼圖**
- [ ] 【？】同學剛推了新 commit，你的電腦知道嗎？
- [ ] 【！】不知道——本地不會自動同步，要 git fetch 才看得到
- [ ] git fetch：只下載、不合併
- [ ] fetch 完去哪看：origin/main 是誰
- [ ] git pull = fetch + merge
- [ ] pull 的時機：動手改之前先同步
- [ ] 團隊日常：push 前先 pull
- [ ] *在 GitHub 網頁直接改一個檔案（製造一顆「別人推的」遠端 commit）→ fetch → Git Graph 看 origin/main 與 main 的差*
- [ ] >pull --rebase 是什麼
- [ ] >git remote -v：查看遠端設定

## P4 — rebase 與抉擇（15 頁）

- [ ] **【26】搬家重演（rebase）**
- [ ] rebase 是什麼：commit 一顆顆重放
- [ ] 【？】同一段分岔歷史，merge 和 rebase 後的 log 差在哪？
- [ ] rebase 圖解（before）：分岔的兩條線
- [ ] rebase 圖解（after）：接成一直線
- [ ] 【！】merge 留著分岔＋一顆會合點；rebase 把你的 commit 接成一直線，像沒分岔過
- [ ] merge vs rebase：歷史的兩種哲學
- [ ] 【？】這段歷史，該 merge 還是 rebase？
- [ ] 【！】看「推出去了沒」：已推的用 merge、還沒推的可 rebase（想留痕 merge、要直線 rebase）
- [ ] 【？】為什麼「推過的分支」碰不得？
- [ ] 【！】因為 rebase 換掉 commit 的身分證（hash）——別人拉走的是舊的，兩邊歷史就對不上
- [ ] 黃金法則：推過的分支不要 rebase
- [ ] *在 sandbox 開分支讓兩邊分岔 → 站在分支上 rebase main → log --graph 前後對照*
- [ ] >rebase 遇到衝突怎麼辦
- [ ] >rebase 改寫了什麼：commit hash 為什麼變了

## P5 — 衝突實戰（16 頁）

- [ ] **【27】衝突：Git 不會通靈**
- [ ] 【？】兩個人改同一行，Git 該聽誰的？
- [ ] 【！】都不聽——Git 舉手投降、標記衝突，交給你決定
- [ ] 衝突什麼時候發生：同檔同區塊、兩邊都動過
- [ ] 衝突當下的畫面：終端機說了什麼（不要慌）
- [ ] 衝突標記解剖：`<<<<<<<`／`=======`／`>>>>>>>`
- [ ] VS Code merge editor：從 Source Control 開啟
- [ ] merge editor 三個按鈕：Accept Current／Incoming／Both
- [ ] 解衝突三步驟：看懂 → 選擇 → 收尾
- [ ] 收尾別忘了：add → commit 才算完成合併
- [ ] 心態頁：衝突不是錯誤，是對話
- [ ] 這件事不外包給 AI：衝突相撞的是兩個「意圖」，該留誰是人的判斷——所以本課刻意沒有「AI 解衝突」（AI 能代打的是指令，不是判斷）
- [ ] *✋ 兩條分支改同一行 → merge 引爆 → merge editor 解掉 → commit 收尾*
- [ ] >衝突時的逃生門：--abort
- [ ] >同檔不同區塊會衝突嗎：Git 的合併單位
- [ ] >語意衝突：Git（和 AI）都看不見——文字沒相撞、邏輯卻打架的衝突，只有人測得出來

## P6 — 情境挑戰「兩條功能線撞在一起了」＋第一個 PR（27 頁）

- [ ] **【28】🔨 情境挑戰：Dashboard 上兩條功能線撞在一起**
- [ ] 🧭 Step 0：回到你的 Dashboard，git log 確認 main 乾淨
- [ ] Step 1：開 `feature/new-skill` → 在 data.json 加一筆新技能 → commit
- [ ] Step 2：回 main → merge `feature/new-skill`（Fast-forward，無痛）
- [ ] 【？】剛剛這次 merge，Git Graph 上有留下「合併點」嗎？
- [ ] Step 3：開 `feature/reword-note` → 改 data.json 的某一行 → commit
- [ ] Step 4：回 main → 把**同一行**改成別的內容 → commit（兩邊都動同一行）
- [ ] 【？】接下來 merge `feature/reword-note`，會順還是會炸？
- [ ] Step 5：merge `feature/reword-note`——衝突爆了（讀懂終端機訊息
- [ ] Step 6：VS Code merge editor 逐段選擇 → add → commit 完成合併
- [ ] 【？】真實工作情境中會是什麼樣子？
- [ ] 【！】真實版是「兩個人」各改各的——衝突不是誰的錯，是兩條線在同處相遇，而且常在合 PR 時才浮現
- [ ] *Dashboard main 同時有新技能與收斂後的心得；Git Graph 一個 FF、一個 merge commit*
- [ ] >順序思考：Step 4 若沒先動 main，這次 merge 還會炸嗎？

- [ ] **【29】🔨 你的第一個 PR**
- [ ] 【？】都能直接 push 了，為什麼要繞一圈 PR？
- [ ] 【！】為了「有人看過」也「留下記錄」——PR 把改動變成能討論、能擋下、日後也查得到的提案
- [ ] PR 是什麼：提案 → 審核 → 合併
- [ ] Step 1：開一條命名合規的分支（feature/…）
- [ ] Step 2：改 data.json——打勾這週學的技能（分支／合併／PR）、發一顆好 commit（Conventional Commits）
- [ ] Step 3：git push -u origin \<branch\>——分支上遠端
- [ ] Step 4：GitHub 上按「Compare & pull request」→ 標題沿用 commit 慣例
- [ ] Step 5：看懂 PR 頁面（極簡版：diff 在哪、留言在哪）
- [ ] Step 6：自己按下 Merge → 順手刪除已合併的分支（GitHub 的提示按鈕）
- [ ] *main 上多一個 merged PR，Dashboard 技能樹亮了 W2 這批點*
- [ ] >為什麼繞一圈 PR、不直接改 main（W4 的 Branch Protection 伏筆）
- [ ] >PR 開錯分支方向怎麼辦：close 掉重開

## P7 — AI 動手做：讓 AI 接手 branch → PR（~14 頁）

- [ ] **【30】給 AI 一隻手：gh（GitHub CLI）**
- [ ] 【？】AI 一直給建議，但指令還是我自己打——它能不能直接動手？
- [ ] 【！】給它一隻手：gh（GitHub CLI），AI 就能替你開 PR、查狀態（W4 會升級成更強的 MCP）
- [ ] gh 是什麼：GitHub 官方 CLI（W1【03】預告過的 PATH 成員）
- [ ] 安裝 gh ＋ gh auth login：一次把 gh 綁上你的帳號
- [ ] >gh 認證兩種方式：瀏覽器授權 vs token

- [ ] **【31】用 skills 讓 AI 接手：分支 → commit → PR**
- [ ] 本週 skills：repo 下載連結＋裝進工具
- [ ] 【？】你現有 repo 上「開分支 → commit → 開 PR」這串，AI 能一口氣接手嗎？
- [ ] 【！】可以——使用 skills 接力，但每一步你都要看得懂才按下去
- [ ] *AI 幫你開分支（skill: `create-branch`）*
- [ ] *AI 幫你發 commit（skill: `create-commit`）（升級版）*
- [ ] *AI 用 gh 開 PR（skill: `create-pr`）*
- [ ] >邊界頁：gh／AI 開的 PR，你仍要看過再合
- [ ] >建 repo 那段留到 W3 P7：讓 AI 從 0 更完整地跑（git init＋.gitignore）

## P8 — Ending（2 頁）

- [ ] ✅ Recap：打開 Dashboard，確認 W2 這批技能點亮了（實質更新已在 P6 走 branch＋PR）
- [ ] 下週預告：時光機與救援＋回家任務（在自己 repo 完整走一次 rebase，口頭發布）

## Spec 覆蓋

day-2 AM ①–⑧ 全數；day-2 PM ①–⑤ 全數；補收 day-1 PM ②（SSH）⑥⑦（fetch/pull 深講）；PR 首見（day-4 ①的入門版前移，深化仍在 W4）。
