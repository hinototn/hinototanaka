// MAPPING THE GAPS
// My content for this project. English and Japanese sit side by side.

project({
  intro: { en: "Middlebury is easy to walk around in many places, but how accessible is it for someone who relies on tactile paving?", ja: "ミドルベリー大学のキャンパスは、点字ブロックに頼って歩く人にとっても歩きやすいのか。" },
  hero: {
    file: "tactile-map.webp",
    alt: { en: "Middlebury College campus with blue symbols where tactile paving exists and red symbols where it is missing.", ja: "ミドルベリー大学のキャンパス。青は点字ブロックがある場所、赤はない場所。" },
    caption: { en: "Blue: tactile paving present. Red: missing.", ja: "青は点字ブロックあり、赤はなし。" },
  },
  facts: [
    { label: { en: "Team", ja: "チーム" }, text: { en: "With Mimi and Arlo", ja: "Mimi、Arloと" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS, OpenStreetMap", ja: "QGIS、OpenStreetMap" } },
    { label: { en: "Data", ja: "データ" }, text: { en: "Our own field survey, September 2025", ja: "自分たちの現地調査（2025年9月）" } },
  ],
  about: {
    en: ["There was no dataset on tactile paving at Middlebury, so we made one on foot. Several crosswalks are missing tactile warnings, and none of the stairs or slopes we surveyed had them."],
    ja: ["ミドルベリーには点字ブロックのデータがなかったので、歩いて作った。いくつもの横断歩道で警告用の点字ブロックが欠けていて、調べた階段や坂道には一つもなかった。"],
  },
  // The one-line process summary shown above the sections.
  workflow: [{ en: "Fieldwork", ja: "現地調査" }, { en: "Mapping in QGIS", ja: "QGISで地図化" }, { en: "Symbols", ja: "記号" }],

  sections: [
    {
      heading: { en: "Fieldwork and map", ja: "現地調査と地図" },
      text: {
        en: ["In September 2025, Mimi, Arlo and I walked campus and recorded tactile paving at crosswalks, sidewalks, intersections, stairs and slopes. I mapped every point in QGIS on an OpenStreetMap base, using blue where paving exists and red where it is missing, with a different symbol for each kind of place. The map covers the routes we walked and is a survey rather than an official compliance audit."],
        ja: ["2025年9月、Mimi、Arloとキャンパスを歩き、横断歩道、歩道、交差点、階段、坂道の点字ブロックを記録した。その全地点を、OpenStreetMapをもとにQGISで地図にした。あるところは青、ないところは赤で示し、場所の種類ごとに記号を変えた。地図に載っているのは歩いた範囲で、正式な基準の審査ではなく調査の記録だ。"],
      },
    },
  ],
  sources: [
    { en: "Base data: OpenStreetMap contributors.", ja: "ベースデータ：OpenStreetMapの貢献者" },
  ],
});
