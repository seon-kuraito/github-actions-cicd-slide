---
theme: default
canvasWidth: 1920
title: Week 1
titleTemplate: "%s"
favicon: /favicon.svg
module: ORIGIN
seoMeta:
  ogTitle: "GitHub Actions CI/CD 自動化與 AI 協作實務班 · 第一週"
  ogDescription: "從零開始學 Git 版本控制、終端機、VS Code、GitHub 與 GitHub Pages，完成第一個 commit、push 遠端並親手部署技能儀表板，體驗作品擁有公開網址的那一刻。"
  twitterCard: "summary_large_image"
addons:
  - slidev-addon-shared
layout: cover-01
display: GitHub Actions CI/CD
heading: 自動化與 AI 協作實務班
date: 2026.07.18 · 第一週
---

<!-- p2 -->
---
layout: link-01
image: /qr-slides.png
heading: 本週簡報
href: "https://github-actions-cicd-slide.seonkuraito.com/week-1"
---

<!-- p3 -->
---
layout: intro-01
heading: 上午目標
items:
  - { no: P1, heading: 課程導覽, desc: 認識課程產出與六週路線 }
  - { no: P2, heading: Git 與環境準備, desc: 建立版本控制概念，完成 Git、終端機與 VS Code 設定 }
  - { no: P3, heading: Git 身分與第一個 commit, desc: 設定作者署名，開始用 Git 追蹤，提交第一個版本 }
---

<!-- p4 -->
---
layout: chapter-01
no: "01"
slug: git/time-machine
heading: "Git：\n專案的「時光機」"
brand: git
---

<!-- p5 -->
---
layout: content-01
heading: Git：分散式版本控制系統
body: Git 會替專案留下==版本快照==，讓重要變更都有回得去的時間點。作為分散式版本控制系統，每一份 Git 專案在本機都有完整歷史，就算離線也能繼續記錄。
note: "版本控制（version control）就是管理檔案如何隨時間改變，Git 則是目前最常見的一套工具。"
---

<!-- p6 -->
---
layout: qa-01
label: git/time-machine
heading: 你用過 Google Doc 的「版本紀錄」嗎？它能做什麼？
sub: 先想 10 秒——你有沒有被自己坑過？
---

<!-- p7 -->
---
layout: qa-02
label: git/time-machine
heading: 改壞或刪錯內容的時候，它能帶你回到先前的狀態
sub: 這正是 Git 要為你的程式碼做的事
---

<!-- p8 -->
---
layout: content-01
heading: 用 Google Doc 想像版本控制
body: 想像你和同學一起改一份 Google Doc：有人刪錯一大段內容、有人把句子改歪了，你不用靠檔名猜哪份才是最新版，只要打開==版本紀錄==，就能看見誰在什麼時候改了哪裡，也能隨時回到出事前。
note: "Google Doc 會自動留下紀錄；Git 則是由你決定什麼時候留下紀錄，保存這一刻的專案狀態。"
---

<!-- p9 -->
---
layout: content-01
heading: 為什麼需要版本控制？
body: "`report_final.doc`、`report_final_v2.doc`、`report_final_final_v4.doc`⋯⋯\n每天複製一份資料夾、不小心改壞又找不到舊版、兩個人各改一份==卻不知道怎麼合在一起==。這些混亂，都是版本控制要處理的問題。"
note: "版本控制把保存、比較與回復交給系統處理，不再靠檔名和記憶力硬撐。"
---

<!-- p10 -->
---
layout: content-02
heading: 版本控制在解決什麼？
items:
  - { text: "**快照**： 在重要時間點保存專案狀態，變更過程都能追蹤" }
  - { text: "**回溯**： 出問題時回到指定版本，改壞了也能復原" }
  - { text: "**協作**： 讓多人改動可以被比對、整理，再安全合併" }
  - { text: "重點不是多存幾份檔案，而是讓每次變更都有清楚紀錄", secondary: true }
---

<!-- p11 -->
---
layout: lab-02
heading: 【01】章節實作
command: '$ hands-on'
sub: '開啟 Git 官網，點擊按鈕進入下載頁面'
---

<!-- p12 -->
---
layout: lab-02
heading: 【01】章節補充
command: '# optional'
sub: 先多看一點 Git 的背景，理解它為什麼適合多人專案
---

<!-- p13 -->
---
layout: content-01
heading: Git 的誕生
body: 2005 年，Linux 之父 Linus Torvalds 因為原本使用的版控工具授權出問題，花了大約兩週寫出 Git，用來管理 Linux 核心這種==大型、多人協作的專案==。後來它也成了全世界工程師最常用的工具之一。
note: "Git 一開始就為大型協作而生，所以特別重視速度、離線能力與分散式工作。"
---

<!-- p14 -->
---
layout: image-02
heading: 集中式（SVN 時代）
sub: 只有一台中央伺服器保存歷史，斷線就不能提交、伺服器掛了全隊停擺
image: /svn-light.svg
imageDark: /svn-dark.svg
alt: 集中式版本控制示意圖：所有工作副本連向同一台中央伺服器
---

<!-- p15 -->
---
layout: image-02
heading: 分散式（Git）
sub: 每個人本機都有一份完整的歷史，離線照常記錄，遠端只是拿來同步的一份
image: /git-light.svg
imageDark: /git-dark.svg
alt: 分散式版本控制示意圖：每台本機都有完整歷史，遠端只負責同步
---

<!-- p16 -->
---
layout: chapter-01
no: "02"
slug: git/install
heading: "Git：\n完成安裝與驗證"
brand: git
---

<!-- p17 -->
---
layout: image-01
slug: git/setup
heading: 安裝 Git
body: 到 Git 官方下載頁，選擇電腦的作業系統，下載對應的安裝方式。macOS 可以下載安裝檔，或用 Homebrew 執行 `brew install git`；Windows 執行安裝檔時，編輯器那頁保持預設的 Vim 即可。
image: /git-website-light.png
imageDark: /git-website-dark.png
imageAlign: top
alt: Git 官方網站下載頁
---

<!-- p18 -->
---
layout: shell-term
heading: git --version：確認 Git 版本
file: git --version
lines:
  - { type: comment, text: "# 確認 Git 是否安裝成功" }
  - { type: command, text: git --version }
  - { type: output, text: git version 2.55.0 }
  - { type: comment, text: "# git -v 是短寫法，看到版本號就代表可用" }
  - { type: command, text: git -v }
  - { type: output, text: git version 2.55.0 }
win:
  - { type: comment, text: "# Windows 版的版本號通常會多帶 .windows.N" }
  - { type: command, text: git --version }
  - { type: output, text: git version 2.55.0.windows.2 }
  - { type: comment, text: "# git -v 是短寫法，看到版本號就代表可用" }
  - { type: command, text: git -v }
  - { type: output, text: git version 2.55.0.windows.2 }
---

<!-- p19 -->
---
layout: qa-01
label: terminal/text-command
heading: 為什麼工程師偏好用終端機，而不是一路點按鈕？
sub: 想想「點按鈕」這個動作，事後留得下什麼？
---

<!-- p20 -->
---
layout: qa-02
label: terminal/text-command
heading: 因為指令是文字——能複製、重複、自動化，也能交給 AI
sub: 能被記錄下來的操作，才容易重複使用與「自動化」
---

<!-- p21 -->
---
layout: data-01
heading: macOS 的終端機
cols:
  - label: built-in/
    heading: 終端機（Terminal）
    desc: macOS 內建工具，用聚焦搜尋終端機或 Terminal 就能開啟，不需要另外安裝。
    icon: /macos-terminal.svg
    iconSize: 110
  - label: recommended/
    heading: iTerm2
    desc: 常見的進階選擇，分割視窗、搜尋、複製貼上與外觀設定更彈性，想升級再安裝即可。
    active: true
    icon: /macos-iterm2.svg
    iconSize: 110
---

<!-- p22 -->
---
layout: data-01
heading: Windows 的終端機
cols:
  - label: built-in/
    heading: 命令提示字元（cmd）
    desc: Windows 早期就有的主控台，基本指令能執行，但分頁、字體與複製貼上體驗較有限。
    icon: /windows-cmd.svg
    iconSize: 110
  - label: recommended/
    heading: Windows Terminal
    desc: Windows 11 通常已內建；Windows 10 可從 Microsoft Store 安裝。
    active: true
    icon: /windows-terminal.svg
    iconSize: 110
---

<!-- p23 -->
---
layout: content-01
heading: Windows 先調整 PowerShell 執行原則
body: "Windows 的 PowerShell 預設比較保守，可能會擋下本機要執行的 `.ps1` 指令碼。先使用==系統管理員身分==開啟 PowerShell，執行 `Set-ExecutionPolicy RemoteSigned`；出現確認訊息時按 `A`（全部皆是），再重開終端機。"
note: "RemoteSigned 允許本機指令碼執行，從網路下載的指令碼仍需要可信任簽章。"
---

<!-- p24 -->
---
layout: lab-02
heading: 【02】章節實作
command: '$ hands-on'
sub: '執行 `git --version`，看到版本號就代表 Git 已經安裝成功'
---

<!-- p25 -->
---
layout: lab-02
heading: 【02】章節補充
command: '# optional'
sub: 裝不起來時，通常先從系統環境與權限設定排查
---

<!-- p26 -->
---
layout: content-01
heading: git 指令找不到？
body: 輸入 `git --version` 如果出現 command not found，或 Windows 顯示「不是內部或外部命令」，多半是安裝後還沒重開終端機，或==安裝時沒有把 Git 加進 PATH==，建議關掉終端機重開。若還是不行，再重跑安裝並確認 PATH 選項。
note: "排查順序很簡單：先重開終端機，再檢查安裝與 PATH。"
---

<!-- p27 -->
---
layout: content-01
heading: macOS 安裝常見狀況
body: 第一次執行 `git` 時，如果 macOS 跳出「需要安裝命令列開發者工具」，按「安裝」並等它完成即可，Git 會一起補上。若你習慣用 Homebrew 安裝，`brew install git` 通常會裝到==比系統內建更新==的版本。
note: "看到系統提示先別急著關掉，macOS 常用這個方式補齊開發工具。"
---

<!-- p28 -->
---
layout: content-01
heading: Windows 安裝常見狀況
body: Windows 的 Git 安裝精靈選項很多，初學者先一路使用預設值即可。遇到「Choosing the default editor」那頁，==請選擇 Vim==（平常不太會直接碰到它），之後記得重開終端機，`git` 才會被系統認得。
note: "這裡選 Vim 是為了沿用安裝預設值，真正日常寫程式會使用 VS Code。"
---

<!-- p29 -->
---
layout: chapter-01
no: "03"
slug: terminal/control-panel
heading: "終端機：\n下達指令的「控制台」"
brand: git
---

<!-- p30 -->
---
layout: content-01
heading: 終端機是什麼？
body: 終端機是一個用==文字指令操作電腦==的視窗，也就是 CLI（Command Line Interface）。GUI（Graphical User Interface）靠滑鼠點按鈕，CLI 靠鍵盤輸入指令；今天的 Git、之後的開發工具與 AI 工具，都會大量在這裡操作。
note: "終端機只負責接收指令，真正解讀指令的是背後的 shell（例如 Windows 的 PowerShell、macOS 的 zsh）。"
---

<!-- p31 -->
---
layout: shell-term
heading: pwd：確認目前位置
file: pwd
lines:
  - { type: comment, text: "# 顯示終端機目前所在的資料夾" }
  - { type: comment, text: "# pwd 是 print working directory 的縮寫" }
  - { type: command, text: pwd }
  - { type: output, text: /Users/you/projects/my-site }
win:
  - { type: comment, text: "# Windows 路徑從磁碟機代號 C:\\ 起算" }
  - { type: comment, text: "# pwd 是 print working directory 的縮寫" }
  - { type: command, text: pwd }
  - { type: output, text: 'C:\Users\you\projects\my-site' }
---

<!-- p32 -->
---
layout: shell-term
heading: ls：查看資料夾內容
file: ls
lines:
  - { type: comment, text: "# 列出目前資料夾裡的檔案與資料夾" }
  - { type: command, text: ls }
  - { type: output, text: "index.html  images" }
win:
  - { type: comment, text: "# ls 是 Get-ChildItem 的別名，輸出會是表格" }
  - { type: command, text: ls }
  - { type: output, text: "LastWriteTime      Length Name" }
  - { type: output, text: "7/18/2026 10:30      1234 index.html" }
  - { type: output, text: "7/18/2026 10:35           images" }
  - { type: comment, text: "# Length 空白的項目，就是資料夾" }
---

<!-- p33 -->
---
layout: shell-term
heading: cd：切換所在資料夾
file: cd
lines:
  - { type: comment, text: "# 切換到目前位置底下的 images 資料夾" }
  - { type: command, text: cd images }
  - { type: command, text: pwd }
  - { type: output, text: /Users/you/projects/my-site/images }
