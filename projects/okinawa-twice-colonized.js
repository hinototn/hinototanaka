// OKINAWA, TWICE COLONIZED
// My content for this project. English and Japanese sit side by side.
// Title, subtitle and year are in js/projects.js. Images are in images/projects/.

project({
  intro: {
    en: "U.S. military bases cover a large part of Okinawa. I mapped them together with the forests, farmland, towns and coral reefs around them.",
    ja: "沖縄では米軍基地が広い土地を占めている。その周りの森や畑、町、サンゴ礁と重ねて地図にした。",
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
    { label: { en: "Context", ja: "背景" }, text: { en: "Final project for Cartography (GEOG 0217) at Middlebury College, which I kept developing on my own. Shown in the NACIS 2025 Map Gallery in Louisville, Kentucky, and entered in the student competition.", ja: "ミドルベリー大学の授業「Cartography（GEOG 0217）」の期末課題として始め、その後も自分で作り込んだ。NACIS 2025（ケンタッキー州ルイビル）のマップギャラリーに展示し、学生コンペにも出した。" } },
    { label: { en: "Advisers", ja: "指導" }, text: { en: "Jeff Howarth, Jae Jung (Katie) Heo", ja: "Jeff Howarth、Jae Jung (Katie) Heo" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS, Adobe Illustrator", ja: "QGIS、Adobe Illustrator" } },
    { label: { en: "Data", ja: "データ" }, text: { en: "JAXA 10 m land cover, U.S. military base boundaries, UNEP-WCMC coral reefs", ja: "JAXAの10m土地被覆、米軍基地の境界、UNEP-WCMCのサンゴ礁" } },
  ],

  about: {
    en: ["Okinawa Island makes up less than 1% of Japan’s land, yet it hosts over 70% of the U.S. military facilities in the country. I wanted a single map that makes that footprint impossible to miss, while also showing what the bases sit on and what surrounds them. It was made for a gallery, so the main pattern had to read from a few feet away, with four places that tell the longer story for anyone who comes closer."],
    ja: ["沖縄本島は日本の国土の1%にも満たないが、国内の米軍施設の7割以上がここにある。その広さが一目でわかり、同時に基地の下や周りに何があるのかも見える地図を一枚で作りたかった。展示用の地図なので、少し離れて見ても全体の様子がわかり、近づいた人には四つの場所の話が読めるようにした。"],
  },

  sections: [
    {
      heading: { en: "Where it started", ja: "始まり" },
      text: {
        en: ["The idea goes back to a family trip to Okinawa in 2017. When I chose it for my cartography final, my planning notes framed the project as the tension between military strategy and environmental preservation: where the bases are, and where they overlap with forest, farmland and coral. I wrote it for a wide audience, from high schoolers to adults interested in geography, Indigenous sovereignty and environmental justice, most of whom would not know Okinawa’s geography or history. The first thing on my list of musts was that the locations of the bases had to be clear instantly.",
             "The title came out of the same thinking. Okinawa was once the independent Ryukyu Kingdom; it was annexed by Japan in 1879 and occupied by the United States from 1945 to 1972, and the bases stayed. “Twice colonized” tells the viewer that before they read anything else, and the subtitle names the impact."],
        ja: ["きっかけは、2017年の家族旅行で訪れた沖縄だった。地図学の期末課題にこのテーマを選んだとき、企画メモには、軍事戦略と環境保全のせめぎ合いを見せたいと書いた。基地はどこにあり、森や畑、サンゴとどこで重なっているのか。見る人は、高校生から大人まで、地理や先住民の主権、環境正義に関心のある人を想定した。ほとんどの人は沖縄の地理も歴史もよく知らない。だから「必ず伝えること」の一つ目は、基地の場所が一瞬でわかることにした。",
             "タイトルも同じ考えから生まれた。沖縄はかつて独立した琉球王国で、1879年に日本に併合され、1945年から1972年まではアメリカの統治下に置かれ、基地はその後も残った。英語のタイトル「Twice Colonized（二度植民地化された）」は、地図を読む前にそのことを伝え、副題で何が起きているかを示している。"],
      },
    },
    {
      heading: { en: "Sketches", ja: "スケッチ" },
      text: {
        en: ["I started on paper. The left page of my notebook is the map I ended up making: the bases and their surroundings, with four contested sites and a list of the layers I would need. The right page is a different idea, a map of Okinawa as the Ryukyu Kingdom using Indigenous place names and the old <em>magiri</em> districts. I chose the first map because the argument about the bases needed the whole sheet, but the second one didn’t disappear completely. Its note about colors and designs inspired by Ryukyu culture came back in the final palette and the locator mark."],
        ja: ["最初は紙に描いた。ノートの左のページが、実際に作った地図の案だ。基地とその周りの環境、問題になっている四つの場所、必要なレイヤーのメモがある。右のページは別の案で、琉球の地名と昔の「間切」を使って、琉球王国としての沖縄を描くものだった。基地の話を伝えるには紙面すべてが必要だったので左の案を選んだが、右の案が消えたわけではない。「色やデザインは琉球の文化から」というメモは、完成版の配色と位置図の印に生きている。"],
      },
      images: [
        { file: "okinawa-notebook.webp", alt: { en: "Notebook spread with two layout sketches: Okinawa US bases and surrounding environment on the left, Ryukyu Kingdom Okinawa on the right.", ja: "ノートの見開き。左は米軍基地と周りの環境の案、右は琉球王国としての沖縄の案。" }, caption: { en: "The first notebook spread. The left sketch became the final map.", ja: "最初のノートの見開き。左の案が完成版になった。" } },
      ],
    },
    {
      heading: { en: "Data", ja: "データ" },
      text: {
        en: ["Finding the data took a while. I looked at Okinawa Prefecture’s open data, a U.S. Department of Defense dataset whose link turned out to be dead, Japan’s Biodiversity Center and GSI’s Global Map before settling on three sources: an overseas military bases dataset, JAXA’s 10 m land cover and UNEP-WCMC’s coral reefs. JAXA’s land cover comes as numbered classes, so I regrouped them around the story, combining greenhouses, paddy fields, cropland, sugarcane and pineapple into agriculture, and broadleaf, needleleaf and mangrove forest into forest.",
             "I also decided to show only the main island and to keep just forest, urban, agriculture and coral, since more classes would have diluted the point. The coastlines and polygons had far more detail than the map’s scale could use, so with Professor Howarth’s help I simplified them, partly with code and partly by hand."],
        ja: ["データ探しには時間がかかった。沖縄県のオープンデータ、リンクが切れていた米国防総省のデータ、環境省生物多様性センター、国土地理院の地球地図などを調べ、最終的に三つに決めた。海外米軍基地のデータ、JAXAの10m土地被覆、UNEP-WCMCのサンゴ礁だ。JAXAの土地被覆は番号つきの分類なので、話に合わせてまとめ直した。ビニールハウス、水田、畑、サトウキビ、パイナップルは農地に、広葉樹、針葉樹、マングローブは森林にした。",
             "地図に載せるのは沖縄本島だけにし、分類も森林、市街地、農地、サンゴ礁にしぼった。分類を増やすと、伝えたいことがぼやけるからだ。海岸線や土地の形はこの縮尺には細かすぎたので、Howarth先生に教わりながら、コードと手作業で単純化した。"],
      },
      images: [
        { file: "okinawa-detail-legend.webp", alt: { en: "Close-up of northern Okinawa and the legend.", ja: "沖縄本島北部と凡例の拡大。" }, caption: { en: "A short legend, ordered by the story rather than the alphabet.", ja: "凡例は短く、五十音順ではなく話の順に並べた。" } },
        { file: "okinawa-detail-coast.webp", alt: { en: "Close-up of the Motobu Peninsula and Nago with simplified shapes and no coastline outline.", ja: "本部半島と名護のあたりの拡大。単純化した形で、海岸線の線はない。" }, caption: { en: "Simplified shapes and no hard coastline.", ja: "形は単純に、海岸線は引かない。" } },
      ],
    },
    {
      heading: { en: "The four sites", ja: "四つの場所" },
      text: {
        en: ["The base outlines show where the military is, not what it does, so I researched the places where the bases run into land and people. My notes list Henoko Bay, Iejima, Camp Gonsalves, Kadena and Camp Kinser. The final map tells four of those stories, Camp Gonsalves, Kadena and Henoko Bay along with Futenma, which sits in the middle of a dense city. I read a lot for each one and then cut it down to about eighty words, keeping the numbers that matter, like the 5,800 marine species in the waters off Henoko and PFOS levels near Kadena at over ten times the EPA limit."],
        ja: ["基地の形は、軍がどこにいるかは示しても、何をしているかは示さない。そこで、基地が土地や人とぶつかる場所を調べた。メモに挙げたのは、辺野古、伊江島、キャンプ・ゴンサルベス（北部訓練場）、嘉手納、キャンプ・キンザー。完成版では、このうちキャンプ・ゴンサルベス、嘉手納、辺野古に、住宅密集地の真ん中にある普天間を加えた四つを取り上げた。どの場所もたくさん調べてから、英語で八十語ほどに縮めた。辺野古の海にすむ5,800種の生き物や、嘉手納の周りでEPAの基準の十倍を超えるPFOSなど、大事な数字は残した。"],
      },
    },
    {
      heading: { en: "Color and type", ja: "色と文字" },
      text: {
        en: ["I collected maps I admired, by Tom Patterson, Margaret Pearce and William Bunge among others, alongside photographs of traditional Okinawan textiles, and took the palette from the fabrics. My first pull was bright. In the final map I kept the same family of colors but muted everything except the bases, which are the only fully saturated color. The other colors differ in both hue and lightness so the map doesn’t depend on red–green contrast.",
             "All the type is Avenir. Naha is the largest label, then cities and villages, and base names are small but set in the same bold red as the bases and their headings, so the three read together. The locator mark is the Ryukyu royal crest rather than a generic dot. For sizes and balance, I studied Katie Heo’s maps closely."],
        ja: ["Tom Patterson、Margaret Pearce、William Bungeなどの好きな地図と、沖縄の伝統的な織物の写真を集め、配色は布からとった。最初に拾った色は鮮やかだった。完成版では同じ系統の色を残しつつ、基地以外はすべて彩度を落とし、基地だけをはっきりした赤にした。ほかの色は色相と明るさの両方で区別し、赤と緑の対比だけに頼らないようにした。",
             "書体はすべてAvenir。那覇がいちばん大きく、次に市、村の順にした。基地の名前は小さいが、基地の色や説明の見出しと同じ太い赤にして、三つが一緒に読めるようにした。位置図の印は、ただの点ではなく琉球王家の紋にした。文字の大きさやバランスは、Katie Heoの地図をよく見て学んだ。"],
      },
      colors: [
        { label: { en: "First pull from the references", ja: "最初に拾った色" }, chips: [
          { hex: "#ad0918", name: { en: "Red", ja: "赤" } }, { hex: "#e1a243", name: { en: "Gold", ja: "金" } },
          { hex: "#43a1b6", name: { en: "Teal", ja: "青緑" } }, { hex: "#350c6c", name: { en: "Indigo", ja: "藍" } },
          { hex: "#5b6e48", name: { en: "Olive", ja: "オリーブ" } } ] },
        { label: { en: "Final palette", ja: "完成版の配色" }, chips: [
          { hex: "#543035", name: { en: "U.S. military base", ja: "米軍基地" } }, { hex: "#8b9d90", name: { en: "Forest", ja: "森林" } },
          { hex: "#aca2b5", name: { en: "Urban", ja: "市街地" } }, { hex: "#c6b19f", name: { en: "Agriculture", ja: "農地" } },
          { hex: "#b5c7d8", name: { en: "Coral reef", ja: "サンゴ礁" } } ] },
      ],
      images: [
        { file: "okinawa-detail-type.webp", alt: { en: "Close-up of southern Okinawa: base names in small red bold type and Naha as the largest label.", ja: "沖縄本島南部の拡大。基地の名前は小さな赤の太字、那覇がいちばん大きい。" }, caption: { en: "Naha leads; base names carry the one strong color.", ja: "那覇がいちばん大きく、基地の名前だけが強い色を持つ。" } },
        { file: "okinawa-crest.webp", alt: { en: "The locator mark: the Ryukyu royal crest in deep red.", ja: "位置図の印。深い赤の琉球王家の紋。" }, caption: { en: "The Ryukyu royal crest as the locator mark.", ja: "位置図の印にした琉球王家の紋。" } },
      ],
    },
    {
      heading: { en: "Layout and revisions", ja: "レイアウトと修正" },
      text: {
        en: ["Everything sits on an invisible 5 × 4 grid, which holds the pieces in place without boxes. The eye enters at the title, moves to the introduction and the locator, crosses the island, and ends at the four sites, while the legend stays in the top right and the sources sit quietly in the bottom left.",
             "The biggest revision was in how the map explains itself. My early digital version numbered the four sites and connected each one with a line to a paragraph on the right, which worked at a desk but was slow to follow on a wall. In the final version I removed the lines, labeled the sites directly on the map and gave each its own block of text. I moved the legend and refined the locator as well. The argument stayed the same; the map just needed fewer instructions. I kept editing until the rhythm felt right rather than stopping at the deadline, and then made the Japanese edition, which had been in my notes from the beginning."],
        ja: ["すべての要素は、目に見えない5×4のグリッドに乗っていて、枠で囲まなくてもまとまって見える。視線はタイトルから説明文と位置図へ移り、島を横切って四つの場所にたどり着く。凡例は右上に、出典は左下に控えめに置いた。",
             "いちばん大きく変えたのは、地図の説明の仕方だ。初期のデジタル版では、四つの場所に番号をふり、右側の文章まで線でつないでいた。机の上なら読めるが、展示の壁では追いにくい。完成版では線をなくし、地図に直接名前を置いて、それぞれに文章のまとまりをつけた。凡例を動かし、位置図も整えた。主張は変えず、地図に説明書がいらないようにした。締め切りで手を止めず、全体のリズムが落ち着くまで直し、最後に、最初からメモにあった日本語版を作った。"],
      },
      images: [
        { file: "okinawa-grid.webp", alt: { en: "The final map with its 5 by 4 layout grid drawn in magenta.", ja: "完成版の地図に5×4のグリッドをマゼンタで重ねたもの。" }, caption: { en: "The layout grid.", ja: "レイアウトのグリッド。" } },
        { file: "okinawa-early.webp", alt: { en: "Early version with numbered callouts and lines to the text.", ja: "初期の版。番号と引き出し線で文章とつないでいる。" }, caption: { en: "Before: numbered callouts.", ja: "前：番号と引き出し線。" } },
        { file: "okinawa-english.webp", alt: { en: "Final version with direct labels.", ja: "完成版。地図に直接名前を置いている。" }, caption: { en: "After: direct labels.", ja: "後：直接のラベル。" } },
      ],
    },
  ],

  sources: [
    { en: "JAXA EORC (2020). High-Resolution Land Use and Land Cover Map, 10 m, Okinawa Island.", ja: "JAXA EORC（2020）高解像度土地利用土地被覆図、10m、沖縄本島" },
    { en: "Man, C. Y. & Palmer, D. A. (2022). Overseas Military Bases Dataset.", ja: "Man, C. Y. & Palmer, D. A.（2022）Overseas Military Bases Dataset" },
    { en: "UNEP-WCMC (2025). Ocean+ Habitats, warm-water coral reefs.", ja: "UNEP-WCMC（2025）Ocean+ Habitats、暖海サンゴ礁" },
  ],
});
