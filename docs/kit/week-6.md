# Week 6 週配套（Kit）

對應 deck：[../curriculum/week-6.md](../curriculum/week-6.md)。配套慣例見 [../README.md](../README.md)。

## 週 repo：你 W4–W5 養的通知服務 ＋ 上游 repo（fallback）

- 你的服務：W4–W5 一路養大的 JS 通知服務（有測試、有 CI），**缺 Dockerfile＋deploy workflow**——這最後一哩就是今天的 capstone。
- 上游 repo：講師的完整通知系統 repo，降為**參考答案／救援 fallback**（自己的收不了才 Fork 保底出貨），非全班必 Fork。
- `skills/`：本週 skills。

## 本週 skills

`optimize-workflow`（workflow 優化）＋Render MCP 設定＋capstone 輔助。

## 知識點清單（儀表板 schema）

推導規則見 [../README.md](../README.md)。分組＝課堂（對應儀表板磚；W6 特例：P4–P6 為 capstone 合併段）。

- >P1 — Docker 概念
- [ ] 容器概念
- [ ] image vs container
- [ ] Docker 與 CI/CD 關係
- [ ] 策略：本機不裝、CI build
- [ ] 容器 vs 虛擬機 ⟨加分⟩
- [ ] 貨櫃比喻補完 ⟨加分⟩
- >P2 — Dockerfile
- [ ] Dockerfile
- [ ] FROM
- [ ] WORKDIR
- [ ] COPY
- [ ] RUN vs CMD
- [ ] .dockerignore
- [ ] layer 與快取 ⟨加分⟩
- [ ] 底 image 怎麼挑 ⟨加分⟩
- >P3 — CI build & push
- [ ] CI build image
- [ ] GHCR
- [ ] GITHUB_TOKEN（packages: write）
- [ ] image push
- [ ] Docker Hub 對照 ⟨加分⟩
- [ ] image tag 策略 ⟨加分⟩
- >P4–P6 — Capstone「完成你的通知系統最後一哩」
- [ ] container → Render 部署（拉 GHCR image）
- [ ] 救援 fallback：Fork 講師完整版 ⟨加分⟩
- [ ] webhook 通知（LINE/Discord ＋ Secret，deploy 後發、≠部署）
- [ ] 完整 CI/CD 流程（push→測→build→GHCR→Render→notify）
- [ ] 搭檔互驗部署（配對收官，回收 W4）⟨加分⟩
- [ ] e-mail 通知對照 ⟨加分⟩
- [ ] 彩蛋：儀表板部署自動化 ⟨加分⟩
- >P7 — AI 壓軸
- [ ] `optimize-workflow`（AI 優化 workflow）
- [ ] Render MCP（AI 部署／管理服務）
- [ ] Claude Code（agent 的天花板）
- [ ] AI 協作心法：你是駕駛，它是副駕
- *MILESTONE：push 就部署、部署就通知（裝飾磚，無知識點）*
