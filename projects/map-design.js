// CARTOGRAPHIC STUDIES
// My content for this project. English and Japanese sit side by side.
// These are studies of other people's work, so I credit the originals.

project({
  // The line under the title.
  intro: { en: "Symbolization and Typography", ja: "記号と文字" },
  hero: {
    file: "design-symbols.webp",
    alt: { en: "Sheet of twelve cartographic symbols recreated as vectors, with notes on how each was built.", ja: "12種類の地図記号をベクターで再現し、作り方をまとめたシート。" },
    caption: { en: "Symbol study sheet.", ja: "地図記号のシート。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Cartography exercises for Cartography (GEOG 0271), Middlebury College", ja: "ミドルベリー大学の授業「Cartography（GEOG 0271）」の課題" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "Adobe Illustrator", ja: "Adobe Illustrator" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Symbol recreation", ja: "記号の再現" }, { en: "Typography analysis", ja: "文字の分析" }],

  sections: [
    {
      heading: { en: "Symbol recreation", ja: "記号の再現" },
      text: {
        en: ["Jeff Howarth was my cartography professor at Middlebury College and a mentor who greatly influenced how I think about maps and design. One of the most important things he taught me was that every design choice on a map should have a purpose. These two exercises were part of his Cartography course, where we studied how other cartographers use symbols and typography to communicate information.",
             "For the first exercise, I selected twelve symbols from published maps and recreated them in Adobe Illustrator, paying close attention to their shapes, line weights, spacing, and textures. I also documented the techniques used to reproduce each symbol, which helped me understand how even the simplest cartographic elements are constructed."],
        ja: ["Jeff Howarthはミドルベリー大学での地図学の先生で、私の地図やデザインへの考え方に大きな影響を与えた恩師だ。教わったなかでもとくに大事なのは、地図のデザインの選択にはすべて目的があるべきだということ。この二つの課題は先生の地図学の授業の一部で、ほかの地図製作者が記号や文字を使ってどう情報を伝えているかを学んだ。",
             "一つ目の課題では、出版された地図から12の記号を選び、形、線の太さ、間隔、質感をよく見ながらAdobe Illustratorで作り直した。それぞれの記号をどう再現したかも記録した。おかげで、いちばん単純な地図の要素でさえ、どう組み立てられているのかがわかった。"],
      },
    },
    {
      heading: { en: "Typography analysis", ja: "文字の分析" },
      text: {
        en: ["For the second exercise, I studied the typography of National Geographic’s <em>High Arctic Caving</em> graphic by Annika Hoerner. I identified and organized the different typefaces, sizes, weights, and colors into a taxonomy, examining how they establish visual hierarchy and guide the reader through the graphic. I was particularly interested in how typography could distinguish different kinds of information while maintaining consistency across the entire design."],
        ja: ["二つ目の課題では、National Geographicの図版「High Arctic Caving」（Annika Hoerner作）の文字を調べた。書体、大きさ、太さ、色を見分けて分類表にまとめ、それらがどう視覚的な階層をつくり、読み手を図版の中で導いているかを分析した。とくにおもしろかったのは、デザイン全体の統一感を保ちながら、文字で情報の種類を区別できることだった。"],
      },
      images: [
        { file: "design-typography.webp", alt: { en: "Type taxonomy sheet for High Arctic Caving.", ja: "「High Arctic Caving」の文字を分類したシート。" }, caption: { en: "Type taxonomy of <em>High Arctic Caving</em>.", ja: "「High Arctic Caving」の文字の分類。" } },
      ],
    },
  ],
  sources: [
    { en: "<em>High Arctic Caving</em>, National Geographic, by Annika Hoerner. Original graphic used for study and analysis.", ja: "「High Arctic Caving」National Geographic、Annika Hoerner作。元の図版を学習と分析のために使用" },
  ],
});
