# slidev-addon-shared

六份 deck 共用的 slidev addon：共用元件 / 樣式 / setup。

Slidev 會自動載入此套件根目錄下的 `components/`、`layouts/`、`setup/`、`styles/`、
`global-*.vue` 等慣例目錄，無需額外設定。

deck 端引用方式（slides.md frontmatter）：

```yaml
addons:
  - slidev-addon-shared
```

目前內容為骨架（`components/WeekBadge.vue`），完整需求見 `specs/shared-addon.md`。
