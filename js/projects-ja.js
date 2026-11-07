// 日本語版の作品名・説明。英語版は projects.js を編集。
/*
 * TO ADD A PROJECT:
 * 1) Copy one complete { ... } item in the list below.
 * 2) Change its title, image, alt text, and project-page path.
 * 3) Add the matching HTML file under projects/ (or ja/projects/).
 * 4) Update BOTH English and Japanese lists, keeping the same order.
 * The homepage grid updates automatically. See EDITING-GUIDE.md.
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
    "description": "沖縄の広い土地を米軍基地が占めている。その周りで何が起きているのかを地図にした。",
    "image": "../images/thumbs/okinawa-twice-colonized.webp",
    "imageAlt": "沖縄の米軍基地をえんじ色で示し、土地利用とサンゴ礁を重ねた地図",
    "color": "#cadfe8",
    "page": "projects/okinawa-twice-colonized.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 727
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
    "description": "コペンハーゲンで共同生活をする人たちは、どこで、どんな家に住んでいるのか。",
    "image": "../images/thumbs/the-danish-kollektiv.webp",
    "imageAlt": "コペンハーゲンの共同生活の住まいを、手描きの建物とともに示した地図",
    "color": "#dbe8e5",
    "page": "projects/the-danish-kollektiv.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 727
  },
  {
    "number": "03",
    "slug": "re-drawing-voting-access",
    "title": "投票所への行きやすさを見直す",
    "year": "2025",
    "categories": [
      "GIS",
      "選挙"
    ],
    "description": "投票所の場所を変えたら、リッチモンドの人たちは投票しやすくなるのか。",
    "image": "../images/thumbs/re-drawing-voting-access.webp",
    "imageAlt": "リッチモンドの各地区で、投票所まで1マイル以上ある住宅の割合がどう変わるかを示した地図",
    "color": "#eddae1",
    "page": "projects/re-drawing-voting-access.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 707
  },
  {
    "number": "04",
    "slug": "redlined-chicago",
    "title": "シカゴに残るレッドライニングの影",
    "year": "2025",
    "categories": [
      "GIS",
      "都市"
    ],
    "description": "シカゴで、人種、家賃、かつての住宅差別、緑地への行きやすさがどう重なるかを調べた。",
    "image": "../images/thumbs/redlined-chicago.webp",
    "imageAlt": "シカゴのレッドライニング指標を地区ごとに赤で示した地図",
    "color": "#f1dcdb",
    "page": "projects/redlined-chicago.html",
    "group": "selected",
    "imageWidth": 984,
    "imageHeight": 1168
  },
  {
    "number": "05",
    "slug": "mapping-the-gaps",
    "title": "点字ブロックの足りない場所",
    "year": "2025",
    "categories": [
      "現地調査",
      "歩きやすさ"
    ],
    "description": "ミドルベリー大学のキャンパスは、目が不自由な人にとっても歩きやすいのか。",
    "image": "../images/thumbs/mapping-the-gaps.webp",
    "imageAlt": "ミドルベリー大学の点字ブロック調査。青は設置されている場所、赤は足りない場所",
    "color": "#f5f2ee",
    "page": "projects/mapping-the-gaps.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 1000
  },
  {
    "number": "06",
    "slug": "lines-of-power",
    "title": "選挙区の線が変えるもの",
    "year": "2026",
    "categories": [
      "政治と地理",
      "GIS"
    ],
    "description": "同じ票でも、選挙区の線が変われば地図の見え方が変わる。",
    "image": "../images/thumbs/lines-of-power.webp",
    "imageAlt": "カリフォルニアの2021年とAB 604案の選挙区で共和党の得票率を比べた地図",
    "color": "#eff0f0",
    "page": "projects/lines-of-power.html",
    "group": "selected",
    "imageWidth": 1000,
    "imageHeight": 524
  },
  {
    "number": "07",
    "slug": "mapping-housing-potential",
    "title": "新しい住宅をどこに建てるか",
    "year": "2026",
    "categories": [
      "GIS",
      "まちづくり"
    ],
    "description": "バーモント州アディソン郡で、住宅を増やせそうな場所を探した。",
    "image": "../images/thumbs/mapping-housing-potential.webp",
    "imageAlt": "アディソン郡の住宅候補地をピンクの斜線で示し、学校、店、湿地を重ねた地図",
    "color": "#f2eee9",
    "page": "projects/mapping-housing-potential.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 1546
  },
  {
    "number": "08",
    "slug": "green-spaces-by-the-border",
    "title": "州境に広がる緑",
    "year": "2026",
    "categories": [
      "地図づくり",
      "地域"
    ],
    "description": "バーモント州南西端、ポーナルに残る緑地を地図にした。",
    "image": "../images/thumbs/green-spaces-by-the-border.webp",
    "imageAlt": "バーモント州ポーナルの緑地と土地の区画を示した地図。道路と地球儀の位置図付き",
    "color": "#d5e2ce",
    "page": "projects/green-spaces-by-the-border.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 647
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
    "description": "地図記号の再現と、文字の使い方を学ぶ二つの課題。",
    "image": "../images/thumbs/map-design.webp",
    "imageAlt": "12種類の地図記号をベクターで再現し、作り方をまとめたシート",
    "color": "#f6f4ef",
    "page": "projects/map-design.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 647
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
    "description": "ケンタッキー州ルイビルの中心部を、二つの方法で地図にした。",
    "image": "../images/thumbs/downtown-derby.webp",
    "imageAlt": "ルイビル中心部で住宅50戸以上の地区をオレンジ色で示した地図",
    "color": "#f8eadc",
    "page": "projects/downtown-derby.html",
    "group": "more",
    "imageWidth": 1000,
    "imageHeight": 749
  }
];
