# Week 3（8/1）

- 當日終點：
  - 搞砸了也救得回來的底氣
  - 完成第一次正式發版（v1.0.0 Release）
- 注意：
  - 下週 8/8 停課，Ending 要交代兩週後見＋回家任務加量

## Kit — 週 repo：你的儀表板（延續 W2）

見 [docs/kit/week-3.md](../kit/week-3.md)（週 repo／skills／知識點清單）。

## P0 — Starting

- [ ] 簡報封面：GitHub Actions CI/CD 自動化與 AI 協作實務班（MODULE · REWIND／2026.08.01 · 第三週）
- [ ] 本日目標：進度回溯＋發出第一個正式版本

## P1 — 暫存與檔案操作

- [ ] **【32】手上的事先收進抽屜（stash）**
- [ ] 【？】改到一半要急切分支處理別的事，手上的半成品怎麼辦？
- [ ] 【！】git stash 先把半成品原樣收進抽屜——切走辦別的事，回來 pop 接著做，不用硬 commit
- [ ] git stash：現場原樣收進抽屜
- [ ] git stash list：抽屜裡有什麼（stash@{0} 怎麼讀）
- [ ] git stash pop：拿出來繼續做
- [ ] pop vs apply：拿出來 vs 複製一份
- [ ] *【32】章節實作：改檔不 commit → stash → 切分支辦事 → 回來 pop 繼續*
- [ ] *【32】章節補充*
- [ ] >stash 的內容去了哪？
- [ ] >stash 也能帶名字：多筆暫存的管理

- [ ] **【33】讓 Git 知道你動了檔案**
- [ ] 【？】直接把檔案拖進垃圾桶，Git 會知道嗎？
- [ ] 【！】會——git status 立刻標它 deleted
- [ ] git rm：刪除並停止追蹤
- [ ] git mv：改名不斷歷史
- [ ] rm 與 mv 之後：git status 的判讀
- [ ] *【33】章節實作：rm 一個檔案、mv 一個檔案，用 git status 說出差別*
- [ ] *【33】章節補充*
- [ ] >rm --cached：只從追蹤移除
- [ ] >直接在檔案總管刪檔案會怎樣：Git 的視角

## P2 — reset 與 revert

- [ ] **【34】把「現在」搬回過去（reset）**
- [ ] reset 的心智模型：移動 HEAD，差別在檔案跟不跟
- [ ] 【？】想反悔，你要退到哪一步？
- [ ] 【！】先鎖「哪一個」，再決定「怎麼退」
- [ ] reset 目標的三種寫法：HEAD~1（退一格）、HEAD^（同義）、hash（從 git log 撈）
- [ ] 【？】退到那一個，你的檔案跟不跟著退？（reset 有 soft／mixed／hard 三種）
- [ ] 【！】退到哪層看你要留什麼：留暫存區 soft、留工作區 mixed、全丟 hard
- [ ] git reset --soft：只動 HEAD（變更留在暫存區）
- [ ] git reset --mixed：連暫存區一起退（變更留在工作目錄）
- [ ] git reset --hard：全部倒帶（危險）
- [ ] 三種 reset 對照表
- [ ] *【34】章節實作：連發三個 commit → 用 HEAD~1 退一個（soft）看 status → mixed 再退 → 第二遍才用 --hard 歸零*
- [ ] *【34】章節補充*
- [ ] >--hard 前的自保習慣：先確認手上沒有還沒 commit 的東西

- [ ] **【35】公開歷史的反悔法（revert）**
- [ ] git revert \<hash\>：撤銷指定的 commit
- [ ] revert 產生了什麼：一個內容相反的新 commit
- [ ] 【？】已經被同學拉走的 commit，還能 reset 掉嗎？
- [ ] 【！】不行——公開歷史只能 revert（reset 會改寫大家手上的 log）
- [ ] 推過的為什麼不能 reset：想像隊友手上的 log
- [ ] reset 動私有、revert 動公開——差在「推出去了沒」
- [ ] *【35】章節實作：revert 一個已推上遠端的 commit，log 看到 revert commit*
- [ ] *【35】章節補充*
- [ ] >revert 合併 commit 的坑
- [ ] >revert 的 revert：撤銷的撤銷

