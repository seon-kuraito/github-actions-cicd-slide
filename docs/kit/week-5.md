# Week 5 週配套（Kit）

對應 deck：[../curriculum/week-5.md](../curriculum/week-5.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：`notify-w5-pipeline`

- 主線：W4 的 JS 通知服務——含 `formatMessage` 純函式（組訊息、通知管道無關）＋薄 adapter，**無畫面**。
- 預埋：未升級狀態（無 package.json）、tests 缺席、半成品 workflow（等待修復）、`notify-py/` 迷你對照組（Python 對照用）。
- `skills/`：本週 skills。

## 本週 skills

`write-workflow`（生成 YAML）、`debug-workflow`（除錯）。

## 知識點清單（Dashboard schema）

推導規則見 [../README.md](../README.md)。

- >【12】機器人的解剖學
- [ ] runner（ubuntu-latest）
- [ ] 觸發事件（on push／pull_request／schedule）
- [ ] Workflow／Job／Step 三層
- [ ] YAML 基礎
- [ ] job needs 依賴 ⟨加分⟩
- [ ] runner OS 選擇 ⟨加分⟩
- [ ] self-hosted runner ⟨加分⟩
- >【13】別人寫好的積木（Marketplace）
- [ ] Marketplace
- [ ] uses 語法（owner/repo@version）
- [ ] actions/checkout
- [ ] 判斷 action 可信 ⟨加分⟩
- [ ] action 版本釘選（@v4／@hash）⟨加分⟩
- >【14】不能寫進 code 的東西（Secrets）
- [ ] 環境變數（env）
- [ ] Secrets
- [ ] secrets 引用（${{ secrets.X }}）
- [ ] Secrets 為什麼印不出來 ⟨加分⟩
- [ ] env vs secret ⟨加分⟩
- >【15】專案結構與 npm
- [ ] npm
- [ ] package.json
- [ ] npm scripts
- [ ] notify 服務結構（formatMessage 純函式＋adapter）
- [ ] node_modules 不進版控 ⟨加分⟩
- [ ] Windows ExecutionPolicy 排雷 ⟨加分⟩
- [ ] package-lock.json ⟨加分⟩
- >【16】為什麼要自動化測試
- [ ] 自動化測試概念
- [ ] Vitest
- [ ] 斷言（toBe／toEqual）
- [ ] 測什麼、不該測什麼 ⟨加分⟩
- [ ] watch mode ⟨加分⟩
- >【17】把測試搬上 CI
- [ ] test job（checkout→setup-node→npm ci→npm test）
- [ ] npm ci vs npm install
- [ ] CI 紅燈怎麼讀 ⟨加分⟩
- [ ] 本機綠、CI 紅 ⟨加分⟩
- >【18】pipeline 的配件
- [ ] 測試覆蓋率（coverage）
- [ ] cache
- [ ] artifacts
- [ ] PR checks 全景
- [ ] README badge ⟨加分⟩
- [ ] cache 放什麼、不放什麼 ⟨加分⟩
- >【19】不只 Node：多語言與多版本
- [ ] pytest（僅 CI）
- [ ] matrix 策略
- [ ] 其他語言 CI 一頁（ASP.NET／PHP／JSP）
- [ ] matrix 組合爆炸與 exclude ⟨加分⟩
- >【20】🔨 先讓紅轉綠：讀懂失敗、補測試
- *整合實做，無新技能點*
- [ ] 紅字牆從第一個 Error 讀起（判準）
- >【21】🔨 再裝上配件：cache／artifact／matrix
- *整合實做，無新技能點*
- [ ] cache 沒命中排查 ⟨加分⟩
- [ ] 配對互審延續（pipeline PR 也走搭檔 approve，回收 W4）⟨加分⟩
- >【22】AI 生成 workflow YAML
- [ ] `write-workflow`（AI 生成 workflow YAML）
- [ ] AI 決定測什麼
- [ ] AI 邊界：YAML 該驗證什麼
- >【23】AI 除錯 workflow
- [ ] `debug-workflow`（AI 除錯 workflow）
