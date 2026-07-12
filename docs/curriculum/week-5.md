# Week 5（8/22）

- 當日終點：
  - push 之後測試自己跑
  - 一條含 cache、coverage、artifacts 的 pipeline 全綠
- 前置：
  - W4 作業已裝 Node LTS（課前 LINE 群提醒驗證 `npm -v`）

## Kit — 週 repo：`notify-w5-pipeline`

見 [docs/kit/week-5.md](../kit/week-5.md)（週 repo／skills／知識點清單）。

## P0 — Starting（2 頁）

- [ ] 簡報封面：GitHub Actions CI/CD 自動化與 AI 協作實務班（MODULE · PIPELINE／2026.08.22 · 第五週）
- [ ] 本日目標：push 之後，測試自己跑

## P1 — Actions 架構深入（16 頁）

- [ ] **【12】機器人的解剖學**
- [ ] 【？】workflow 執行的那台電腦是誰的？在哪裡？
- [ ] runner：workflow 在哪裡跑
- [ ] runner 的品種：ubuntu-latest 是誰
- [ ] 觸發事件：on push
- [ ] 【？】push 跟 pull_request 都會觸發——同一件事會跑兩次嗎？
- [ ] 【！】會——push 和 pull_request 是兩個事件，可能各跑一次
- [ ] 觸發事件：on pull_request（跟 push 差在哪）
- [ ] 觸發事件一覽：schedule、workflow_dispatch 與其他
- [ ] Workflow／Job／Step 三層
- [ ] YAML 基礎：縮排、清單、鍵值
- [ ] YAML 常見雷區
- [ ] *✋ 開 hello.yml → 複製 job 區塊改名 → push → Actions 看到兩個 job*
- [ ] >job 之間的 needs 依賴
- [ ] >runner 的作業系統選擇
- [ ] >self-hosted runner：不用 GitHub 派的機器、自己養一台跑 job（要 GPU／碰內網才用；public repo 別用——外部 PR 會在你機器上跑程式碼）

## P2 — Marketplace 與 Secrets（21 頁）

- [ ] **【13】別人寫好的積木（Marketplace）**
- [ ] 【？】每個步驟都自己手刻 shell script，撐得住嗎？
- [ ] Marketplace 怎麼逛：從 Actions tab 或官網搜
- [ ] 讀一個 action 的頁面：README 與 inputs
- [ ] 【？】隨便抓一個陌生人寫的 action 來跑，安全嗎？
- [ ] 【！】不安全——它會拿到你的 code 和 token，挑可信的、釘死版本
- [ ] uses 語法：owner/repo@version
- [ ] actions/checkout 為什麼幾乎必用
- [ ] *在 workflow 用上一個現成 action*
- [ ] >怎麼判斷一個 action 可不可信：stars、verified、看原始碼
- [ ] >action 的版本釘選：@v4 還是 @hash

- [ ] **【14】不能寫進 code 的東西（Secrets）**
- [ ] 環境變數：workflow 裡的 env
- [ ] 【？】webhook URL 直接寫進 code 推上 GitHub，會發生什麼事？
- [ ] 【！】外洩——公開 repo 誰都讀得到，這種祕密不能寫進 code
- [ ] Secrets 是什麼：token、金鑰、webhook URL
- [ ] 設定入口：Settings → Secrets and variables → Actions
- [ ] 在 workflow 引用：`${{ secrets.MY_KEY }}`
- [ ] *設一個 secret → workflow 裡引用 → 看 log 自動遮罩成 ＊＊＊*
- [ ] >Secrets 為什麼印不出來
- [ ] >env 跟 secret 差在哪：什麼該放哪邊

## P3 — 專案結構與 npm（14 頁）

- [ ] **【15】專案升級時刻：為什麼需要 npm**
- [ ] npm init：package.json 誕生
- [ ] 【？】別人 clone 你的專案，怎麼知道要裝哪些依賴？
- [ ] 【！】package.json 幫你記帳——依賴、版本、指令都寫在裡面，別人 npm install 一次到齊
- [ ] package.json 逐段讀：name、scripts、dependencies
- [ ] npm install 與 node_modules：依賴住在哪
- [ ] npm scripts：指令的別名（`npm run` 幫指令取名）
- [ ] 認識 notify 服務結構：`formatMessage` 純函式（組訊息、好測）＋薄 adapter（送出去）
- [ ] 【？】為什麼把「組訊息」和「送出去」拆兩塊？（純函式好測的伏筆）
- [ ] ✋ 跟做：npm init → 加 scripts → 擺好 `formatMessage` 模組
- [ ] *package.json 就緒、`formatMessage` 模組可被 import（下段 P4 補測試）*
- [ ] >node_modules 為什麼不進版控（呼應 W1 .gitignore）
- [ ] >Windows 排雷：npm 噴「指令碼已停用」→ ExecutionPolicy（回收 W1【02】）
- [ ] >package-lock.json 是什麼、要不要 commit

## P4 — 測試進場（24 頁）

- [ ] **【16】為什麼要自動化測試**
- [ ] 【？】每次改完都手動點一輪功能，第幾次你會放棄？
- [ ] 【！】機器不會累也不會漏——手測第三次就開始跳步驟，測試讓每次改動都被完整重驗
- [ ] 手測的極限
- [ ] Vitest：現代、零設定的 JS 測試框架
- [ ] 安裝：npm install -D vitest（-D 是什麼）
- [ ] 測試檔的命名與位置：*.test.js
- [ ] 測試的樣子：describe／it 的結構
- [ ] expect 斷言基礎：toBe 與 toEqual
- [ ] 【？】formatMessage 的「對」，該怎麼定義？
- [ ] ✋ 跟做：為 formatMessage 寫兩個測試
- [ ] npm test：scripts 加 test、本機跑
- [ ] *本機綠燈*
- [ ] >測試該測什麼、不該測什麼
- [ ] >watch mode 的開發節奏

