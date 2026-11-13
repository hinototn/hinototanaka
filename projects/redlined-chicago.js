// REDLINED CHICAGO
// My content for this project. English and Japanese sit side by side.

project({
  intro: { en: "How do race, rent, redlining and access to green space overlap in Chicago?", ja: "シカゴで、人種、家賃、かつての住宅差別、緑地への行きやすさはどう重なるのか。" },
  hero: {
    file: "chicago-redlining.webp",
    alt: { en: "Chicago census tracts shaded by redlining index, darker red across parts of the South and West Sides.", ja: "シカゴの国勢調査区をレッドライニングの指標で塗り分けた地図。南部と西部の一部で赤が濃い。" },
    caption: { en: "Historic redlining index by census tract.", ja: "国勢調査区ごとのレッドライニングの指標。" },
  },
  facts: [
    { label: { en: "Tools", ja: "ツール" }, text: { en: "R (tidycensus), QGIS, QuickOSM", ja: "R（tidycensus）、QGIS、QuickOSM" } },
    { label: { en: "Data", ja: "データ" }, text: { en: "Census tract data on race, ethnicity and rent; a historic redlining index; parks from OpenStreetMap", ja: "国勢調査区の人種・民族と家賃、レッドライニングの指標、OpenStreetMapの公園" } },
  ],
  about: {
    en: ["Higher rents and mostly White neighborhoods extend north of downtown, while many Black- and Latino-majority tracts to the south and west have lower rents, higher redlining scores and less access to green space. I wanted to see how closely those layers line up, and whether distance from downtown explains them."],
    ja: ["中心部の北には、家賃が高く白人の多い地区が広がる。一方、南部と西部の黒人・ラテン系住民が多い地区では、家賃が低く、レッドライニングの指標が高く、緑地にも行きにくい。これらがどれだけ重なるのか、そして中心からの距離で説明できるのかを確かめたかった。"],
  },
  // The one-line process summary shown above the sections.
  workflow: [{ en: "Question", ja: "問い" }, { en: "Census data in R", ja: "Rでのデータ処理" }, { en: "Tract maps", ja: "地区の地図" }, { en: "Urban models", ja: "都市モデル" }],

  sections: [
    {
      heading: { en: "Data and method", ja: "データと方法" },
      text: {
        en: ["I pulled census data with tidycensus in R, joined it to tracts in QGIS and brought in parks from OpenStreetMap with QuickOSM. Rather than stacking everything onto one map, I gave each variable its own map at the same extent so they can be compared side by side. I also compared the patterns with two classic models of the city, Burgess’s concentric rings and Hoyt’s sectors. Chicago’s divides don’t form simple rings around downtown, although the maps show overlap rather than proof that redlining caused today’s patterns."],
        ja: ["Rのtidycensusで国勢調査のデータを取り、QGISで国勢調査区に結びつけ、公園はQuickOSMでOpenStreetMapから読み込んだ。すべてを一枚に重ねるのではなく、変数ごとに同じ範囲の地図を作り、並べて比べられるようにした。都市の形を説明する二つの古典的なモデル、バージェスの同心円モデルとホイトの扇形モデルとも比べた。シカゴの境目は中心を囲む単純な輪にはならない。ただし地図が示すのは重なりで、レッドライニングが今の形を生んだ証明ではない。"],
      },
      images: [
        { file: "chicago-rent.webp", alt: { en: "Median gross rent by tract.", ja: "地区ごとの家賃の中央値。" }, caption: { en: "Median rent", ja: "家賃の中央値" } },
        { file: "chicago-groups.webp", alt: { en: "Racial and ethnic majority by tract.", ja: "地区ごとに最も多い人種・民族。" }, caption: { en: "Majority group", ja: "多数派の人種・民族" } },
        { file: "chicago-green-access.webp", alt: { en: "Table of green-space access by majority group.", ja: "多数派ごとの緑地への行きやすさの表。" }, caption: { en: "Green-space access", ja: "緑地への行きやすさ" } },
        { file: "chicago-process.webp", alt: { en: "The QGIS project in progress.", ja: "作業中のQGISの画面。" }, caption: { en: "Work in QGIS", ja: "QGISでの作業" } },
      ],
    },
  ],
  sources: [
    { en: "Census data: U.S. Census Bureau, via tidycensus. Parks: OpenStreetMap contributors.", ja: "国勢調査データ：米国勢調査局（tidycensus経由）。公園：OpenStreetMapの貢献者" },
  ],
});
