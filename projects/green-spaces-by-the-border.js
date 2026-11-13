// GREEN SPACES BY THE BORDER
// My content for this project. English and Japanese sit side by side.

project({
  intro: { en: "A map of the largely undeveloped land around Pownal, in the southwest corner of Vermont.", ja: "バーモント州南西端、ポーナルに残る緑地を地図にした。" },
  hero: {
    file: "pownal-green.webp",
    alt: { en: "Town of Pownal, Vermont: green parcels, roads, a land-development inset and a locator globe.", ja: "バーモント州ポーナルの緑地と区画の地図。道路、土地開発の小地図、位置を示す地球儀つき。" },
    caption: { en: "Town of Pownal, Vermont.", ja: "バーモント州ポーナル町。" },
  },
  facts: [
    { label: { en: "Data", ja: "データ" }, text: { en: "Land parcels, impervious surface, roads, town and state boundaries", ja: "土地の区画、不浸透面（舗装や建物）、道路、町と州の境界" } },
  ],
  about: {
    en: ["Pownal sits where Vermont meets New York and Massachusetts, and most of the town is still green. I mapped the large parcels with very little pavement or buildings, together with roads, nearby towns and the state lines."],
    ja: ["ポーナルは、バーモントがニューヨーク州とマサチューセッツ州に接する場所にあり、町の大半はまだ緑だ。舗装や建物がほとんどない広い区画を、道路や近くの町、州境と一緒に地図にした。"],
  },
  // The one-line process summary shown above the sections.
  workflow: [{ en: "Parcels", ja: "区画" }, { en: "Design", ja: "デザイン" }, { en: "Locator", ja: "位置図" }],

  sections: [
    {
      heading: { en: "Design", ja: "デザイン" },
      text: {
        en: ["Shades of green carry the main message and everything else stays gray. Because a small town is hard to place on its own, a globe and a small inset take the reader from the whole planet to this corner of Vermont without taking space away from the town itself."],
        ja: ["伝えたいことは緑の濃淡に任せ、ほかはすべてグレーにした。小さな町はそれだけではどこにあるかわかりにくいので、地球儀と小さな地図で、地球全体からバーモントの片隅まで案内した。町の地図の場所は取らないようにした。"],
      },
    },
  ],
  sources: [],
});
