// 日本語版の作品名・説明。英語版は projects.js を編集。
/*
 * HOW THIS LIST WORKS
 * Each { ... } block is one project card on the homepage.
 * The fields that show up on the site:
 *   "title"       – project name under the thumbnail
 *   "description" – the short line (subtitle) under the title
 *   "year"        – shown after the subtitle
 *   "image"       – the 4:3 thumbnail in images/thumbs/
 *   "imageAlt"    – what the thumbnail shows, for screen readers
 *   "page"        – the project page the card links to
 * The other fields (number, slug, categories, color) are notes for you;
 * the site does not display them.
 *
 * TO REORDER: move a whole { ... } block up or down. The homepage shows
 * the projects in exactly this order, so put the most important first.
 * TO ADD A PROJECT: copy a whole block, change its values, add its two
 * HTML pages (projects/ and ja/projects/). See EDITING-GUIDE.md.
 * Keep the English (projects.js) and Japanese (projects-ja.js) lists in
 * the SAME order.
 * Don't forget the comma between blocks.
 */
const projects = [
  {
    "number": "01",
    "slug": "okinawa-twice-colonized",
    "title": "沖縄・支配下に置かれている島",
    "year": "2025",
    "categories": [
      "地図づくり",
      "環境"
    ],
    "description": "沖縄に残る米軍基地の傷あと",
    "image": "../images/thumbs/okinawa-twice-colonized.webp",
    "imageAlt": "沖縄の米軍基地をえんじ色で示し、土地利用とサンゴ礁を重ねた地図",
    "color": "#cadfe8",
    "page": "projects/okinawa-twice-colonized.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "02",
    "slug": "the-danish-kollektiv",
    "title": "デンマークのコレクティブ",
    "year": "2026",
    "categories": [
      "調査",
      "地図づくり"
    ],
    "description": "コペンハーゲンのどこにコレクティブがあるか",
    "image": "../images/thumbs/the-danish-kollektiv.webp",
    "imageAlt": "コペンハーゲンの共同生活の住まいを、手描きの建物とともに示した地図",
    "color": "#dbe8e5",
    "page": "projects/the-danish-kollektiv.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "03",
    "slug": "mapping-housing-potential",
    "title": "新しい住宅をどこに建てるか",
    "year": "2026",
    "categories": [
      "GIS",
      "まちづくり"
    ],
    "description": "バーモント州アディソン郡で、住宅を建てられそうな場所を探す",
    "image": "../images/thumbs/mapping-housing-potential.webp",
    "imageAlt": "アディソン郡の住宅候補地をピンクの斜線で示し、学校、店、湿地を重ねた地図",
    "color": "#f2eee9",
    "page": "projects/mapping-housing-potential.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "04",
    "slug": "re-drawing-voting-access",
    "title": "投票所への行きやすさを見直す",
    "year": "2025",
    "categories": [
      "GIS",
      "選挙"
    ],
    "description": "バージニア州リッチモンドで、投票所まで歩いて行けるか",
    "image": "../images/thumbs/re-drawing-voting-access.webp",
    "imageAlt": "リッチモンドの各地区で、投票所まで1マイル以上ある住宅の割合がどう変わるかを示した地図",
    "color": "#eddae1",
    "page": "projects/re-drawing-voting-access.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "05",
    "slug": "redlined-chicago",
    "title": "シカゴに残るレッドライニングの影",
    "year": "2025",
    "categories": [
      "GIS",
      "都市"
    ],
    "description": "シカゴの人種、レッドライニング、住宅、緑地への行きやすさ",
    "image": "../images/thumbs/redlined-chicago.webp",
    "imageAlt": "シカゴのレッドライニング指標を地区ごとに赤で示した地図",
    "color": "#f1dcdb",
    "page": "projects/redlined-chicago.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "06",
    "slug": "green-spaces-by-the-border",
    "title": "州境に広がる緑",
    "year": "2026",
    "categories": [
      "地図づくり",
      "地域"
    ],
    "description": "バーモント州ポーナルの土地開発と所有",
    "image": "../images/thumbs/green-spaces-by-the-border.webp",
    "imageAlt": "バーモント州ポーナルの緑地と土地の区画を示した地図。道路と地球儀の位置図付き",
    "color": "#d5e2ce",
    "page": "projects/green-spaces-by-the-border.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "07",
    "slug": "mapping-the-gaps",
    "title": "点字ブロックの足りない場所",
    "year": "2025",
    "categories": [
      "現地調査",
      "歩きやすさ"
    ],
    "description": "ミドルベリー大学の点字ブロックと歩きやすさ",
    "image": "../images/thumbs/mapping-the-gaps.webp",
    "imageAlt": "ミドルベリー大学の点字ブロック調査。青は設置されている場所、赤は足りない場所",
    "color": "#f5f2ee",
    "page": "projects/mapping-the-gaps.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "08",
    "slug": "lines-of-power",
    "title": "選挙区の線が変えるもの",
    "year": "2026",
    "categories": [
      "政治と地理",
      "GIS"
    ],
    "description": "カリフォルニア州の選挙区割りとゲリマンダー",
    "image": "../images/thumbs/lines-of-power.webp",
    "imageAlt": "カリフォルニアの2021年とAB 604案の選挙区で共和党の得票率を比べた地図",
    "color": "#eff0f0",
    "page": "projects/lines-of-power.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "09",
    "slug": "map-design",
    "title": "地図表現の練習",
    "year": "2025",
    "categories": [
      "デザイン",
      "文字"
    ],
    "description": "地図記号と文字の使い方の練習",
    "image": "../images/thumbs/map-design.webp",
    "imageAlt": "12種類の地図記号をベクターで再現し、作り方をまとめたシート",
    "color": "#f6f4ef",
    "page": "projects/map-design.html",
    "imageWidth": 1200,
    "imageHeight": 900
  },
  {
    "number": "10",
    "slug": "downtown-derby",
    "title": "ダウンタウン・ダービー",
    "year": "2026",
    "categories": [
      "GIS",
      "都市"
    ],
    "description": "ケンタッキー州ルイビルの都市地理と空間分析",
    "image": "../images/thumbs/downtown-derby.webp",
    "imageAlt": "ルイビル中心部で住宅50戸以上の地区をオレンジ色で示した地図",
    "color": "#f8eadc",
    "page": "projects/downtown-derby.html",
    "imageWidth": 1200,
    "imageHeight": 900
  }
];
