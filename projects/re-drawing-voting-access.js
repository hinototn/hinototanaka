// RE-DRAWING VOTING ACCESS
// My content for this project. English and Japanese sit side by side.

project({
  // The line under the title.
  intro: { en: "Polling-Place Accessibility in Richmond", ja: "リッチモンドの投票所への行きやすさ" },
  hero: {
    file: "richmond-change.webp", width: 860,   // a bit smaller than full width
    alt: { en: "Richmond precincts showing how the share of homes more than a mile from a polling station changes when polling places move.", ja: "投票所を動かしたとき、投票所まで1マイル以上ある住宅の割合が各地区でどう変わるかを示した地図。" },
    caption: { en: "Change in the share of homes more than a mile from their polling place.", ja: "投票所まで1マイル以上ある住宅の割合の変化。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Project for Human Geography with GIS (GEOG 0261), Middlebury College", ja: "ミドルベリー大学の授業「Human Geography with GIS（GEOG 0261）」の課題" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "Excel, QGIS, QuickOSM", ja: "Excel、QGIS、QuickOSM" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Question", ja: "問い" }, { en: "Distance analysis", ja: "距離の分析" }, { en: "Alternative locations", ja: "別の候補地" }, { en: "Comparison", ja: "比較" }],

  sections: [
    {
      heading: { en: "Question", ja: "問い" },
      text: {
        en: ["Distance can be a significant barrier to voting, particularly for people who do not have access to a car. For this project, I wanted to examine how accessible polling places were to residents of Richmond, Virginia, and whether relocating them could improve access. I focused on walking distance, looking at how many residential addresses were more than one mile from their assigned polling place."],
        ja: ["距離は、とくに車を使えない人にとって、投票の大きな壁になりうる。この課題では、バージニア州リッチモンドの住民にとって投票所がどれだけ行きやすいか、そして投票所を移せば行きやすくなるのかを調べたかった。注目したのは歩く距離で、割り当てられた投票所から1マイル以上離れた住宅の住所がどれだけあるかを見た。"],
      },
    },
    {
      heading: { en: "Distance analysis", ja: "距離の分析" },
      text: {
        en: ["Using QGIS and a street network I downloaded from OpenStreetMap with QuickOSM, I calculated the distance along roads between residential addresses and their assigned polling places, then determined the percentage of addresses more than one mile away in each precinct. I also mapped households without access to a vehicle using data from the American Community Survey, since these residents would be particularly affected by longer distances."],
        ja: ["QGISと、QuickOSMでOpenStreetMapからダウンロードした道路網を使い、住宅の住所から割り当てられた投票所までの道のりを計算した。そのうえで、投票区ごとに1マイル以上離れた住所の割合を出した。距離が長いととくに影響を受けるのは車を使えない世帯なので、米国コミュニティ調査のデータでそうした世帯も地図にした。"],
      },
      images: [
        { file: "richmond-carless.webp", alt: { en: "Map of households without a car in Richmond.", ja: "リッチモンドの車を持たない世帯の地図。" }, caption: { en: "Households without a car.", ja: "車を持たない世帯。" } },
      ],
    },
    {
      heading: { en: "Alternative locations", ja: "別の候補地" },
      text: {
        en: ["I then explored whether moving polling places could improve accessibility. Using each precinct’s pole of inaccessibility as a reference, I identified alternative locations and repeated the distance calculations to compare them with the existing arrangement."],
        ja: ["次に、投票所を移せば行きやすくなるのかを探った。各投票区の到達不能極（いちばん行きにくい地点）を手がかりに別の候補地を決め、距離の計算をやり直して、今の配置と比べた。"],
      },
    },
    {
      heading: { en: "Comparison", ja: "比較" },
      text: {
        en: ["To make the comparison consistent, I kept the same precinct boundaries, color scheme, and classification breaks across the before-and-after maps, and compiled the percentages for each precinct in Excel. The results showed an overall improvement, with 40 precincts becoming more accessible and 15 becoming less accessible. The average percentage of residential addresses more than one mile from their polling place decreased from 22.9% to 21.2%.",
             "Although the results suggest that relocating polling places could improve accessibility, the changes did not benefit every precinct. The analysis also does not account for the availability of suitable buildings or the administrative requirements for establishing polling places, so the proposed locations are intended as a geographical exercise rather than actual recommendations."],
        ja: ["公平に比べられるよう、変更前と変更後の地図で投票区の境界、配色、階級の区切りをそろえ、投票区ごとの割合をExcelでまとめた。全体としては改善が見られ、40の投票区で行きやすくなり、15の投票区で行きにくくなった。投票所から1マイル以上離れた住所の平均割合は、22.9%から21.2%に下がった。",
             "結果からは、投票所を移すことで行きやすくなる可能性がうかがえるが、すべての投票区が良くなったわけではない。また、この分析では、使える建物があるかどうかや、投票所を設けるための行政上の条件は考えていない。だから、ここで示した場所は実際の提案ではなく、地理学の演習として見てほしい。"],
      },
      images: [
        { file: "richmond-before.webp", alt: { en: "Existing polling stations and the share of homes more than a mile away.", ja: "現在の投票所と1マイル以上離れた住宅の割合。" }, caption: { en: "Before", ja: "変更前" } },
        { file: "richmond-after.webp", alt: { en: "Updated polling stations and the share of homes more than a mile away.", ja: "変更後の投票所と1マイル以上離れた住宅の割合。" }, caption: { en: "After", ja: "変更後" } },
        { file: "richmond-stats.webp", alt: { en: "Table summarizing the change in voting access.", ja: "投票所への行きやすさの変化をまとめた表。" }, caption: { en: "Summary table", ja: "集計表" } },
      ],
    },
  ],
  sources: [
    { en: "U.S. Census Bureau, American Community Survey.", ja: "米国勢調査局、米国コミュニティ調査" },
  ],
});