## P3 — reflog 救援

- [ ] **【36】Git 的黑盒子（reflog）**
- [ ] 【？】被 --hard 掉的 commit，真的消失了嗎？
- [ ] 【！】沒有——「遺失」的其實還在，reflog 找得回
- [ ] git reflog：讀懂輸出（HEAD@{n} 是什麼）
- [ ] 救援步驟 1–2：找到 hash、checkout 確認內容
- [ ] 救援步驟 3–4：reset --hard 回去（或開分支接住）
- [ ] 救援心法：Git 沒有真正意義上的「刪除」，所有操作都會留下記錄
- [ ] *【36】章節實作：hard reset 掉一個 commit → reflog 找 hash → 救回來*
- [ ] *【36】章節補充*
- [ ] >reflog 的保存期限
- [ ] >救不回來的東西：沒 commit 過的變更

## P4 — 歷史整理與發版

- [ ] **【37】只摘那一個（cherry-pick）**
- [ ] 【？】只想要那條分支的其中一個 commit，merge 整條會發生什麼事？
- [ ] 【！】整條 commit 全被併進來——你只要一個，殺雞用牛刀
- [ ] git cherry-pick \<hash\>：把那個 commit 摘過來
- [ ] cherry-pick 之後：同內容、新 hash（呼應 W2 的 hash 課）
- [ ] 使用情境：hotfix 搬運
- [ ] *【37】章節實作：把別的分支的一個 commit 摘到 main，log 確認*
- [ ] *【37】章節補充*
- [ ] >cherry-pick 衝突處理
- [ ] >一次摘多個：範圍語法 A..B

- [ ] **【38】歷史的剪接台（interactive rebase）**
- [ ] 【？】三個「WIP」「fix」「再修一下」的 commit，敢給 reviewer 看嗎？
- [ ] 【！】不敢就進剪接台——rebase -i 把 WIP／fix 揉成一個乾淨 commit（但推過的別動）
- [ ] git rebase -i HEAD~3：進入剪接台
- [ ] 剪接台畫面解剖：pick 清單與指令表
- [ ] squash：把 WIP 揉成一個好 commit
- [ ] reword：只改訊息
- [ ] drop 與 reorder：刪除與換序
- [ ] *【38】章節實作：連發三個爛 commit → rebase -i 整成一個、訊息重寫*
- [ ] *【38】章節補充*
- [ ] >剪接台裡迷路：--abort 萬用
- [ ] >改寫歷史的紅線：推過的不要動（黃金法則回收）
- [ ] >Squash and merge：合 PR 時 GitHub 把整個 PR 揉成一個進 main——等於自動幫你做 rebase -i squash（main 上一個 PR 一個乾淨 commit）

- [ ] **【39】給版本一個名字（tag 與 Release）**
- [ ] 【？】「上週五那版」跟「v1.0.0」，哪個溝通不會出錯？
- [ ] git tag \<name\>：lightweight tag
- [ ] git tag -a：annotated tag（差在哪、為什麼發版用它）
- [ ] 【？】tag 會跟著 git push 一起上去嗎？
- [ ] 【！】不會——tag 要自己推：git push origin \<tag\>
- [ ] GitHub Releases：從 tag 到發布頁（Draft → Publish）
- [ ] Release Notes 寫什麼：從 commit 記錄長出的發版說明（P7 AI 會示範生成）
- [ ] SemVer：版本號三碼怎麼取
- [ ] *【39】章節實作：幫自己的技能儀表板打 `v1.0.0`（annotated）→ push tag → 發第一個 Release*
- [ ] *【39】章節補充*
- [ ] >tag 打錯了怎麼辦

