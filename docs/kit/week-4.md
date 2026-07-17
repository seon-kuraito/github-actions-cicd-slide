# Week 4 週配套（Kit）

對應 deck：[../curriculum/week-4.md](../curriculum/week-4.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：`notify-w4-teamwork`（通知系統登場）

- 主線：**通知系統首次登場**——一個給好的 JS 服務雛形（W2–W3 是個人儀表板，這裡才切到團隊的通知系統）。本週目標＝像團隊一樣在它上面協作、拿到第一個 CI 綠勾；容器化、Render 部署、發通知留到 W5–W6。
- 預埋：Issue 模板 ×2（供認領）、待 review 的 PR 素材分支、`hello.yml` workflow 素材檔。
- 配對機制：兩人一組互為 Collaborator（各自 Use this template 建自己的通知服務 repo，互相 review）。
- `skills/`：本週 skills＋GitHub MCP 設定檔。

## 本週 skills

`write-pr`（PR 描述）、`review-pr`（AI code review）＋GitHub MCP 設定。

## 知識點清單（儀表板 schema）

推導規則見 [../README.md](../README.md)。分組＝課堂 P1–P7（對應儀表板磚 01–07）。

- >P1 — PR 深化
- [ ] PR 生命週期（開→討論→修→合）
- [ ] Draft PR
- [ ] PR 模板
- [ ] 好 PR 的條件（小、聚焦、說清楚）
- [ ] PR 與 branch 關係再確認 ⟨加分⟩
- [ ] 同事看不懂你的 PR ⟨加分⟩
- >P2 — Code Review 與協作者
- [ ] Code Review 回應三態（comment／approve／request changes）
- [ ] review 禮儀（對事不對人）
- [ ] suggestion
- [ ] review 節奏 ⟨加分⟩
- [ ] self-review ⟨加分⟩
- [ ] Collaborators（邀請＋接受）
- [ ] 權限層級
- [ ] CODEOWNERS ⟨加分⟩
- [ ] fork-based 協作 ⟨加分⟩
- >P3 — Issue 與分支保護
- [ ] Issue
- [ ] Issue-PR 連動（closes #N）
- [ ] Labels
- [ ] Milestone／Projects 一瞥 ⟨加分⟩
- [ ] Issue 模板 ⟨加分⟩
- [ ] GitHub Flow
- [ ] Branch Protection
- [ ] required reviews
- [ ] required status checks
- [ ] 管理員 bypass 的風險 ⟨加分⟩
- >P4 — CI 初見：概念
- [ ] CI 概念
- [ ] CD 概念
- [ ] GitHub Actions
- [ ] Actions 免費額度 ⟨加分⟩
- [ ] Jenkins／GitLab CI 一瞥 ⟨加分⟩
- >P5 — CI 初見：第一個 workflow
- [ ] workflow 檔案位置（.github/workflows/）
- [ ] 最小 workflow 結構（name／on／jobs／runs-on／steps）
- [ ] 接上 required status checks
- [ ] YAML 縮排陷阱 ⟨加分⟩
- [ ] workflow 沒觸發的三因 ⟨加分⟩
- >P6 — 情境挑戰「完整跑一輪 sprint」
- [ ] 先看 code 還先看 checks（人審＋機審，判準）
- [ ] request changes 流程 ⟨加分⟩
- >P7 — AI 協作全開
- [ ] `write-pr`（AI 生成 PR 描述）
- [ ] `review-pr`（AI code review）
- [ ] AI review 邊界
- [ ] MCP 概念
- [ ] MCP 串 GitHub
- [ ] AI 讀 Issue→開分支→發 PR（全程）
- *MILESTONE：第一個 CI 綠勾（裝飾磚，無知識點）*