win:
  - { type: comment, text: "# 切換到目前位置底下的 images 資料夾" }
  - { type: command, text: cd images }
  - { type: command, text: pwd }
  - { type: output, text: 'C:\Users\you\projects\my-site\images' }
---

<!-- p34 -->
---
layout: shell-term
heading: mkdir：新增資料夾
file: mkdir
lines:
  - { type: comment, text: "# 在目前位置建立一個新資料夾" }
  - { type: command, text: mkdir my-project }
  - { type: command, text: ls }
  - { type: output, text: my-project }
win:
  - { type: comment, text: "# PowerShell 的 mkdir 會直接印出建立結果" }
  - { type: command, text: mkdir my-project }
  - { type: output, text: "LastWriteTime      Length Name" }
  - { type: output, text: "7/18/2026 10:40           my-project" }
---

<!-- p35 -->
---
layout: qa-01
label: terminal/path
heading: 相較於內建指令，為什麼輸入 git，終端機就知道要執行誰？
sub: 每個指令背後，都有一套尋找規則
---

<!-- p36 -->
---
layout: qa-02
label: terminal/path
heading: 靠 PATH——系統找得到程式，指令才能執行
sub: 系統會沿著一份清單，尋找對應的程式
---

<!-- p37 -->
---
layout: content-01
heading: PATH：系統尋找程式的清單
body: "當你在終端機輸入 `git`，系統會沿著 ==PATH 記錄的位置==逐一尋找；找到名為 `git` 的程式，就把它執行起來。安裝 Git 時，它會把自己的位置加入 PATH。"
note: "指令找不到時，不一定是工具壞了；常見原因是 PATH 還沒設定好。"
---

<!-- p38 -->
---
layout: content-01
heading: 指令一定都靠 PATH 嗎？
body: 像 `mkdir` 這類常用指令，不一定只靠 PATH；它可能是 shell 內建、==別名（alias）==，或 PATH 找到的外部程式，終端機會照自己的規則決定執行誰。
note: "先知道有內建指令、別名與 PATH 三種來源，之後排查「指令找不到」會更有方向。"
---

<!-- p39 -->
---
layout: lab-02
heading: 【03】章節實作
command: '$ hands-on'
sub: '用 `mkdir hello-git` 建立專案資料夾，再用 pwd／ls 確認位置，最後 cd 進去'
---

<!-- p40 -->
---
layout: lab-02
heading: 【03】章節補充
command: '# optional'
sub: 多認識幾個常用指令，之後使用終端機會更順手
---

<!-- p41 -->
---
layout: shell-term
heading: ls -a：連隱藏檔一起看
file: ls -a / ls -Force
lines:
  - { type: comment, text: "# 加上 -a，連 . 開頭的隱藏檔也一起列出" }
  - { type: comment, text: "# .git、.gitignore 這類設定檔平常會被藏起來" }
  - { type: command, text: ls -a }
  - { type: output, text: ".git  .gitignore  index.html  images" }
win:
  - { type: comment, text: "# PowerShell 改用 -Force 顯示隱藏檔" }
  - { type: comment, text: "# ls -a 會對應到多個參數而報錯" }
  - { type: command, text: ls -Force }
  - { type: output, text: "LastWriteTime      Length Name" }
  - { type: output, text: "7/18/2026 10:30           .git" }
  - { type: output, text: "7/18/2026 10:35        45 .gitignore" }
  - { type: output, text: "7/18/2026 10:40      1234 index.html" }
---

<!-- p42 -->
---
layout: shell-term
heading: ls -l：看檔案的詳細資訊
file: ls -l / ls
lines:
  - { type: comment, text: "# 加上 -l，用長格式列出權限、大小與日期" }
  - { type: command, text: ls -l }
  - { type: output, text: "-rw-r--r--  1 you  1234  7/18  index.html" }
  - { type: output, text: "drwxr-xr-x  4 you   128  7/18  images" }
  - { type: comment, text: "# 開頭 d 是資料夾，- 是檔案；-la 可加上隱藏檔" }
win:
  - { type: comment, text: "# PowerShell 的 ls 預設就是長格式" }
  - { type: command, text: ls }
  - { type: output, text: "LastWriteTime      Length Name" }
  - { type: output, text: "7/18/2026 10:30      1234 index.html" }
  - { type: output, text: "7/18/2026 10:35           images" }
  - { type: comment, text: "# 不用加 -l，否則會被當成 -LiteralPath" }
---

<!-- p43 -->
---
layout: shell-term
heading: cd ..：回到上一層
file: cd ..
lines:
  - { type: comment, text: "# .. 代表上一層資料夾" }
  - { type: command, text: cd .. }
  - { type: command, text: pwd }
  - { type: output, text: /Users/you/projects/my-site }
win:
  - { type: comment, text: "# .. 代表上一層資料夾" }
  - { type: command, text: cd .. }
  - { type: command, text: pwd }
  - { type: output, text: 'C:\Users\you\projects\my-site' }
---

<!-- p44 -->
---
layout: shell-term
heading: cd -：切回上一個資料夾
file: cd -
lines:
  - { type: comment, text: "# 切到別的資料夾後，用 cd - 快速回到上一個位置" }
  - { type: command, text: cd - }
  - { type: command, text: pwd }
  - { type: output, text: /Users/you/projects/my-site }
  - { type: comment, text: "# 再執行一次 cd -，會在兩個位置之間來回切換" }
win:
  - { type: comment, text: "# Windows PowerShell 5.1 沒有 cd -" }
  - { type: command, text: 'cd C:\Users\you\projects\my-site' }
  - { type: command, text: pwd }
  - { type: output, text: 'C:\Users\you\projects\my-site' }
  - { type: comment, text: "# PowerShell 6.2 之後才支援 cd -" }
  - { type: comment, text: "# 5.1 想切回去時，請直接輸入目標路徑" }
---

<!-- p45 -->
---
layout: shell-term
heading: cd ~：回到使用者目錄
file: cd ~
lines:
  - { type: comment, text: "# ~ 代表你的使用者目錄，也是個人檔案的起點" }
  - { type: command, text: cd ~ }
  - { type: command, text: pwd }
  - { type: output, text: /Users/you }
  - { type: comment, text: "# macOS／Linux 只輸入 cd，也會回到使用者目錄" }
win:
  - { type: comment, text: "# ~ 在 PowerShell 會展開成 C:\\Users\\you" }
  - { type: command, text: cd ~ }
  - { type: command, text: pwd }
  - { type: output, text: 'C:\Users\you' }
  - { type: comment, text: "# PowerShell 要回使用者目錄，請輸入 cd ~" }
---

<!-- p46 -->
---
layout: shell-dir
heading: cd＋滑鼠拖曳資料夾
command: cd
panelMeta: /Users/you/projects/my-site
path: ["/", "Users", "you", "projects", "my-site"]
tree:
  - name: you/
    children:
      - name: projects/
        children:
          - name: my-site/
            highlight: true
            badge: 你在這
terminal:
  - { type: comment, text: "# 先輸入 cd，再留一個空格" }
  - { type: cmd, text: cd /Users/you/projects/my-site }
  - { type: comment, text: "# 用滑鼠把資料夾拖進終端機，路徑就會自動貼上" }
  - { type: cmd, text: pwd }
  - { type: output, text: /Users/you/projects/my-site }
  - { type: comment, text: "# 確認路徑沒錯，按 Enter 就切換進去", accent: true }
---

<!-- p47 -->
---
layout: shell-term
heading: open / explorer：打開目前資料夾
file: open . / explorer .
lines:
  - { type: comment, text: "# 用 Finder 打開目前資料夾" }
  - { type: comment, text: "# 「.」代表你現在所在的資料夾" }
  - { type: command, text: open . }
win:
  - { type: comment, text: "# 用檔案總管打開目前資料夾" }
  - { type: comment, text: "# 「.」代表你現在所在的資料夾" }
  - { type: command, text: explorer . }
---

<!-- p48 -->
---
layout: shell-term
heading: mkdir -p：一次建立多層資料夾
file: mkdir -p / mkdir
lines:
  - { type: comment, text: "# 加上 -p，中間缺的上層資料夾會自動補上" }
  - { type: command, text: mkdir -p src/components/ui }
  - { type: command, text: ls src/components }
  - { type: output, text: ui }
win:
  - { type: comment, text: "# PowerShell 的 mkdir 會自動補上中間資料夾" }
  - { type: command, text: mkdir src/components/ui }
  - { type: command, text: ls src/components }
  - { type: output, text: "LastWriteTime      Length Name" }
  - { type: output, text: "7/18/2026 10:40           ui" }
---

<!-- p49 -->
---
layout: shell-term
heading: touch：新增空白檔案
file: touch / ni
lines:
  - { type: comment, text: "# 建立一個沒有內容的新檔案" }
  - { type: command, text: touch index.html }
  - { type: command, text: ls }
  - { type: output, text: index.html }
  - { type: comment, text: "# 檔案已存在時，touch 只更新時間、不清空內容" }
win:
  - { type: comment, text: "# ni 是 New-Item 的別名，用來建立新項目" }
  - { type: command, text: ni index.html }
  - { type: command, text: ls }
  - { type: output, text: "LastWriteTime      Length Name" }
  - { type: output, text: "7/18/2026 10:30         0 index.html" }
  - { type: comment, text: "# 檔案已存在時會報錯，不會覆蓋內容" }
---

<!-- p50 -->
---
layout: shell-term
heading: cp：複製一份檔案
file: cp
lines:
  - { type: comment, text: "# cp 後面接來源與目的地，就能複製檔案" }
  - { type: command, text: cp index.html backup.html }
  - { type: command, text: ls }
  - { type: output, text: "backup.html  index.html" }
  - { type: comment, text: "# 原本的 index.html 仍保留，backup.html 是複本" }
win:
  - { type: comment, text: "# cp 是 Copy-Item 的別名，用法和 macOS 類似" }
  - { type: command, text: cp index.html backup.html }
  - { type: command, text: ls }
  - { type: output, text: "LastWriteTime      Length Name" }
  - { type: output, text: "7/18/2026 10:50      1234 backup.html" }
  - { type: output, text: "7/18/2026 10:30      1234 index.html" }
---

<!-- p51 -->
---
layout: shell-term
heading: mv：移動或重新命名
file: mv
lines:
  - { type: comment, text: "# 留在同一層並換名稱，就是重新命名" }
  - { type: command, text: mv backup.html old.html }
  - { type: comment, text: "# 目的地換成資料夾，就是把檔案移進去" }
  - { type: command, text: mv old.html images/ }
  - { type: comment, text: "# mv 可以移動位置，也可以重新命名" }
win:
  - { type: comment, text: "# mv 是 Move-Item 的別名，用法和 macOS 類似" }
  - { type: command, text: mv backup.html old.html }
  - { type: comment, text: "# 目的地換成資料夾，就是把檔案移進去" }
  - { type: command, text: mv old.html images/ }
---

<!-- p52 -->
---
layout: shell-term
heading: cat：查看檔案內容
file: cat
lines:
  - { type: comment, text: "# 不打開編輯器，也能快速查看檔案內容" }
  - { type: command, text: cat index.html }
  - { type: output, text: "<h1>Hello, Git!</h1>" }
  - { type: comment, text: "# 內容很長時可改用 less 分頁查看，按 q 離開" }
win:
  - { type: comment, text: "# cat 是 Get-Content 的別名，用法和 macOS 類似" }
  - { type: command, text: cat index.html }
  - { type: output, text: "<h1>Hello, Git!</h1>" }
  - { type: comment, text: "# PowerShell 預設沒有 less，分頁可接 more" }
---

<!-- p53 -->
---
layout: shell-term
heading: rm：移除檔案
file: rm
lines:
  - { type: comment, text: "# 移除指定的單一檔案" }
  - { type: command, text: rm draft.txt }
  - { type: comment, text: "# rm 不會進垃圾桶，按 Enter 前先看清楚" }
win:
  - { type: comment, text: "# rm 是 Remove-Item 的別名，用法和 macOS 類似" }
  - { type: command, text: rm draft.txt }
  - { type: comment, text: "# 一樣不會進資源回收筒，刪掉就沒了" }
---

<!-- p54 -->
---
layout: shell-term
heading: rm -r：移除資料夾
file: rm -r
lines:
  - { type: comment, text: "# 資料夾裡有內容時，要加 -r 才能整包移除" }
  - { type: command, text: rm -r old-folder }
  - { type: comment, text: "# -r 會處理整個資料夾，執行前務必確認路徑" }
win:
  - { type: comment, text: "# -r 在 PowerShell 裡是 -Recurse 的縮寫" }
  - { type: command, text: rm -r old-folder }
  - { type: comment, text: "# 一樣不會再確認一次，路徑先看清楚" }