## P5 — 分支策略三選一

- [ ] **【40】老牌重型流程：Git Flow**
- [ ] 【？】五個人同時開發，分支會長成什麼樣子？
- [ ] 【！】沒規矩就打結——分支策略＝團隊的交通規則；本節看三套，從最完整的 Git Flow 起
- [ ] Git Flow 完整全圖：main／develop／feature／release／hotfix 五線譜
- [ ] develop 是集成分支（功能合併點，≠ 部署環境）
- [ ] release／hotfix：發版前穩定、上線後急救的專用道
- [ ] 為何 2026 少見：為「多版本並存」而生（桌面／App Store 年代），持續部署嫌它重
- [ ] *【40】章節實作：看圖說出一個 feature 從 develop 走到 main 要經過哪幾條分支*
- [ ] *【40】章節補充*
- [ ] >Git Flow 的身世：Vincent Driessen 2010，與作者 2020 的但書

- [ ] **【41】單 main 的持續部署：GitHub Flow**
- [ ] 只有一條長駐分支 main，且永遠保持可部署
- [ ] 工作循環：從 main 開 feature → PR → review → merge → 部署
- [ ] 拿掉了什麼：沒有 develop、沒有 release 分支——簡單即設計
- [ ] 【？】那「上線前的測試環境」放哪一條分支？
- [ ] 【！】GitHub Flow 沒給正式位置——它賭 main 永遠可部署、merge 即上線
- [ ] 為什麼是 2026 主流：SaaS／Web 持續部署的預設節奏
- [ ] *【41】章節實作：把你儀表板的一次改動，畫成 GitHub Flow 路徑（feature→PR→main→上線）*
- [ ] *【41】章節補充*
- [ ] >main 永遠可部署的代價：沒綠勾不敢 merge（W4 Branch Protection 伏筆）
- [ ] >trunk-based：連 feature 分支都省了——光譜最輕的一端

- [ ] **【42】補上環境這一軌：GitLab Flow**
- [ ] 起點就是 GitHub Flow：一樣單 main、一樣 feature＋PR/MR
- [ ] 多的是環境軌：main → staging → production，merge 到哪就部署到哪
- [ ] upstream first：bug 先修 main、再往下游帶，否則 main 會漏修
- [ ] 這正是本課簡報自己的部署：preparing → main（你 repo 天天在跑）
- [ ] 【？】三套都看過了，你的專案該用哪一套？
- [ ] 【！】看你要不要「環境」與「版本」：純上線 GitHub Flow／要 staging 用 GitLab Flow／多版並存才回頭找 Git Flow
- [ ] *【42】章節實作：說得出你儀表板現在屬哪一套、為何還用不到環境分支*
- [ ] *【42】章節補充*
- [ ] >W5／W6 伏筆：notify 系統會真的走一次 staging → production

## P6 — 情境挑戰「搞爛再救」＋收進儀表板發版

- [ ] **【43】🔨 情境挑戰：把自己的儀表板搞爛，再一一救回**
- [ ] 🧭 Step 0：回到你的儀表板（乾淨的 main）
- [ ] 【？】「弄壞」跟「救回」你覺得哪個難？先猜，等下驗證
- [ ] 【！】對症看三件事：東西還在不在、要不要留痕、私有還公開
- [ ] 每種災情動手前先分診：stash／reset／reflog／revert／cherry-pick 該用哪個
- [ ] 災情一（手滑）：發一個好 commit → `reset --hard HEAD~1` 弄丟它 → **reflog** 找回來
- [ ] 災情二（爛歷史）：連發三個「WIP／fix／再修」→ **rebase -i** squash 成一個（都還沒 push，安全）
- [ ] 災情三（散落他枝）：在 feature 分支發一個修復、不合回 → **cherry-pick** 撿回 main
- [ ] 至此 main 乾淨 → push 上遠端
- [ ] 災情四（已公開）：push 一個有錯的 commit（收不回）→ **revert** 產生反向 commit → 再 push
- [ ] *【43】章節實作：四種災情都救回，main 剩一條乾淨的 log*
- [ ] *【43】章節補充*
- [ ] >救援順序：為什麼「推過的」只能 revert、不能 reset

