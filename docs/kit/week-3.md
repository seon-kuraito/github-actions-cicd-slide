# Week 3 週配套（Kit）

對應 deck：[../curriculum/week-3.md](../curriculum/week-3.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：你的 Dashboard（延續 W2）

- 延續你自己的 Dashboard——本週在它上面**故意搞爛、再一一救回**，最後打第一個正式版本。
- 災難**現場製造**：P6 挑戰卡引導你親手製造四種災情（手滑 hard reset、三顆 WIP 爛歷史、散落他枝的修復、推錯的公開 commit），再用對的工具救回。親手弄壞才知道怎麼救。
- ✋ sandbox：P1–P5 各工具（stash/reset/reflog/cherry-pick/rebase -i）的即幤練習另開丟棄式 sandbox，與 Dashboard 分開。
- 本週 skills：deck 一頁提供 skills repo 下載連結（同 W2 載體）。

## 本週 skills

`create-repo`（升級：git init＋.gitignore）、`remote-repo`（gh 綁定遠端）——自 W2 移入，AI 從 0 建乾淨 repo。（救援段刻意不發 skill——救援是 AI 通識，直接問即可）

## 知識點清單（Dashboard schema）

推導規則見 [../README.md](../README.md)。

- >【32】手上的事先收進抽屜（stash）
- [ ] git stash
- [ ] git stash pop（pop vs apply）
- [ ] git stash list
- [ ] stash 內容去哪 ⟨加分⟩
- [ ] stash 帶名字管理 ⟨加分⟩
- >【33】讓 Git 知道你動了檔案
- [ ] git rm
- [ ] git mv
- [ ] rm --cached ⟨加分⟩
- [ ] 檔案總管刪檔的 Git 視角 ⟨加分⟩
- >【34】把「現在」搬回過去（reset）
- [ ] git reset --soft
- [ ] git reset --mixed
- [ ] git reset --hard
- [ ] reset 退到哪層（soft／mixed／hard 判準）
- [ ] --hard 前的自保 ⟨加分⟩
- [ ] reset 目標寫法（HEAD~1／HEAD^／hash）⟨加分⟩
- >【35】公開歷史的反悔法（revert）
- [ ] git revert
- [ ] reset vs revert 判斷
- [ ] revert 合併 commit 的坑 ⟨加分⟩
- [ ] revert 的 revert ⟨加分⟩
- >【36】Git 的黑盒子（reflog）
- [ ] git reflog
- [ ] reflog 救援
- [ ] reflog 保存期限 ⟨加分⟩
- [ ] 救不回的：沒 commit 過的變更 ⟨加分⟩
- >【37】只摘那一顆（cherry-pick）
- [ ] git cherry-pick
- [ ] cherry-pick 衝突處理 ⟨加分⟩
- [ ] 範圍語法 A..B ⟨加分⟩
- >【38】歷史的剪接台（interactive rebase）
- [ ] interactive rebase（rebase -i）
- [ ] squash
- [ ] reword／drop／reorder
- [ ] rebase -i --abort ⟨加分⟩
- [ ] 改寫歷史紅線（推過的不動）⟨加分⟩
- >【39】給版本一個名字（tag 與 Release）
- [ ] git tag
- [ ] annotated tag（-a）
- [ ] git push tag
- [ ] GitHub Releases
- [ ] SemVer
- [ ] tag 打錯了怎麼辦 ⟨加分⟩
- [ ] Release Notes 從 commit 生成 ⟨加分⟩
- >【40】老牌重型流程：Git Flow
- [ ] Git Flow（五分支全圖）
- [ ] 為何淡出：版本化 vs 持續部署（判準）
- [ ] hotfix 雙合併 ⟨加分⟩
- >【41】單 main 持續部署：GitHub Flow
- [ ] GitHub Flow（單 main／feature→PR→部署）
- [ ] trunk-based 一瞥 ⟨加分⟩
- >【42】補上環境這一軌：GitLab Flow
- [ ] GitLab Flow（環境分支 main→staging→production）
- [ ] upstream first
- [ ] 分支策略選型（環境×版本，判準）
- >【43】🔨 把自己的 Dashboard 搞爛再救
- *整合實做，無新技能點*
- [ ] 救援順序思考 ⟨加分⟩
- >【44】🔨 收進 Dashboard，正式發版
- *整合實做，無新技能點*
- [ ] 先進 main 再 tag（版本標 main 狀態，判準）
- >【45】AI 當救援顧問（原生能力，不靠 skill）
- [ ] 用人話把慘況講給 AI、讀懂處方
- [ ] AI 邊界：破壞性指令自己按（判準）
- [ ] 何時發 skill、何時直接問（判準，回收 W1 create-commit）⟨加分⟩
- >【46】用 skills 讓 AI 接手：repo→分支→commit→PR（更完整）
- [ ] `create-repo`（AI 建本機 repo：git init＋.gitignore 升級）
- [ ] `remote-repo`（AI 用 gh 建立＋綁定遠端）
- [ ] 流程逐週長大（W1 手動→W2 AI→W3 起手式更乾淨）⟨加分⟩
