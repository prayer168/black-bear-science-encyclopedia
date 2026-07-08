# 交接筆記（HANDOFF）

> 給下一個接手的人／Session。更新於 2026-07-08。

## 現況

- **已上線：28 / 40 篇**，四個年級各多篇，九大分類全覆蓋。
- **線上網址**：https://prayer168.github.io/black-bear-science-encyclopedia/
- **GitHub**：prayer168/black-bear-science-encyclopedia（公開，`main` 分支根目錄部署 + `.nojekyll`）。
- 所有成果已 commit + push，工作區乾淨。
- 資產：角色頭像 5、圖解每篇 3、分鏡每篇 6（前 20 篇已配分鏡；最新第一批 4 篇的分鏡尚未補）。

## 待辦：剩 12 篇（分批做，每批 4 篇＝一年級一篇）

> 第 2 批（leaf-shape-code / where-does-water-go / plant-reproduction / energy-journey）已於 2026-07-08 完成並上線。

| 批 | 三年級 | 四年級 | 五年級 | 六年級 |
|---|---|---|---|---|
| 3 | animal-homes | river-sculptor | pitch-and-volume | ecosystem-balance |
| 4 | kitchen-dissolving | what-is-force | animals-in-winter | rock-mineral-story |
| 5 | thermometer-talks | weather-reporter-secret | sun-shadow-clock | how-scientists-think |

另：新批文章的**繪本分鏡場景圖**，待主題全數補齊後再統一補一輪。

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