- [ ] **【44】🔨 收進儀表板，正式發版**
- [ ] 🧭 救回的儀表板乾淨了——把這週技能收進去、發第一個正式版
- [ ] Step 1：開 branch → 改 data.js 打勾這週的救援技能 → 好 commit（Conventional Commits）
- [ ] Step 2：push → 開 PR → merge 進 main
- [ ] 【？】改完就直接 tag，還是先讓它進 main？
- [ ] 【！】先 PR 進 main、確認乾淨再 tag——版本標的是 main 上那一刻的狀態
- [ ] Step 3：打 `v1.0.0`（annotated）→ `git push origin v1.0.0`
- [ ] Step 4：GitHub Releases 從 tag 發第一個 Release（Draft → Publish）
- [ ] *【44】章節實作：儀表板亮了 W3 這批點、Releases 頁有 v1.0.0*
- [ ] *【44】章節補充*
- [ ] >Release Notes 交給 P7 AI 生成（skill 預告）

## P7 — AI 救援顧問

- [ ] **【45】AI 當救援顧問（原生能力，不靠特製 skill）**
- [ ] 【？】手忙腳亂時，你連「該用哪個指令救」都想不起來，怎麼辦？
- [ ] 【！】把慘況用人話說給 AI——救援是模型基本功，不用特製 skill，它讀 reflog／log 就能開處方
- [ ] *【45】章節實作：把慘況用人話描述給 AI（例：「我 reset --hard 把 commit 弄丟了」）*
- [ ] *【45】章節實作：AI 開的處方——看懂每一步再執行*
- [ ] *【45】章節實作：請 AI 建議歷史整理（rebase -i 清單）——一樣看懂再動手*
- [ ] 邊界頁：--hard 類破壞性指令永遠你自己按，別讓 AI 代跑
- [ ] *【45】章節補充*
- [ ] >這裡刻意不發 skill：格式型工作才需要（回收 W1 create-commit）；救援是通識，直接問更省

- [ ] **【46】用 skills 讓 AI 接手：repo → 分支 → commit → PR（這次更完整）**
- [ ] 【？】W2 讓 AI 從 0 跑過一次了，這次還能更完整在哪？
- [ ] 【！】補上乾淨的起手式——AI 建 repo 時一併 git init＋.gitignore，遠端也一次綁好
- [ ] *【46】章節實作：AI 幫你建立本機 Repo（skill: `create-repo`）（升級版：git init＋.gitignore）*
- [ ] *【46】章節實作：AI 用 gh 建立與綁定 GitHub Repo（skill: `remote-repo`）（升級版，給定模版）*
- [ ] *【46】章節實作：接著 branch → commit → PR：沿用 W2 的 skills 一口氣跑完（不重教，只重跑）*
- [ ] *【46】章節補充*
- [ ] >流程逐週長大：W1 手動 → W2 AI 重跑 → W3 起手式更乾淨（W4 起團隊化）

## P8 — Ending

- [ ] ✅ Recap：打開儀表板，確認 W3 這批技能點亮了、Releases 有 v1.0.0
- [ ] 下週預告：**兩週後見（8/8 停課）**——團隊協作與 CI 初見＋回家任務（把 reset／reflog 練到不心虛，口頭發布）

## Spec 覆蓋

day-3 AM ①–⑥ 全數；day-3 PM ①–⑥ 全數（三種 flow 各一【NN】：Git Flow 歷史定位、GitHub Flow 完整模擬於 W4 落地、GitLab Flow 環境分支於 W5／W6 落地）。
