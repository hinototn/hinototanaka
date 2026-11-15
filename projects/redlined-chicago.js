// REDLINED CHICAGO
// My content for this project. English and Japanese sit side by side.

project({
  // The line under the title.
  intro: { en: "Critical Geographical Analysis of the City", ja: "批判地理学から見る都市" },
  hero: {
    file: "chicago-redlining.webp",
    alt: { en: "Chicago census tracts shaded by redlining index, darker red across parts of the South and West Sides.", ja: "シカゴの国勢調査区をレッドライニングの指標で塗り分けた地図。南部と西部の一部で赤が濃い。" },
    caption: { en: "Historic redlining index by census tract.", ja: "国勢調査区ごとのレッドライニングの指標。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Human Geography with GIS (GEOG 0261), Middlebury College", ja: "ミドルベリー大学の授業「Human Geography with GIS（GEOG 0261）」" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "R (tidycensus), QGIS, QuickOSM", ja: "R（tidycensus）、QGIS、QuickOSM" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Research question", ja: "問い" }, { en: "Data collection", ja: "データ収集" }, { en: "Thematic maps", ja: "主題図" }, { en: "Urban models", ja: "都市モデル" }],

  sections: [
    {
      heading: { en: "Question", ja: "問い" },
      text: {
        en: ["Chicago has a long history of racial segregation and redlining, and I wanted to examine how these patterns relate to the city’s geography today. I focused on race, ethnicity, rent, historical redlining, and access to green space, looking at how these variables overlap across different neighborhoods and whether their distribution could be explained by distance from downtown."],
        ja: ["シカゴには人種による住み分けとレッドライニング（金融機関による地域ぐるみの融資差別）の長い歴史がある。そのパターンが今の街の地理とどう関係しているのかを調べたかった。人種・民族、家賃、かつてのレッドライニング、緑地への行きやすさに注目し、これらが地区ごとにどう重なるのか、そしてその分布が中心部からの距離で説明できるのかを見た。"],
      },
    },
    {
      heading: { en: "Data collection", ja: "データ収集" },
      text: {
        en: ["I used the tidycensus package in R to collect census tract-level data on race, ethnicity, and median gross rent, which I joined to geographic boundaries in QGIS. I also worked with a historical redlining index and used QuickOSM to bring in parks and green spaces from OpenStreetMap."],
        ja: ["Rのtidycensusパッケージで、国勢調査区ごとの人種・民族と家賃（総家賃の中央値）のデータを集め、QGISで地区の境界に結びつけた。かつてのレッドライニングの指標も使い、公園や緑地はQuickOSMでOpenStreetMapから読み込んだ。"],
      },
      images: [
        { file: "chicago-process.webp", alt: { en: "The QGIS project in progress.", ja: "作業中のQGISの画面。" }, caption: { en: "Work in QGIS", ja: "QGISでの作業" } },
      ],
    },
    {
      heading: { en: "Thematic maps", ja: "主題図" },
      text: {
        en: ["I made three thematic maps, each showing a different variable at the census tract level. The first mapped median gross rent in monthly dollars, while the second classified tracts by their predominant racial or ethnic group: Asian, Black, Latino, White, or Mixed. The third showed a historical redlining index ranging from 1 to 4, with darker reds representing higher index values. I kept the geographic extent and reference features consistent across the maps so the patterns could be compared more easily.",
             "I also summarized the data in a table organized by racial or ethnic group, comparing average median rent, average redlining index, the percentage of residents with access to green space, and the percentage of land covered by green space. This allowed me to examine relationships that would have been difficult to show clearly on a single map."],
        ja: ["国勢調査区ごとに、それぞれ別の変数を示す主題図を三枚作った。一枚目は月々の家賃の中央値（ドル）。二枚目は、地区ごとに最も多い人種・民族（アジア系、黒人、ラテン系、白人、混合）で分類した。三枚目はかつてのレッドライニングの指標（1〜4）で、値が高いほど赤を濃くした。パターンを比べやすいよう、三枚とも範囲と参照のための地物をそろえた。",
             "データは人種・民族ごとの表にもまとめ、家賃の中央値の平均、レッドライニングの指標の平均、緑地に行ける住民の割合、緑地が占める土地の割合を比べた。一枚の地図でははっきり示しにくい関係も、これで見られるようになった。"],
      },
      images: [
        { file: "chicago-rent.webp", alt: { en: "Median gross rent by tract.", ja: "地区ごとの家賃の中央値。" }, caption: { en: "Median rent", ja: "家賃の中央値" } },
        { file: "chicago-groups.webp", alt: { en: "Racial and ethnic majority by tract.", ja: "地区ごとに最も多い人種・民族。" }, caption: { en: "Predominant group", ja: "最も多い人種・民族" } },
        { file: "chicago-green-access.webp", alt: { en: "Table of green-space access by majority group.", ja: "多数派ごとの緑地への行きやすさの表。" }, caption: { en: "Summary table", ja: "集計表" } },
      ],
    },
    {
      heading: { en: "Urban models", ja: "都市モデル" },
      text: {
        en: ["I compared the results with two classical models of urban geography: Burgess’s concentric zone model and Hoyt’s sector model. The maps showed higher rents and predominantly White neighborhoods extending north of downtown, while many Black- and Latino-majority neighborhoods to the south and west had lower rents and higher redlining index values.",
             "The patterns did not follow simple concentric rings around downtown, suggesting that distance from the city center alone could not explain Chicago’s spatial divisions. Although several of the variables showed considerable overlap, the analysis was descriptive and could not establish a direct causal relationship between historical redlining and present-day conditions."],
        ja: ["結果を、都市地理学の二つの古典的なモデル、バージェスの同心円モデルとホイトの扇形モデルと比べた。地図では、家賃が高く白人が多い地区が中心部の北に広がり、南部と西部の黒人やラテン系が多い地区の多くでは、家賃が低く、レッドライニングの指標が高かった。",
             "パターンは中心部を囲む単純な同心円にはならず、中心からの距離だけではシカゴの空間的な分断を説明できないことがうかがえた。いくつかの変数はかなり重なっていたが、この分析は記述的なもので、かつてのレッドライニングと今の状況のあいだに直接の因果関係があるとまでは言えない。"],
      },
    },
  ],
  sources: [
    { en: "Census data: U.S. Census Bureau, via tidycensus. Parks: OpenStreetMap contributors.", ja: "国勢調査データ：米国勢調査局（tidycensus経由）。公園：OpenStreetMapの貢献者" },
  ],
});