---

<!-- p55 -->
---
layout: chapter-01
no: "04"
slug: vscode/workbench
heading: "VS Code：\n撰寫程式的「工作台」"
brand: git
---

<!-- p56 -->
---
layout: qa-01
label: vscode/workbench
heading: 只用記事本寫程式，會少了哪些工作上的幫手？
sub: 專案規模一大，問題就不只是在檔案裡打字
---

<!-- p57 -->
---
layout: qa-02
label: vscode/workbench
heading: VS Code 把檔案、終端機、Git 與 AI 放在同一個工作台
sub: 今天先用它開啟資料夾，之後再把更多工具接進來
---

<!-- p58 -->
---
layout: image-01
slug: vscode/setup
heading: 安裝 VS Code
body: 到 VS Code 官方下載頁，網站會自動判斷電腦的作業系統，提供對應的下載按鈕。macOS 下載後拖進「應用程式」；Windows 執行安裝檔時，建議勾選「加入 PATH」。
image: /vscode-website-light.png
imageDark: /vscode-website-dark.png
imageAlign: top
alt: VS Code 官方網站下載頁
---

<!-- p59 -->
---
layout: content-01
heading: 使用 VS Code 開啟資料夾
body: "「File → Open Folder」或把資料夾拖進 VS Code，選擇剛剛建立的 `hello-git`，VS Code 左側的「檔案總管」就會列出裡面的檔案——它和 Windows 的檔案總管同名，但只顯示你開啟的這個資料夾。往後我們都以==「開啟一個資料夾」為單位==在工作。"
note: "VS Code 不是只開單一檔案，而是以專案資料夾作為工作範圍。"
---

<!-- p60 -->
---
layout: lab-02
heading: 【04】章節實作
command: '$ hands-on'
sub: '從「File → Open Folder」選擇剛建立的專案資料夾，左側檔案總管出現資料夾名稱就代表成功'
---

<!-- p61 -->
---
layout: lab-02
heading: 【04】章節補充
command: '# optional'
sub: 把 VS Code 和終端機接起來，工作時就少切幾個視窗
---

<!-- p62 -->
---
layout: content-01
heading: 使用 VS Code 開啟目前資料夾
body: "macOS 在 VS Code 按下 cmd + shift + P 開啟命令面板，選擇「在 PATH 中安裝 'code' 命令」；Windows 則是在安裝時勾選「加入 PATH」。之後在終端機輸入 `code .`，就能用 VS Code ==直接開啟目前資料夾==。"
note: "code . 的 . 代表目前資料夾；先站到專案位置，再開 VS Code。"
---

<!-- p63 -->
---
layout: content-01
heading: 在 VS Code 裡開啟終端機
body: "按下 Ctrl / Control + `（反引號），或從上方選單選擇「終端機 → 新增終端」，VS Code 會在底部開啟一個終端機。它會直接位於==目前專案資料夾==，編輯器與終端機在同一個視窗，就不用再切來切去。"
note: "之後執行 Git 指令時，就能一邊看檔案，一邊確認狀態。"
---

<!-- p64 -->
---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 11:00"
---

<!-- p65 -->
---
layout: chapter-01
no: "05"
slug: git/identity
heading: "Git 身分：\n留下作者署名"
brand: git
---

<!-- p66 -->
---
layout: qa-01
label: git/identity
heading: Git 為什麼要先知道這份作品是誰在編輯？
sub: 接下來留下版本時，Git 會把相關資訊一起記下來
---

<!-- p67 -->
---
layout: qa-02
label: git/identity
heading: 因為每一個版本，都需要留下清楚的作者署名
sub: Git 會用這組名字與 email 標記 commit，這和 GitHub 登入是兩件事
---

<!-- p68 -->
---
layout: content-01
heading: git config：告訴 Git 你是誰
body: 每一個 commit 都會記下「誰在什麼時間做了這次變更」。開始記錄歷史之前，先用 `git config` 設定你的名字與 email，讓之後的版本紀錄都有==正確的作者署名==。
note: "Git 身分會寫進 commit 歷史，和 GitHub 帳號登入是兩件事。"
---

<!-- p69 -->
---
layout: git-term
heading: git config --global：設定名字與 email
command: git config --global
terminal:
  - { kind: comment, text: "# 先告訴 Git 之後的 commit 要寫上誰的名字" }
  - { kind: cmd, text: "git config --global user.name \"Your Name\"" }
  - { kind: cmd, text: "git config --global user.email \"you@example.com\"" }
  - { kind: comment, text: "# --global 代表這台電腦之後的 Git 專案都會套用這組署名" }
  - { kind: note, text: "# 這組資料會寫進 commit 歷史，作為每個版本的作者資訊" }
---

<!-- p70 -->
---
layout: git-term
heading: git config --list：確認目前設定
command: git config --list
terminal:
  - { kind: comment, text: "# 列出目前 Git 讀到的設定" }
  - { kind: cmd, text: "git config --list" }
  - { kind: dim, text: "user.name=Your Name" }
  - { kind: dim, text: "user.email=you@example.com" }
  - { kind: comment, text: "# 畫面可能還會出現其他設定，先確認這兩行有出現就好" }
  - { kind: comment, text: "# 輸入 :q 即可退出 Vim" }
  - { kind: note, text: "# 如果找不到 user.name 或 user.email，回上一頁重新設定一次" }
---

<!-- p71 -->
---
layout: qa-01
label: git/identity
heading: 公司專案和個人專案需要不同 email，該怎麼設定？
sub: 全部專案都套用同一組身分，真的合適嗎？
---

<!-- p72 -->
---
layout: qa-02
label: git/identity
heading: 在專案資料夾內設定一次，就能覆蓋全域身分
sub: 不加 --global 的 git config，只會影響目前這個專案
---

<!-- p73 -->
---
layout: content-01
heading: 全域身分是預設值
body: "`--global` 適合放平時最常用的 name 和 email，讓新專案一開始就有==預設作者==。若公司或特定專案需要不同身分，就進到那個專案資料夾內另外設定一次。"
note: "Git 會先讀專案內設定，沒有設定才回頭使用全域身分。"
---

<!-- p74 -->
---
layout: lab-02
heading: 【05】章節實作
command: '$ hands-on'
sub: '執行 `git config --list`，確認 user.name 和 user.email 已經寫進 Git 設定'
---

<!-- p75 -->
---
layout: lab-02
heading: 【05】章節補充
command: '# optional'
sub: 身分設定其實寫在檔案裡，也可以依專案分開管理
---

<!-- p76 -->
---
layout: content-01
heading: Git 設定存在哪裡？
body: "剛剛用設定的名字與 email，其實會被 Git 寫進一個==純文字檔== `.gitconfig`。macOS 通常在 `~/.gitconfig`；Windows 則是在 `C:\\Users\\you\\.gitconfig`。用 VS Code 打開它，就能看到剛剛留下的設定。"
note: "先知道 git config 背後是在寫設定檔，之後設定跑掉時，就知道可以從哪裡查起。"
---

<!-- p77 -->
---
layout: content-01
heading: 為單一專案改身分
body: "前面加上 `--global`，代表這台電腦的 Git 專案預設都套用同一組身分；如果==只想改目前這個專案==，就不要加 `--global`。這樣公司專案可以使用工作 email，個人專案仍然沿用自己的設定。"
note: "先分清楚作用範圍：有 --global 是全域設定，沒有 --global 是專案設定。"
---

<!-- p78 -->
---
layout: chapter-01
no: "06"
slug: git/repo-init
heading: "儲存庫初始化：\n開始用 Git 追蹤"
brand: git
---

<!-- p79 -->
---
layout: git-files
heading: git init：讓資料夾開始被追蹤
command: git init
panelMeta: hello-git/
entries:
  - { name: .git/, tag: 隱藏 }
terminal:
  - { type: comment, text: "# 讓 Git 接手記錄這個資料夾的版本" }
  - { type: cmd, text: git init }
  - { type: output, text: "Initialized empty Git repository in /Users/you/hello-git/.git/" }
  - { type: comment, text: "# Git 會建立隱藏的 .git 資料夾，這裡就是版本紀錄存放的位置", accent: true }
---

<!-- p80 -->
---
layout: qa-01
label: git/repo-init
heading: 如果不小心刪掉 .git，這個專案會怎麼樣？
sub: 檔案還在，但 Git 還認得這裡的版本歷史嗎？
---

<!-- p81 -->
---
layout: qa-02
label: git/repo-init
heading: 檔案還在，但 Git 歷史會不見，資料夾會退回普通資料夾
sub: .git 是 Git 的核心資料夾，平常不用打開，更不要手動修改
---

<!-- p82 -->
---
layout: content-01
heading: .git 讓資料夾變成儲存庫
body: "普通資料夾加上 `.git`，Git 就能在這裡==保存版本紀錄==，這樣的資料夾就叫做「儲存庫」（repository，簡稱 repo）。既然這裡已經交給 Git 管理，下一步就可以用 `git status` 問它目前看到什麼。"
note: "repo 可以先理解成「被 Git 管理的專案資料夾」，想知道目前狀態就問 git status。"
---

<!-- p83 -->
---
layout: git-files
heading: git status：查詢目前狀態
command: git status
panelMeta: hello-git/
entries:
  - { name: .git/, tag: 隱藏 }
  - { name: index.html, status: new }
terminal:
  - { type: comment, text: "# 新增 index.html 後，先問 Git 目前看到什麼" }
  - { type: cmd, text: git status }
  - { type: output, text: "On branch master" }
  - { type: output, text: "No commits yet" }
  - { type: output, text: "Untracked files:" }
  - { type: output, text: "        index.html" }
  - { type: comment, text: "# Untracked 表示 Git 看到了這個檔案，但還沒有開始追蹤", accent: true }
---

<!-- p84 -->
---
layout: lab-02
heading: 【06】章節實作
command: '$ hands-on'
sub: '新增 index.html 後執行 `git status`，確認它出現在 Untracked files'
---

<!-- p85 -->
---
layout: lab-02
heading: 【06】章節補充
command: '# optional'
sub: 初始化後多出的 .git 很重要，先知道去哪裡找它，以及 init 錯資料夾時怎麼救援
---

<!-- p86 -->
---
layout: content-01
heading: git init 錯地方了？
body: 如果不小心在錯的資料夾（例如使用者目錄 `~`）執行了 `git init`，先停下來確認位置。接著找出那個資料夾裡隱藏的 `.git`，把它移除後，資料夾就會回到==沒有版本控制的狀態==。下次執行前，先用 `pwd` 看清楚自己在哪裡。
note: "救援重點是確認位置，然後只處理剛剛產生的 .git。"
---

<!-- p87 -->
---
layout: content-02
heading: 找出被隱藏的 .git 資料夾
items:
  - { text: "**macOS**：Finder 按 `cmd + shift + .` 顯示隱藏檔" }
  - { text: "**Windows**：檔案總管的「檢視」勾選「隱藏的項目」" }
  - { text: "**VS Code**：側邊欄看不到，多半是 `files.exclude` 把 `.git` 藏起來" }
  - { text: "看不到 .git 不代表 git init 失敗，先確認目前工具有沒有顯示隱藏檔", secondary: true }
---

<!-- p88 -->
---
layout: chapter-01
no: "07"
slug: git/commit
heading: "版本快照：\n完成第一個 commit"
brand: git
---

<!-- p89 -->
---
layout: git-areas
heading: 三層架構：檔案目前在哪裡
command: git status
meta: 工作目錄 → 暫存區 → 儲存庫
areas:
  - name: WORKING
    state: dashed
    items:
      - { flag: "??", flagTone: deep, text: index.html }
  - name: STAGING
    state: solid
    items:
      - { text: 尚無暫存, tone: dim }
  - name: REPOSITORY
    state: solid
    items:
      - { text: 尚無 commit, tone: dim }
# arrows 刻意不給：箭頭 SVG 由 areas 數量驅動（GitAreaFlow 的 v-if="i < areas.length - 1"），
# 不給 arrows 就是「有箭頭、沒標籤」——add／commit 的名字留給 p90／p91 各自登場。
# 三拍共用 index.html 的誕生旅程：p88 在工作目錄（本頁）→ p90 add 進暫存區 → p91 commit
# 成 a1b2c3d。active 標「檔案剛到達的層」，故本頁無 active（還在起點的虛線工作區）。
terminal:
  - { kind: comment, text: "# 剛寫好 index.html，先問問 Git 它看到什麼" }
  - { kind: cmd, text: "git status" }
  - { kind: dim, text: "No commits yet" }
  - { kind: out, text: "Untracked files:" }
  - { kind: dim, text: "        index.html" }
  - { kind: note, text: "# 它還在工作目錄、Git 尚未追蹤——正等著被 add" }
---

