// DOWNTOWN LOUISVILLE
// My content for this project. English and Japanese sit side by side.
// (The file keeps its old name, downtown-derby, so existing links still work.)

project({
  // The line under the title.
  intro: { en: "Urban Geography Through Field Observation", ja: "現地観察から見る都市地理" },
  hero: {
    file: "louisville-housing.webp", width: 820,   // a bit smaller than full width
    alt: { en: "Orange choropleth showing areas with 50 or more housing units in central Louisville.", ja: "ルイビル中心部で住宅が50戸以上ある地区をオレンジ色で示した地図。" },
    caption: { en: "Housing in buildings with 50 or more units.", ja: "50戸以上の建物にある住宅。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Project for Urban Geography (GEOG 0100), Middlebury College", ja: "ミドルベリー大学の授業「Urban Geography（GEOG 0100）」の課題" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "Social Explorer, OpenStreetMap", ja: "Social Explorer、OpenStreetMap" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Census data", ja: "国勢調査データ" }, { en: "Thematic maps", ja: "主題図" }, { en: "Field observation", ja: "現地観察" }, { en: "Comparison", ja: "比較" }],

  sections: [
    {
      heading: { en: "Census data", ja: "国勢調査データ" },
      text: {
        en: ["While in Louisville for NACIS 2025, I took the opportunity to study downtown Louisville, specifically Census Tract 49, for my Urban Geography course. I began by examining demographic and housing data from the 2023 American Community Survey, comparing the tract with Jefferson County and Kentucky. Several figures stood out, particularly the high population density, the 22.8% housing vacancy rate, and the fact that 68% of housing units were in buildings containing 50 or more units, compared with less than 5% at both the county and state levels."],
        ja: ["NACIS 2025でルイビルに行った機会に、都市地理学の授業の課題として、ルイビルのダウンタウン、具体的には国勢調査区49を調べた。まず2023年の米国コミュニティ調査から人口と住宅のデータを見て、ジェファーソン郡やケンタッキー州と比べた。目立った数字がいくつかあった。とくに人口密度の高さ、22.8%という住宅の空き家率、そして住宅の68%が50戸以上の建物にあること（郡と州ではどちらも5%未満）だ。"],
      },
    },
    {
      heading: { en: "Mapping", ja: "地図化" },
      text: {
        en: ["I made two maps to examine the area’s physical and residential geography. The first focused on housing in buildings with 50 or more units, using an orange color ramp to show the distribution of high-density housing. The second used OpenStreetMap data to show the street network and buildings, revealing the compact, rectangular blocks that characterize downtown Louisville."],
        ja: ["この地域の物理的な地理と住まいの地理を調べるために、地図を二枚作った。一枚目は50戸以上の建物にある住宅に注目し、オレンジの濃淡で高密度の住宅の分布を示した。二枚目はOpenStreetMapのデータで道路網と建物を描き、ルイビルのダウンタウンらしい、小さくまとまった長方形の街区を見せた。"],
      },
      images: [
        { file: "louisville-basemap.webp", alt: { en: "Streets and buildings of downtown Louisville from OpenStreetMap.", ja: "OpenStreetMapによるルイビル中心部の道路と建物。" }, caption: { en: "Streets and buildings.", ja: "道路と建物。" } },
      ],
    },
    {
      heading: { en: "Field observation", ja: "現地観察" },
      text: {
        en: ["I also spent five days observing the area on foot, paying attention to land use, architecture, pedestrian activity, transportation, and accessibility. What I found was a considerable contrast between the busy, tourist-oriented downtown core and the quieter surrounding streets. Hotels, restaurants, offices, and cultural attractions were concentrated near the center, while just a few blocks away, I encountered vacant lots, boarded-up buildings, and relatively little pedestrian activity. I also noticed limited green space, few grocery stores, and inconsistent accessibility infrastructure, including tactile paving."],
        ja: ["5日間かけて歩いて地域を観察し、土地利用、建築、歩く人の様子、交通、アクセシビリティに目を向けた。わかったのは、観光客向けのにぎやかな中心部と、静かな周りの通りとの大きな差だ。ホテル、レストラン、オフィス、文化施設は中心近くに集まっていたが、ほんの数ブロック離れると、空き地や板でふさがれた建物があり、歩く人もあまりいなかった。緑地が少なく、食料品店もわずかで、点字ブロックなどのアクセシビリティの設備にもむらがあった。"],
      },
    },
    {
      heading: { en: "Comparison", ja: "比較" },
      text: {
        en: ["Comparing my observations with the census data and maps helped me better understand the strengths and limitations of each approach. The quantitative data described a dense urban area with a largely working-age population, high-rise housing, and considerable economic inequality, while walking through the district revealed how much conditions could change within just a few blocks. Neither approach gave me the complete picture on its own, which was ultimately the point of the assignment: understanding a city requires both statistical analysis and firsthand observation."],
        ja: ["観察を国勢調査のデータや地図と比べることで、それぞれの方法の強みと限界がよくわかった。数値のデータが描いていたのは、働く世代が多く、高層の住宅があり、経済的な格差の大きい、密集した都市部だった。一方、実際に歩いてみると、ほんの数ブロックで状況がどれだけ変わるかが見えた。どちらの方法も、それだけでは全体像はつかめない。それこそがこの課題の狙いで、都市を理解するには統計による分析と自分の目での観察の両方が必要だ。"],
      },
    },
  ],
  sources: [
    { en: "U.S. Census Bureau, American Community Survey 2023 (5-year estimates), via Social Explorer; OpenStreetMap contributors; personal field observations, October 2025.", ja: "米国勢調査局、米国コミュニティ調査2023年（5年推計、Social Explorer経由）、OpenStreetMapの貢献者、自身の現地観察（2025年10月）" },
  ],
});
