/* 黑熊老師自然科學繪本百科 — main.js
   因為要能用 file:// 直接開啟（GitHub Pages 也可用），
   不使用 fetch 讀 JSON，改在此內嵌 TOPICS 副本。
   ⚠️ 修改主題清單時，請同步 data/topics.json。 */

const CATEGORY_NAMES = {
  "plants-life":"植物與生命",
  "animals-insects":"動物與昆蟲",
  "air-water-weather":"空氣、水與天氣",
  "sound-light-electricity":"聲音、光與電",
  "force-motion-machines":"力、運動與機械",
  "matter-heat-change":"物質、熱與變化",
  "earth-resources":"地表、岩石與自然資源",
  "ecology-sustainability":"生態系與環境永續",
  "inquiry-methods":"科學方法與探究實驗"
};

const CATEGORY_EMOJI = {
  "plants-life":"🌱","animals-insects":"🐞","air-water-weather":"🌦️",
  "sound-light-electricity":"💡","force-motion-machines":"⚙️","matter-heat-change":"🔥",
  "earth-resources":"🏔️","ecology-sustainability":"🌍","inquiry-methods":"🔬"
};

const TOPICS = [
  {id:"plants-need-sunlight",title:"植物為什麼需要陽光？",grade:3,category:"plants-life",status:"published",path:"topics/grade-3/plants-need-sunlight.html",keywords:["陽光","葉子","光合作用","養分"]},
  {id:"seed-travel",title:"種子去旅行：種子的傳播大冒險",grade:3,category:"plants-life",status:"published",path:"topics/grade-3/seed-travel.html",keywords:["種子","傳播","果實"]},
  {id:"leaf-shape-code",title:"葉子的形狀密碼",grade:3,category:"plants-life",status:"planned",path:"",keywords:["葉形","葉脈","分類"]},
  {id:"animal-homes",title:"動物的家在哪裡？棲息地觀察",grade:3,category:"animals-insects",status:"planned",path:"",keywords:["棲息地","覓食","校園動物"]},
  {id:"air-strongman",title:"空氣是看不見的大力士",grade:3,category:"air-water-weather",status:"published",path:"topics/grade-3/air-strongman.html",keywords:["空氣","大氣壓力","占空間"]},
  {id:"water-three-faces",title:"水的三張臉：固態、液態、氣態",grade:3,category:"air-water-weather",status:"published",path:"topics/grade-3/water-three-faces.html",keywords:["結冰","蒸發","三態"]},
  {id:"magnet-superpower",title:"磁鐵的超能力：吸與不吸",grade:3,category:"force-motion-machines",status:"published",path:"topics/grade-3/magnet-superpower.html",keywords:["磁鐵","磁極","指北針"]},
  {id:"kitchen-dissolving",title:"廚房裡的溶解魔法",grade:3,category:"matter-heat-change",status:"planned",path:"",keywords:["溶解","糖","鹽","水溶液"]},
  {id:"thermometer-talks",title:"溫度計會說話：冷熱怎麼量",grade:3,category:"matter-heat-change",status:"planned",path:"",keywords:["溫度","攝氏","測量"]},
  {id:"campus-observer",title:"校園裡的小小觀察家",grade:3,category:"inquiry-methods",status:"published",path:"topics/grade-3/campus-observer.html",keywords:["觀察","紀錄","放大鏡"]},

  {id:"why-insects-six-legs",title:"昆蟲為什麼有六隻腳？",grade:4,category:"animals-insects",status:"published",path:"topics/grade-4/why-insects-six-legs.html",keywords:["昆蟲","六隻腳","頭胸腹","蜘蛛"]},
  {id:"insect-metamorphosis",title:"昆蟲的變身魔術：完全變態與不完全變態",grade:4,category:"animals-insects",status:"published",path:"topics/grade-4/insect-metamorphosis.html",keywords:["變態","蛹","蝴蝶"]},
  {id:"weather-reporter-secret",title:"天氣預報員的祕密",grade:4,category:"air-water-weather",status:"planned",path:"",keywords:["天氣","氣溫","風向","雲"]},
  {id:"where-does-water-go",title:"水往哪裡去？蒸發與凝結",grade:4,category:"air-water-weather",status:"planned",path:"",keywords:["蒸發","凝結","水循環"]},
  {id:"how-sound-reaches-ears",title:"聲音是怎麼跑到耳朵裡的？",grade:4,category:"sound-light-electricity",status:"published",path:"topics/grade-4/how-sound-reaches-ears.html",keywords:["振動","傳播","介質"]},
  {id:"light-travels-straight",title:"光走直線嗎？影子的祕密",grade:4,category:"sound-light-electricity",status:"published",path:"topics/grade-4/light-travels-straight.html",keywords:["光","直進","影子"]},
  {id:"circuit-lights-up",title:"電路接通了！燈泡為什麼會亮",grade:4,category:"sound-light-electricity",status:"published",path:"topics/grade-4/circuit-lights-up.html",keywords:["電路","電池","導體","開關"]},
  {id:"moon-changing-face",title:"月亮為什麼會變臉？",grade:4,category:"earth-resources",status:"published",path:"topics/grade-4/moon-changing-face.html",keywords:["月相","滿月","農曆"]},
  {id:"river-sculptor",title:"河流是大地的雕刻家",grade:4,category:"earth-resources",status:"planned",path:"",keywords:["河流","侵蝕","堆積","地形"]},
  {id:"what-is-force",title:"力是什麼？推推拉拉的科學",grade:4,category:"force-motion-machines",status:"planned",path:"",keywords:["力","推","拉","形變"]},

  {id:"how-heat-travels",title:"熱為什麼會傳來傳去？",grade:5,category:"matter-heat-change",status:"published",path:"topics/grade-5/how-heat-travels.html",keywords:["熱","傳導","對流","輻射","保溫"]},
  {id:"acid-base-detective",title:"水溶液的酸鹼偵探",grade:5,category:"matter-heat-change",status:"published",path:"topics/grade-5/acid-base-detective.html",keywords:["酸性","鹼性","指示劑","紫甘藍"]},
  {id:"fire-triangle",title:"燃燒需要什麼？火三角的祕密",grade:5,category:"matter-heat-change",status:"published",path:"topics/grade-5/fire-triangle.html",keywords:["燃燒","燃點","滅火"]},
  {id:"why-iron-rusts",title:"鐵為什麼會生鏽？",grade:5,category:"matter-heat-change",status:"published",path:"topics/grade-5/why-iron-rusts.html",keywords:["生鏽","氧化","防鏽"]},
  {id:"dissolving-fast-slow",title:"溶解的快與慢：科學偵探的變因實驗",grade:5,category:"inquiry-methods",status:"published",path:"topics/grade-5/dissolving-fast-slow.html",keywords:["操縱變因","控制變因","公平測試"]},
  {id:"friction-friend-or-foe",title:"力與運動：摩擦力是敵人還是朋友？",grade:5,category:"force-motion-machines",status:"published",path:"topics/grade-5/friction-friend-or-foe.html",keywords:["摩擦力","接觸面","輪子"]},
  {id:"plant-reproduction",title:"植物的繁殖大作戰",grade:5,category:"plants-life",status:"planned",path:"",keywords:["繁殖","花","傳粉","扦插"]},
  {id:"sun-shadow-clock",title:"太陽的位置與影子時鐘",grade:5,category:"earth-resources",status:"planned",path:"",keywords:["太陽","影子","方位","日晷"]},
  {id:"pitch-and-volume",title:"聲音的高低大小從哪裡來？",grade:5,category:"sound-light-electricity",status:"planned",path:"",keywords:["音量","音調","振動","樂器"]},
  {id:"animals-in-winter",title:"動物如何度過寒冬？",grade:5,category:"animals-insects",status:"planned",path:"",keywords:["冬眠","遷徙","適應"]},

  {id:"food-chain-story",title:"食物鏈是誰吃誰的故事嗎？",grade:6,category:"ecology-sustainability",status:"published",path:"topics/grade-6/food-chain-story.html",keywords:["食物鏈","生產者","消費者","分解者","能量"]},
  {id:"electromagnet-duo",title:"電與磁的雙人舞：電磁鐵",grade:6,category:"sound-light-electricity",status:"published",path:"topics/grade-6/electromagnet-duo.html",keywords:["電磁鐵","線圈","馬達"]},
  {id:"lever-and-pulley",title:"槓桿與滑輪：簡單機械省力術",grade:6,category:"force-motion-machines",status:"published",path:"topics/grade-6/lever-and-pulley.html",keywords:["槓桿","支點","滑輪","省力"]},
  {id:"how-typhoon-grows",title:"天氣系統：颱風是怎麼長大的？",grade:6,category:"air-water-weather",status:"published",path:"topics/grade-6/how-typhoon-grows.html",keywords:["颱風","低氣壓","衛星雲圖","防災"]},
  {id:"earthquake-and-plates",title:"大地的變動：地震與板塊",grade:6,category:"earth-resources",status:"published",path:"topics/grade-6/earthquake-and-plates.html",keywords:["地震","板塊","斷層","防災"]},
  {id:"energy-journey",title:"能量的旅行：能量轉換與守恆",grade:6,category:"matter-heat-change",status:"planned",path:"",keywords:["能量","轉換","太陽能"]},
  {id:"ecosystem-balance",title:"生態系的平衡與外來種入侵",grade:6,category:"ecology-sustainability",status:"planned",path:"",keywords:["生態系","外來種","族群","平衡"]},
  {id:"one-earth-sustainability",title:"我們只有一個地球：資源與永續",grade:6,category:"ecology-sustainability",status:"published",path:"topics/grade-6/one-earth-sustainability.html",keywords:["資源","永續","減塑","節能"]},
  {id:"rock-mineral-story",title:"岩石與礦物的身世之謎",grade:6,category:"earth-resources",status:"planned",path:"",keywords:["岩石","礦物","沉積","火成"]},
  {id:"how-scientists-think",title:"科學家怎麼想？從問題到結論的探究之路",grade:6,category:"inquiry-methods",status:"planned",path:"",keywords:["假設","實驗","證據","科學方法"]}
];