<!-- p90 -->
---
layout: content-02
heading: 用「拍團體照」記住三層架構
items:
  - { text: "**工作目錄**： 還在整理現場，檔案可能持續修改" }
  - { text: "**暫存區**： 先挑出這次要入鏡的變更，準備提交" }
  - { text: "**儲存庫**： 按下 `git commit` 後，保存成一張正式快照" }
  - { text: "流程就是先修改、再挑選、最後保存，讓每次 commit 都有清楚範圍", secondary: true }
---

<!-- p91 -->
---
layout: git-areas
heading: git add：放進暫存區（入鏡）
command: git add
meta: 工作目錄 → 暫存區 → 儲存庫
areas:
  - name: WORKING
    state: dashed
    items:
      - { flag: "??", flagTone: deep, text: index.html }
  - name: STAGING
    state: solid
    items:
      - { text: 尚無暫存, tone: dim }
  - name: REPOSITORY
    state: solid
    items:
      - { text: 尚無 commit, tone: dim }
arrows:
  - { label: add }
  - { label: commit }
areasOn:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: active
    items:
      - { flag: A, flagTone: ok, text: index.html, bold: true }
  - name: REPOSITORY
    state: solid
    items:
      - { text: 尚無 commit, tone: dim }
arrowsOn:
  - { label: add, active: true }
  - { label: commit }
areaToggle: { label: git add 之後, labelOn: 回到 git add 之前 }
terminal:
  - { kind: comment, text: "# 把 index.html 放進暫存區，表示這次想提交它" }
  - { kind: cmd, text: "git add index.html" }
  - { kind: cmd, text: "git status" }
  - { kind: out, text: "Changes to be committed:" }
  - { kind: dim, text: "        new file:   index.html" }
  - { kind: note, text: "# index.html 被放進暫存區，等待下一步 commit" }
---

<!-- p92 -->
---
layout: git-areas
heading: git commit：放進儲存庫（拍照）
command: git commit -m
meta: 工作目錄 → 暫存區 → 儲存庫
areas:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: active
    items:
      - { flag: A, flagTone: ok, text: index.html, bold: true }
  - name: REPOSITORY
    state: solid
    items:
      - { text: 尚無 commit, tone: dim }
arrows:
  - { label: add }
  - { label: commit }
areasOn:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: solid
    items:
      - { text: 尚無暫存, tone: dim }
  - name: REPOSITORY
    state: active
    items:
      - { flag: a1b2c3d, flagTone: brand, text: 新增首頁 }
arrowsOn:
  - { label: add }
  - { label: commit, active: true }
areaToggle: { label: git commit 之後, labelOn: 回到 git commit 之前 }
terminal:
  - { kind: comment, text: "# 把暫存區的內容保存成一個 commit，並附上訊息" }
  - { kind: cmd, text: "git commit -m \"新增首頁\"" }
  - { kind: dim, text: "[master (root-commit) a1b2c3d] 新增首頁" }
  - { kind: dim, text: " 1 file changed, 12 insertions(+)" }
  - { kind: note, text: "# index.html 被放進儲存庫，成為被保存的版本" }
---

<!-- p93 -->
---
layout: qa-01
label: git/staging
heading: commit 前，為什麼要先把變更放進暫存區？
sub: 每次存版本，都一定要把所有改動放進去嗎？
---

<!-- p94 -->
---
layout: qa-02
label: git/staging
heading: 暫存區讓你先挑選，哪些變更要進入這次 commit
sub: 即使同時改了多個檔案，也可以只把其中一部分提交出去
---

<!-- p95 -->
---
layout: diagram-04
heading: 日常循環：修改 → status → add → commit
steps:
  - { label: 改檔案 }
  - { label: git status, active: true }
  - { label: git add }
  - { label: git commit }
calloutTag: KEY POINT
calloutText: 改完先用 git status 檢查狀態，確認哪些檔案還在工作目錄、哪些已經放進暫存區。接著挑出這次要 add 的變更，最後用 commit 保存成一個版本。
---

<!-- p96 -->
---
layout: lab-02
heading: 【07】章節實作
command: '$ hands-on'
sub: '對 index.html 重複三次「修改 → add → commit」，最後用 `git log --oneline` 確認三個 commit'
---

<!-- p97 -->
---
layout: lab-02
heading: 【07】章節補充
command: '# optional'
sub: add 的範圍會影響 commit 內容，方便和精準要自己取捨
---

<!-- p98 -->
---
layout: git-areas
heading: git add .：將所有變更放進暫存區
command: git add .
meta: 工作目錄 → 暫存區 → 儲存庫
areas:
  - name: WORKING
    state: dashed
    items:
      - { flag: "??", flagTone: deep, text: index.html }
      - { flag: "??", flagTone: deep, text: .env }
  - name: STAGING
    state: solid
    items:
      - { text: 尚無暫存, tone: dim }
  - name: REPOSITORY
    state: solid
    items:
      - { text: 尚無 commit, tone: dim }
arrows:
  - { label: add }
  - { label: commit }
areasOn:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: active
    items:
      - { flag: A, flagTone: ok, text: index.html, bold: true }
      - { flag: A, flagTone: ok, text: .env, bold: true }
  - name: REPOSITORY
    state: solid
    items:
      - { text: 尚無 commit, tone: dim }
arrowsOn:
  - { label: add, active: true }
  - { label: commit }
areaToggle: { label: git add . 之後, labelOn: 回到 git add . 之前 }
terminal:
  - { kind: comment, text: "# 「.」代表你現在所在的資料夾" }
  - { kind: cmd, text: "git add ." }
  - { kind: comment, text: "# 輸入指令後，會一口氣把所有變更加進暫存區" }
  - { kind: comment, text: "# 如果裡面有 .env，也可能一起被加進去" }
  - { kind: note, text: "# 不確定加了什麼，就先用 git status 看清楚" }
---

<!-- p99 -->
---
layout: git-areas
heading: git commit --amend：修改訊息
command: git commit --amend -m
meta: 只修改最後一個 commit
areas:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: solid
    items:
      - { text: 尚無暫存, tone: dim }
  - name: REPOSITORY
    state: active
    items:
      - { flag: a1b2c3d, flagTone: brand, text: 新增首頁 }
arrows:
  - { label: add }
  - { label: commit }
areasOn:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: solid
    items:
      - { text: 尚無暫存, tone: dim }
  - name: REPOSITORY
    state: active
    items:
      - { flag: a1b2c3d, flagTone: deep, text: 已作廢, tone: dim }
      - { flag: 9f8e7d6, flagTone: brand, text: 建立首頁 }
areaToggle: { label: amend 之後, labelOn: 回到 amend 之前 }
terminal:
  - { kind: comment, text: "# 情境：commit 完才發現訊息打錯" }
  - { kind: cmd, text: "git commit --amend -m \"建立首頁\"" }
  - { kind: dim, text: "[master 9f8e7d6] 建立首頁" }
  - { kind: comment, text: "# amend 會重做最後一個 commit，所以 hash 也會改變" }
  - { kind: note, text: "# 還沒 push 之前可以這樣修，一旦 push 出去後就不要再改歷史" }
---

<!-- p100 -->
---
layout: git-areas
heading: git commit --amend：修改內容
command: git commit --amend --no-edit
meta: 把暫存區併進最後一個 commit
areas:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: active
    items:
      - { flag: M, flagTone: ok, text: index.html, bold: true }
  - name: REPOSITORY
    state: solid
    items:
      - { flag: a1b2c3d, flagTone: brand, text: 新增首頁 }
arrows:
  - { label: add }
  - { label: commit }
areasOn:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: solid
    items:
      - { text: 尚無暫存, tone: dim }
  - name: REPOSITORY
    state: active
    items:
      - { flag: a1b2c3d, flagTone: deep, text: 已作廢, tone: dim }
      - { flag: 9f8e7d6, flagTone: brand, text: 新增首頁 }
arrowsOn:
  - { label: add }
  - { label: commit, active: true }
areaToggle: { label: amend 之後, labelOn: 回到 amend 之前 }
terminal:
  - { kind: comment, text: "# 情境：commit 完才發現還漏改 index.html" }
  - { kind: comment, text: "# 改好後先重新 add" }
  - { kind: cmd, text: "git add index.html" }
  - { kind: cmd, text: "git commit --amend --no-edit" }
  - { kind: dim, text: "[master 9f8e7d6] 新增首頁" }
  - { kind: comment, text: "# --no-edit 會保留原本訊息，只把暫存區內容補進去" }
  - { kind: note, text: "# 這也會重做最後一個 commit，一旦 push 出去後就不要再改歷史" }
---

<!-- p101 -->
---
layout: end-01
heading: 上午回顧
items:
  - { no: "01", text: "已完成 Git、終端機與 VS Code 設定，能在本機開啟資料夾開始工作" }
  - { no: "02", text: "已設定 Git 作者署名，讓每個 commit 都能留下正確身分" }
  - { no: "03", text: "已初始化儲存庫並拍下第一個版本，知道何時 status、add、commit" }
---

<!-- p102 -->
---
layout: break-02
sub: "休息一小時，下午回來繼續完成今天的實作任務"
badge: "BACK · 13:00"
---

<!-- p103 -->
---
layout: intro-01
heading: 下午目標
items:
  - { no: P4, heading: 暫存區與歷史, desc: 把變更分批提交，看懂 log 與 diff，再排除不該追蹤的檔案 }
  - { no: P5, brand: github, heading: GitHub 與 Pages, desc: 建立遠端儲存庫，push 程式並讓網頁上線 }
  - { no: P6, brand: github, heading: 儀表板公開, desc: 套用範本、更新資料，公開自己的技能頁面 }
  - { no: P7, brand: ai, heading: AI 與 Skills, desc: 請 AI 解釋指令、撰寫 commit 訊息，並用 skill 對齊風格 }
---

<!-- p104 -->
---
layout: chapter-01
no: "08"
slug: git/staging
heading: "暫存區：\n整理要提交的變更"
brand: git
---

<!-- p105 -->
---
layout: qa-01
label: git/staging
heading: 改動混在一起時，怎麼讓 commit 仍然清楚？
sub: 同一段時間內，你可能同時修 bug、改文案、調樣式
---

<!-- p106 -->
---
layout: qa-02
label: git/staging
heading: 用暫存區分批整理，把不同目的的變更拆開提交
sub: 每次 commit 只做「一件事」，之後回頭看才找得到脈絡
---

<!-- p107 -->
---
layout: content-01
heading: 暫存區為什麼存在？
body: 一次工作常會動到好幾個檔案，但它們==不一定屬於同一件事==。暫存區讓你可以逐檔挑選要 commit 哪些變更，把「修 bug」和「改樣式」拆成兩個各自說得清楚的 commit，而不是全部混在一起。
note: "好的 commit 重點在於每一個都能「清楚說明目的」。"
---

<!-- p108 -->
---
layout: git-areas
heading: git restore --staged：移出暫存區
command: git restore --staged
meta: 取消暫存，不刪檔案、不改內容
areas:
  - name: WORKING
    state: dashed
    items:
      - { text: 尚無變更, tone: dim }
  - name: STAGING
    state: active
    items:
      - { flag: A, flagTone: ok, text: style.css, bold: true }
      - { flag: A, flagTone: ok, text: main.js, bold: true }
  - name: REPOSITORY
    state: solid
    items:
      - { flag: c3d4e5f, flagTone: brand, text: 調整配色 }
arrows:
  # 不給 label：restore 字太長、擠爆 88px 箭頭欄，折衷成「只留高亮箭頭、不寫字」。
  - { back: true, active: true }
  - { hidden: true }
areasOn:
  - name: WORKING
    state: dashed
    items:
      - { flag: "??", flagTone: deep, text: main.js, bold: true }
  - name: STAGING
    state: active
    items:
      - { flag: A, flagTone: ok, text: style.css, bold: true }
  - name: REPOSITORY
    state: solid
    items:
      - { flag: c3d4e5f, flagTone: brand, text: 調整配色 }
arrowsOn:
  - { label: add }
  - { hidden: true }
areaToggle: { label: restore 之後, labelOn: 回到 restore 之前 }
terminal:
  - { kind: comment, text: "# add . 後發現只想提交 style.css" }
  - { kind: cmd, text: "git restore --staged main.js" }
  - { kind: comment, text: "# 輸入後使用 git status 確認狀態" }
  - { kind: cmd, text: "git status" }
  - { kind: dim, text: "Changes to be committed:" }
  - { kind: dim, text: "        new file:   style.css" }
  - { kind: dim, text: "Untracked files:" }
  - { kind: dim, text: "        main.js" }
  - { kind: note, text: "# main.js 退出暫存區，內容與變更都還在" }
---

<!-- p109 -->
---
layout: lab-02
heading: 【08】章節實作
command: '$ hands-on'
sub: '新增 style.css 與 main.js，再指定檔名分別「add → commit」，把兩個變更拆成兩個乾淨的 commit'
---

