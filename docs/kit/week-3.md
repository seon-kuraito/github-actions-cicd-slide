# Week 3 週配套（Kit）

對應 deck：[../curriculum/week-3.md](../curriculum/week-3.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：你的儀表板（延續 W2）

- 延續你自己的儀表板——本週在它上面**故意搞爛、再一一救回**，最後打第一個正式版本。
- 災難**現場製造**：P6 挑戰卡引導你親手製造四種災情（手滑 hard reset、三個 WIP 爛歷史、散落他枝的修復、推錯的公開 commit），再用對的工具救回。親手弄壞才知道怎麼救。
- ✋ sandbox：P1–P5 各工具（stash/reset/reflog/cherry-pick/rebase -i）的即幤練習另開丟棄式 sandbox，與儀表板分開。
- 本週 skills：deck 一頁提供 skills repo 下載連結（同 W2 載體）。

## 本週 skills

`create-repo`（升級：git init＋.gitignore）、`remote-repo`（gh 綁定遠端）——自 W2 移入，AI 從 0 建乾淨 repo。（救援段刻意不發 skill——救援是 AI 通識，直接問即可）

## 知識點清單（儀表板 schema）

推導規則見 [../README.md](../README.md)。分組＝課堂 P1–P7（對應儀表板磚 01–07）。

- >P1 — 暫存與檔案操作
- [ ] git stash
- [ ] git stash pop（pop vs apply）
- [ ] git stash list
- [ ] stash 內容去哪 ⟨加分⟩
- [ ] stash 帶名字管理 ⟨加分⟩
- [ ] git rm
- [ ] git mv
- [ ] rm --cached ⟨加分⟩
- [ ] 檔案總管刪檔的 Git 視角 ⟨加分⟩
- >P2 — reset 與 revert
- [ ] git reset --soft
- [ ] git reset --mixed
- [ ] git reset --hard
- [ ] reset 退到哪層（soft／mixed／hard 判準）
- [ ] --hard 前的自保 ⟨加分⟩
- [ ] reset 目標寫法（HEAD~1／HEAD^／hash）⟨加分⟩
- [ ] git revert
- [ ] reset vs revert 判斷
- [ ] revert 合併 commit 的坑 ⟨加分⟩
- [ ] revert 的 revert ⟨加分⟩
- >P3 — reflog 救援
- [ ] git reflog
- [ ] reflog 救援
- [ ] reflog 保存期限 ⟨加分⟩
- [ ] 救不回的：沒 commit 過的變更 ⟨加分⟩
- >P4 — 歷史整理與發版
- [ ] git cherry-pick
- [ ] cherry-pick 衝突處理 ⟨加分⟩
- [ ] 範圍語法 A..B ⟨加分⟩
- [ ] interactive rebase（rebase -i）
- [ ] squash
- [ ] reword／drop／reorder
- [ ] rebase -i --abort ⟨加分⟩
- [ ] 改寫歷史紅線（推過的不動）⟨加分⟩
- [ ] git tag
- [ ] annotated tag（-a）
- [ ] git push tag
- [ ] GitHub Releases
- [ ] SemVer
- [ ] tag 打錯了怎麼辦 ⟨加分⟩
- [ ] Release Notes 從 commit 生成 ⟨加分⟩
- >P5 — 分支策略三選一
- [ ] Git Flow（五分支全圖）
- [ ] 為何淡出：版本化 vs 持續部署（判準）
- [ ] hotfix 雙合併 ⟨加分⟩
- [ ] GitHub Flow（單 main／feature→PR→部署）
- [ ] trunk-based 一瞥 ⟨加分⟩
- [ ] GitLab Flow（環境分支 main→staging→production）
- [ ] upstream first
- [ ] 分支策略選型（環境×版本，判準）
- >P6 — 情境挑戰「搞爛再救」＋收進儀表板發版
- [ ] 救援順序思考 ⟨加分⟩
- [ ] 先進 main 再 tag（版本標 main 狀態，判準）
- >P7 — AI 救援顧問
- [ ] 用人話把慘況講給 AI、讀懂處方
- [ ] AI 邊界：破壞性指令自己按（判準）
- [ ] 何時發 skill、何時直接問（判準，回收 W1 create-commit）⟨加分⟩
- [ ] `create-repo`（AI 建本機 repo：git init＋.gitignore 升級）
- [ ] `remote-repo`（AI 用 gh 建立＋綁定遠端）
- [ ] 流程逐週長大（W1 手動→W2 AI→W3 起手式更乾淨）⟨加分⟩
- *MILESTONE：儀表板正式發版（裝飾磚，無知識點）*