/* 今日科學問題 */
const DAILY_QUESTIONS = [
  "為什麼植物的葉子大多是綠色的？",
  "昆蟲有六隻腳，蜘蛛有幾隻？牠算昆蟲嗎？",
  "為什麼金屬湯匙放進熱湯裡，握著的地方也會變熱？",
  "食物鏈的箭頭，應該從『被吃的』指向『吃它的』，還是反過來？",
  "為什麼溼衣服晾久了會變乾，水跑去哪裡了？",
  "月亮每天看起來形狀不一樣，它真的變形了嗎？",
  "把糖加進熱水和冷水，哪一杯溶得比較快？為什麼？",
  "為什麼鐵放久了會生鏽，但不鏽鋼比較不會？"
];

function pickDaily(list){
  // 依日期選一題，同一天固定，不使用亂數
  const d = new Date();
  const idx = (d.getFullYear()*372 + d.getMonth()*31 + d.getDate()) % list.length;
  return list[idx];
}

function tileHTML(t){
  const cat = CATEGORY_NAMES[t.category] || t.category;
  const emoji = CATEGORY_EMOJI[t.category] || "📘";
  if(t.status === "published" && t.path){
    return `<a class="tile" href="${t.path}">
      <div class="emoji">${emoji}</div>
      <div class="t-title">${t.title}</div>
      <div class="t-sub">${t.grade}年級 · ${cat}</div></a>`;
  }
  return `<div class="tile" style="opacity:.6;cursor:default" title="即將推出">
      <div class="emoji">${emoji}</div>
      <div class="t-title">${t.title}</div>
      <div class="t-sub">${t.grade}年級 · ${cat} · 🚧籌備中</div></div>`;
}