<!-- p110 -->
---
layout: lab-02
heading: 【08】章節補充
command: '# optional'
sub: add 只收下當下的版本，後面又改了檔案，就要再確認一次暫存區
---

<!-- p111 -->
---
layout: content-01
heading: add 之後又改了檔案會怎麼樣？
body: "`git add` 像是把檔案==當下的版本==放進暫存區。假如 add 之後又修改同一個檔案，後面那段新改動不會自動跟著進去，`git status` 會同時顯示已暫存與未暫存的變更。想提交最新內容，就要再 add 一次。"
note: "add 會把當下這一版放進暫存區，不會開啟自動追蹤。"
---

<!-- p112 -->
---
layout: chapter-01
no: "09"
slug: git/history-diff
heading: "歷史與差異：\n找出改了哪些地方"
brand: git
---

<!-- p113 -->
---
layout: git-term
heading: git log：查看提交紀錄
command: git log
terminal:
  - { kind: comment, text: "# 不加參數時，Git 會列出每個 commit 的完整資訊" }
  - { kind: cmd, text: "git log" }
  - { kind: dim, text: "commit e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4" }
  - { kind: dim, text: "Author: Your Name <you@example.com>" }
  - { kind: dim, text: "Date:   Sat Jul 18 14:32:05 2026 +0800" }
  # 全形空格：空 span 不生線盒、空行會被吃掉（同 GitAreaFlow 的箭頭標籤問題）
  - { kind: dim, text: "　" }
  - { kind: dim, text: "    加上互動腳本" }
  - { kind: comment, text: "" }
  - { kind: note, text: "# 完整資訊很詳細，但歷史一長就不方便瀏覽，因此平常會搭配 --oneline 使用" }
---

<!-- p114 -->
---
layout: git-term
heading: git log --oneline：一行一筆
command: git log --oneline
terminal:
  - { kind: comment, text: "# 把每個 commit 縮成一行，適合快速瀏覽歷史" }
  - { kind: cmd, text: "git log --oneline" }
  - { kind: dim, text: "e5f6a7b 加上互動腳本" }
  - { kind: dim, text: "d4e5f6a 加上樣式表" }
  - { kind: dim, text: "c3d4e5f 調整配色" }
  - { kind: dim, text: "b2c3d4e 加上自我介紹段落" }
  - { kind: dim, text: "a1b2c3d 新增首頁" }
  - { kind: note, text: "# 前面的 7 碼是 commit hash 的縮寫，夠短也足以辨識是哪一個" }
---

<!-- p115 -->
---
layout: git-term
heading: git log --graph：文字線圖
command: git log --graph
terminal:
  - { kind: comment, text: "# 加上 --graph，Git 會在左側用文字畫出歷史走向" }
  - { kind: cmd, text: "git log --oneline --graph" }
  - { kind: dim, text: "* e5f6a7b 加上互動腳本" }
  - { kind: dim, text: "* d4e5f6a 加上樣式表" }
  - { kind: dim, text: "* c3d4e5f 調整配色" }
  - { kind: dim, text: "* b2c3d4e 加上自我介紹段落" }
  - { kind: dim, text: "* a1b2c3d 新增首頁" }
  - { kind: comment, text: "# 現在還是一條直線，表示每個 commit 都接在前一個後面" }
  - { kind: note, text: "# 下週開始使用分支後，這條線就可能分岔，而 Git Graph 則是更好讀的圖形版" }
---

<!-- p116 -->
---
layout: qa-01
label: git/history-diff
heading: 只知道檔案有改，怎麼看出到底改了哪裡？
sub: 先分清楚：你要看內容差異，還是提交紀錄？
---

<!-- p117 -->
---
layout: qa-02
label: git/history-diff
heading: 比對內容差異用 git diff，確認歷史紀錄用 git log
sub: 問題不同，看的地方也不同
---

<!-- p118 -->
---
layout: git-diff
heading: git diff：查看未暫存改動
command: git diff
file: index.html
diff:
  - { no: 7, code: "</head>" }
  - { no: 8, code: "<body>" }
  - { no: 9, code: "  <h1>Hello, Git!</h1>" }
  - { kind: del, code: "  <p>嗨，我是阿劍</p>" }
  - { kind: add, code: "  <p>嗨，我是阿劍，正在學 Git</p>" }
  - { no: 11, code: "</body>" }
  - { no: 12, code: "</html>" }
terminal:
  - { kind: comment, text: "# 查看工作目錄裡，還沒 add 進暫存區的改動" }
  - { kind: cmd, text: "git diff" }
  - { kind: dim, text: "@@ -7,6 +7,6 @@" }
  - { kind: dim, text: "-  <p>嗨，我是阿劍</p>" }
  - { kind: dim, text: "+  <p>嗨，我是阿劍，正在學 Git</p>" }
  - { kind: comment, text: "# 減號是原本的內容，加號是現在改成的內容" }
  - { kind: note, text: "# 想看這次到底改了哪幾行，就先用 git diff" }
---

<!-- p119 -->
---
layout: lab-02
heading: 【09】章節實作
command: '$ hands-on'
sub: '先用 `git log --oneline` 看歷史，再用 `git diff` 看目前改動，分清楚時間軸和內容差異'
---

<!-- p120 -->
---
layout: lab-02
heading: 【09】章節補充
command: '# optional'
sub: log 與 diff 都還有常用旗標：限制列出的數量、連同改動一起看，以及查看已經暫存的差異
---

<!-- p121 -->
---
layout: git-term
heading: git log -n：指定顯示數量
command: git log -n 3
terminal:
  - { kind: comment, text: "# 歷史很多時，可以先限制只看最近幾個" }
  - { kind: cmd, text: "git log --oneline -n 3" }
  - { kind: dim, text: "e5f6a7b 加上互動腳本" }
  - { kind: dim, text: "d4e5f6a 加上樣式表" }
  - { kind: dim, text: "c3d4e5f 調整配色" }
  - { kind: comment, text: "# -n 後面的數字代表要列出幾個，也可以簡寫成 -3" }
  - { kind: note, text: "# 旗標可以一起使用：--oneline 控制顯示方式，-n 控制顯示數量" }
---

<!-- p122 -->
---
layout: git-term
heading: git log -p：附上變更差異
command: git log -p
terminal:
  - { kind: comment, text: "# 加上 -p，每個 commit 後面都會接著顯示當時的逐行改動" }
  - { kind: cmd, text: "git log -p" }
  - { kind: dim, text: "commit e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4" }
  - { kind: dim, text: "Author: Your Name <you@example.com>" }
  - { kind: dim, text: "Date:   Sat Jul 18 14:32:05 2026 +0800" }
  - { kind: dim, text: "　" }
  - { kind: dim, text: "    加上互動腳本" }
  - { kind: dim, text: "　" }
  - { kind: dim, text: "diff --git a/main.js b/main.js" }
  - { kind: dim, text: "new file mode 100644" }
  # 下一行的三連破折號會截斷 YAML、後面整段無聲消失，故以 \x2D 逃脫（見 CLAUDE.md 的 dash trap）
  - { kind: dim, text: "\x2D\x2D\x2D /dev/null" }
  - { kind: dim, text: "+++ b/main.js" }
  - { kind: dim, text: "@@ -0,0 +1 @@" }
  - { kind: dim, text: "+console.log('hello')" }
  - { kind: comment, text: "# 繼續往下捲，會看到上一個 commit 的訊息與改動" }
  - { kind: comment, text: "" }
  - { kind: note, text: "# git log 看時間軸、git diff 看內容，-p 會把兩件事合在一起" }
---

<!-- p123 -->
---
layout: git-diff
heading: git diff --staged：查看暫存區改動
command: git diff --staged
file: index.html
diff:
  - { no: 7, code: "</head>" }
  - { no: 8, code: "<body>" }
  - { no: 9, code: "  <h1>Hello, Git!</h1>" }
  - { kind: del, code: "  <p>嗨，我是阿劍</p>" }
  - { kind: add, code: "  <p>嗨，我是阿劍，正在學 Git</p>" }
  - { no: 11, code: "</body>" }
  - { no: 12, code: "</html>" }
terminal:
  - { kind: comment, text: "# 查看暫存區裡，已經 add 但還沒 commit 的改動" }
  - { kind: cmd, text: "git add index.html" }
  - { kind: cmd, text: "git diff" }
  - { kind: comment, text: "# 沒有輸出，表示工作目錄和暫存區現在一樣" }
  - { kind: cmd, text: "git diff --staged" }
  - { kind: dim, text: "-  <p>嗨，我是阿劍</p>" }
  - { kind: dim, text: "+  <p>嗨，我是阿劍，正在學 Git</p>" }
  - { kind: note, text: "# 已經 add 的內容，要加上 --staged 才看得到" }
---

<!-- p124 -->
---
layout: chapter-01
no: "10"
slug: git/tracking-scope
heading: "忽略清單：\n排除不該追蹤的檔案"
brand: git
---

<!-- p125 -->
---
layout: content-01
heading: 不是每個檔案都該進 Git
body: 專案做久了，資料夾裡會慢慢長出各種檔案：本機設定、祕密金鑰、工具產生的依賴，還有系統自己留下的雜檔。它們可能跟開發有關，卻==不一定適合放進版本歷史==，這時就需要 `.gitignore` 告訴 Git 哪些檔案可以略過。
note: "先把追蹤範圍收乾淨，後面的 commit 才會清楚。"
---

<!-- p126 -->
---
layout: qa-01
label: git/tracking-scope
heading: "準備讓 Git 追蹤前，哪些檔案應該要先略過？"
sub: 這份內容適合被追蹤、同步，並長期留在歷史裡嗎？
---

<!-- p127 -->
---
layout: qa-02
label: git/tracking-scope
heading: 祕密、本機設定、可重建的檔案，都先放進忽略清單
sub: 像 .env 可能外流祕密，node_modules 則能重新安裝
---

<!-- p128 -->
---
layout: content-02
heading: .gitignore 常見規則
items:
  - { text: "**祕密**：`.env`、金鑰這類，絕對不能外流" }
  - { text: "**依賴模組**：`node_modules/`，需要時可以重新安裝" }
  - { text: "**系統雜檔**：`.DS_Store` 這類電腦會自動產生的檔案" }
  - { text: "**寫法**：每行一條規則；要忽略整個資料夾，就在名稱後面加 `/`", secondary: true }
---

<!-- p129 -->
---
layout: git-files
heading: .gitignore 生效後的樣子
command: git status
panelMeta: hello-git/
entries:
  - { name: .env, tag: 已忽略 }
  - { name: .git/, tag: 隱藏 }
  - { name: .gitignore, status: new }
  - { name: index.html }
  - { name: main.js }
  - { name: style.css }
terminal:
  - { type: comment, text: "# 想忽略哪個檔案，就把它的檔名寫進 .gitignore" }
  - { type: cmd, text: cat .gitignore }
  - { type: output, text: ".env" }
  - { type: comment, text: "# 再看一次狀態清單" }
  - { type: cmd, text: git status }
  - { type: output, text: "On branch master" }
  - { type: output, text: "Untracked files:" }
  - { type: output, text: "        .gitignore" }
  - { type: comment, text: "# .env 還在，只是 Git 會把它從狀態清單中略過", accent: true }
---

<!-- p130 -->
---
layout: lab-02
heading: 【10】章節實作
command: '$ hands-on'
sub: '新增 `.env` 寫一行假密碼，`git status` 會看到它；把它加進 `.gitignore` 後再跑一次，確認它從清單消失'
---

<!-- p131 -->
---
layout: lab-02
heading: 【10】章節補充
command: '# optional'
sub: 先釐清 .gitignore 的常見誤會，再用範本快速建立忽略清單
---

<!-- p132 -->
---
layout: content-01
heading: .gitignore 不會回溯
body: "`.gitignore` 只對==還沒被追蹤的檔案==有效。如果某個檔案早就 commit 過，事後才把它加進 `.gitignore` 並不會生效。要先用 `git rm --cached <file>` 把它移出追蹤（檔案本身留著），再 commit 一次。"
note: "已經進過歷史的檔案，要先取消追蹤，.gitignore 才接得上。"
---

<!-- p133 -->
---
layout: content-01
heading: .gitignore 範本哪裡找？
body: 寫 `.gitignore` 時，通常不用自己硬背每一條規則。GitHub 官方維護了==各種語言與框架的範本==（github.com/github/gitignore），例如 Node、Python、.NET，都可以用對應範本當做起點。VS Code 或其他工具建立新專案時，也常會幫你產生一份。
note: "從官方範本起手，再依專案微調，通常比自己硬背規則更可靠。"
---

<!-- p134 -->
---
layout: break-01
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 14:00"
---

