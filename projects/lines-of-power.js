// LINES OF POWER
// My content for this project. English and Japanese sit side by side.

project({
  intro: { en: "The same votes can look different when the district boundaries change.", ja: "同じ票でも、選挙区の線が変われば見え方が変わる。" },
  hero: {
    file: "california-compare.webp",
    alt: { en: "Side-by-side maps of Trump vote share under the 2021 and proposed AB 604 California congressional districts.", ja: "カリフォルニア州の2021年の選挙区とAB 604案の選挙区で、トランプへの得票率を並べた地図。" },
    caption: { en: "The same votes under two sets of district lines.", ja: "同じ票、二つの区割り。" },
  },
  facts: [
    { label: { en: "Data", ja: "データ" }, text: { en: "California congressional districts (2021 and proposed AB 604) and presidential vote share", ja: "カリフォルニア州の下院選挙区（2021年とAB 604案）と大統領選の得票率" } },
  ],
  about: {
    en: ["I compared Republican vote share in California under the 2021 congressional districts and the proposed AB 604 districts. Nothing about the voters changes between the two maps, only the lines drawn around them."],
    ja: ["カリフォルニア州の2021年の下院選挙区と、AB 604案の区割りで、共和党側の得票率を比べた。二枚の地図で有権者は何も変わらない。変わるのは、その周りに引かれた線だけだ。"],
  },
  // The one-line process summary shown above the sections.
  workflow: [{ en: "Data", ja: "データ" }, { en: "Matching classes", ja: "階級をそろえる" }, { en: "Side-by-side maps", ja: "並べた地図" }, { en: "Table", ja: "表" }],

  sections: [
    {
      heading: { en: "Comparing the maps", ja: "地図を比べる" },
      text: {
        en: ["Both maps use the same measure, color classes and extent, so any difference comes from the boundaries themselves. The table picks out the districts where vote share shifts the most. It is a comparison of geographic units, not a prediction of future elections."],
        ja: ["二枚の地図は、指標も色の階級も範囲も同じなので、違いはすべて境界線から来ている。表には、得票率がいちばん大きく動く選挙区を抜き出した。地理的な単位の比較であって、次の選挙の予測ではない。"],
      },
      images: [
        { file: "california-2021.webp", alt: { en: "Vote share by 2021 districts.", ja: "2021年の選挙区ごとの得票率。" }, caption: { en: "2021 districts", ja: "2021年の選挙区" } },
        { file: "california-ab604.webp", alt: { en: "Vote share by proposed AB 604 districts.", ja: "AB 604案の選挙区ごとの得票率。" }, caption: { en: "AB 604 districts", ja: "AB 604案の選挙区" } },
        { file: "california-table.webp", alt: { en: "Table comparing selected districts.", ja: "主な選挙区の比較表。" }, caption: { en: "Selected districts", ja: "主な選挙区" } },
      ],
    },
  ],
  sources: [],
});
