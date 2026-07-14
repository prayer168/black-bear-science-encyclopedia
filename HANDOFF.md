# 交接筆記（HANDOFF）

> 給下一個接手的人／Session。更新於 2026-07-12（🎉 全站 80/80 完成）。

## 現況：🎉 全站 80/80 全數上線完成！（第一批 40/40、第二批 40/40）工作區乾淨，專案主題產製收官

- **第二批 40/40 全數上線**（最新 commit `17c4e38`「第二批第10輪(4/4)…80/80 完成」，已 push、線上皆 200）。topics.json 無 planned、TOPIC-MAP 80 列全 ✅。工作區乾淨，無 WIP。
- **全站合計 80 篇**＝第一批 40＋第二批 40，每年級各 20 篇；每篇 14 區塊 HTML＋3 圖解 SVG＋6 分鏡 SVG（第二批新增 40 篇×9＝360 張 SVG）。
- **第二批已上線 40 篇**（每年級各 10 篇）：
  - 第1輪 `fa70614`：flower-invitation-card(G3)、bird-beak-code(G4)、seed-germination-experiment(G5)、solar-lunar-eclipse(G6)
  - 第2輪 `1af42b0`：snail-and-earthworm(G3)、rainbow-colors(G4)、density-and-buoyancy(G5)、earth-rotation-seasons(G6)
  - 第3輪 `14f96c3`：float-or-sink(G3)、static-electricity-magic(G4)、insect-camouflage(G5)、tides-ocean-breathing(G6)
  - 第4輪 `7c5724b`：wind-is-running-air(G3)、water-surface-tension(G4)、water-purification(G5)、volcano-earth-chimney(G6)
  - 第5輪 `64b522d`：cloud-expressions(G3)、capillary-action(G4)、magnifier-refraction(G5)、fermentation-science(G6)
  - 第6輪 `6fefb86`→`2300189`：secrets-in-soil(G3土壤/INa-Ⅱ-7+INd-Ⅱ-5)、plant-drinking-secret(G4根莖運輸/INb-Ⅱ-6/4/7)、echo-and-ultrasound(G5回聲超音波/INe-Ⅱ-5)、photosynthesis-respiration(G6光合呼吸/INa-Ⅲ-9，呼吸作用屬國中)。⚠️ 本輪寫作時 echo 篇又不慎混入 Cyrillic「концепт」當場修正——每篇完成務必用 Python `re.search(r'[Ѐ-ӿ]', s)` 檢查 HTML 與 9 張 SVG。
  - 第7輪 `f7448d7`→`aa5151d`：mirror-world(G3光反射/INe-Ⅱ-6)、air-expands-contracts(G4熱脹冷縮/INa-Ⅱ-5＋探究能力，中年級無專屬熱脹冷縮碼，已據實標註不硬湊)、series-parallel-circuits(G5串並聯/INe-Ⅱ-8/9，安全紅線只用電池不接插座)、greenhouse-warming-earth(G6溫室效應氣候變遷/INg-Ⅲ-3/4/7，強調溫室效應自然必要、問題在「太多」，區辨暖化≠臭氧洞、天氣≠氣候)。⚠️ 本輪踩雷：延伸閱讀連結曾多次寫錯檔名（light-goes→light-travels-straight、electromagnet-dance→electromagnet-duo、only-one-earth→one-earth-sustainability），寫連結前務必 `ls` 確認實際檔名；另 greenhouse 一度誤打英文「food」、fig1 一度出現重複 x 屬性，皆當場修正。
  - 第8輪 `ceecb43`→`806382b`：elastic-toys(G3彈力/INd-Ⅱ-8+INd-Ⅱ-9，橡皮筋非記憶、安全不對人發射)、star-constellations(G4星座北極星/INc-Ⅱ-10，破除天上有線、北極星最亮迷思)、mold-and-microbes(G5黴菌分解者/INa-Ⅲ-10＋探究能力；無專屬分解者/微生物碼、據實標註；安全紅線發霉物全程密封不聞不摸不吃)、heredity-family-face(G6遺傳/INd-Ⅲ-4，子代非平均、後天不遺傳；性狀調查顧及倫理與隱私、不評優劣)。⚠️ 本輪踩雷：延伸閱讀又寫錯檔名（moon-changes-face→grade-4/moon-changing-face、grade-6/plant-reproduction→grade-5/plant-reproduction），寫連結前務必 ls／grep topics.json 確認實際路徑與年級。
  - 第9輪 `4388daf`→`d490553`：measuring-toolbox(G3測量工具/INc-Ⅱ-1+2＋探究能力，感覺不可靠、起點對0平視、數字加單位)、compass-earth-magnet(G4指北針地磁/INe-Ⅱ-7，磁極同斥異吸、地球像大磁鐵、只吸含鐵；紅線磁鐵遠離磁卡電器不吞)、inclined-plane-screw(G5斜面/INb-Ⅲ-4，省力不省功、越緩越省力、螺絲=捲起斜面)、renewable-energy(G6再生能源/INg-Ⅲ-5，再生vs非再生、發電是能量轉換、能量守恆不說被用光、紅線不碰插座高壓)。延伸閱讀連結皆先 grep topics.json 確認，本輪無檔名踩雷。
  - 第10輪（最後一輪）`158dd72`→`17c4e38`：silkworm-diary(G3蠶寶寶生活史/INd-Ⅱ-3，完全變態四階段、愛護生命勿野放)、campus-weather-station(G4氣象站/INd-Ⅱ-7，雨量直筒量、風向來向命名、雷雨進室內)、four-seasons-stars(G5四季星空/INc-Ⅲ-14+13，公轉造成、獵戶座被太陽蓋住非消失、區辨自轉/公轉)、data-tells-story(G6圖表統計/對應學習表現探究能力—資料處理與論證，無專屬內容碼據實標註；選對圖表、縱軸從0誠實不誤導、相關≠因果)。⚠️ 本輪踩雷：延伸閱讀寫錯檔名(typhoon-growth→how-typhoon-grows、dissolving-detective→dissolving-fast-slow)、data 篇一度誤打英文「changes」與出現 1 個亂碼字元(�)，皆當場修正——每篇完成除 Cyrillic 外，也要檢查 `s.count('�')`==0 與有無殘留英文單字。