<!-- p135 -->
---
layout: chapter-01
no: "11"
slug: github/cloud-repo
heading: "GitHub：\n把儲存庫放到雲端"
brand: github
---

<!-- p136 -->
---
layout: compare-04
class: brand-github
heading: Git 與 GitHub：工具與平台
options:
  - name: Git
    slug: local
    items:
      - 裝在你電腦上的版本控制「工具」
      - 負責記錄、比較與回復專案變更
      - 不用連網，也能在本機運作
  - name: GitHub
    slug: cloud
    items:
      - 放在雲端的儲存庫託管「平台」
      - 讓專案可以備份、分享與協作
      - 本機的 Git 儲存庫可以推到 GitHub 上
---

<!-- p137 -->
---
layout: compare-04
class: brand-github
heading: 本地與遠端：同一個專案，兩份儲存庫
options:
  - name: 本地儲存庫
    slug: local
    items:
      - 放在電腦上的那一份
      - `git init` 建立的就是它
      - 你在這裡修改檔案、add 變更，並建立 commit
      - 不連網也能操作，歷史會先留在這台電腦
  - name: 遠端儲存庫
    slug: origin
    items:
      - 放在 GitHub 上的那一份
      - 可以先在 GitHub 建立，再把本地儲存庫推上去
      - 它有自己的網址，也能在瀏覽器裡查看
      - 本地通常會用 **origin** 這個小名指向它
---

<!-- p138 -->
---
layout: qa-01
class: brand-github
label: github/why-github
heading: 既然 Git 在本機就能記錄版本，為什麼還需要 GitHub？
sub: 如果只是自己 commit，和放到雲端有什麼差別？
---

<!-- p139 -->
---
layout: qa-02
class: brand-github
label: github/why-github
heading: 因為 GitHub 讓版本不只留在自己的電腦，之後才能分享、協作與部署
sub: 本機負責記錄，遠端負責讓其他人和服務也看得到
---

<!-- p140 -->
---
layout: image-01
class: brand-github
slug: github/sign-up
heading: 註冊帳號與個人頁導覽
body: 到 `github.com` 註冊帳號，建議使用平常會查看的 email。完成後先看一下自己的個人頁，確認頭像、儲存庫列表和貢獻熱力圖的位置；之後你的作品和協作紀錄都會出現在這裡。
image: /github-profile-light.png
imageDark: /github-profile-dark.png
imageAlign: top
alt: GitHub 個人頁
---

<!-- p141 -->
---
layout: content-01
class: brand-github
heading: public 與 private 的差異
body: "==public== 代表任何人都能看到你的程式碼，適合開源專案或作品集；==private== 只有你和被邀請的人看得到，適合機密內容或還不想公開的專案。兩者之後都可以再切換。"
note: "看得到不代表改得到，能不能寫入還要看權限設定。"
---

<!-- p142 -->
---
layout: qa-01
class: brand-github
label: github/visibility
heading: 專案要設定成 public，還是設定成 private？
sub: 這份練習專案等一下會接到 GitHub Pages
---

<!-- p143 -->
---
layout: qa-02
class: brand-github
label: github/visibility
heading: public 任何人都看得到，private 只限你和受邀的人
sub: hello-git 等一下要公開成網頁，這次就設成 public
---

<!-- p144 -->
---
layout: lab-02
class: brand-github
heading: 【11】章節實作
command: '$ hands-on'
sub: '在 GitHub 建立名為 hello-git 的 public 儲存庫，建立完成後記下頁面上的 push 指令'
---

<!-- p145 -->
---
layout: lab-02
class: brand-github
heading: 【11】章節補充
command: '# optional'
sub: GitHub 之外還有其他平台，也認識一下儲存庫頁面的常用功能
---

<!-- p146 -->
---
layout: content-01
class: brand-github
heading: GitHub 之外的託管平台
body: GitHub 不是唯一的託管平台。GitLab、Bitbucket 也提供類似功能，背後機制大同小異；很多公司內部也會使用==可自架的 GitLab==。今天學到的 Git 指令與 remote 概念，換到其他平台仍然通用，主要差別只是網站介面。
note: "Git 是底層工具；GitHub、GitLab 則是放遠端儲存庫的平台。"
---

<!-- p147 -->
---
layout: image-01
class: brand-github
slug: github/repo-tour
heading: GitHub 頁面導覽
body: 儲存庫頁面有幾個常用入口：Code 看檔案，Issues 記錄問題與待辦，Pull requests 處理協作，Actions 放自動化流程，Settings 管理儲存庫設定。今天先留個印象，之後會一個一個用到。
image: /github-repo-light.png
imageDark: /github-repo-dark.png
imageAlign: top
alt: GitHub 儲存庫頁面導覽
---

<!-- p148 -->
---
layout: chapter-01
no: "12"
slug: github/pat
heading: "通行證：\n取得 GitHub 推送權限"
brand: github
---

<!-- p149 -->
---
layout: qa-01
class: brand-github
label: github/pat
heading: 你 push 到 GitHub 時，它怎麼知道真的是你？
sub: 還能直接輸入帳號密碼嗎？
---

<!-- p150 -->
---
layout: qa-02
class: brand-github
label: github/pat
heading: 靠 token 而不是密碼，PAT 就是給終端機使用的通行證
sub: 權限和期限由你設定，用完也能隨時撤銷
---

<!-- p151 -->
---
layout: content-01
class: brand-github
heading: 「通行證」是什麼概念？
body: PAT（Personal Access Token）是一串隨機字元，代表「持有它的人可以在指定範圍內替你操作」。比起把主密碼交出去，通行證可以==限制權限==、==設定到期日==，也能==隨時撤銷==。多數程式碼託管平台都有類似機制。
note: "Token 像有範圍、有期限的通行證，用多少權限、用到什麼時候，都可以先設定好。"
---

<!-- p152 -->
---
layout: image-01
class: brand-github
slug: github/create-pat
heading: 產生 PAT 的位置
body: "進到 GitHub 個人設定的「Settings → Developer settings → Personal access tokens → Tokens (classic)」，點擊「Generate new token」。這次只勾選需要的權限，push 到儲存庫需要 `repo` scope，並記得設定到期日。"
image: /github-pat-light.png
imageDark: /github-pat-dark.png
imageAlign: top
alt: GitHub PAT（Personal access token）設定頁
---

<!-- p153 -->
---
layout: lab-02
class: brand-github
heading: 【12】章節實作
command: '$ hands-on'
sub: '到 Developer settings 產生 PAT，勾選「最小權限」並設定到期日，產生後立刻複製保存'
---

<!-- p154 -->
---
layout: lab-02
class: brand-github
heading: 【12】章節補充
command: '# optional'
sub: 通行證的安全性，關鍵在於「不用主密碼」和「限制權限範圍」
---

<!-- p155 -->
---
layout: content-01
class: brand-github
heading: 為什麼不能用帳號密碼？
body: 帳號密碼一旦被寫進指令、貼到錯的地方或被側錄，就等於整個帳號暴露，而且很難收回。PAT 比較像一張專門給終端機使用的通行證，真的外洩時，可以==撤銷再重新發一組==，主帳號密碼不需要一起更換。
note: "不要把主密碼交給工具，給終端機用的應該是可撤銷、可重發的通行證。"
---

<!-- p156 -->
---
layout: content-01
class: brand-github
heading: 最小權限原則
body: 產生 PAT 時，只勾這次==真正需要的權限==：如果只是要推送儲存庫，就不要給到管理組織或刪除資源的權限，到期日也不要設太長。權限越小、有效期限越短，萬一外洩時==造成的傷害就越有限==。
note: "權限給剛好就好，安全性來自事先「限制」影響範圍。"
---

<!-- p157 -->
---
layout: chapter-01
no: "13"
slug: github/remote
heading: "遠端儲存庫：\n把本地接上 GitHub"
brand: github
---

<!-- p158 -->
---
layout: qa-01
class: brand-github
label: github/remote
heading: 本地儲存庫和 GitHub 上的儲存庫，一開始認得彼此嗎？
sub: 它們名字相似，就會自動連在一起嗎？
---

<!-- p159 -->
---
layout: qa-02
class: brand-github
label: github/remote
heading: 要先設定 remote，才會知道要推到哪個 GitHub 儲存庫
sub: 接好之後，本機會用一個小名記住這個遠端
---

<!-- p160 -->
---
layout: git-push
class: brand-github
heading: git remote：接上遠端儲存庫
command: git remote add origin
laneToggle: { label: remote add 之後, labelOn: 回到 remote add 之前 }
lanes:
  - label: LOCAL · master
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
lanesOn:
  - label: LOCAL · master
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
  - label: REMOTE
    tone: muted
    pending: true
terminal:
  - { kind: comment, text: "# 把本地儲存庫接到剛剛建立的 GitHub 儲存庫" }
  - { kind: cmd, text: "git remote add origin <你的 repo 網址>" }
  - { kind: comment, text: "# 這一步只是建立連線設定，還沒有把檔案傳上去" }
  - { kind: note, text: "# origin 就是那個小名，之後的指令都用它代替那串網址" }
---

<!-- p161 -->
---
layout: git-push
class: brand-github
heading: git branch -M：把主分支改成 main
command: git branch -M main
laneToggle: { label: branch -M 之後, labelOn: 回到 branch -M 之前 }
lanes:
  - label: LOCAL · master
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
  - label: REMOTE
    tone: muted
    pending: true
lanesOn:
  - label: LOCAL · main
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
  - label: REMOTE
    tone: muted
    pending: true
terminal:
  - { kind: comment, text: "# 先把分支改成 GitHub 常用的 main" }
  - { kind: cmd, text: "git branch -M main" }
  - { kind: comment, text: "# -M 會把目前分支重新命名成 main" }
---

<!-- p162 -->
---
layout: git-push
class: brand-github
heading: git push：推上遠端
command: git push -u origin main
laneToggle: { label: push 之後, labelOn: 回到 push 之前 }
meta: ↑ ahead 1
lanes:
  - label: LOCAL · main
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
  - label: REMOTE
    tone: muted
    commits:
      - { node: ghost }
transfers:
  - { label: git push, slots: [0], labelAt: 0, labelDx: 36, labelDy: -8 }
metaOn: ✓ up to date
lanesOn:
  - label: LOCAL · main
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
  - label: REMOTE · origin/main
    tone: brand
    labelTone: muted
    commits:
      - { node: brand, hash: a1b2c3d }
transfersOn: []
terminal:
  - { kind: comment, text: "# 把 main 推到遠端，此時會新增 origin/main" }
  - { kind: comment, text: "# origin 代表一組遠端設定，其中包含網址" }
  - { kind: cmd, text: "git push -u origin main" }
  - { kind: dim, text: "Username: ..." }
  - { kind: dim, text: "Password: ..." }
  - { kind: comment, text: "# -u 會記住這組對應，下次可直接 git push" }
  - { kind: note, text: "# 密碼欄請貼 PAT，不是 GitHub 帳號密碼；輸入時畫面沒有變化是正常的" }
---

<!-- p163 -->
---
layout: shell-dir
class: brand-github
heading: git clone：複製一份遠端儲存庫
command: git clone
panelMeta: /Users/you/clone-test
path: ["/", "Users", "you", "clone-test"]
tree:
  - name: you/
    children:
      - name: hello-git/
        tag: 你的專案
      - name: clone-test/
        highlight: true
        badge: 你在這裡
        children:
          - name: hello-git/
            dashed: true
            badge: NEW
terminal:
  - { type: comment, text: "# clone 會自動建立資料夾，先站在你想放它的位置" }
  - { type: cmd, text: cd /Users/you/clone-test }
  - { type: cmd, text: "git clone <你的 repo 網址>" }
  - { type: output, text: "Cloning into 'hello-git'..." }
  - { type: comment, text: "# 資料夾會沿用原本名稱，裡面包含完整 Git 歷史" }
  - { type: comment, text: "# clone 會自動設定 origin，不需要再 remote", accent: true }
---

<!-- p164 -->
---
layout: lab-02
class: brand-github
heading: 【13】章節實作
command: '$ hands-on'
sub: '把 commit push 到遠端，再換個資料夾 clone下來，確認 GitHub 上真的有你的版本'
---

<!-- p165 -->
---
layout: lab-02
class: brand-github
heading: 【13】章節補充
command: '# optional'
sub: 設定新專案預設使用 main，之後就不用每次手動改分支名稱
---

<!-- p166 -->
---
layout: content-01
class: brand-github
heading: 為什麼現在都用 main？
body: 早年 Git 預設主分支常叫 `master`，近年包含 GitHub 在內的許多平台，改以更中性的 `main` 作為預設名稱。兩者都代表專案的==穩定分支==，也是部署、發布或協作時對齊的位置。因此在實務上，團隊常會保護這條主線，避免重要版本被隨手改壞。
note: "main 通常會被保護起來，避免重要版本被隨手改壞；看到 master 時，也把它理解成舊命名習慣下的主線。"
---

