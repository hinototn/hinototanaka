// MAPPING HOUSING POTENTIAL
// My content for this project. English and Japanese sit side by side.

project({
  intro: { en: "Where might new housing make sense in Addison County, Vermont?", ja: "バーモント州アディソン郡で、新しい住宅はどこに建てられそうか。" },
  hero: {
    file: "addison-housing.webp",
    alt: { en: "Addison County with candidate housing zones hatched in pink, plus schools, grocery stores and wetlands.", ja: "アディソン郡の住宅候補地をピンクの斜線で示し、学校、スーパー、湿地を重ねた地図。" },
    caption: { en: "Candidate zones are hatched in pink.", ja: "ピンクの斜線が候補地。" },
  },
  facts: [
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS", ja: "QGIS" } },
    { label: { en: "Data", ja: "データ" }, text: { en: "Existing residential land, K–12 schools, grocery stores, wetlands", ja: "既存の住宅地、小・中・高校、スーパー、湿地" } },
  ],
  about: {
    en: ["Vermont needs more housing, and a good place for a home is about more than available land. I looked for places in Addison County that are already residential, close to a school and within reach of a grocery store."],
    ja: ["バーモントは住宅が足りないが、住む場所として良いかどうかは、空いている土地だけでは決まらない。アディソン郡で、すでに住宅地であり、学校に近く、買い物にも行ける場所を探した。"],
  },
  // The one-line process summary shown above the sections.
  workflow: [{ en: "Question", ja: "問い" }, { en: "Criteria", ja: "条件" }, { en: "Overlay", ja: "重ね合わせ" }, { en: "Map", ja: "地図" }],

  sections: [
    {
      heading: { en: "Method", ja: "方法" },
      text: {
        en: ["An area counted as a candidate if it was existing residential land within half a mile of a K–12 school and within five miles of a grocery store. Where all three conditions overlap, the map hatches the land in pink, which keeps the base map readable underneath. Wetlands stay on the map so the constraints are visible next to the candidates. It is meant as a starting point for discussion, not a list of places that should be built on."],
        ja: ["候補にしたのは、すでに住宅地で、小・中・高校から0.5マイル以内、スーパーから5マイル以内の場所。三つの条件が重なる場所をピンクの斜線で示し、下の地図も読めるようにした。湿地も残し、候補地の横で制約が見えるようにした。話し合いを始めるための地図で、建てるべき場所の一覧ではない。"],
      },
    },
  ],
  sources: [],
});
