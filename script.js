/* ============================================================
   CONSTANTS
   ============================================================ */
const INITIAL_COUNT = 9; // cards shown before "Load More"

/* ============================================================
   PROJECT DATA
   ============================================================ */
const projects = [

  /* ── Brand Identity ─────────────────────────────────────── */
  {
    id: 'osense-cis',
    title: 'osense CIS',
    titleEn: 'osense Corporate Identity System',
    categories: ['brand'],
    categoryLabel: 'Brand Identity',
    tool: 'Adobe Illustrator',
    cover: 'images/osense-cis-1.png',
    images: [
      { src: 'images/osense-cis-1.png', caption: '服務分類圖解 — 三大服務種類以圓形構成視覺化呈現。' },
      { src: 'images/osense-cis-2.png', caption: '品牌識別應用 — 色彩、標誌與排版系統完整展示。' },
      { src: 'images/osense-cis-3.png', caption: '設計系統規範 — 字體、色板與元素使用標準。' }
    ],
    concept: '將公司服務分為三大種類：「虛擬人、產品服務」、「企業智能服務」、「運動科技」，由三個種類構成圓形識別語言，建立清晰且具辨識度的品牌形象。'
  },
  {
    id: 'fuguang-logo',
    title: '浮光音樂工作室',
    titleEn: 'Fuguang Music Studio LOGO',
    categories: ['brand'],
    categoryLabel: 'Brand Identity',
    tool: 'Adobe Illustrator',
    cover: 'images/fuguang-logo.jpg',
    images: [{ src: 'images/fuguang-logo.jpg', caption: '以音波與光的概念進行設計，符合客戶想要的意象。' }],
    concept: '為一間音樂工作室進行 LOGO 設計，將聲音的流動性與光的穿透感融合，創造出兼具動態與優雅的品牌識別。'
  },
  {
    id: 'liveband-icon',
    title: '聽團仔 APP Icon',
    titleEn: 'Liveband APP Icon Design',
    categories: ['brand'],
    categoryLabel: 'Icon Design',
    tool: 'Adobe Illustrator',
    cover: 'images/brand-03.png',
    images: [{ src: 'images/brand-03.png', caption: '聽團仔 APP icon，以耳機意象直觀呈現音樂主題。' }],
    concept: '聽團仔 APP icon 設計，為 APP 打造適合的 icon，以耳機的意象呈現，直接明確讓人一目了然這是個與音樂相關的 APP。'
  },

  /* ── Graphic Design ──────────────────────────────────────── */
  {
    id: 'tiger-card',
    title: '虎年新年賀卡',
    titleEn: 'Year of Tiger New Year Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/tiger-card.jpg',
    images: [{ src: 'images/tiger-card.jpg', caption: '虎年賀卡：以單色粗線條繪出老虎意象，結合貓伸懶腰動作。' }],
    concept: '以十二生肖為創作主題，透過幾何化與角色化的視覺語言，重新詮釋傳統生肖文化。利用鮮明色彩與簡潔構圖，讓新年祝福以更年輕、現代且富有趣味的方式傳遞。'
  },
  {
    id: 'rabbit-card',
    title: '兔年新年賀卡',
    titleEn: 'Year of Rabbit New Year Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/rabbit-card.jpg',
    images: [{ src: 'images/rabbit-card.jpg', caption: '兔年賀卡：紅色系傳遞過年氛圍，兔子耳朵變成彩帶的意象。' }],
    concept: '以十二生肖為創作主題，透過幾何化與角色化的視覺語言，重新詮釋傳統生肖文化。利用鮮明色彩與簡潔構圖，讓新年祝福以更年輕、現代且富有趣味的方式傳遞。'
  },
  {
    id: 'dragon-card',
    title: '龍年新年賀卡',
    titleEn: 'Year of Dragon New Year Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/dragon-card-01.jpg',
    images: [
      { src: 'images/dragon-card-01.jpg', caption: '龍年賀卡（正面）：流動龍形線條與金黃配色。' },
      { src: 'images/dragon-card-02.jpg', caption: '龍年賀卡（背面）：正背面設計的連接性讓人多一種驚喜。' }
    ],
    concept: '以十二生肖為創作主題，透過幾何化與角色化的視覺語言，重新詮釋傳統生肖文化。利用鮮明色彩與簡潔構圖，讓新年祝福以更年輕、現代且富有趣味的方式傳遞。'
  },
  {
    id: 'snake-card',
    title: '蛇年新年賀卡',
    titleEn: 'Year of Snake New Year Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/snake-card-01.jpg',
    images: [
      { src: 'images/snake-card-01.jpg', caption: '蛇年賀卡（正面）：童趣貪食蛇遊戲概念。' },
      { src: 'images/snake-card-02.jpg', caption: '蛇年賀卡（背面）：正背面設計連接性。' }
    ],
    concept: '以十二生肖為創作主題，透過幾何化與角色化的視覺語言，重新詮釋傳統生肖文化。利用鮮明色彩與簡潔構圖，讓新年祝福以更年輕、現代且富有趣味的方式傳遞。'
  },
  {
    id: 'horse-card',
    title: '馬年新年賀卡',
    titleEn: 'Year of Horse New Year Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/horse-card.png',
    images: [{ src: 'images/horse-card.png', caption: '馬年賀卡：近距離馬頭構圖與溫暖大地色系。' }],
    concept: '以十二生肖為創作主題，透過幾何化與角色化的視覺語言，重新詮釋傳統生肖文化。利用鮮明色彩與簡潔構圖，讓新年祝福以更年輕、現代且富有趣味的方式傳遞。'
  },
  {
    id: 'rabbit-birthday',
    title: '兔年生日卡',
    titleEn: 'Year of Rabbit Birthday Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/rabbit-birthday.jpg',
    images: [{ src: 'images/rabbit-birthday.jpg', caption: '兔年生日卡：以幸運餅乾籤詩為概念，協力車象徵一起前進。' }],
    concept: '延伸生肖賀卡的創作精神，以每個生肖的特色發想生日主題設計，兼具個人情感與祝福意涵，讓生日卡片成為獨特且有溫度的禮物。'
  },
  {
    id: 'dragon-birthday',
    title: '龍年生日卡',
    titleEn: 'Year of Dragon Birthday Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/dragon-birthday.jpg',
    images: [{ src: 'images/dragon-birthday.jpg', caption: '龍年生日卡：以恐龍寶寶概念設計，破蛋而出象徵生日快樂。' }],
    concept: '延伸生肖賀卡的創作精神，以每個生肖的特色發想生日主題設計，兼具個人情感與祝福意涵，讓生日卡片成為獨特且有溫度的禮物。'
  },
  {
    id: 'snake-birthday',
    title: '蛇年生日卡',
    titleEn: 'Year of Snake Birthday Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/snake-birthday.jpg',
    images: [{ src: 'images/snake-birthday.jpg', caption: '蛇年生日卡：延伸貪食蛇遊戲，以復古遊戲機像素感呈現。' }],
    concept: '延伸生肖賀卡的創作精神，以每個生肖的特色發想生日主題設計，兼具個人情感與祝福意涵，讓生日卡片成為獨特且有溫度的禮物。'
  },
  {
    id: 'horse-birthday',
    title: '馬年生日卡',
    titleEn: 'Year of Horse Birthday Card',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/horse-birthday.png',
    images: [{ src: 'images/horse-birthday.png', caption: '馬年生日卡：在禮物包裡填上想要的禮物，象徵「馬上有錢」。' }],
    concept: '延伸生肖賀卡的創作精神，以每個生肖的特色發想生日主題設計，兼具個人情感與祝福意涵，讓生日卡片成為獨特且有溫度的禮物。'
  },
  {
    id: 'rain',
    title: 'Rain',
    titleEn: 'Rain — Emotional Illustration',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/rain.jpg',
    images: [{ src: 'images/rain.jpg', caption: '以情緒為創作靈感，將不斷下雨的天氣與稍微無奈的情緒表現在創作中。' }],
    concept: '以情緒為靈感，把不斷下雨的天氣與稍微無奈的情緒轉化為具象畫面，探索情緒與圖像語言之間的關係。'
  },
  {
    id: 'nightmare',
    title: '夢魘',
    titleEn: 'Nightmare — Dream Illustration',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/nightmare.jpg',
    images: [{ src: 'images/nightmare.jpg', caption: '把當時作夢遇到的情境表現在創作中。' }],
    concept: '把當時作夢遇到的情境表現在創作中，以視覺化手法捕捉夢境中模糊且超現實的氛圍，探索潛意識與圖像創作的邊界。'
  },
  {
    id: 'earth',
    title: '地球快消失了',
    titleEn: 'Earth Is Disappearing',
    categories: ['graphic'],
    categoryLabel: 'Graphic Design',
    tool: 'Adobe Illustrator',
    cover: 'images/earth-disappearing.jpg',
    images: [{ src: 'images/earth-disappearing.jpg', caption: '全球暖化越來越嚴重，表達我抱著正逐漸消失的地球在哭泣。' }],
    concept: '全球暖化越來越嚴重，以強烈情感視角回應環境議題，透過個人化敘事呈現對地球永續的關注。'
  },

  /* ── Motion Design — AI + Motion ────────────────────────── */
  {
    id: 'osense-website-video',
    title: 'Osense 官網形象影片',
    titleEn: 'Osense Official Website Brand Video',
    categories: ['motion'],
    categoryLabel: 'AI + Motion Design',
    tool: 'After Effects · AI 圖像生成 · Premiere Pro',
    duration: '1:04',
    videoId: 'L7ukon4Gx9Y',
    isVideo: true, noEmbed: true,
    concept: '結合 AI 影像生成、版面設計、動態效果與音樂剪輯，製作 Osense 品牌官網形象影片，完整呈現公司服務與品牌視覺識別。'
  },
  {
    id: 'osense-event-visual',
    title: 'Osense 活動主視覺',
    titleEn: 'Osense Event Main Visual',
    categories: ['motion'],
    categoryLabel: 'AI + Motion Design',
    tool: 'After Effects · AI 生成',
    duration: '0:11',
    videoId: 'QCuWfqN9wJQ',
    isVideo: true, noEmbed: true,
    concept: '運用 AI 生成結合動態效果與音樂剪輯，快速製作符合品牌調性的活動主視覺動態素材。'
  },
  {
    id: 'taoyuan-logistics-pitch',
    title: '桃園物流提案影片',
    titleEn: 'Taoyuan Logistics Pitch Video',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Premiere Pro',
    duration: '1:23',
    videoId: 'inv_u87vmfM',
    isVideo: true, noEmbed: true,
    concept: '結合版面設計、影片剪輯與 MG 動態物件，製作桃園物流手推車服務提案影片，最終成功獲得合作專案。'
  },
  {
    id: 'jumbo-ad',
    title: 'Jumbo 廣告影片',
    titleEn: 'Jumbo Advertising Spot',
    categories: ['motion'],
    categoryLabel: 'AI + Motion Design',
    tool: 'After Effects · AI 生成 · Premiere Pro',
    duration: '1:15',
    videoId: 'fxNLl3-1pRE',
    isVideo: true, noEmbed: true,
    concept: '整合版面設計、影片剪輯、AI 生成素材與動態效果，為 Jumbo 品牌打造完整的廣告形象影片。'
  },
  {
    id: 'virtual-person-intro',
    title: '虛擬人介紹影片',
    titleEn: 'Virtual Person Introduction Video',
    categories: ['motion'],
    categoryLabel: 'AI + Motion Design',
    tool: 'After Effects · AI 生成',
    duration: '0:10',
    videoId: 'XPU-DT08E24',
    isVideo: true,
    concept: '結合 AI 生成技術與動態效果，製作虛擬人形象介紹短片，展示 AI SaaS 產品的核心功能與品牌視覺個性。'
  },
  {
    id: 'ovideo-guide',
    title: 'OVideo 網站導覽影片',
    titleEn: 'OVideo Website Guide Video',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:16',
    videoId: 'QYM8ZaxZlfo',
    isVideo: true,
    concept: '以插畫風格結合動態效果，製作 OVideo 網站功能導覽影片，以清晰易懂的視覺語言引導用戶了解產品操作流程。'
  },
  {
    id: 'maixiang-newyear',
    title: '麥鄉新年動態',
    titleEn: 'Maixiang New Year Motion Graphics',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:06',
    videoId: 'ydXEb6S1vCs',
    isVideo: true,
    concept: '為麥鄉品牌製作新年節慶動態圖卡，以活潑的 MG 動畫語言傳遞品牌溫度與節日祝福，適用於社群媒體投放。'
  },
  {
    id: 'maixiang-midautumn',
    title: '麥鄉中秋節動態',
    titleEn: 'Maixiang Mid-Autumn Festival Motion',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:06',
    videoId: 'JOurqgiGhsc',
    isVideo: true,
    concept: '為麥鄉品牌製作中秋節節慶動態素材，融入傳統節日元素與品牌色彩語言，打造具品牌一致性的節日視覺內容。'
  },
  {
    id: 'maixiang-lunar',
    title: '麥鄉農曆新年賀卡動態',
    titleEn: 'Maixiang Lunar New Year Card',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:06',
    videoId: 'htVZ1FF5D38',
    isVideo: true,
    concept: '製作農曆新年電子賀卡動態，以 MG 動畫展現品牌祝福語與視覺元素，配合節日氛圍傳遞溫馨感。'
  },
  {
    id: 'riverside-opening',
    title: '河岸音樂節開場動畫',
    titleEn: 'Riverside Music Festival Opening',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:06',
    videoId: 'hgYOCJM0BJU',
    isVideo: true,
    concept: '為河岸音樂節製作活動開場動畫，以充滿能量的視覺節奏呼應音樂節奏，打造活動現場的視覺氛圍。'
  },
  {
    id: 'ximas-far-eastern',
    title: '新北聖誕遠東贊助賀卡',
    titleEn: 'New Taipei Christmas Sponsorship Card',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:06',
    videoId: 'jJcD6yabln4',
    isVideo: true,
    concept: '為新北聖誕活動製作遠東百貨贊助感謝動態賀卡，融合品牌識別與節慶元素，兼顧贊助方形象與活動視覺一致性。'
  },
  {
    id: 'ximas-children',
    title: '新北聖誕兒童版動態',
    titleEn: 'New Taipei Christmas Children\'s Version',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:11',
    videoId: 'aebNaiq7Y6I',
    isVideo: true,
    concept: '為新北聖誕活動製作兒童版動態視覺，以輕快活潑的 MG 動畫語言吸引親子族群。'
  },
  {
    id: 'dajia-mazu',
    title: '大甲媽祖廣告動畫',
    titleEn: 'Dajia Mazu Festival Advertisement',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:11',
    videoId: 'Wp4XLtqw_gI',
    isVideo: true,
    concept: '以 MG 動畫形式製作大甲媽祖活動宣傳廣告，融合傳統宗教文化與現代動態設計語言。'
  },
  {
    id: 'far-eastern-time',
    title: '遠東時間賀卡動態',
    titleEn: 'Far Eastern Time Greeting Card',
    categories: ['motion'],
    categoryLabel: 'MG Animation',
    tool: 'After Effects · Adobe Illustrator',
    duration: '0:06',
    videoId: 'LJP5fKmBMk8',
    isVideo: true,
    concept: '為遠東品牌製作主題動態賀卡，以時間流逝為視覺概念，結合品牌調性設計具有儀式感的動態祝福素材。'
  },
  {
    id: 'taitung-countdown',
    title: '2023 台東跨年倒數',
    titleEn: '2023 Taitung New Year Countdown',
    categories: ['motion'],
    categoryLabel: 'Advertising Production',
    tool: 'Premiere Pro · After Effects',
    duration: '0:31',
    videoId: 'B8JUm1B9YUQ',
    isVideo: true,
    concept: '剪輯製作 2023 台東跨年倒數活動宣傳影片，整合活動亮點、現場氛圍與倒數視覺，為活動預熱吸引觀眾參與。'
  },
  {
    id: 'tainan-goodyoung-2022',
    title: '2022 台南好Young',
    titleEn: '2022 Tainan Good Young',
    categories: ['motion'],
    categoryLabel: 'Advertising Production',
    tool: 'Premiere Pro · After Effects',
    duration: '0:16',
    videoId: 'mtDihSB-Ulw',
    isVideo: true,
    concept: '製作 2022 台南好Young 活動宣傳短片，以年輕活力為核心調性，快速呈現活動特色與亮點。'
  },
  {
    id: 'rock-taichung',
    title: '搖滾台中卡司特輯',
    titleEn: 'Rock Taichung Cast Feature',
    categories: ['motion'],
    categoryLabel: 'Advertising Production',
    tool: 'Premiere Pro · After Effects',
    duration: '0:31',
    videoId: 'Te27bw_hEVs',
    isVideo: true,
    concept: '製作搖滾台中活動演出陣容特輯影片，以搖滾視覺風格呈現卡司陣容，為音樂活動製造期待感與話題性。'
  },
  {
    id: 'wanjinshi-marathon',
    title: '萬金石馬拉松',
    titleEn: 'Wan Jin Shi Marathon',
    categories: ['motion'],
    categoryLabel: 'Advertising Production',
    tool: 'Premiere Pro · After Effects',
    duration: '0:21',
    videoId: 'BDFLAAmfSJA',
    isVideo: true,
    concept: '製作萬金石馬拉松賽事宣傳影片，捕捉運動熱情與自然景觀之美，以動感節奏激勵參賽者。'
  },
  {
    id: 'evergreen-marine',
    title: '長榮海運',
    titleEn: 'Evergreen Marine Corporation',
    categories: ['motion'],
    categoryLabel: 'Advertising Production',
    tool: 'Premiere Pro · After Effects',
    duration: '0:16',
    videoId: 't9g8vzd7MSA',
    isVideo: true,
    concept: '為長榮海運製作品牌形象宣傳短片，以穩健大氣的視覺風格展現企業實力。'
  },
  {
    id: 'tainan-goodyoung-ximas-2024',
    title: '2024 台南好Young 聖誕',
    titleEn: '2024 Tainan Good Young Christmas',
    categories: ['motion'],
    categoryLabel: 'Advertising Production',
    tool: 'Premiere Pro · After Effects',
    duration: '0:16',
    videoId: 'Wr2COxNGBtI',
    isVideo: true,
    concept: '製作 2024 台南好Young 聖誕節宣傳短片，融合在地特色與節慶氛圍，呼應品牌年輕化定位。'
  },
  {
    id: 'tainan-goodyoung-ximas-2023',
    title: '2023 台南好Young 聖誕',
    titleEn: '2023 Tainan Good Young Christmas',
    categories: ['motion'],
    categoryLabel: 'Advertising Production',
    tool: 'Premiere Pro · After Effects',
    duration: '0:21',
    videoId: 'yaoeQNmRZ80',
    isVideo: true,
    concept: '製作 2023 台南好Young 聖誕節宣傳影片，整合活動資訊與視覺風格，建立年度聖誕活動的視覺識別延續性。'
  },
  {
    id: 'blueseeds-futong',
    title: '藍種子富桐花園',
    titleEn: 'Blueseeds Futong Garden',
    categories: ['motion'],
    categoryLabel: 'Event Highlight',
    tool: 'Premiere Pro · After Effects',
    duration: '0:31',
    videoId: '8ev8H5HIjU4',
    isVideo: true,
    concept: '剪輯藍種子富桐花園活動精華影片，以景觀之美為核心，透過鏡頭語言傳遞空間氛圍與活動溫度。'
  },
  {
    id: 'wanjinshi-clean-run',
    title: '萬金石淨街跑',
    titleEn: 'Wan Jin Shi Clean Street Run',
    categories: ['motion'],
    categoryLabel: 'Event Highlight',
    tool: 'Premiere Pro · After Effects',
    duration: '0:31',
    videoId: 'up3dfZbN4U4',
    isVideo: true,
    concept: '剪輯萬金石淨街跑活動紀錄影片，結合公益理念與運動熱情，呈現參與者的能量與精神。'
  },
  {
    id: 'riverside-highlights',
    title: '河岸音樂節精華',
    titleEn: 'Riverside Music Festival Highlights',
    categories: ['motion'],
    categoryLabel: 'Event Highlight',
    tool: 'Premiere Pro · After Effects',
    duration: '0:46',
    videoId: 'UQ-L1XISks4',
    isVideo: true,
    concept: '剪輯河岸音樂節活動精華，以快節奏手法捕捉現場音樂能量，傳遞觀眾與表演者之間的熱情互動。'
  },
  {
    id: 'riverside-metro-aerial',
    title: '河岸音樂節都會區空拍精華',
    titleEn: 'Riverside Music Festival Metropolitan Aerial',
    categories: ['motion'],
    categoryLabel: 'Event Highlight',
    tool: 'Premiere Pro · After Effects · DJI',
    duration: '1:01',
    videoId: 'nlxNHNNXPbk',
    isVideo: true,
    concept: '結合空拍影像與現場剪輯，呈現河岸音樂節都會區場地的壯觀規模與活動氛圍。'
  },
  {
    id: 'riverside-metro',
    title: '河岸音樂節都會區精華',
    titleEn: 'Riverside Music Festival Metropolitan',
    categories: ['motion'],
    categoryLabel: 'Event Highlight',
    tool: 'Premiere Pro · After Effects',
    duration: '0:46',
    videoId: '08iFlX-Y5us',
    isVideo: true,
    concept: '剪輯河岸音樂節都會區場地精華片段，以都市景觀為背景，呈現音樂活動在城市空間的獨特魅力。'
  },
  {
    id: 'riverside-aerial',
    title: '河岸音樂節空拍影片',
    titleEn: 'Riverside Music Festival Aerial Footage',
    categories: ['motion'],
    categoryLabel: 'Event Highlight',
    tool: 'Premiere Pro · DJI',
    duration: '3:01',
    videoId: 'nGfSH-G3jPc',
    isVideo: true,
    concept: '以空拍視角完整記錄河岸音樂節，以壯闊的鳥瞰構圖呈現活動規模，兼具紀錄片與形象影片的視覺品質。'
  },

  /* ── UI Design ────────────────────────────────────────────── */
  {
    id: 'chihuo',
    title: '吃貨製造所',
    titleEn: 'Chihuo — Restaurant Website Design',
    categories: ['ui'],
    categoryLabel: 'UI Design System',
    tool: 'Figma · Wireframe · Prototype',
    cover: 'images/chihuo-ui.png',
    images: [
      { src: 'images/chihuo-ui.png', caption: '' },
      { src: 'videos/chihuo-demo.mp4', isVideo: true, caption: '痛點與解決' },
      { src: 'videos/chihuo-01.mp4',   isVideo: true, caption: '常駐於上方的 Navbar 讓用戶不迷航，幫助清楚且快速地找到想要的資訊。菜單區塊以 Hover 的方式呈現品項及價位，減少雜亂排版同時增加用戶體驗互動感，Card 結構也方便前端以 component 重複使用。' },
      { src: 'videos/chihuo-02.mp4',   isVideo: true, caption: '相關報導的區塊也採用 Card 結構呈現，以基本的圖片、標題、內容簡介與 BTN 組成，同樣方便前端以 component 重複使用，確保設計是容易實作並降低開發成本。卡片以毛玻璃及疊加效果打造層次，讓用戶在滑動時感受到細節，提升用戶體驗。' },
      { src: 'videos/chihuo-03.mp4',   isVideo: true, caption: '為網頁增加一個亮點功能解決顧客痛點，同時減少電話詢問的人力成本。由於店內時常客滿，不少顧客需在外等待或敗興而歸。為此設計了「即時空位資訊」功能，方便顧客前往之前查看，以便安排時間。' },
      { src: 'images/chihuo-pages.png',     caption: '完整設計全覽 — 頁面整合展示。' },
      { src: 'images/chihuo-ia.png',        caption: '網站框架設定' },
      { src: 'images/chihuo-token.png',     caption: 'Design Token' },
      { src: 'images/chihuo-btn.png',       caption: 'BTN' },
      { src: 'images/chihuo-component.png', caption: 'Component' },
      { src: 'images/chihuo-wireframe.png', caption: 'Wireframe' }
    ],
    concept: '餐飲品牌網站設計，以純植物性甜點為主題，聚焦提升用戶體驗與功能完整性。完整歷經資訊架構規劃、低保真 Wireframe、UI Design 到可互動 Prototype 的設計流程。',
    sections: [
      {
        h: '設計理念',
        p: 'Design Token 建構以品牌 LOGO 為主要配色，讓網頁呈現一致性。整體設計聚焦於提升用戶體驗與功能完整性，以植物性甜點為核心主題，結合品牌識別系統，打造具有一致性的視覺語言。'
      },
      {
        h: '核心功能設計',
        p: '• 旋轉輪播展示熱門打卡景點\n• 植物性甜點展示區塊（含精美圖像）\n• 持續固定的導航列，方便用戶查找資訊\n• 菜單卡片 Hover 互動效果，顯示品項與價格\n• 新聞／文章卡片採用毛玻璃與分層效果\n• 即時座位資訊功能，減少電話詢問負擔'
      },
      {
        h: '即時座位查詢',
        p: '針對餐廳常常爆滿的客戶痛點，設計即時座位資訊功能，讓顧客能在到訪前確認座位狀況，提升用餐體驗並降低店家電話接待負擔。'
      }
    ]
  },
  {
    id: 'liveband',
    title: '聽團仔',
    titleEn: 'Liveband — Music Community Mobile App',
    categories: ['ui'],
    categoryLabel: 'UI Design System',
    tool: 'Figma · Wireframe · Prototype',
    cover: 'images/liveband-ui.png',
    images: [
      { src: 'images/liveband-ui.png', caption: '' },
      { src: 'videos/liveband-demo.mp4', isVideo: true, caption: '痛點與解決' },
      { src: 'videos/liveband-01.mp4',   isVideo: true, caption: '這是一款針對「聽團族群」設計的 APP ，主打資訊整合服務及社群互動功能，讓所有喜歡同類活動的族群簡單便能彼此交流。' },
      { src: 'videos/liveband-02.mp4',   isVideo: true, caption: 'APP 裡設計社群功能，讓相同興趣的用戶能在此互動交流，交換心得與資訊。個人主頁能看到發佈的貼文，收藏的資訊也能方便查找，用戶可以透過追蹤彼此成為好友。' },
      { src: 'videos/liveband-03.mp4',   isVideo: true, caption: '設計「定位通知功能」即時掌握資訊！於身處1000公尺內的範圍，若附近剛好有音樂祭活動便會即時通知，連動地圖功能，並可明確知道所在地。' },
      { src: 'images/liveband-pages.png',     caption: '完整設計全覽 — 頁面整合展示。' },
      { src: 'images/liveband-ia.png',        caption: '網站框架設定' },
      { src: 'images/liveband-token.png',     caption: 'Design Token' },
      { src: 'images/liveband-btn.png',       caption: 'BTN' },
      { src: 'images/liveband-component.png', caption: 'Component' },
      { src: 'images/liveband-wireframe.png', caption: 'Wireframe' }
    ],
    concept: '為特定 TA 打造便利 App，以樂迷為核心用戶，打造整合資訊服務與社群互動的音樂 App，包含各種需求與社群功能，讓對相似活動有興趣的用戶能輕鬆交流與分享體驗。',
    sections: [
      {
        h: '搜尋體驗',
        p: 'SearchBar 製作提示字輪轉效果，幫助用戶更直接輸入關鍵字查詢，快速無感地完成搜尋目的，降低操作認知負擔。'
      },
      {
        h: '活動資訊',
        p: '活動簡介區塊採用 Card 結構，方便前端以 Component 重複使用；滑動效果以穩定停留為特點，確保用戶不會因滑動速度過快而錯過重要資訊。'
      },
      {
        h: '行事曆',
        p: '行事曆區塊以 List 概念設計，方便資料動態擴展，版面簡潔清晰，讓用戶一目了然掌握演出行程。'
      },
      {
        h: '社群功能',
        p: '用戶可發文、收藏資訊、相互追蹤。個人頁面顯示已發佈文章與收藏項目，方便隨時查看與管理個人動態。'
      },
      {
        h: '位置通知',
        p: '當音樂節在 1000 公尺範圍內舉辦時，系統即時推送通知，並整合地圖功能顯示確切位置，讓樂迷不錯過附近的精彩演出。'
      }
    ]
  },
  {
    id: 'techtalk',
    title: 'TechTalk',
    titleEn: 'TechTalk — Anonymous Tech Discussion App',
    categories: ['ui'],
    categoryLabel: 'UI Design System',
    tool: 'Figma · Google Stitch · Wireframe · Prototype',
    cover: 'images/techtalk-ui.png',
    images: [
      { src: 'images/techtalk-ui.png', caption: '' },
      { src: 'videos/techtalk-demo.mp4', isVideo: true, caption: '痛點與解決' },
      { src: 'videos/techtalk-01.mp4',   isVideo: true, caption: '這是一款能讓人匿名交流的 APP ，主要交流科技相關產業內幕、發展狀況、AI 最新資訊等等。' },
      { src: 'videos/techtalk-02.mp4',   isVideo: true, caption: '「特定產業類別」，特定科技業相關情報，各類別清楚統整，讓用戶能更快速找到有興趣的方向及想要的資訊。通知分類整理，過多資訊不混亂，方便用戶清楚查看。' },
      { src: 'videos/techtalk-03.mp4',   isVideo: true, caption: '為了增加用戶黏著度，設計每日挑戰益智小遊戲，讓用戶每日上線挑戰連勝紀錄，並可分享戰績增加交流機會。' },
      { src: 'images/techtalk-pages.png',     caption: '完整設計全覽 — 頁面整合展示。' },
      { src: 'images/techtalk-ia.png',        caption: 'APP 框架設定' },
      { src: 'images/techtalk-token.png',     caption: 'Design Token' },
      { src: 'images/techtalk-btn.png',       caption: 'BTN' },
      { src: 'images/techtalk-component.png', caption: 'Component' },
      { src: 'images/techtalk-wireframe.png', caption: 'Wireframe' }
    ],
    concept: '一款能讓人匿名交流的 App，可以交流科技產業內幕、發展狀況、AI 最新資訊，同時維持匿名保護，避免被追蹤或公司監控，鼓勵跨產業坦誠交流。',
    sections: [
      {
        h: '核心功能',
        p: '• 匿名發文與防追蹤機制\n• 科技業分類瀏覽\n• 通知整理系統（Auto Layout 設計）\n• 每日挑戰小遊戲（提升用戶黏著度）\n• 隱私與身份控制設定\n• 遊戲分數分享功能'
      },
      {
        h: 'AI 工具應用',
        p: '設計過程中整合 Google Stitch，在 Figma 中快速生成 UI 原型，加速設計初稿討論與確認流程，提升設計與產品溝通效率，是本專案的 AI 輔助設計實驗。'
      },
      {
        h: '設計系統',
        p: 'Card 結構用於動態貼文展示，含分類標籤；Auto Layout 應用於訊息通知；Boolean 按鈕用於設定功能；Prototype 互動展示每日挑戰遊戲的操作流程，確保前端實作規格清晰。'
      }
    ]
  }
];

