// CARTOGRAPHIC STUDIES
// My content for this project. English and Japanese sit side by side.
// These are studies of other people's work, so I credit the originals.

project({
  intro: { en: "Two cartography exercises: recreating map symbols and studying type.", ja: "地図記号の再現と、文字の使い方を学ぶ二つの課題。" },
  hero: {
    file: "design-symbols.webp",
    alt: { en: "Sheet of twelve cartographic symbols recreated as vectors, with notes on how each was built.", ja: "12種類の地図記号をベクターで再現し、作り方をまとめたシート。" },
    caption: { en: "Symbol study sheet.", ja: "地図記号のシート。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Cartography exercises with Jeff Howarth", ja: "Jeff Howarthの地図学の課題" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "Adobe Illustrator", ja: "Adobe Illustrator" } },
  ],
  about: {
    en: ["Jeff Howarth taught me that every choice on a map matters. These two exercises were about learning to see those choices in other cartographers’ work: how a symbol is built, and how type sets up a hierarchy."],
    ja: ["Jeff Howarthからは、地図のどんな選択にも意味があると教わった。この二つの課題は、ほかの地図製作者の作品の中にその選択を見つける練習だった。記号がどう作られているか、文字がどう強弱をつけているか。"],
  },
  // The one-line process summary shown above the sections.
  workflow: [{ en: "Symbol recreation", ja: "記号の再現" }, { en: "Type study", ja: "文字の分析" }],

  sections: [
    {
      heading: { en: "Symbols and type", ja: "記号と文字" },
      text: {
        en: ["For the first, I recreated symbols from published maps in Illustrator and wrote down how each was made, which taught me a lot about line weight, spacing and texture. For the second, I took apart the typography of National Geographic’s <em>High Arctic Caving</em> graphic by Annika Hoerner, sorting every typeface, size, weight and color into a taxonomy."],
        ja: ["一つ目は、出版された地図の記号をIllustratorで作り直し、それぞれの作り方を書き留めた。線の太さや間隔、質感について多くを学んだ。二つ目は、National Geographicの「High Arctic Caving」（Annika Hoerner作）の文字を分解し、書体、大きさ、太さ、色をすべて分類した。"],
      },
      images: [
        { file: "design-typography.webp", alt: { en: "Type taxonomy sheet for High Arctic Caving.", ja: "「High Arctic Caving」の文字を分類したシート。" }, caption: { en: "Type taxonomy of <em>High Arctic Caving</em>.", ja: "「High Arctic Caving」の文字の分類。" } },
      ],
    },
  ],
  sources: [
    { en: "<em>High Arctic Caving</em>, National Geographic, by Annika Hoerner. Studied here, not my original design.", ja: "「High Arctic Caving」National Geographic、Annika Hoerner作。学習のための分析で、私のオリジナルではない" },
  ],
});