<!-- p167 -->
---
layout: content-01
class: brand-github
heading: 讓 git init 預設就是 main
body: "執行一次 `git config --global init.defaultBranch main`，就能把這台電腦的新專案預設主分支設定為 `main`。之後建立新的儲存庫時，一開始就會使用 GitHub 的==慣例名稱==，少一步手動調整。"
note: "把常用預設值先設好，之後每個新專案都能少一點重複操作。"
---

<!-- p168 -->
---
layout: chapter-01
no: "14"
slug: github/pages
heading: "GitHub Pages：\n作品的「展示台」"
brand: github
---

<!-- p169 -->
---
layout: qa-01
class: brand-github
label: github/pages
heading: 想讓一個 HTML 網頁被全世界看到，最少需要什麼？
sub: 一定要自己租主機、架伺服器嗎？
---

<!-- p170 -->
---
layout: qa-02
class: brand-github
label: github/pages
heading: 只要 public 儲存庫加上 Pages，GitHub 就能產生公開網址
sub: 你會得到一個可以分享給別人的網址
---

<!-- p171 -->
---
layout: content-01
class: brand-github
heading: 什麼是 GitHub Pages？
body: GitHub Pages 是 GitHub 提供的==靜態網站託管服務==。只要指定儲存庫裡的分支和資料夾，GitHub 就會把其中的 `index.html` 發佈成公開網頁；不需要自己租主機，也不用先學怎麼設定伺服器。
note: "Pages 適合 HTML、CSS、JavaScript 這類純前端頁面，push 之後 GitHub 會幫你跑部署流程。"
---

<!-- p172 -->
---
layout: image-01
class: brand-github
slug: github · pages-setup
heading: 設定 GitHub Pages 分支
body: "進到儲存庫的「Settings → Pages」：把 Source 設成 `Deploy from a branch`，分支選 `main`、資料夾選 `/ (root)`，最後按下 Save，GitHub 就會提供一個「公開網址」並開始部署網頁。"
image: /github-pages-light.png
imageDark: /github-pages-dark.png
imageAlign: top
alt: GitHub Pages 設定畫面（Settings → Pages）
---

<!-- p173 -->
---
layout: lab-02
class: brand-github
heading: 【14】章節實作
command: '$ hands-on'
sub: '打開 GitHub Pages 頁面，看到畫面顯示就代表部署成功'
---

<!-- p174 -->
---
layout: lab-02
class: brand-github
heading: 【14】章節補充
command: '# optional'
sub: GitHub Pages 上線需要部署時間，網址也有固定的命名規則
---

<!-- p175 -->
---
layout: content-01
class: brand-github
heading: 部署不是即時的
body: 按下 Save 後，GitHub 會先跑一輪部署流程，網站通常==不會立刻出現==。進度可以到儲存庫的 Actions 分頁查看（第一次通常需要等一兩分鐘），還沒好的話可以察看部署狀態。這個「Actions 正在幫你做事」的畫面，後面會變成 CI/CD 的核心流程。
note: "看 Actions 畫面確認部署狀態，會比一直重整頁面更準。"
---

<!-- p176 -->
---
layout: content-01
class: brand-github
heading: Pages 的網址規則
body: "Pages 網址常見兩種：一般專案會在帳號網址後面加上 repo 名稱，例如 `username.github.io/hello-git`；如果儲存庫名稱剛好是 `username.github.io`，GitHub 會把它當成個人首頁，網址就不會再多一段 repo 名稱。"
note: "一般專案會帶儲存庫名，個人首頁儲存庫則直接使用帳號網址。"
---

<!-- p177 -->
---
layout: break-01
class: brand-github
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 15:00"
---

<!-- p178 -->
---
layout: chapter-01
no: "15"
slug: github/dashboard
heading: "儀表板：\n公開你的技能頁面"
brand: github
---

<!-- p179 -->
---
layout: diagram-04
class: brand-github
heading: 本地建立
steps:
  - { label: 建立專案資料夾, active: true }
  - { label: 初始化儲存庫 }
  - { label: 下載模版 }
  - { label: 編輯資料 }
  - { label: 首次提交變更 }
calloutTag: STEP 01 / 09
calloutText: 先在電腦新增資料夾，把技能儀表板的專案準備好
---

<!-- p180 -->
---
layout: shell-dir
class: brand-github
heading: 建立專案資料夾
command: mkdir
panelMeta: /Users/you/skill-dashboard
path: ["/", "Users", "you", "skill-dashboard"]
tree:
  - name: you/
    children:
      - name: hello-git/
        tag: 上午練習
      - name: skill-dashboard/
        highlight: true
        dashed: true
        badge: NEW
terminal:
  - { type: comment, text: "# 先為技能儀表板開一個獨立資料夾" }
  - { type: cmd, text: mkdir skill-dashboard }
  - { type: cmd, text: cd skill-dashboard }
  - { type: cmd, text: pwd }
  - { type: output, text: /Users/you/skill-dashboard }
  - { type: comment, text: '# Windows → C:\Users\you\skill-dashboard', accent: true }
---

<!-- p181 -->
---
layout: diagram-04
class: brand-github
heading: 本地建立
steps:
  - { label: 建立專案資料夾 }
  - { label: 初始化儲存庫, active: true }
  - { label: 下載模版 }
  - { label: 編輯資料 }
  - { label: 首次提交變更 }
calloutTag: STEP 02 / 09
calloutText: 讓 Git 開始追蹤這個資料夾，確認它已經成為新的本地儲存庫
---

<!-- p182 -->
---
layout: git-files
class: brand-github
heading: 初始化儲存庫
command: git init
panelMeta: skill-dashboard/
entries:
  - { name: .git/, tag: 隱藏 }
terminal:
  - { type: comment, text: "# 讓 Git 接手記錄這個資料夾的版本" }
  - { type: cmd, text: git init }
  - { type: output, text: "Initialized empty Git repository in /Users/you/skill-dashboard/.git/" }
  - { type: cmd, text: git status }
  - { type: output, text: "No commits yet　nothing to commit" }
  - { type: comment, text: "# 儲存庫已經準備好，接著把模板檔案放進來", accent: true }
---

<!-- p183 -->
---
layout: diagram-04
class: brand-github
heading: 本地建立
steps:
  - { label: 建立專案資料夾 }
  - { label: 初始化儲存庫 }
  - { label: 下載模版, active: true }
  - { label: 編輯資料 }
  - { label: 首次提交變更 }
calloutTag: STEP 03 / 09
calloutText: 下載模板的 index.html 和 data.js 並放進專案資料夾
---

<!-- p184 -->
---
layout: image-01
class: brand-github
slug: download-template-files/
heading: 下載模版
body: 從 GitHub 下載課程提供的模板，把資料夾裡的 `index.html` 和 `data.js`，放進剛剛建立的 `skill-dashboard` 資料夾。放好後，網頁檔案和資料檔案就都準備好了。
image: /github-download-light.png
imageDark: /github-download-dark.png
imageAlign: top
alt: GitHub 上課程模板的資料夾，內含 index.html 與 data.js
---

<!-- p185 -->
---
layout: link-01
class: brand-github
image: /qr-dashboard.png
heading: 技能儀表板
href: "https://github.com/seon-kuraito/github-actions-cicd-course/tree/main/W1/templates/skill-dashboard"
---

<!-- p186 -->
---
layout: diagram-04
class: brand-github
heading: 本地建立
steps:
  - { label: 建立專案資料夾 }
  - { label: 初始化儲存庫 }
  - { label: 下載模版 }
  - { label: 編輯資料, active: true }
  - { label: 首次提交變更 }
calloutTag: STEP 04 / 09
calloutText: 在 data.js 填入你的姓名與技能，讓儀表板顯示個人化內容
---

<!-- p187 -->
---
layout: image-01
class: brand-github
slug: edit-dashboard-data/
heading: 編輯資料
body: 用 VS Code 打開 `skill-dashboard`，編輯 `data.js`。把名字改成你的姓名，並在資料裡點亮目前為止學過的技能（例如 Git、commit、push），完成後記得存檔。
image: /vscode-edit.png
imageAlign: top
alt: 在 VS Code 編輯 data.js
---

<!-- p188 -->
---
layout: diagram-04
class: brand-github
heading: 本地建立
steps:
  - { label: 建立專案資料夾 }
  - { label: 初始化儲存庫 }
  - { label: 下載模版 }
  - { label: 編輯資料 }
  - { label: 首次提交變更, active: true }
calloutTag: STEP 05 / 09
calloutText: 先 add 再 commit，留下第一個快照，作為專案 Git 歷史的起點
---

<!-- p189 -->
---
layout: git-files
class: brand-github
heading: 首次提交變更
command: git add + git commit
panelMeta: skill-dashboard/
statusToggle: { label: 發 commit 之後？, labelOn: 回到 commit 之前 }
entries:
  - { name: .git/, tag: 隱藏 }
  - { name: data.js, status: new }
  - { name: index.html, status: new }
terminal:
  - { type: comment, text: "# 把網頁檔和資料檔一起收進第一個 commit" }
  - { type: cmd, text: git add . }
  - { type: cmd, text: 'git commit -m "首次提交變更"' }
  - { type: output, text: "[main (root-commit) a1b2c3d] 首次提交變更" }
  - { type: comment, text: "# 這是儀表板專案的起點，之後的修改都會接在這個 commit 後面", accent: true }
---

<!-- p190 -->
---
layout: diagram-04
class: brand-github
heading: 公開上線
steps:
  - { label: 建立遠端儲存庫, active: true }
  - { label: 綁定並推送到遠端 }
  - { label: 設定 GitHub Pages }
  - { label: 瀏覽公開頁面 }
calloutTag: STEP 06 / 09
calloutText: 在 GitHub 建立新的遠端儲存庫，準備接收本機專案資料夾的內容
---

<!-- p191 -->
---
layout: image-01
class: brand-github
slug: create-remote-repository/
heading: 建立遠端儲存庫
body: 點擊 GitHub 畫面右上角「＋ → New repository」，建立一個名為 `skill-dashboard` 的 Public 儲存庫（不要勾 Add a README）。建立完成後，先停在 GitHub 顯示推送指令的頁面。
image: /github-new-repo-light.png
imageDark: /github-new-repo-dark.png
imageAlign: top
alt: GitHub 建立新儲存庫（New repository）頁面
---

<!-- p192 -->
---
layout: diagram-04
class: brand-github
heading: 公開上線
steps:
  - { label: 建立遠端儲存庫 }
  - { label: 綁定並推送到遠端, active: true }
  - { label: 設定 GitHub Pages }
  - { label: 瀏覽公開頁面 }
calloutTag: STEP 07 / 09
calloutText: 設定 remote、將主分支改為 main，再把本機版本推送到 GitHub
---

<!-- p193 -->
---
layout: git-push
class: brand-github
heading: 綁定並推送到遠端
command: remote add + branch -M + push
laneToggle: { label: push 之後, labelOn: 回到 push 之前 }
meta: ↑ ahead 1
lanes:
  - label: LOCAL · main
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
  - label: REMOTE
    tone: muted
    commits:
      - { node: ghost }
transfers:
  - { label: git push, slots: [0], labelAt: 0, labelDx: 36, labelDy: -8 }
metaOn: ✓ up to date
lanesOn:
  - label: LOCAL · main
    tone: brand
    commits:
      - { node: head, hash: a1b2c3d }
  - label: REMOTE · origin/main
    tone: brand
    labelTone: muted
    commits:
      - { node: brand, hash: a1b2c3d }
transfersOn: []
terminal:
  - { kind: comment, text: "# 回到 GitHub 顯示的指令，照順序接上遠端、改成 main、再推送" }
  - { kind: cmd, text: "git remote add origin <你的 repo 網址>" }
  - { kind: cmd, text: "git branch -M main" }
  - { kind: cmd, text: "git push -u origin main" }
  - { kind: comment, text: "# 先前練習輸入過 PAT，這邊就不用再輸入一次" }
  - { kind: note, text: "# 密碼欄請貼 PAT，不是 GitHub 帳號密碼；輸入時畫面沒有變化是正常的" }
---

<!-- p194 -->
---
layout: diagram-04
class: brand-github
heading: 公開上線
steps:
  - { label: 建立遠端儲存庫 }
  - { label: 綁定並推送到遠端 }
  - { label: 設定 GitHub Pages, active: true }
  - { label: 瀏覽公開頁面 }
calloutTag: STEP 08 / 09
calloutText: 到 Settings 指定分支與路徑，啟用 GitHub Pages 的部署流程
---

