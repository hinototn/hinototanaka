// MY PROJECT LIST
// This is the one place where the homepage gets its cards, and where each
// project page gets its title. The order here is the order on the homepage,
// so I keep the most important projects at the top.
//
// Each project has:
//   id        – the name of its content file in projects/ (projects/<id>.js)
//   year      – shown under the subtitle
//   thumb     – the 4:3 homepage thumbnail in images/thumbs/ (1200 × 900)
//   title, subtitle, thumbAlt – English and Japanese side by side
//
// To add a project: copy one { … } block, change it, and make projects/<id>.js.

const projects = [
  {
    id: "okinawa-twice-colonized",
    year: "2025",
    thumb: "okinawa-twice-colonized.webp",
    title:    { en: "Okinawa, Twice Colonized", ja: "沖縄・支配下に置かれている島" },
    subtitle: { en: "The Lasting Scars of U.S. Militarization in Okinawa, Japan", ja: "沖縄に残る米軍基地の傷あと" },
    thumbAlt: { en: "A thematic map of Okinawa with U.S. military installations in red against land-cover and coral-reef classes", ja: "沖縄の米軍基地をえんじ色で示し、土地利用とサンゴ礁を重ねた地図" },
  },
  {
    id: "the-danish-kollektiv",
    year: "2026",
    thumb: "the-danish-kollektiv.webp",
    title:    { en: "The Danish Kollektiv", ja: "デンマークのコレクティブ" },
    subtitle: { en: "Spatial Patterns of Kollektiver in Copenhagen, Denmark", ja: "コペンハーゲンのどこにコレクティブがあるか" },
    thumbAlt: { en: "The Danish Kollektiver NACIS map, showing housing types across Copenhagen with hand-drawn architectural scenes", ja: "コペンハーゲンの共同生活の住まいを、手描きの建物とともに示した地図" },
  },
  {
    id: "mapping-housing-potential",
    year: "2026",
    thumb: "mapping-housing-potential.webp",
    title:    { en: "Mapping Housing Potential", ja: "新しい住宅をどこに建てるか" },
    subtitle: { en: "Identifying Potential Housing Development Zones in Addison County, Vermont", ja: "バーモント州アディソン郡で、住宅を建てられそうな場所を探す" },
    thumbAlt: { en: "Map of Addison County showing candidate housing development zones hatched pink, schools, stores, and wetlands", ja: "アディソン郡の住宅候補地をピンクの斜線で示し、学校、店、湿地を重ねた地図" },
  },
  {
    id: "re-drawing-voting-access",
    year: "2025",
    thumb: "re-drawing-voting-access.webp",
    title:    { en: "Re-Drawing Voting Access", ja: "投票所への行きやすさを見直す" },
    subtitle: { en: "Polling-Place Walkability and Voting Access in Richmond, Virginia", ja: "バージニア州リッチモンドで、投票所まで歩いて行けるか" },
    thumbAlt: { en: "Map of Richmond precincts showing changes in the share of homes more than one mile from a polling station", ja: "リッチモンドの各地区で、投票所まで1マイル以上ある住宅の割合がどう変わるかを示した地図" },
  },
  {
    id: "redlined-chicago",
    year: "2025",
    thumb: "redlined-chicago.webp",
    title:    { en: "Redlined Chicago", ja: "シカゴに残るレッドライニングの影" },
    subtitle: { en: "Race, Redlining, Housing, and Green-Space Access in Chicago, Illinois", ja: "シカゴの人種、レッドライニング、住宅、緑地への行きやすさ" },
    thumbAlt: { en: "Chicago census tracts shaded by redlining index, with stronger red values across parts of the South and West Sides", ja: "シカゴのレッドライニング指標を地区ごとに赤で示した地図" },
  },
  {
    id: "green-spaces-by-the-border",
    year: "2026",
    thumb: "green-spaces-by-the-border.webp",
    title:    { en: "Green Spaces by the Border", ja: "州境に広がる緑" },
    subtitle: { en: "Land Development and Ownership in Pownal, Vermont", ja: "バーモント州ポーナルの土地開発と所有" },
    thumbAlt: { en: "Town of Pownal Vermont green-space and parcel map with roads, forested parcels and a locator globe", ja: "バーモント州ポーナルの緑地と土地の区画を示した地図。道路と地球儀の位置図付き" },
  },
  {
    id: "mapping-the-gaps",
    year: "2025",
    thumb: "mapping-the-gaps.webp",
    title:    { en: "Mapping the Gaps", ja: "点字ブロックの足りない場所" },
    subtitle: { en: "Tactile Paving and Pedestrian Accessibility at Middlebury College, Vermont", ja: "ミドルベリー大学の点字ブロックと歩きやすさ" },
    thumbAlt: { en: "Middlebury College campus tactile paving survey, with blue symbols for existing accessible infrastructure and red symbols for barriers", ja: "ミドルベリー大学の点字ブロック調査。青は設置されている場所、赤は足りない場所" },
  },
  {
    id: "lines-of-power",
    year: "2026",
    thumb: "lines-of-power.webp",
    title:    { en: "Lines of Power", ja: "選挙区の線が変えるもの" },
    subtitle: { en: "Gerrymandering and Congressional Redistricting in California", ja: "カリフォルニア州の選挙区割りとゲリマンダー" },
    thumbAlt: { en: "Side-by-side maps showing Republican vote percentages under 2021 and AB 604 California congressional districts", ja: "カリフォルニアの2021年とAB 604案の選挙区で共和党の得票率を比べた地図" },
  },
  {
    id: "map-design",
    year: "2025",
    thumb: "map-design.webp",
    title:    { en: "Cartographic Studies", ja: "地図表現の練習" },
    subtitle: { en: "Cartographic Symbolization and Typography Studies", ja: "地図記号と文字の使い方の練習" },
    thumbAlt: { en: "Symbol pattern sheet showing twelve vector cartographic symbol recreations and accompanying techniques", ja: "12種類の地図記号をベクターで再現し、作り方をまとめたシート" },
  },
  {
    id: "downtown-derby",
    year: "2026",
    thumb: "downtown-derby.webp",
    title:    { en: "Downtown Derby", ja: "ダウンタウン・ダービー" },
    subtitle: { en: "Urban Geography and Spatial Analysis in Louisville, Kentucky", ja: "ケンタッキー州ルイビルの都市地理と空間分析" },
    thumbAlt: { en: "Orange choropleth showing areas with 50 or more housing units in central Louisville", ja: "ルイビル中心部で住宅50戸以上の地区をオレンジ色で示した地図" },
  },
];
