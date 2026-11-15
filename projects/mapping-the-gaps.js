// CAMPUS TACTILE PAVING
// My content for this project. English and Japanese sit side by side.
// (The file keeps its old name, mapping-the-gaps, so existing links still work.)

project({
  // The line under the title.
  intro: { en: "Pedestrian Accessibility and Safety", ja: "歩く人のアクセシビリティと安全" },
  hero: {
    file: "tactile-map.webp",
    alt: { en: "Middlebury College campus with blue symbols where tactile paving exists and red symbols where it is missing.", ja: "ミドルベリー大学のキャンパス。青は点字ブロックがある場所、赤はない場所。" },
    caption: { en: "Blue: tactile paving present. Red: missing.", ja: "青は点字ブロックあり、赤はなし。" },
  },
  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Project for Human Geography with GIS (GEOG 0261), Middlebury College", ja: "ミドルベリー大学の授業「Human Geography with GIS（GEOG 0261）」の課題" } },
    { label: { en: "Team", ja: "チーム" }, text: { en: "Field survey with Mimi and Arlo; map by me", ja: "現地調査はMimi、Arloと。地図は私が作成" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS, OpenStreetMap", ja: "QGIS、OpenStreetMap" } },
  ],
  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Purpose", ja: "目的" }, { en: "Fieldwork", ja: "現地調査" }, { en: "Mapping", ja: "地図化" }],

  sections: [
    {
      heading: { en: "Purpose", ja: "目的" },
      text: {
        en: ["Tactile paving, known in Japan as <em>tenji</em> blocks, was first developed there in the 1960s to help people with visual impairments navigate public spaces. The raised dots and lines provide warnings and directional guidance, and have since become common on streets and in public transportation systems around the world. Having grown up seeing them everywhere in Japan, I was curious about their presence at Middlebury, where the campus is generally walkable but not necessarily accessible to everyone."],
        ja: ["点字ブロックは、目の不自由な人が公共の場所を歩けるよう、1960年代に日本で生まれた。突起した点と線が注意や進む方向を知らせ、今では世界中の道路や公共交通で見られる。日本でどこにでもあるのを見て育ったので、ミドルベリーではどうなっているのかが気になった。キャンパスはおおむね歩きやすいが、だれにとっても歩きやすいとは限らない。"],
      },
    },
    {
      heading: { en: "Fieldwork", ja: "現地調査" },
      text: {
        en: ["For a class project, my groupmates and I wanted to identify where tactile paving was present, where it was missing, and which areas of campus might need improvements to make pedestrian routes safer and more accessible for people with visual impairments. Since there was no existing dataset, Mimi, Arlo, and I decided to make one ourselves. In September 2025, we walked around campus and recorded whether tactile paving was present or missing at crosswalks, sidewalks, intersections, stairs, and slopes."],
        ja: ["授業の課題で、グループのメンバーと一緒に、点字ブロックがある場所とない場所、そして目の不自由な人にとって歩く道をより安全で行きやすくするために改善が必要な場所を調べることにした。既存のデータがなかったので、Mimi、Arloと自分たちで作ることにした。2025年9月にキャンパスを歩き、横断歩道、歩道、交差点、階段、坂道で点字ブロックがあるかないかを記録した。"],
      },
    },
    {
      heading: { en: "Mapping", ja: "地図化" },
      text: {
        en: ["I mapped the surveyed locations in QGIS using OpenStreetMap as a basemap. Several crosswalks were missing tactile warnings, and none of the stairs or slopes we surveyed had them.",
             "I used blue to indicate where tactile paving was present and red where it was missing, with different symbol shapes for crosswalks, intersections, stairs, and other locations. This allowed the map to show both the type of location and whether tactile paving was available. The map only covers the routes we surveyed, so it is intended as a record of our fieldwork rather than a comprehensive accessibility audit."],
        ja: ["調べた場所を、OpenStreetMapをベースマップにしてQGISで地図にした。いくつもの横断歩道で警告用の点字ブロックが欠けていて、調べた階段や坂道には一つもなかった。",
             "点字ブロックがある場所は青、ない場所は赤で示し、横断歩道、交差点、階段などで記号の形を変えた。これで、場所の種類と点字ブロックの有無の両方を一枚の地図で見せられる。地図に載っているのは調べた道だけなので、アクセシビリティを網羅的に審査したものではなく、現地調査の記録として見てほしい。"],
      },
    },
  ],
  sources: [
    { en: "Base data: OpenStreetMap contributors.", ja: "ベースデータ：OpenStreetMapの貢献者" },
  ],
});
