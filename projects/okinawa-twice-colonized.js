// OKINAWA, TWICE COLONIZED
// My content for this project. English and Japanese sit side by side.
// The title is in js/projects.js. Images are in images/projects/.

project({
  // The line under the title.
  intro: {
    en: "Revealing the human and environmental costs of Japanese annexation and U.S. militarization in Okinawa",
    ja: "日本による併合と米軍の駐留が、沖縄の人と環境に残した代償を描く",
  },

  // The big map at the top, with the Japanese edition as a second version.
  hero: {
    file: "okinawa-english.webp", button: "English",
    alt: { en: "Okinawa Island with U.S. military bases in deep red over muted forest, urban, agriculture and coral-reef areas, with four site descriptions.", ja: "英語版の地図。沖縄本島の米軍基地を濃い赤で示し、森林、市街地、農地、サンゴ礁を淡い色で重ねている。" },
    caption: { en: "English edition.", ja: "英語版。" },
    other: {
      file: "okinawa-japanese.webp", button: "日本語",
      alt: { en: "The Japanese edition of the map.", ja: "日本語版の地図。沖縄本島の米軍基地を濃い赤で示し、森林、市街地、農地、サンゴ礁を淡い色で重ねている。" },
      caption: { en: "Japanese edition.", ja: "日本語版。" },
    },
  },

  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "Final project for Cartography (GEOG 0271) at Middlebury College, which I continued developing on my own. Presented in the NACIS 2025 Map Gallery in Louisville, KY.", ja: "ミドルベリー大学の授業「Cartography（GEOG 0271）」の期末課題として始め、その後も自分で作り込んだ。NACIS 2025（ケンタッキー州ルイビル）のマップギャラリーで展示。" } },
    { label: { en: "Advisors", ja: "指導" }, text: { en: "Jeff Howarth, Jae Jung Heo", ja: "Jeff Howarth、Jae Jung Heo" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS, Google Earth Engine, Adobe Illustrator", ja: "QGIS、Google Earth Engine、Adobe Illustrator" } },
  ],

  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Inspiration", ja: "着想" }, { en: "Sketches", ja: "スケッチ" }, { en: "Data", ja: "データ" }, { en: "Research", ja: "調査" }, { en: "Color", ja: "配色" }, { en: "Layout", ja: "レイアウト" }, { en: "Revisions", ja: "修正" }],

  sections: [
    {
      heading: { en: "Where it started", ja: "始まり" },
      text: {
        en: ["The idea for this project goes back to a family trip to Okinawa in 2017, when I visited the Okinawa Prefectural Peace Memorial Museum. I learned about the generations of violence, exploitation, and oppression that Okinawans had endured, and was particularly struck by how this history was still relevant today, with U.S. military bases continuing to occupy large parts of the island. Eight years later, when I chose a topic for my Cartography final, I wanted to revisit what I had learned and make a map that showed the extent of the military presence and its impact on Okinawa’s land, environment, and people.",
             "I framed the project around the tension between military strategy and environmental preservation, focusing on where the bases are located and how they overlap with forests, farmland, towns, and coral reefs. Since I intended the map for a general audience, many of whom would be unfamiliar with Okinawa’s geography and history, I wanted the locations and extent of the bases to be immediately clear, while using four specific sites to explain their environmental and social impacts in greater detail.",
             "The title, <em>Okinawa, Twice Colonized</em>, came from the island’s history under two foreign powers. Okinawa was once part of the independent Ryukyu Kingdom before Japan annexed it in 1879. The United States then occupied Okinawa from 1945 to 1972, and although the island was returned to Japanese administration, the military bases remained. I wanted the title to make that history clear, since the present-day military presence cannot be separated from the events that brought it there."],
        ja: ["きっかけは2017年の家族旅行で沖縄を訪れ、沖縄県平和祈念資料館に行ったことだった。沖縄の人々が何世代にもわたって受けてきた暴力、搾取、抑圧について知り、とくに、その歴史が今も続いていることに衝撃を受けた。米軍基地は今も島の広い範囲を占めている。8年後、地図学の期末課題のテーマを選ぶとき、そのとき学んだことにもう一度向き合い、軍の存在の大きさと、それが沖縄の土地、環境、人に与える影響を示す地図を作りたいと考えた。",
             "テーマの軸は、軍事戦略と環境保全のせめぎ合いにした。基地がどこにあり、森や農地、町、サンゴ礁とどう重なっているのかに注目した。見る人の多くは沖縄の地理や歴史をよく知らない一般の人を想定したので、基地の場所と広さがすぐにわかるようにし、そのうえで四つの場所を取り上げて、環境と社会への影響を詳しく説明した。",
             "タイトルの「Okinawa, Twice Colonized（二度植民地化された沖縄）」は、二つの外国の支配を受けた島の歴史からとった。沖縄はかつて独立した琉球王国で、1879年に日本に併合された。その後、1945年から1972年までアメリカの占領下に置かれ、日本に返還されたあとも基地は残った。今の軍の存在は、それをもたらした出来事と切り離せないので、タイトルでその歴史をはっきり伝えたかった。"],
      },
    },
    {
      heading: { en: "Sketches", ja: "スケッチ" },
      text: {
        en: ["As with most of my projects, I began by sketching on paper. I came up with two ideas: the first focused on U.S. military bases and their surrounding environments, with four sites I wanted to examine more closely; the second explored Okinawa’s history as the Ryukyu Kingdom, using Indigenous place names and the traditional <em>magiri</em> districts. I decided to pursue the first idea because I wanted to show the scale of the military presence and its environmental impact, but incorporated elements of the second, particularly Ryukyuan culture as inspiration for the color palette and locator symbol."],
        ja: ["ほかの作品と同じように、まず紙にスケッチした。案は二つあった。一つ目は米軍基地とその周りの環境を描き、詳しく見たい四つの場所を取り上げるもの。二つ目は、琉球の地名と昔の「間切」を使って、琉球王国としての沖縄の歴史を描くもの。軍の存在の大きさと環境への影響を見せたかったので一つ目を選んだが、二つ目の要素も取り入れた。とくに琉球の文化は、配色と位置図の印の着想になった。"],
      },
      images: [
        { file: "okinawa-notebook.webp", alt: { en: "Notebook spread with two layout sketches: Okinawa US bases and surrounding environment on the left, Ryukyu Kingdom Okinawa on the right.", ja: "ノートの見開き。左は米軍基地と周りの環境の案、右は琉球王国としての沖縄の案。" }, caption: { en: "The first notebook spread. The left sketch became the final map.", ja: "最初のノートの見開き。左の案が完成版になった。" } },
      ],
    },
    {
      heading: { en: "Data", ja: "データ" },
      text: {
        en: ["I spent a fair amount of time looking for data that I could use. I went through Okinawa Prefecture’s open data, Japan’s Biodiversity Center, GSI’s Global Map, and a U.S. Department of Defense dataset (...whose link no longer worked), before settling on three main sources: military base boundaries from Man and Palmer (2022), JAXA’s 10 m land-cover data, and coral reef data from UNEP-WCMC. JAXA’s data had separate classes for greenhouses, paddy fields, cropland, sugarcane, and pineapple, which I combined into agriculture; I did the same for broadleaf, needleleaf, and mangrove forests, grouping them under forest.",
             "I processed the data in QGIS, where I reclassified the land cover, converted it from raster to polygons, and clipped all three datasets to Okinawa Island. I decided to focus on Okinawa Island, keeping only the features most relevant to the project: military bases, forests, urban areas, agriculture, and coral reefs. Including every land-cover category would have made the map unnecessarily complicated, especially at the scale I was working with. The original coastlines and polygons were also far more detailed than I needed, so I used Google Earth Engine to simplify their geometries, followed by some manual adjustments to clean up the final shapes."],
        ja: ["使えるデータを探すのにかなり時間をかけた。沖縄県のオープンデータ、環境省生物多様性センター、国土地理院の地球地図、米国防総省のデータ（…リンクが切れていた）を調べ、最終的に三つに決めた。Man and Palmer（2022）の米軍基地の境界、JAXAの10m土地被覆、UNEP-WCMCのサンゴ礁だ。JAXAのデータでは、ビニールハウス、水田、畑、サトウキビ、パイナップルが別々の分類になっていたので、農地にまとめた。広葉樹林、針葉樹林、マングローブ林も同じように森林にまとめた。",
             "データはQGISで処理した。土地被覆を分類し直し、ラスターからポリゴンに変換し、三つのデータをすべて沖縄本島で切り抜いた。対象は沖縄本島にしぼり、残したのはこの作品にとって大事なもの、つまり米軍基地、森林、市街地、農地、サンゴ礁だけにした。土地被覆の分類をすべて入れると、とくにこの縮尺では地図が必要以上に複雑になる。元の海岸線やポリゴンも細かすぎたので、Google Earth Engineで形を単純化し、最後は手作業で整えた。"],
      },
      images: [
        { file: "okinawa-detail-legend.webp", alt: { en: "Close-up of northern Okinawa and the legend.", ja: "沖縄本島北部と凡例の拡大。" }, caption: { en: "Northern Okinawa and the legend: five classes only.", ja: "沖縄本島北部と凡例。分類は五つだけ。" } },
        { file: "okinawa-detail-coast.webp", alt: { en: "Close-up of the Motobu Peninsula and Nago with simplified shapes and no coastline outline.", ja: "本部半島と名護のあたりの拡大。単純化した形で、海岸線の線はない。" }, caption: { en: "Simplified shapes and no hard coastline.", ja: "形は単純に、海岸線は引かない。" } },
      ],
    },
    {
      heading: { en: "Research", ja: "調査" },
      text: {
        en: ["I also spent a fair amount of time researching individual military installations and their environmental and social impacts. I initially looked into Henoko Bay, Iejima, Camp Gonsalves, Kadena, and Camp Kinser, before narrowing the selection to four sites for the final map: Camp Gonsalves, Kadena, Futenma, and Henoko Bay. I chose these because each presented a different issue, from the military’s presence in the Yanbaru forest and water contamination near Kadena to Futenma’s location in the middle of Ginowan and the ongoing base construction at Henoko Bay. There was far more information than I could fit onto the map, so I condensed the research into four descriptions of roughly eighty words each, keeping the details and figures I considered most important."],
        ja: ["一つひとつの基地と、それが環境と社会に与える影響の調査にも、かなり時間をかけた。最初は辺野古、伊江島、キャンプ・ゴンサルベス（北部訓練場）、嘉手納、キャンプ・キンザーを調べ、最終的にキャンプ・ゴンサルベス、嘉手納、普天間、辺野古の四つにしぼった。やんばるの森での軍の活動、嘉手納周辺の水の汚染、宜野湾の真ん中にある普天間、辺野古で続く基地の建設と、それぞれ違う問題を抱えているからだ。情報は地図に入りきらないほどあったので、英語で八十語ほどの説明文四つに縮め、いちばん大事だと思う事実と数字を残した。"],
      },
    },
    {
      heading: { en: "Color", ja: "配色" },
      text: {
        en: ["Choosing the colors was one of the more difficult parts of the project. I spent a lot of time looking at maps by cartographers such as Tom Patterson, Margaret Pearce, and William Bunge, and experimented with several palettes, none of which I was particularly happy with. Eventually, I came across photographs of traditional Okinawan kimono, which I decided to use as inspiration for the map’s colors.",
             "I took red, gold, teal, indigo, and olive from the kimono, partly because I wanted to incorporate an element of Ryukyuan culture into the map rather than relying entirely on conventional land-cover colors. The initial palette was quite saturated, so I gradually muted the colors for forests, urban areas, agriculture, and coral reefs, while keeping the military bases in a strong red. I also adjusted their hue and lightness to make sure the categories remained distinguishable without drawing attention away from the bases."],
        ja: ["色選びは、この作品でとくに難しかったところの一つだ。Tom Patterson、Margaret Pearce、William Bungeなどの地図をじっくり見て、いくつも配色を試したが、どれもしっくりこなかった。そんなとき沖縄の伝統的な着物の写真に出会い、それを地図の色の着想にすることにした。",
             "着物から赤、金、青緑、藍、オリーブをとった。ありきたりな土地被覆の色だけに頼らず、琉球の文化を地図に取り入れたかったからでもある。最初の配色はかなり鮮やかだったので、森林、市街地、農地、サンゴ礁の色を少しずつ落ち着かせ、基地だけは強い赤のままにした。色相と明るさも調整し、分類どうしを見分けられるようにしつつ、基地から目がそれないようにした。"],
      },
      colors: [
        { label: { en: "First pull from the kimono", ja: "着物から最初に拾った色" }, chips: [
          { hex: "#ad0918", name: { en: "Red", ja: "赤" } }, { hex: "#e1a243", name: { en: "Gold", ja: "金" } },
          { hex: "#43a1b6", name: { en: "Teal", ja: "青緑" } }, { hex: "#350c6c", name: { en: "Indigo", ja: "藍" } },
          { hex: "#5b6e48", name: { en: "Olive", ja: "オリーブ" } } ] },
        { label: { en: "Final palette", ja: "完成版の配色" }, chips: [
          { hex: "#543035", name: { en: "U.S. military base", ja: "米軍基地" } }, { hex: "#8b9d90", name: { en: "Forest", ja: "森林" } },
          { hex: "#aca2b5", name: { en: "Urban", ja: "市街地" } }, { hex: "#c6b19f", name: { en: "Agriculture", ja: "農地" } },
          { hex: "#b5c7d8", name: { en: "Coral reef", ja: "サンゴ礁" } } ] },
      ],
      images: [
        { file: "okinawa-kimono-1.webp", alt: { en: "Magazine spread: a cream and purple Ryukyu kimono displayed under a coral rock arch.", ja: "雑誌の見開き。サンゴの岩のアーチの下に飾られた、白地に紫の琉球の着物。" }, caption: { en: "Reference: traditional Okinawan kimono (Shuri Ryusen). Not my work.", ja: "参考資料：沖縄の伝統的な着物（首里琉染）。私の作品ではない。" } },
        { file: "okinawa-kimono-2.webp", alt: { en: "Magazine spread: a bright blue Ryukyu kimono hung inside a red Okinawan gate.", ja: "雑誌の見開き。赤い門の中に掛けられた、鮮やかな青の琉球の着物。" }, caption: { en: "Reference: traditional Okinawan kimono (Shuri Ryusen). Not my work.", ja: "参考資料：沖縄の伝統的な着物（首里琉染）。私の作品ではない。" } },
        { file: "okinawa-crest.webp", alt: { en: "The locator mark: the Ryukyu royal crest in deep red.", ja: "位置図の印。深い赤の琉球王家の紋。" }, caption: { en: "The Ryukyu royal crest as the locator mark.", ja: "位置図の印にした琉球王家の紋。" } },
      ],
    },
    {
      heading: { en: "Layout and revisions", ja: "レイアウトと修正" },
      text: {
        en: ["I exported the map layers from QGIS and built the layout in Adobe Illustrator, using a 5 × 4 grid to organize the different elements of the map, as grids are a useful way to establish visual harmony, keeping everything aligned and giving each element enough space without having to rely on boxes or borders. I also paid particular attention to visual hierarchy: the military bases, shown in a strong red, were meant to stand out first, followed by the four site descriptions. The land cover, place labels, locator map, and legend were kept more subdued so they wouldn’t compete with the main subject.",
             "The layout went through several revisions. In an early digital version, I numbered the four sites and connected them to their descriptions with lines, but I wasn’t particularly happy with how complicated it looked. I eventually removed the lines, labeled the sites directly on the map, and rearranged the descriptions, legend, and locator map. Since the map was intended for a gallery, I also had to consider how it would look from a few feet away, which meant spending a lot of time adjusting the spacing, alignment, and text sizes. After finishing the English version, I made a Japanese edition, which I had planned from the beginning."],
        ja: ["QGISから地図のレイヤーを書き出し、Adobe Illustratorでレイアウトを組んだ。地図の要素は5×4のグリッドで整理した。グリッドを使うと全体に統一感が出て、枠や線に頼らなくても要素がそろい、それぞれに十分な余白をとれる。視覚的な階層にもとくに気を配った。最初に目に入るのは強い赤の基地、次に四つの場所の説明文。土地被覆、地名、位置図、凡例は控えめにして、主題とぶつからないようにした。",
             "レイアウトは何度も直した。初期のデジタル版では、四つの場所に番号をふり、説明文と線でつないでいたが、ごちゃごちゃして見えるのが気に入らなかった。最終的に線をなくし、地図に直接名前を置き、説明文、凡例、位置図の配置を組み直した。展示用の地図なので、少し離れて見たときの見え方も考える必要があり、余白、そろえ方、文字の大きさの調整に多くの時間を使った。英語版を仕上げたあと、最初から予定していた日本語版を作った。"],
      },
      images: [
        { file: "okinawa-grid.webp", alt: { en: "The final map with its 5 by 4 layout grid drawn in magenta.", ja: "完成版の地図に5×4のグリッドをマゼンタで重ねたもの。" }, caption: { en: "The layout grid.", ja: "レイアウトのグリッド。" } },
        { file: "okinawa-early.webp", alt: { en: "Early version with numbered callouts and lines to the text.", ja: "初期の版。番号と引き出し線で文章とつないでいる。" }, caption: { en: "Before: numbered callouts.", ja: "前：番号と引き出し線。" } },
        { file: "okinawa-english.webp", alt: { en: "Final version with direct labels.", ja: "完成版。地図に直接名前を置いている。" }, caption: { en: "After: direct labels.", ja: "後：直接のラベル。" } },
        { file: "okinawa-detail-type.webp", alt: { en: "Close-up of southern Okinawa: base names in small red bold type and Naha as the largest label.", ja: "沖縄本島南部の拡大。基地の名前は小さな赤の太字、那覇がいちばん大きい。" }, caption: { en: "The bases carry the one strong color; everything else stays quieter.", ja: "強い色は基地だけ。ほかは控えめにした。" } },
      ],
    },
  ],

  sources: [
    { en: "JAXA EORC (2020). High-Resolution Land Use and Land Cover Map, 10 m, Okinawa Island.", ja: "JAXA EORC（2020）高解像度土地利用土地被覆図、10m、沖縄本島" },
    { en: "Man, C. Y. & Palmer, D. A. (2022). Overseas Military Bases Dataset.", ja: "Man, C. Y. & Palmer, D. A.（2022）Overseas Military Bases Dataset" },
    { en: "UNEP-WCMC (2025). Ocean+ Habitats, warm-water coral reefs.", ja: "UNEP-WCMC（2025）Ocean+ Habitats、暖海サンゴ礁" },
  ],
});
