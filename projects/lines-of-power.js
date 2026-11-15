// PARTISAN GERRYMANDERING
// My content for this project. English and Japanese sit side by side.
// (The file keeps its old name, lines-of-power, so existing links still work.)

project({
  // The line under the title.
  intro: { en: "Congressional Redistricting in California", ja: "カリフォルニア州の下院選挙区割り" },
  hero: {
    file: "california-compare.webp",
    alt: { en: "Side-by-side maps of Trump vote share under the 2021 and AB 604 California congressional districts.", ja: "カリフォルニア州の2021年の選挙区とAB 604の選挙区で、トランプへの得票率を並べた地図。" },
    caption: { en: "The same votes under two sets of district lines.", ja: "同じ票、二つの区割り。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Project for Human Geography with GIS (GEOG 0261), Middlebury College", ja: "ミドルベリー大学の授業「Human Geography with GIS（GEOG 0261）」の課題" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "Excel, QGIS", ja: "Excel、QGIS" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Data", ja: "データ" }, { en: "Classification", ja: "階級分け" }, { en: "Map comparison", ja: "地図の比較" }, { en: "Table", ja: "表" }],

  sections: [
    {
      heading: { en: "Data", ja: "データ" },
      text: {
        en: ["For this project, I wanted to examine how redrawing congressional districts can change the political representation of an area, even when the underlying voting patterns remain the same. I compared Republican presidential vote share from the 2024 election in California, using both the 2021 congressional district boundaries and those under AB 604. In QGIS, I joined the 2024 results to both sets of district boundaries. By keeping the election results constant, I could focus on how the distribution of votes changes when they are grouped into different districts."],
        ja: ["この課題では、投票のパターンそのものは同じでも、下院の選挙区を引き直すことで、ある地域の政治的な代表のされ方がどう変わるのかを調べたかった。カリフォルニア州の2024年大統領選での共和党の得票率を、2021年の選挙区とAB 604による選挙区の両方で比べた。QGISで、2024年の結果を二つの区割りそれぞれに結びつけた。選挙結果を固定することで、票を別の選挙区にまとめたときに分布がどう変わるかに集中できた。"],
      },
    },
    {
      heading: { en: "Classification", ja: "階級分け" },
      text: {
        en: ["I used the same color scheme and geographic extent for both maps, with blue representing lower Republican vote shares and red representing higher shares. This allowed me to compare the geographical distribution of votes under the two sets of congressional boundaries."],
        ja: ["二枚の地図で配色と範囲をそろえ、共和党の得票率が低いほど青、高いほど赤にした。これで、二つの区割りでの票の地理的な分布を比べられるようにした。"],
      },
    },
    {
      heading: { en: "Comparison", ja: "比較" },
      text: {
        en: ["I placed the two maps side by side and included a table, built in Excel, comparing the districts with the most significant changes in Republican vote share. The differences were quite striking, particularly in Northern California, where a large Republican-leaning district under the 2021 boundaries was divided and incorporated into districts with different voting patterns under AB 604.",
             "In all six districts highlighted in the table, Trump’s share of the 2024 presidential vote fell from above 50% under the old boundaries to below 50% under the new ones. District 1 showed the largest change, dropping from 62.8% to 43.7%, while Districts 41 and 48 also saw substantial decreases. Of course, the actual votes did not change; only the boundaries used to group them did. The comparison demonstrates how redistricting can substantially alter the partisan composition of congressional districts without changing the underlying election results."],
        ja: ["二枚の地図を並べ、共和党の得票率がとくに大きく変わった選挙区を比べる表をExcelで作って添えた。違いはかなり目立った。とくに北カリフォルニアでは、2021年の区割りで共和党寄りだった大きな選挙区が分割され、AB 604の区割りでは投票傾向の違う選挙区に組み込まれていた。",
             "表で取り上げた六つの選挙区すべてで、2024年大統領選のトランプの得票率は、古い区割りでは50%を超えていたのに、新しい区割りでは50%を下回った。いちばん大きく変わったのは第1区で、62.8%から43.7%に下がった。第41区と第48区も大きく下がった。もちろん実際の票は何も変わっていない。変わったのは、票をまとめる境界線だけだ。この比較は、選挙結果そのものを変えなくても、区割りによって選挙区の党派の構成が大きく変わりうることを示している。"],
      },
      images: [
        { file: "california-2021.webp", alt: { en: "Vote share by 2021 districts.", ja: "2021年の選挙区ごとの得票率。" }, caption: { en: "2021 districts", ja: "2021年の選挙区" } },
        { file: "california-ab604.webp", alt: { en: "Vote share by AB 604 districts.", ja: "AB 604の選挙区ごとの得票率。" }, caption: { en: "AB 604 districts", ja: "AB 604の選挙区" } },
        { file: "california-table.webp", alt: { en: "Table comparing selected districts.", ja: "主な選挙区の比較表。" }, caption: { en: "Selected districts", ja: "主な選挙区" } },
      ],
    },
  ],
  sources: [],
});