- [ ] **【17】把測試搬上 CI**
- [ ] 【？】本機都綠了，為什麼 CI 還要再跑一次？
- [ ] test job 逐段讀：checkout → setup-node → npm ci → npm test
- [ ] 【？】workflow 裡要 npm ci 還是 npm install？
- [ ] 【！】用 npm ci——照 lockfile、可重現（npm install 留給本機裝新套件）
- [ ] 紅燈的價值：故意改壞一次
- [ ] *本機綠、CI 綠*
- [ ] >CI 上的紅燈怎麼讀：從 log 定位失敗的 step
- [ ] >本機綠、CI 紅：環境差異的第一課

## P5 — Pipeline 完全體（26 頁）

- [ ] **【18】pipeline 的配件**
- [ ] 【？】測試全過＝程式沒 bug 嗎？
- [ ] 【！】不是——只代表你「測過的」沒事，沒測到的照樣有 bug
- [ ] coverage：測到了多少
- [ ] coverage 跑起來：vitest --coverage
- [ ] coverage 報告怎麼讀
- [ ] 【？】CI 每次都重新 npm install，浪費在哪？
- [ ] cache：讓 CI 不用每次重裝
- [ ] 兩種上 cache 的方式：setup-node 的 cache 參數／actions/cache
- [ ] cache key：命中與失效
- [ ] artifacts：把報告帶下來
- [ ] upload-artifact 用法：name 與 path
- [ ] PR 上的測試狀態全景
- [ ] *說得出 cache 與 artifact 的差別*
- [ ] >badge：README 掛狀態徽章
- [ ] >cache 該放什麼、不該放什麼（secrets 不進 cache）

- [ ] **【19】不只 Node：多語言與多版本**
- [ ] Python 也一樣：pytest 只在 CI 跑 ★3
- [ ] pytest job 逐段讀：setup-python → pip install → pytest
- [ ] 【？】要同時支援 Node 18 和 20，workflow 要複製兩份嗎？
- [ ] 【！】不用——matrix 讓一份 workflow 跑多版本
- [ ] matrix 語法：strategy.matrix 與 `${{ matrix.x }}`
- [ ] matrix demo：Node 多版本 × Python ★3
- [ ] 其他語言一頁通：ASP.NET Core／PHP／JSP 的 CI 長相 ★3
- [ ] *讀懂一份帶 matrix 的 workflow*
- [ ] >matrix 太大會怎樣：組合爆炸與 exclude

## P6 — 情境挑戰「把 pipeline 修到全綠」（~18 頁）

- [ ] **【20】🔨 先讓紅轉綠：讀懂失敗、補上測試**
- [ ] 🧭 Step 0：clone notify-w5 → npm install → npm test 看紅燈
- [ ] 災情簡報：紅在哪、缺什麼（對照今天學的配件）
- [ ] 【？】紅燈訊息裡，哪一行才是關鍵線索？
- [ ] 【！】從紅字牆裡挑第一個 Error——最先失敗那行才是線索，後面多半是連鎖反應
- [ ] Step 1：補測試讓紅轉綠
- [ ] *本機 npm test 綠燈*
- [ ] >紅字牆讀法：stack trace 從哪看起

- [ ] **【21】🔨 再裝上配件：cache、artifact、matrix**
- [ ] 【？】綠了就好，為什麼還要加 cache 跟 artifact？
- [ ] 【！】綠是底線，配件決定「快」與「看得到」——cache 省重裝、artifact 把報告帶出來
- [ ] Step 2：workflow 加上 cache
- [ ] Step 3：coverage 報告上傳 artifact
- [ ] Step 4：發 PR → 搭檔 review＋approve（延續 W4 配對）→ 看 checks 全景
- [ ] Step 5（進階）：加一格 matrix
- [ ] *PR checks 全綠、搭檔 approve、artifact 下載得到*
- [ ] >cache 沒命中？從 key 開始排查
- [ ] >搭檔不在這個 repo？回 W4【03】重加 Collaborator（30 秒）——協作不因換週斷線

## P7 — AI 寫 pipeline（~12 頁）

- [ ] **【22】AI 生成 workflow YAML**
- [ ] 【？】YAML 縮排一多就手殘，能不能讓 AI 直接生一份？
- [ ] 【！】能——`write-workflow` 從需求生 YAML，但縮排／事件名你要看得懂才敢用
- [ ] Demo：AI 生成 workflow YAML（skill: `write-workflow`）
- [ ] Demo：AI 幫你決定該測什麼
- [ ] 邊界頁：AI 寫的 YAML 該驗證什麼

- [ ] **【23】AI 除錯 workflow**
- [ ] 【？】CI 紅了一整片，貼哪段給 AI 最快？
- [ ] 【！】貼最先失敗那段 log（回收 P6 紅字牆讀法）——`debug-workflow` 從錯誤訊息回推問題
- [ ] Demo：貼錯誤訊息，AI 除錯 workflow（skill: `debug-workflow`）
- [ ] 今天帶走的 skills

## P8 — Ending（2 頁）

- [ ] ✅ Recap：打開 Dashboard，點亮 W5 這批技能（pipeline 全綠）
- [ ] 下週預告＋課前準備：容器化與結業專題——**確保自己 repo 的 CI 全綠**（capstone 的起跑線）

## Spec 覆蓋

day-5 AM ②–⑥ 全數（①與第一個 workflow 已前移 W4 ★5）；day-5 PM ①–⑥ 全數（五語言以 Node 深入＋Python CI 副實作＋matrix/對照頁處理 ★3）。