/* ============================================================
   STATE
   ============================================================ */
let currentFilter  = 'all';
let currentVisible = INITIAL_COUNT;

/* ============================================================
   YOUTUBE THUMBNAIL
   ============================================================ */
function ytThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

/* ============================================================
   RENDER WORKS GRID
   ============================================================ */
function getFiltered() {
  return projects.filter(p =>
    currentFilter === 'all' || p.categories.includes(currentFilter)
  );
}

function renderWorks() {
  const grid = document.getElementById('worksGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  grid.innerHTML = '';

  const filtered = getFiltered();
  const toShow   = filtered.slice(0, currentVisible);

  toShow.forEach((p, i) => {
    const card = buildCard(p, i);
    grid.appendChild(card);
  });

  // Load More visibility
  if (currentVisible >= filtered.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}

function buildCard(p, idx) {
  const card = document.createElement('div');
  card.className = 'work-card';
  card.dataset.id = p.id;
  card.style.animationDelay = Math.min(idx % 9, 8) * 0.06 + 's';

  if (p.isVideo) {
    card.innerHTML = `
      <img class="work-card-img" src="${ytThumb(p.videoId)}" alt="${p.title}" loading="lazy"
        onerror="this.style.display='none'">
      <div class="work-card-duration">${p.duration}</div>
      <div class="work-card-play-dot">
        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
          <path d="M1 1L9 6L1 11V1Z" fill="white"/>
        </svg>
      </div>
      <div class="work-card-play">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path d="M1 1L13 8L1 15V1Z" fill="#111"/>
        </svg>
      </div>
      <div class="work-card-overlay">
        <div class="work-card-cat">${p.categoryLabel}</div>
        <div class="work-card-name">${p.title}</div>
      </div>
      <div class="work-card-label">
        <span class="work-card-label-name">${p.title}</span>
        <span class="work-card-label-cat">Motion</span>
      </div>`;
  } else if (p.cover) {
    card.innerHTML = `
      <img class="work-card-img" src="${p.cover}" alt="${p.title}" loading="lazy"
        onerror="this.parentElement.style.background='#ECECEC'">
      <div class="work-card-overlay">
        <div class="work-card-cat">${p.categoryLabel}</div>
        <div class="work-card-name">${p.title}</div>
      </div>
      <div class="work-card-label">
        <span class="work-card-label-name">${p.title}</span>
        <span class="work-card-label-cat">${p.categories[0].toUpperCase()}</span>
      </div>`;
  } else {
    const bg = p.coverBg || '#ECECEC';
    const txt= (p.coverText || p.title).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="work-card-placeholder" style="background:${bg};">${txt}</div>
      <div class="work-card-overlay">
        <div class="work-card-cat">${p.categoryLabel}</div>
        <div class="work-card-name">${p.title}</div>
      </div>
      <div class="work-card-label">
        <span class="work-card-label-name">${p.title}</span>
        <span class="work-card-label-cat">UI</span>
      </div>`;
  }

  card.addEventListener('click', () => openModal(p.id));
  return card;
}

/* ============================================================
   FILTER
   ============================================================ */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter  = btn.dataset.filter;
    currentVisible = INITIAL_COUNT;
    renderWorks();
  });
});

/* Load More */
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  currentVisible += 9;
  renderWorks();
  // Smoothly scroll to new cards
  document.getElementById('worksGrid').lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

/* ============================================================
   MODAL
   ============================================================ */
const modal       = document.getElementById('modal');
const modalOverlay= document.getElementById('modalOverlay');
const modalClose  = document.getElementById('modalClose');
const modalVidWrap    = document.getElementById('modalVideoWrap');
const modalIframeWrap = document.getElementById('modalIframeWrap');
const modalIframe     = document.getElementById('modalIframe');
const modalVidDur     = document.getElementById('modalVideoDur');
const modalYtLink     = document.getElementById('modalYtLink');
const modalYtFacade   = document.getElementById('modalYtFacade');
const modalYtFacadeImg= document.getElementById('modalYtFacadeImg');
const modalYtFacadeBtn= document.getElementById('modalYtFacadeBtn');
const modalGalWrap  = document.getElementById('modalGalleryWrap');
const modalMainImg  = document.getElementById('modalMainImg');
const modalMainVideo= document.getElementById('modalMainVideo');
const modalMainVSrc = document.getElementById('modalMainVideoSrc');
const modalPH       = document.getElementById('modalPlaceholderImg');
const modalPHText   = document.getElementById('modalPlaceholderText');
const modalPrev     = document.getElementById('modalPrev');
const modalNext     = document.getElementById('modalNext');
const modalThumbs   = document.getElementById('modalThumbs');
const modalCaption  = document.getElementById('modalCaption');
const modalCatTag = document.getElementById('modalCatTag');
const modalTitleZh= document.getElementById('modalTitleZh');
const modalTitleEn= document.getElementById('modalTitleEn');
const modalTool   = document.getElementById('modalTool');
const modalConcept= document.getElementById('modalConcept');
const modalSects  = document.getElementById('modalSections');

let currentProject = null;
let currentImgIdx  = 0;

function openModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  currentProject = p;
  currentImgIdx  = 0;

  modalCatTag.textContent  = p.categoryLabel;
  modalTitleZh.textContent = p.title;
  modalTitleEn.textContent = p.titleEn;
  modalTool.textContent    = p.tool;
  modalConcept.textContent = p.concept;

  modalSects.innerHTML = '';
  if (p.sections && p.sections.length) {
    p.sections.forEach(s => {
      const div = document.createElement('div');
      div.className = 'modal-section';
      div.innerHTML = `<p class="modal-section-h">${s.h}</p><p class="modal-section-p">${s.p.replace(/\n/g, '<br>')}</p>`;
      modalSects.appendChild(div);
    });
  }

  if (p.isVideo) {
    modalGalWrap.style.display = 'none';
    modalVidWrap.classList.add('show');
    const ytUrl = `https://www.youtube.com/watch?v=${p.videoId}`;
    modalYtLink.href = ytUrl;
    modalVidDur.textContent = p.duration ? `Duration: ${p.duration}` : '';
    if (p.noEmbed) {
      modalIframeWrap.style.display = 'none';
      modalYtFacade.classList.add('show');
      modalYtFacadeImg.src = `https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`;
      modalYtFacadeImg.onerror = () => { modalYtFacadeImg.src = `https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg`; };
      modalYtFacadeBtn.href = ytUrl;
    } else {
      modalIframeWrap.style.display = '';
      modalYtFacade.classList.remove('show');
      modalIframe.src = `https://www.youtube.com/embed/${p.videoId}?autoplay=1&rel=0&modestbranding=1`;
    }
  } else {
    modalVidWrap.classList.remove('show');
    modalIframe.src = '';
    modalGalWrap.style.display = '';

    if (p.images && p.images.length > 0) {
      modalPH.classList.remove('show');
      modalMainImg.style.display = 'block';
      showImage(0);
      buildThumbs(p.images);
    } else {
      modalMainImg.style.display = 'none';
      modalPH.classList.add('show');
      modalPH.style.background = p.coverBg || '#ECECEC';
      modalPHText.textContent  = (p.coverText || p.title).replace(/\n/g, ' ');
      modalCaption.textContent = '';
      modalThumbs.innerHTML    = '';
      modalPrev.classList.add('hidden');
      modalNext.classList.add('hidden');
    }
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showImage(idx) {
  const imgs = currentProject?.images;
  if (!imgs?.length) return;
  idx = Math.max(0, Math.min(idx, imgs.length - 1));
  currentImgIdx = idx;
  const item = imgs[idx];

  if (item.isVideo) {
    modalMainImg.style.display = 'none';
    modalMainVideo.style.display = 'block';
    if (modalMainVSrc.src !== new URL(item.src, location.href).href) {
      modalMainVSrc.src = item.src;
      modalMainVideo.load();
    }
  } else {
    modalMainVideo.pause();
    modalMainVideo.style.display = 'none';
    modalMainImg.style.display = 'block';
    modalMainImg.src = item.src;
    modalMainImg.alt = item.caption || '';
  }

  modalCaption.textContent = item.caption || '';
  modalPrev.classList.toggle('hidden', imgs.length <= 1 || idx === 0);
  modalNext.classList.toggle('hidden', imgs.length <= 1 || idx === imgs.length - 1);
  document.querySelectorAll('.modal-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
}

function buildThumbs(images) {
  modalThumbs.innerHTML = '';
  if (images.length <= 1) return;
  images.forEach((item, i) => {
    if (item.isVideo) {
      const wrap = document.createElement('div');
      wrap.className = 'modal-thumb modal-thumb-video-wrap' + (i === 0 ? ' active' : '');
      const vid = document.createElement('video');
      vid.src = item.src;
      vid.preload = 'metadata';
      vid.style.cssText = 'width:100%;height:100%;object-fit:cover;pointer-events:none;';
      wrap.appendChild(vid);
      wrap.addEventListener('click', () => showImage(i));
      modalThumbs.appendChild(wrap);
    } else {
      const img = document.createElement('img');
      img.className = 'modal-thumb' + (i === 0 ? ' active' : '');
      img.src = item.src;
      img.loading = 'lazy';
      img.addEventListener('click', () => showImage(i));
      modalThumbs.appendChild(img);
    }
  });
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  modalIframe.src = '';
  modalYtFacade.classList.remove('show');
  modalIframeWrap.style.display = '';
  modalMainVideo.pause();
  setTimeout(() => {
    modalMainImg.src = '';
    modalMainVSrc.src = '';
    modalThumbs.innerHTML = '';
    currentProject = null;
    modalVidWrap.classList.remove('show');
    modalGalWrap.style.display = '';
  }, 450);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => showImage(currentImgIdx - 1));
modalNext.addEventListener('click', () => showImage(currentImgIdx + 1));
document.addEventListener('keydown', e => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (!currentProject?.isVideo) {
    if (e.key === 'ArrowLeft')  showImage(currentImgIdx - 1);
    if (e.key === 'ArrowRight') showImage(currentImgIdx + 1);
  }
});

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.bio').forEach(el => el.classList.remove('active'));
    document.querySelector('.bio-' + btn.dataset.lang)?.classList.add('active');
  });
});

/* ============================================================
   NAVIGATION
   ============================================================ */
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
});
document.querySelectorAll('.nav-mobile-link').forEach(l => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ============================================================
   SCROLL REVEAL (sections only, not grid cards)
   ============================================================ */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderWorks();
  initReveal();
});