## 🎉 專案完成總結（第二批收官）
- **主題產製 100% 完成**：80 篇文章、圖解 240 張、分鏡 480 張，全數上線、線上皆 200、九大分類與四年級全覆蓋。
- 全程課綱代碼逐一 WebFetch 官方頁查證、無臆造；無專屬內容碼者（熱脹冷縮、分解者、圖表統計）皆改對應學習表現並於教師補充據實說明。
- 已跑 XML 合法性與 Cyrillic 檢查；教訓彙整：①每篇完成檢查 Cyrillic＋亂碼字元＋殘留英文單字；②寫延伸閱讀連結前先 grep topics.json 確認實際檔名與年級。
- **後續可選（非缺口）**：分鏡場景美化、跨篇搜尋/詞彙表串連、臉書宣傳文更新（第二批新篇）。
- **第二批剩 4 篇待產製（第 10 輪＝最後一輪，TOPIC-MAP 仍標 🚧）**。剩餘 id：G3 silkworm-diary(蠶寶寶/生活史；可查 INd-Ⅱ-3 生物生命週期)、G4 campus-weather-station(校園氣象站/INd-Ⅱ-7 天氣觀測儀器)、G5 four-seasons-stars(四季星空/INc-Ⅲ 天文，可查對應碼)、G6 data-tells-story(圖表統計/探究能力—資料整理與圖表判讀)。做完這 4 篇即全站 80/80 完成。產製前務必先 WebFetch 查證課綱代碼、寫延伸閱讀連結前先 ls／grep topics.json 確認檔名與年級。
- **每輪標準流程（照做）**：4 篇一輪 → 每篇 14 區塊 HTML＋3 圖解 SVG＋6 分鏡 SVG → 跑驗證腳本（見下「驗證」）→ topics.json/main.js/TOPIC-MAP 三處同步改 published → commit＋push → 等 Pages build=built → curl 驗證 200。
- ⚠️ **踩雷提醒**：(1) 寫作時曾兩度不慎混入 Cyrillic 字元（концепт、модель），每篇完成務必用 Python `re.search(r'[Ѐ-ӿ]', s)` 或 ripgrep 檢查。(2) 延伸閱讀連結**不可指向 status=planned 未上線篇**（曾誤連，改連已上線篇）。(3) SVG 顏色值別打錯（曾寫成 `#cdddd d` 含空格）。(4) 每篇 SVG 用 `xml.dom.minidom` 驗證合法。

## 第一批回顧：🎉 40 篇全部完成上線，線上皆 200

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
