// DOWNTOWN DERBY
// My content for this project. English and Japanese sit side by side.

project({
  intro: { en: "Two ways of mapping downtown Louisville, Kentucky.", ja: "ケンタッキー州ルイビルの中心部を、二つの方法で地図にした。" },
  hero: {
    file: "louisville-housing.webp", width: 820,   // a bit smaller than full width
    alt: { en: "Orange choropleth showing areas with 50 or more housing units in central Louisville.", ja: "ルイビル中心部で住宅が50戸以上ある地区をオレンジ色で示した地図。" },
    caption: { en: "Areas with 50 or more housing units.", ja: "住宅が50戸以上ある地区。" },
  },
  facts: [
    { label: { en: "Data", ja: "データ" }, text: { en: "American Community Survey 2023 (5-year estimates) via Social Explorer; OpenStreetMap", ja: "米国コミュニティ調査2023年（5年推計、Social Explorer経由）、OpenStreetMap" } },
  ],
  about: {
    en: ["I mapped the same few square miles of Louisville twice, once as census data and once as streets and buildings, to see how much the subject and scale of a map change the picture of a place."],
    ja: ["ルイビルの同じ数平方マイルを二回地図にした。一回は国勢調査のデータとして、もう一回は道路と建物として。何をどの縮尺で描くかで、場所の見え方がどれだけ変わるかを確かめたかった。"],
  },
  // The one-line process summary shown above the sections.
  workflow: [{ en: "Data", ja: "データ" }, { en: "Choropleth", ja: "階級区分図" }, { en: "Street map", ja: "道路の地図" }],

  sections: [
    {
      heading: { en: "Two maps", ja: "二枚の地図" },
      text: {
        en: ["The first map shows areas with 50 or more housing units, from the 2023 American Community Survey, in a single orange ramp that makes the downtown core easy to find. The second uses OpenStreetMap to draw the street network and buildings as a reference map."],
        ja: ["一枚目は、2023年の米国コミュニティ調査から、住宅が50戸以上ある地区をオレンジ一色の濃淡で示し、中心部がすぐ見つかるようにした。二枚目はOpenStreetMapで道路網と建物を描いた参照図だ。"],
      },
      images: [
        { file: "louisville-basemap.webp", alt: { en: "Streets and buildings of downtown Louisville from OpenStreetMap.", ja: "OpenStreetMapによるルイビル中心部の道路と建物。" }, caption: { en: "Streets and buildings.", ja: "道路と建物。" } },
      ],
    },
  ],
  sources: [
    { en: "Housing data: U.S. Census Bureau, American Community Survey 2023, via Social Explorer. Streets and buildings: OpenStreetMap contributors.", ja: "住宅データ：米国勢調査局、米国コミュニティ調査2023年（Social Explorer経由）。道路と建物：OpenStreetMapの貢献者" },
  ],
});
