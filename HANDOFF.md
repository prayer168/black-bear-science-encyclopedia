# 交接筆記（HANDOFF）

> 給下一個接手的人／Session。更新於 2026-07-09。

## 現況：🎉 第一批 40 篇全部完成上線，工作區乾淨、線上皆 200

- **主題文章 40 / 40 篇**（四個年級各 10 篇，九大分類全覆蓋）。
- **線上網址**：https://prayer168.github.io/black-bear-science-encyclopedia/
- **GitHub**：prayer168/black-bear-science-encyclopedia（公開，`main` 分支根目錄部署 + `.nojekyll`；gh 已登入 prayer168）。
- 資產：角色頭像 5、**圖解每篇 3 張（共 120 張）**、**分鏡場景圖每篇 6 頁（共 240 張，全手繪風）**。
- **臉書宣傳套件**：`share/facebook-post.html`（中英雙語一鍵複製）＋ og 縮圖 `assets/images/og-cover.png`（1200×630）；`index.html` 已含 og:image / twitter:card 標籤。
- 所有課綱代碼皆逐一 WebFetch 官方頁查證，無臆造；已驗證無 Cyrillic 誤字、SVG/JSON 皆合法、站內連結無斷點。

## 待辦：無（第一批已全數交付）

主題文章 40/40、圖解 120、分鏡場景 240、臉書文＋og 皆完成。以下為**可選的未來擴充**，不是缺口：

- **第二批新主題**：本站是可擴充平台，若要再加主題，照下方「產製流程」做即可（記得 topics.json 與 main.js 同步、課綱先查證）。
- **分鏡場景美化**：後 20 篇場景圖是用「手繪 SVG 元件庫」組出來的，若要更精緻（教室窗景、人物動作等），可挑重點篇加繪。
- **其他**：跨篇索引/搜尋增強、分類首頁導覽、詞彙表（glossary）串連等。

## 檔案結構重點

- `data/topics.json`：40 篇正式資料來源。`assets/js/main.js` 開頭 `const TOPICS` 是它的同步副本（file:// 無法 fetch）。**改主題清單時兩處必同步**。
- 文章：`topics/grade-{3..6}/<id>.html`，14 區塊結構。
- 圖解：`assets/images/topics/<id>-fig1~3.svg`（純 SVG、viewBox 700×400、繁中標籤）。
- 分鏡場景圖：`assets/images/storyboard/<id>-page1~6.svg`（520×320、重用 `../characters/*.svg` 角色頭像、底部咖啡色字幕列＝旁白＋角色台詞）；文章內以 `<img class="scene-img" src="../../assets/images/storyboard/<id>-pageN.svg">` 置於各 `<h3>第 N 頁</h3>` 後。
- 角色頭像：`assets/images/characters/{bear,fox,beetle,drop,monster}.svg`。

## 每篇文章的固定產製流程（若要加新主題）

1. 從既有文章複製 14 區塊 HTML 結構，寫到 `topics/grade-N/<id>.html`（`<id>` = topics.json 的 id）。
2. 畫 3 張原生 SVG 圖解，放 `assets/images/topics/<id>-fig1~3.svg`（純 SVG、繁中標籤、白/淺底、不用外部資源）。
3. **課綱代碼務必先查證再填，禁止臆造**。查證：WebFetch `https://sites.google.com/ms.cshs.tc.edu.tw/guidelines/108/nature/content/IN{a-g}{II|III}`（II=中年級3-4、III=高年級5-6）。學習內容碼查不到對應時（如探究方法），改對應「學習表現·探究能力」即可，勿硬湊。
4. **同步兩處**改 published：`data/topics.json` 與 `assets/js/main.js` 的 `TOPICS`（改 status、填 path）。
5. 補 6 張分鏡場景圖（見上檔案結構），並把文章內「場景圖籌備中」佔位換成 `<img class="scene-img">`。
6. 驗證：SVG 合法（`python -c "import xml.dom.minidom;xml.dom.minidom.parse(f)"`）、無 Cyrillic（`grep -rlP "[\x{0400}-\x{04FF}]" ...`；注意某些環境要用 `grep -oP` 會報 locale 錯，改用 Python 或 ripgrep）。

## 部署指令

```bash
cd <repo根>
git add -A
git -c core.autocrlf=false commit -m "訊息…

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push origin main
# 等建置完成（約 30–60 秒）
gh api repos/prayer168/black-bear-science-encyclopedia/pages/builds/latest   # status 要變 built
# 驗證線上 200
curl -s -o /dev/null -w '%{http_code}' https://prayer168.github.io/black-bear-science-encyclopedia/
```

## 臉書文重貼提醒

若主網址曾在臉書貼過，縮圖會有舊快取。到 https://developers.facebook.com/tools/debug/ 貼上網址按「再次抓取」即可更新 og 縮圖。

## 安全與科學紅線（節錄）

- 昆蟲六足三體段；食物鏈箭頭＝能量流向（被吃→吃它）。
- 電磁鐵/電路實驗只用電池、不接插座；火三角實驗由老師操作、油火不可澆水。
- 酸鹼只用溫和食材、戴護目鏡、不品嚐；雷射/手電筒/太陽不照眼；磁鐵遠離磁卡。
- 能量守恆不可說成「被用光」；溶解≠融化；感覺不可靠須用工具測量。
- 不確定的數據或在地資料標「⚠️ 需要查證」，不自行編造。

完整規範見 `CLAUDE.md`；主題總表見 `data/topics.json`；主題地圖見 `TOPIC-MAP.md`。