<!-- p195 -->
---
layout: image-01
class: brand-github
slug: configure-github-pages/
heading: 設定 GitHub Pages
body: "進到儲存庫的「Settings → Pages」。Source 選擇「Deploy from a branch」，分支選 `main`，資料夾選 `/ (root)`，最後按 Save。設定完成後，GitHub 會開始部署你的儀表板。"
image: /github-deploy-light.png
imageDark: /github-deploy-dark.png
imageAlign: top
alt: skill-dashboard 儲存庫的 GitHub Pages 設定畫面
---

<!-- p196 -->
---
layout: qa-01
class: brand-github
label: github/pages-deploy
heading: push 之後，GitHub Pages 會立刻更新嗎？
sub: 重新整理看看，畫面有跟著變了嗎？
---

<!-- p197 -->
---
layout: qa-02
class: brand-github
label: github/pages-deploy
heading: 不會立刻更新，Pages 需要先完成一輪部署
sub: 這個部署流程就是之後 CI/CD 的伏筆
---

<!-- p198 -->
---
layout: diagram-04
class: brand-github
heading: 公開上線
steps:
  - { label: 建立遠端儲存庫 }
  - { label: 綁定並推送到遠端 }
  - { label: 設定 GitHub Pages }
  - { label: 瀏覽公開頁面, active: true }
calloutTag: STEP 09 / 09
calloutText: 等部署完成後打開公開網址，確認儀表板已經順利上線
---

<!-- p199 -->
---
layout: image-01
class: brand-github
slug: open-public-dashboard/
heading: 瀏覽公開頁面
body: 設定完成後，點擊 GitHub 產生的公開網址。只要頁面正常顯示，就代表你的儀表板頁面已經公開，這就是今天可以分享出去的成果。
image: /dashboard-light.png
imageDark: /dashboard-dark.png
imageAlign: top
alt: 公開上線的技能儀表板頁面
---

<!-- p200 -->
---
layout: lab-02
class: brand-github
heading: 【15】章節實作
command: '$ hands-on'
sub: '打開 GitHub Pages 頁面，確認你的技能儀表板已經公開'
---

<!-- p201 -->
---
layout: lab-02
class: brand-github
heading: 【15】章節補充
command: '# optional'
sub: 如果儀表板沒出現，先從部署設定和資料格式檢查起
---

<!-- p202 -->
---
layout: content-02
class: brand-github
heading: Pages 畫面沒有出現？
items:
  - { text: "**分支選錯了**：請選有 `index.html` 的分支，通常會是 `main`" }
  - { text: "**發布路徑不對**：資料夾要選 `/ (root)`，才會從專案根目錄讀取網頁" }
  - { text: "**部署還沒完成**：Actions 可能還在執行，可到 Actions 分頁確認狀態" }
  - { text: "先檢查分支、發布路徑和部署狀態，通常就能找到問題所在", secondary: true }
---

<!-- p203 -->
---
layout: content-01
class: brand-github
heading: data.js 改壞了？
body: 如果畫面空白或跳出錯誤，通常是 `data.js` 的資料格式壞掉，例如：多一個或少一個逗號、引號沒有成對、括號沒有收好。VS Code 通常會用==紅色波浪線標出位置==，按照提示修好、存檔、commit，然後再開啟一次 `index.html` 確認。
note: "少一個逗號或引號，都可能讓整個畫面讀不到資料。"
---

<!-- p204 -->
---
layout: break-01
class: brand-github
heading: BREAK
sub: "休息十分鐘，走動一下、補水，整理剛剛的指令"
badge: "BACK · 16:00"
---

<!-- p205 -->
---
layout: chapter-01
no: "16"
slug: ai/antigravity-cli
heading: "Antigravity CLI：\n終端機裡的「AI 幫手」"
brand: ai
---

<!-- p206 -->
---
layout: content-01
class: brand-ai
heading: Antigravity CLI 是什麼？
body: Antigravity CLI 是一個==跑在終端機裡==的 AI 工具，也是 Google Gemini CLI 的官方繼任者。你可以用自然語言問它問題、請它協助處理工作；它會在專案脈絡中回答與動手，不需要離開終端機。
note: "今天先把它當成會解釋指令、會寫 commit 草稿的助手，更進階的用法留到後面幾週。"
---

<!-- p207 -->
---
layout: shell-term
class: brand-ai
heading: 安裝 Antigravity CLI
file: agy
lines:
  - { type: comment, text: "# 下載官方安裝腳本，並交給 bash 執行" }
  - { type: command, text: "curl -fsSL https://antigravity.google/cli/install.sh | bash" }
  - { type: comment, text: "# 確認終端機找得到 agy 指令" }
  - { type: command, text: agy --version }
  - { type: output, text: "1.0.8" }
win:
  - { type: comment, text: "# PowerShell 用 irm 下載腳本，再交給 iex 執行" }
  - { type: command, text: "irm https://antigravity.google/cli/install.ps1 | iex" }
  - { type: comment, text: "# 確認終端機找得到 agy 指令" }
  - { type: command, text: agy --version }
  - { type: output, text: "1.0.8" }
  - { type: comment, text: "# 若出現「指令碼已停用」，回看【02】的 ExecutionPolicy（p25）" }
---

<!-- p208 -->
---
layout: qa-01
class: brand-ai
label: ai/antigravity-cli
heading: 為什麼工程師現在會把 AI 放進日常開發？
sub: 讀指令、改檔案、寫訊息──每一個都離不開文字
---

<!-- p209 -->
---
layout: qa-02
class: brand-ai
label: ai/antigravity-cli
heading: AI 適合當開發助理，幫你查資料、解釋狀況、先寫草稿
sub: 你負責「判斷」方向，AI 負責「加速」執行
---

<!-- p210 -->
---
layout: lab-02
class: brand-ai
heading: 【16】章節實作
command: '$ hands-on'
sub: 先整理暫存區，再請 AI 依「這次暫存的改動」撰寫 commit 草稿，之後再決定要採用、修改或重寫
---

<!-- p211 -->
---
layout: lab-02
class: brand-ai
heading: 【16】章節補充
command: '# optional'
sub: 了解 Antigravity CLI 的工具脈絡，以及它和 Gemini CLI 的承接關係
---

<!-- p212 -->
---
layout: content-01
class: brand-ai
heading: Chat 和 CLI 差在哪？
body: 網頁上的 Chat 適合問概念、整理文字、討論方向；終端機裡的 CLI 則更靠近專案本身。它可以透過==可用的 tools== 讀檔、看 `git status`、檢查 `git diff`，甚至在你確認後執行指令，所以回答會連到當下的專案狀態。
note: "Chat 偏向對話與整理；CLI 多了專案工具，能把 AI 接進實際開發流程。"
---

<!-- p213 -->
---
layout: chapter-01
no: "17"
slug: ai/skills
heading: "Skills：\nAI 的「工作說明書」"
brand: ai
---

<!-- p214 -->
---
layout: qa-01
class: brand-ai
label: ai/skills
heading: AI 寫出的 commit 訊息不符合你的習慣，該怎麼辦？
sub: 每次都重新提醒它，久了也會變成負擔
---

<!-- p215 -->
---
layout: qa-02
class: brand-ai
label: ai/skills
heading: 把規則寫成 skills，讓 AI 每次都照同一套方式工作
sub: SKILL.md 就像一份寫給 AI 的工作說明書
---

<!-- p216 -->
---
layout: content-01
class: brand-ai
heading: 從「提醒一次」變成「固定規則」
body: 平常你在對話裡提醒 AI，這次有效、下次可能又要重講。Skills 則是把這些提醒整理成 `SKILL.md` 保存起來，讓 AI 之後遇到同類任務時，==直接照那份規則工作==。
note: "把一次性的提醒，升級成可重複使用的工作規範。"
---

<!-- p217 -->
---
layout: ai-skill
heading: skills 長什麼樣子？
meta: create-commit / SKILL.md
sections:
  - { label: "name", text: "技能名稱，通常和資料夾同名" }
  - { label: "description", text: "一句話說明「何時」該載入這個技能", active: true }
  - { label: "Rules", text: "把格式、用詞與限制寫清楚" }
  - { label: "Examples", text: "放幾個正確示範，讓 AI 有樣板可跟" }
doc:
  - { tone: accent, text: "\x2D\x2D\x2D" }
  - { text: "name: create-commit" }
  - { text: "description: ..." }
  - { tone: accent, text: "\x2D\x2D\x2D" }
  - { tone: accent, text: "## Rules" }
  - { text: "..." }
  - { text: "" }
  - { tone: accent, text: "## Examples" }
  - { text: "..." }
  - { text: "" }
---

<!-- p218 -->
---
layout: link-01
class: brand-ai
image: /qr-skills.png
heading: create-commit
href: "https://github.com/seon-kuraito/github-actions-cicd-course/tree/main/W1/skills/create-commit"
---

<!-- p219 -->
---
layout: git-files
class: brand-ai
heading: 安裝 create-commit skill
command: mkdir + 放入
panelMeta: skill-dashboard/
entries:
  - name: .agents/
    status: new
    children:
      - name: skills/
        status: new
        children:
          - name: create-commit/
            status: new
            tag: 課程提供
            children:
              - { name: SKILL.md, status: new }
  - { name: .git/, tag: 隱藏 }
  - { name: data.js }
  - { name: index.html }
terminal:
  - { type: comment, text: "# 先建立專案內放 skills 的資料夾" }
  - { type: cmd, text: mkdir -p .agents/skills }
  - { type: comment, text: "# PowerShell 可省略 -p，其餘路徑相同" }
  - { type: comment, text: "# 再放入課程提供的 create-commit/ 資料夾" }
  - { type: comment, text: "# 放在 .agents 底下，AI 就能在這個專案讀到它", accent: true }
---

<!-- p220 -->
---
layout: ai-context
heading: 載入 skill 會佔用 context
meta: "context = AI 這次對話能看見的資訊"
hint: "只載入當下需要的規則"
files:
  - { name: "SKILL.md", desc: "create-commit 的規則", size: "0.6k", in: true }
  - { name: "完整對話", desc: "前面使用者的輸入與 AI 的回覆", size: "1.1k", in: true }
  - { name: "git diff", desc: "這次要整理的改動", size: "0.5k", in: true }
  - { name: "index.html", desc: "沒被引用的檔案不會自動載入", size: "—", in: false }
  - { name: "其他 skills", desc: "沒觸發就不佔這次 context", size: "—", in: false }
doc:
  - { tone: accent, text: "## 載入 skill 是什麼意思？" }
  - { text: "把 SKILL.md 裡的規則，一起放進這次對話脈絡" }
  - { text: "" }
  - { tone: accent, text: "## 為什麼要節制？" }
  - { text: "載入越多規則，留給任務本身的空間越少" }
  - { text: "" }
---

<!-- p221 -->
---
layout: lab-02
class: brand-ai
heading: 【17】章節實作
command: '$ hands-on'
sub: 安裝 create-commit 後，請 AI 以「剛剛那則 commit 草稿」再寫一次，對照套用規則前後的差異
---

<!-- p222 -->
---
layout: lab-02
class: brand-ai
heading: 【17】章節補充
command: '# optional'
sub: 看懂 skill 的作用層級，知道同一套規則會在哪些專案生效
---

<!-- p223 -->
---
layout: content-01
class: brand-ai
heading: skill 裝在哪一層？
body: 放在「User Global」（你的使用者目錄）的 skill，會對你的==所有專案生效==；放進專案內的 `.agents/skills`，則只會在==這個專案生效==。今天先採用專案層，讓 create-commit 只服務這份儀表板練習。
note: "之後每週會逐步增加並優化 skills，確定要跨專案共用時，再考慮放到 User Global。"
---

<!-- p224 -->
---
layout: story-01
kicker: 第一天 · 收工前
heading: 你的技能儀表板已經上線 🎉
sub: 從環境設定、版本控制到公開網址，最後一起整理今天完成的事。
---

<!-- p225 -->
---
layout: end-01
heading: 下午回顧
items:
  - { no: "04", text: "已練過暫存區、log、diff 與 .gitignore，能拆出乾淨提交" }
  - { no: "05", brand: github, text: "已建立遠端儲存庫並推上 GitHub，網頁也能透過 Pages 公開" }
  - { no: "06", brand: github, text: "已部署自己的技能儀表板，第一批技能正式點亮" }
  - { no: "07", brand: ai, text: "已請 AI 解釋指令、撰寫 commit，並用 skill 對齊工作風格" }
---

<!-- p226 -->
---
layout: content-01
heading: "下週預告：==分支與衝突=="
body: 下週會把今天公開的儀表板帶進多人開發情境：建立分支、合併變更、處理衝突，最後送出你的第一個 Pull Request。
note: "今天先把作品推上線；下週開始練多人協作會遇到的真實流程。"
---

<!-- p227 -->
---
layout: outro-02
sub: "感謝參與，下週同一時間見"
badge: "BACK · 07.25 09:00"
---