function renderSearch(q){
  const box = document.getElementById("searchResults");
  if(!box) return;
  q = (q||"").trim();
  if(!q){ box.innerHTML=""; return; }
  const hit = TOPICS.filter(t=>{
    const hay = t.title + " " + (CATEGORY_NAMES[t.category]||"") + " " + (t.keywords||[]).join(" ") + " " + t.grade + "年級";
    return hay.includes(q);
  });
  if(!hit.length){ box.innerHTML = `<p class="result-empty">找不到「${q}」，換個關鍵字試試（例如：昆蟲、熱、食物鏈、光合作用）。</p>`; return; }
  box.innerHTML = `<div class="grid cards">${hit.map(tileHTML).join("")}</div>`;
}

function renderRecommend(){
  const box = document.getElementById("recommendList");
  if(!box) return;
  const pub = TOPICS.filter(t=>t.status==="published");
  box.innerHTML = `<div class="grid cards">${pub.map(tileHTML).join("")}</div>`;
}

/* 清單頁（年級 / 主題索引）：讀 body 的 data-list-grade 或 data-list-category
   路徑前綴用 data-prefix（索引頁在子資料夾，需 ../../） */
function renderListing(){
  const box = document.getElementById("listing");
  if(!box) return;
  const b = document.body;
  const g = b.getAttribute("data-list-grade");
  const c = b.getAttribute("data-list-category");
  const prefix = b.getAttribute("data-prefix") || "";
  let items = TOPICS.slice();
  if(g) items = items.filter(t=>String(t.grade)===String(g));
  if(c) items = items.filter(t=>t.category===c);
  // 讓路徑相對於索引頁位置
  const withPrefix = items.map(t=>Object.assign({},t,{path:t.path?prefix+t.path:""}));
  const pubCount = withPrefix.filter(t=>t.status==="published").length;
  const head = document.getElementById("listingCount");
  if(head) head.textContent = `共 ${withPrefix.length} 篇主題，已上線 ${pubCount} 篇（其餘籌備中）。`;
  box.innerHTML = `<div class="grid cards">${withPrefix.map(tileHTML).join("")}</div>`;
}

document.addEventListener("DOMContentLoaded", ()=>{
  const dq = document.getElementById("dailyQuestion");
  if(dq) dq.textContent = pickDaily(DAILY_QUESTIONS);

  renderRecommend();
  renderListing();

  const si = document.getElementById("searchInput");
  if(si){
    si.addEventListener("input", e=>renderSearch(e.target.value));
    si.addEventListener("keydown", e=>{ if(e.key==="Enter") renderSearch(e.target.value); });
  }
});
