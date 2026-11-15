// MAPPING HOUSING POTENTIAL
// My content for this project. English and Japanese sit side by side.

project({
  // The line under the title.
  intro: { en: "Tackling Addison County’s Housing Crisis", ja: "アディソン郡の住宅不足に向き合う" },
  hero: {
    file: "addison-housing.webp",
    alt: { en: "Addison County with candidate housing zones hatched in pink, plus schools, grocery stores and wetlands.", ja: "アディソン郡の住宅候補地をピンクの斜線で示し、学校、スーパー、湿地を重ねた地図。" },
    caption: { en: "Candidate zones are hatched in pink.", ja: "ピンクの斜線が候補地。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Project for Cartography (GEOG 0271) at Middlebury College", ja: "ミドルベリー大学の授業「Cartography（GEOG 0271）」の課題" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS, Adobe Illustrator", ja: "QGIS、Adobe Illustrator" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Question", ja: "問い" }, { en: "Criteria", ja: "条件" }, { en: "Overlay", ja: "重ね合わせ" }, { en: "Map", ja: "地図" }],

  sections: [
    {
      heading: { en: "Question", ja: "問い" },
      text: {
        en: ["Vermont needs more housing, but a good place for a home depends on more than open land. People also need to get to school and buy groceries without a long trip. I wanted to find places in Addison County that met a few basic conditions for new housing."],
        ja: ["バーモントには住宅が足りないが、住む場所として良いかどうかは、空いている土地だけでは決まらない。学校に通ったり食料品を買ったりするのに、遠くまで行かずに済むことも大事だ。アディソン郡で、新しい住宅のためのいくつかの基本的な条件を満たす場所を探したかった。"],
      },
    },
    {
      heading: { en: "Criteria and overlay", ja: "条件と重ね合わせ" },
      text: {
        en: ["I set three conditions: the land had to already be residential, within half a mile of a K–12 school, and within five miles of a grocery store. In QGIS, I created distance buffers around schools and grocery stores and intersected them with residential land. Where all three conditions overlap, the land counts as a candidate zone."],
        ja: ["条件は三つにした。すでに住宅地であること、小・中・高校から0.5マイル以内であること、スーパーから5マイル以内であること。QGISで学校とスーパーの周りに距離のバッファを作り、住宅地と重ね合わせた。三つの条件がすべて重なる土地を候補地とした。"],
      },
    },
    {
      heading: { en: "Map", ja: "地図" },
      text: {
        en: ["I finished the map in Adobe Illustrator, where I hatched the candidate zones in pink instead of filling them in, so the base map would stay readable underneath. I kept wetlands on the map so the constraints would be visible right next to the candidates. The map is meant as a starting point for discussion, not a list of places that should be built on."],
        ja: ["地図はAdobe Illustratorで仕上げた。候補地は塗りつぶさずにピンクの斜線にして、下の地図も読めるようにした。湿地も地図に残し、候補地のすぐ横で制約が見えるようにした。この地図は話し合いを始めるためのもので、建てるべき場所の一覧ではない。"],
      },
    },
  ],
  sources: [
    { en: "Data from Vermont Center for Geographic Information.", ja: "データ：バーモント地理情報センター（VCGI）" },
  ],
});
