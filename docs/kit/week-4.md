# Week 4 週配套（Kit）

對應 deck：[../curriculum/week-4.md](../curriculum/week-4.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：`notify-w4-teamwork`（通知系統登場）

- 主線：**通知系統首次登場**——一個給好的 JS 服務雛形（W2–W3 是個人 Dashboard，這裡才切到團隊的通知系統）。本週目標＝像團隊一樣在它上面協作、拿到第一個 CI 綠勾；容器化、Render 部署、發通知留到 W5–W6。
- 預埋：Issue 模板 ×2（供認領）、待 review 的 PR 素材分支、`hello.yml` workflow 素材檔。
- 配對機制：兩人一組互為 Collaborator（各自 Use this template 建自己的通知服務 repo，互相 review）。
- `skills/`：本週 skills＋GitHub MCP 設定檔。

## 本週 skills

`write-pr`（PR 描述）、`review-pr`（AI code review）＋GitHub MCP 設定。

## 知識點清單（Dashboard schema）

推導規則見 [../README.md](../README.md)。

- >【01】PR 的完整生命週期
- [ ] PR 生命週期（開→討論→修→合）
- [ ] Draft PR
- [ ] PR 模板
- [ ] 好 PR 的條件（小、聚焦、說清楚）
- [ ] PR 與 branch 關係再確認 ⟨加分⟩
- [ ] 同事看不懂你的 PR ⟨加分⟩
- >【02】為什麼需要 review
- [ ] Code Review 回應三態（comment／approve／request changes）
- [ ] review 禮儀（對事不對人）
- [ ] suggestion
- [ ] review 節奏 ⟨加分⟩
- [ ] self-review ⟨加分⟩
- >【03】把隊友加進來（Collaborators）
- [ ] Collaborators（邀請＋接受）
- [ ] 權限層級
- [ ] CODEOWNERS ⟨加分⟩
- [ ] fork-based 協作 ⟨加分⟩
- >【04】團隊的待辦與討論區（Issue）
- [ ] Issue
- [ ] Issue-PR 連動（closes #N）
- [ ] Labels
- [ ] Milestone／Projects 一瞥 ⟨加分⟩
- [ ] Issue 模板 ⟨加分⟩
- >【05】main 不能直推（Branch Protection）
- [ ] GitHub Flow
- [ ] Branch Protection
- [ ] required reviews
- [ ] required status checks
- [ ] 管理員 bypass 的風險 ⟨加分⟩
- >【06】人審完了，機器審什麼（CI/CD）
- [ ] CI 概念
- [ ] CD 概念
- [ ] GitHub Actions
- [ ] Actions 免費額度 ⟨加分⟩
- [ ] Jenkins／GitLab CI 一瞥 ⟨加分⟩
- >【07】第一個 workflow
- [ ] workflow 檔案位置（.github/workflows/）
- [ ] 最小 workflow 結構（name／on／jobs／runs-on／steps）
- [ ] 接上 required status checks
- [ ] YAML 縮排陷阱 ⟨加分⟩
- [ ] workflow 沒觸發的三因 ⟨加分⟩
- >【08】🔨 sprint 上半場：Issue→PR（作者）
- *整合實做，無新技能點*
- >【09】🔨 sprint 下半場：review→merge（把關者）
- *整合實做，無新技能點*
- [ ] 先看 code 還先看 checks（人審＋機審，判準）
- [ ] request changes 流程 ⟨加分⟩
- >【10】AI 代寫代審 PR
- [ ] `write-pr`（AI 生成 PR 描述）
- [ ] `review-pr`（AI code review）
- [ ] AI review 邊界
- >【11】MCP：把 GitHub 接上 AI
- [ ] MCP 概念
- [ ] MCP 串 GitHub
- [ ] AI 讀 Issue→開分支→發 PR（全程）
