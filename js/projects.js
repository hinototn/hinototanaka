// MY PROJECT LIST
// This is the one place where the homepage gets its cards, and where each
// project page gets its title. The order here is the order on the homepage,
// so I keep the most important projects at the top.
//
// Each project has:
//   id        – the name of its content file in projects/ (projects/<id>.js)
//   year      – shown under the subtitle; "More work" is sorted by it, newest first
//   tools     – the small tags next to the year on the homepage card
//   selected  – true puts the project in the "Selected work" row at the top (I keep it to three)
//
// Projects from the same year keep the order below, so within 2025 I list
// Fall 2025 projects before Spring 2025 ones (newest first).
//   thumb     – the 4:3 homepage thumbnail in images/thumbs/ (1200 × 900)
//   title, subtitle, thumbAlt – English and Japanese side by side
//
// To add a project: copy one { … } block, change it, and make projects/<id>.js.

const projects = [
  {
    id: "okinawa-twice-colonized",
    selected: true,
    year: "2025",
    tools: ["QGIS", "Google Earth Engine", "Adobe Illustrator"],
    thumb: "okinawa-twice-colonized.webp",
    title:    { en: "Okinawa, Twice Colonized", ja: "沖縄・支配下に置かれている島" },
    subtitle: { en: "The Lasting Scars of U.S. Militarization", ja: "米軍基地が残す傷あと" },
    thumbAlt: { en: "A thematic map of Okinawa with U.S. military installations in red against land-cover and coral-reef classes", ja: "沖縄の米軍基地をえんじ色で示し、土地利用とサンゴ礁を重ねた地図" },
  },
  {
    id: "the-danish-kollektiv",
    selected: true,
    year: "2026",
    tools: ["Excel", "QGIS", "Adobe Illustrator", "Leaflet"],
    thumb: "the-danish-kollektiv.webp",
    title:    { en: "The Danish Kollektiv", ja: "デンマークのコレクティブ" },
    subtitle: { en: "Collective Living Across Copenhagen", ja: "コペンハーゲンに広がる共同生活" },
    thumbAlt: { en: "The Danish Kollektiver NACIS map, showing housing types across Copenhagen with hand-drawn architectural scenes", ja: "コペンハーゲンの共同生活の住まいを、手描きの建物とともに示した地図" },
  },
  {
    id: "re-drawing-voting-access",
    selected: true,
    year: "2025",
    tools: ["Excel", "QGIS", "QuickOSM"],
    thumb: "re-drawing-voting-access.webp",
    title:    { en: "Re-Drawing Voting Access", ja: "投票所への道を引き直す" },
    subtitle: { en: "Polling-Place Accessibility in Richmond", ja: "リッチモンドの投票所への行きやすさ" },
    thumbAlt: { en: "Map of Richmond precincts showing changes in the share of homes more than one mile from a polling station", ja: "リッチモンドの各地区で、投票所まで1マイル以上ある住宅の割合がどう変わるかを示した地図" },
  },
  {
    id: "redlined-chicago",
    year: "2025",
    tools: ["R", "QGIS", "QuickOSM"],
    thumb: "redlined-chicago.webp",
    title:    { en: "Redlined Chicago", ja: "レッドライニングのシカゴ" },
    subtitle: { en: "Critical Geographical Analysis of the City", ja: "批判地理学から見る都市" },
    thumbAlt: { en: "Chicago census tracts shaded by redlining index, with stronger red values across parts of the South and West Sides", ja: "シカゴのレッドライニング指標を地区ごとに赤で示した地図" },
  },
  {
    id: "mapping-the-gaps",
    year: "2025",
    tools: ["QGIS", "OpenStreetMap"],
    thumb: "mapping-the-gaps.webp",
    title:    { en: "Campus Tactile Paving", ja: "キャンパスの点字ブロック" },
    subtitle: { en: "Pedestrian Accessibility and Safety", ja: "歩く人のアクセシビリティと安全" },
    thumbAlt: { en: "Middlebury College campus tactile paving survey, with blue symbols for existing accessible infrastructure and red symbols for barriers", ja: "ミドルベリー大学の点字ブロック調査。青は設置されている場所、赤は足りない場所" },
  },
  {
    id: "lines-of-power",
    year: "2025",
    tools: ["Excel", "QGIS"],
    thumb: "lines-of-power.webp",
    title:    { en: "Partisan Gerrymandering", ja: "党派的ゲリマンダー" },
    subtitle: { en: "Congressional Redistricting in California", ja: "カリフォルニア州の下院選挙区割り" },
    thumbAlt: { en: "Side-by-side maps showing Republican vote percentages under 2021 and AB 604 California congressional districts", ja: "カリフォルニアの2021年とAB 604案の選挙区で共和党の得票率を比べた地図" },
  },
  {
    id: "downtown-derby",
    year: "2025",
    tools: ["Social Explorer", "OpenStreetMap"],
    thumb: "downtown-derby.webp",
    title:    { en: "Downtown Louisville", ja: "ルイビルのダウンタウン" },
    subtitle: { en: "Urban Geography Through Field Observation", ja: "現地観察から見る都市地理" },
    thumbAlt: { en: "Orange choropleth showing areas with 50 or more housing units in central Louisville", ja: "ルイビル中心部で住宅50戸以上の地区をオレンジ色で示した地図" },
  },
  {
    id: "mapping-housing-potential",
    year: "2025",
    tools: ["QGIS", "Adobe Illustrator"],
    thumb: "mapping-housing-potential.webp",
    title:    { en: "Mapping Housing Potential", ja: "住宅の可能性を地図にする" },
    subtitle: { en: "Tackling Addison County’s Housing Crisis", ja: "アディソン郡の住宅不足に向き合う" },
    thumbAlt: { en: "Map of Addison County showing candidate housing development zones hatched pink, schools, stores, and wetlands", ja: "アディソン郡の住宅候補地をピンクの斜線で示し、学校、店、湿地を重ねた地図" },
  },
  {
    id: "green-spaces-by-the-border",
    year: "2025",
    tools: ["QGIS", "Adobe Illustrator"],
    thumb: "green-spaces-by-the-border.webp",
    title:    { en: "Green Spaces by the Border", ja: "州境に広がる緑" },
    subtitle: { en: "Land Development in Pownal, VT", ja: "バーモント州ポーナルの土地開発" },
    thumbAlt: { en: "Town of Pownal Vermont green-space and parcel map with roads, forested parcels and a locator globe", ja: "バーモント州ポーナルの緑地と土地の区画を示した地図。道路と地球儀の位置図付き" },
  },
  {
    id: "map-design",
    year: "2025",
    tools: ["Adobe Illustrator"],
    thumb: "map-design.webp",
    title:    { en: "Cartographic Studies", ja: "地図表現の練習" },
    subtitle: { en: "Symbolization and Typography", ja: "記号と文字" },
    thumbAlt: { en: "Symbol pattern sheet showing twelve vector cartographic symbol recreations and accompanying techniques", ja: "12種類の地図記号をベクターで再現し、作り方をまとめたシート" },
  },
];
