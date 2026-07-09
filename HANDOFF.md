# 交接筆記（HANDOFF）

> 給下一個接手的人／Session。更新於 2026-07-08。

## 現況

- **🎯 已上線：40 / 40 篇（第一批主題全數完成！）**，四個年級各 10 篇，九大分類全覆蓋。
- **線上網址**：https://prayer168.github.io/black-bear-science-encyclopedia/
- **GitHub**：prayer168/black-bear-science-encyclopedia（公開，`main` 分支根目錄部署 + `.nojekyll`）。
- 所有成果已 commit + push，工作區乾淨，線上已驗證 200。
- 資產：角色頭像 5、圖解每篇 3（共 120 張）、**分鏡場景圖每篇 6 頁（共 240 張，全數配齊）**。

## 待辦：🎉 第一批全部完成，無待辦主題

> 主題文章 40/40、圖解 120 張、分鏡場景圖 240 張皆已完成上線（2026-07-08）。
> 第 2～5 批 16 篇：leaf-shape-code / where-does-water-go / plant-reproduction / energy-journey /
> animal-homes / river-sculptor / pitch-and-volume / ecosystem-balance /
> kitchen-dissolving / what-is-force / animals-in-winter / rock-mineral-story /
> thermometer-talks / weather-reporter-secret / sun-shadow-clock / how-scientists-think。

**分鏡場景圖已全數補齊（全部手繪風）**：全 40 篇每篇 6 頁場景插圖（`assets/images/storyboard/<id>-page1~6.svg`，520x320、重用角色頭像 `../characters/*.svg`、底部咖啡色字幕列），文章內以 `<img class="scene-img">` 置於各 `<h3>第 N 頁</h3>` 後。後 20 篇的場景圖以「手繪 SVG 元件庫」（太陽/盆栽/杯子/河流/岩石/花/蜜蜂/烏龜/溫度計/日晷/颱風/毛毛蟲等純向量圖形）逐頁依畫面描述組合成實際插畫，風格與前 20 篇一致（非 emoji）。**延伸閱讀中原「（籌備中）」失效連結已全部改為正確超連結。**

## 每篇文章的固定產製流程

1. 從既有文章複製 14 區塊 HTML 結構，寫到 `topics/grade-N/<id>.html`（`<id>` = topics.json 的 id）。
2. 畫 3 張原生 SVG 圖解，放 `assets/images/topics/<id>-fig1~3.svg`（純 SVG、繁體中文標籤、白/淺底、不用外部資源）。
3. **課綱代碼務必先查證再填，禁止臆造**。查證：WebFetch `https://sites.google.com/ms.cshs.tc.edu.tw/guidelines/108/nature/content/IN{a-g}{II|III}`（II=中年級3-4、III=高年級5-6）。
4. **同步兩處**把該篇改為 published：`data/topics.json` 與 `assets/js/main.js` 的 `TOPICS`（改 status、填 path）。
5. 驗證：`python -c "import xml.dom.minidom;..."`（SVG 合法）、`grep -rlP "[\x{0400}-\x{04FF}]" topics/*/*.html`（無 Cyrillic 誤字）。

## 部署指令

```bash
cd <repo根>
git add -A
git -c core.autocrlf=false commit -m "訊息…

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push origin main
# 等建置完成
gh api repos/prayer168/black-bear-science-encyclopedia/pages/builds/latest   # status 要變 built
# 驗證線上 200
curl -s -o /dev/null -w '%{http_code}' https://prayer168.github.io/black-bear-science-encyclopedia/
```

## 安全與科學紅線（節錄）

- 昆蟲六足三體段；食物鏈箭頭＝能量流向（被吃→吃它）。
- 電磁鐵/電路實驗只用電池、不接插座；火三角實驗由老師操作、油火不可澆水。
- 酸鹼只用溫和食材、戴護目鏡、不品嚐；雷射/手電筒不照眼；磁鐵遠離磁卡。
- 不確定的數據或在地資料（板塊名稱、當年農曆、氣候數據）標「⚠️ 需要查證」，不自行編造。

完整規範見 `CLAUDE.md`；主題總表見 `data/topics.json`；主題地圖見 `TOPIC-MAP.md`。
