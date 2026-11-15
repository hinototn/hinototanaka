// GREEN SPACES BY THE BORDER
// My content for this project. English and Japanese sit side by side.

project({
  // The line under the title.
  intro: { en: "Land Development in Pownal, VT", ja: "バーモント州ポーナルの土地開発" },
  hero: {
    file: "pownal-green.webp",
    alt: { en: "Town of Pownal, Vermont: green parcels, roads, a land-development inset and a locator globe.", ja: "バーモント州ポーナルの緑地と区画の地図。道路、土地開発の小地図、位置を示す地球儀つき。" },
    caption: { en: "Town of Pownal, Vermont.", ja: "バーモント州ポーナル町。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Project for Cartography (GEOG 0271), Middlebury College", ja: "ミドルベリー大学の授業「Cartography（GEOG 0271）」の課題" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS, Adobe Illustrator", ja: "QGIS、Adobe Illustrator" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Parcel analysis", ja: "区画の分析" }, { en: "Design", ja: "デザイン" }, { en: "Locator map", ja: "位置図" }],

  sections: [
    {
      heading: { en: "Parcels", ja: "区画" },
      text: {
        en: ["Pownal sits in the southwestern corner of Vermont, bordering both New York and Massachusetts, with much of its land remaining undeveloped. Using parcel boundaries and impervious surface data in QGIS, I calculated the share of impervious surface on each parcel and mapped the extent of green space across the town, paying particular attention to larger properties with little development. I also labeled the owners of parcels greater than 200 acres with less than 1% impervious surface, alongside roads, nearby towns, and state boundaries for geographic context."],
        ja: ["ポーナルはバーモント州の南西の端にあり、ニューヨーク州とマサチューセッツ州の両方に接している。土地の多くはまだ開発されていない。QGISで土地の区画と不浸透面（舗装や建物）のデータを使い、区画ごとに不浸透面の割合を計算して、町全体の緑地の広がりを地図にした。とくに注目したのは、開発の少ない広い土地だ。200エーカーを超え、不浸透面が1%未満の区画には所有者の名前を載せ、位置関係がわかるよう、道路、近くの町、州境も示した。"],
      },
    },
    {
      heading: { en: "Design", ja: "デザイン" },
      text: {
        en: ["I designed the map in Adobe Illustrator, using different shades of green to represent the parcels, while keeping roads, boundaries, and other reference features in gray. I wanted the green spaces to stand out without losing the surrounding geography, so I kept the colors relatively simple."],
        ja: ["地図はAdobe Illustratorでデザインした。区画は緑の濃淡で表し、道路や境界などの参照のための地物はグレーにした。周りの地理を失わずに緑地を目立たせたかったので、色はなるべくシンプルにした。"],
      },
    },
    {
      heading: { en: "Locator map", ja: "位置図" },
      text: {
        en: ["Since Pownal is a small town that many viewers would be unfamiliar with, I included a globe and a smaller regional locator map to show its position within Vermont and the northeastern United States. I wanted to provide enough geographic context without taking too much space away from the main map."],
        ja: ["ポーナルは小さな町で、知らない人も多いので、地球儀と小さな地域の位置図を入れ、バーモント州とアメリカ北東部の中での位置を示した。主の地図の場所をとりすぎずに、十分な位置の手がかりを示したかった。"],
      },
    },
  ],
  sources: [
    { en: "Vermont Center for Geographic Information (VCGI).", ja: "バーモント地理情報センター（VCGI）" },
  ],
});
