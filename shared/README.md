# slidev-addon-shared

全部 deck 共用的 Slidev addon：設計系統（layouts／components／styles）＋ 行為 setup。
由 Claude Design 交接稿轉換而來（交接檔已棄置）；**活的視覺基準＝`apps/templates` deck**
（`pnpm -C apps/templates dev`，89 張版型，深色模式按 `d` 切換）。決策脈絡見
[DECISIONS.md「視覺線」](../DECISIONS.md)。

Slidev 會自動載入此套件根目錄下的 `components/`、`layouts/`、`setup/`、`styles/`
等慣例目錄，無需額外設定。deck 端引用方式（slides.md frontmatter）：

```yaml
addons:
  - slidev-addon-shared
canvasWidth: 1920 # 全專案統一：設計稿 1920×1080 座標系，layout 內 px 值照抄
```

## 目錄

- `layouts/` — 每個設計版型一個 layout，檔名＝版型 id（`cover-01`、`chapter-01`、
  `git-03`…）。內容**全走 frontmatter YAML props**（md body 不用）；主標 prop 一律
  `heading`（**不可用 `title`** — 第一張 slide 會撞 deck headmatter）；變體用 props
  切（`brand: github|ai` 等）。各 layout 的 props 契約看檔內 `defineProps` 型別，
  活範例看 `apps/templates/slides.md`。
- `components/` — 共用 chrome：`Eyebrow`（左上 MODULE · XXX，deck 級 `module:`
  headmatter 設定、逐頁可覆寫）、`PageNo`（右下頁碼，`$page` 自動零填）、`MdInline`
  （渲染 YAML 字串內的 `**粗體**`／`` `code` ``／`\n` 換行）；參數化圖形元件四家族
  `Git*`／`Gh*`／`Ai*`／`Sh*`（語意資料進、版面自動排，風格數值照設計稿）；`WeekBadge`。
- `styles/` — design tokens（`:root` vars）＋ Google Fonts；深色模式＝一個
  `html.dark` 區塊重映射中性 token（Slidev 深色切換即全 deck 翻轉）。
- `setup/` — 多 deck 子路徑部署的 base-doubling 修正＋ GA4 追蹤（僅 production）。
- `constants/` — `environments.ts`（VITE_ENV 判定）、`release-schedule.ts`（各週開放時間）。

## 寫 layout／元件的鐵律

1. **深色安全**：中性色一律引用 token（`--ink`／`--paper`…），深色會自動翻轉；
   「白字於品牌色上」這類不該翻的點釘 `#FFFFFF` 字面值（見 `image-03` 的 AFTER 標籤）。
   若日後加滿版品牌底 layout，需在根節點釘 `--paper` 避免白字被深色翻掉。
2. **SVG 陷阱**：不可寫 `<text font-size="22">` 這類 presentation attribute —
   Slidev 的 UnoCSS attributify 會攔截並產生 `[font-size~="22"] { font-size: 5.5rem }`。
   font-size／font-weight／letter-spacing 一律走 CSS（scoped class 或 `style=""`）。
3. 樣式進 `<style scoped>`，數值不「優化」；狀態差異用 `:class` modifier，
   末列去底線用 `:not(:last-child)`。
