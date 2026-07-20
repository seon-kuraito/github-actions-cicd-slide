# scripts/

Local dev tooling. `build.mjs` is the deploy assembler (run by `pnpm build`, see
root CLAUDE.md「Build & deploy」). The two tools below support authoring decks and
are **not** part of the pnpm workspace (which is only `apps/*` + `shared`), so
`pnpm install` and CI never touch their dependencies.

## `shot.mjs` — visual-verify screenshots

Screenshots deck slides in light/dark so a layout/content change can be checked
by looking, not by reading code. Starts a throwaway dev server for the deck,
shoots the pages, tears it down.

```sh
pnpm shot <deck> <pages> [--mode both|light|dark] [--out dir] [--port n] [--scale n]
# or: node scripts/shot.mjs <deck> <pages> …

pnpm shot week-1 128            # p128, light + dark → scripts/.shots/
pnpm shot week-1 128,185 --mode dark
```

- `<deck>` = `week-1` … `week-6`, `onboarding`, `templates`; `<pages>` = comma-separated page numbers.
- Output PNGs land in `scripts/.shots/` (gitignored) as `<deck>-p<page>-<mode>.png`.
- Drives the **system Chrome** — no browser download. Override with `CHROME_PATH=/path/to/chrome`.
- First run installs `puppeteer-core` into `scripts/node_modules/` on demand (gitignored;
  declared in `scripts/package.json`, kept out of the workspace/lockfile/CI on purpose).

## `gen-qr.py` — brand-styled QR codes

Generates the QR PNGs used on the decks' `link-01` pages, in the locked style
(ECC L, box_size 24, border 3, `#37352F` on white), then re-decodes the PNG to
assert it encodes the intended URL.

```sh
pnpm qr <url> <output.png>
# or: uv run scripts/gen-qr.py <url> <output.png>

pnpm qr https://github.com/seon-kuraito/github-actions-cicd-course/tree/main/W1/templates/skill-dashboard \
        apps/week-1/public/qr-dashboard.png
```

- Runs via **uv** with PEP 723 inline dependencies — no venv or install step.
- Only the payload URL changes between QR pages; the visual style stays constant.
