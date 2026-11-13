// THE DANISH KOLLEKTIV
// My content for this project. English and Japanese sit side by side.
// Privacy: the slide screenshots are cropped above the attribute tables and the
// survey table is blurred, so no names or addresses show. The interactive map
// is offline, so I don't link to it.

project({
  intro: {
    en: "Where do people live collectively in Copenhagen, and in what kinds of homes?",
    ja: "コペンハーゲンで共同生活をする人たちは、どこで、どんな家に住んでいるのか。",
  },

  hero: {
    file: "kollektiv-poster.webp",
    alt: { en: "The Danish Kollektiver poster: Copenhagen with kollektiver marked by housing type over a quiet basemap, the city’s vulnerable areas in pink, and drawings on either side.", ja: "ポスター「The Danish Kollektiver」。コペンハーゲンの地図にコレクティブを住宅の種類ごとの記号で示し、市が指定する地区をピンクで重ね、両側に絵を添えている。" },
    caption: { en: "The Danish Kollektiver, my poster for NACIS 2026.", ja: "NACIS 2026のポスター「The Danish Kollektiver」。" },
  },

  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "<em>Living kollektiv – Cartographies of the Nordic Residential Commune in Copenhagen</em>, a research project at DIS Copenhagen, Spring 2026. The map work continued as a poster for NACIS 2026 in Milwaukee and an interactive map for ICSA 2026.", ja: "DISコペンハーゲンの研究プロジェクト「Living kollektiv – Cartographies of the Nordic Residential Commune in Copenhagen」（2026年春）。その後、NACIS 2026（ミルウォーキー）のポスターと、ICSA 2026向けのインタラクティブ地図につながった。" } },
    { label: { en: "Team", ja: "チーム" }, text: { en: "Supervised by Dr. Heitor Garcia Lantarón and Dr. Rodrigo Antonio Rieiro Diaz, with student researchers Parmida E., Eva Y., Chloe W. and me, in collaboration with Kollektivforeningen.", ja: "指導：Heitor Garcia Lantarón博士、Rodrigo Antonio Rieiro Diaz博士。学生研究者：Parmida E.、Eva Y.、Chloe W.と私。デンマーク・コレクティブ協会（Kollektivforeningen）と協力。" } },
    { label: { en: "My part", ja: "担当" }, text: { en: "Data cleaning and joining, geocoding, spatial analysis, the thematic maps, the interactive map, GIS documentation, and the NACIS poster and its drawings. The survey and wider research were shared.", ja: "データの整理と結合、ジオコーディング、空間分析、主題図、インタラクティブ地図、GISの記録、NACISのポスターとその絵。アンケートと研究全体はチームで行った。" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "Excel, QGIS, Adobe Illustrator, qgis2web / Leaflet, GitHub Pages", ja: "Excel、QGIS、Adobe Illustrator、qgis2web / Leaflet、GitHub Pages" } },
    { label: { en: "Data", ja: "データ" }, text: { en: "125 survey responses in the Copenhagen Urban Area, a location dataset of 108 kollektiver, and DigDag municipal boundaries", ja: "コペンハーゲン都市圏のアンケート125件、108か所の位置データ、DigDagの市町村界" } },
  ],

  about: {
    en: ["A kollektiv is a home shared by a group of residents who organize daily life together, and it has never been clearly defined as a type of building. Some are apartments, some are houses, and some are row houses. Our team wanted to know whether there is a pattern anyway, looking at where kollektiver are, how residents share space, and who lives in them. My job was to make the data mappable, find out what the maps could honestly say, and then show it clearly. The clearest answer was that apartment kollektiver cluster in the city center, while kollektiver in detached houses spread toward the edges."],
    ja: ["コレクティブ（共同生活の住まい）は、住人が一つの家で日々の暮らしを一緒に組み立てる住まい方で、建物の型としてはっきり定義されたことがない。集合住宅もあれば、一軒家も、長屋もある。チームでは、それでも何かパターンがあるのではないかと考え、場所、空間の分け方、住人の顔ぶれから調べた。私の仕事は、データを地図にできる形に整え、地図から正直に言えることを見つけ、わかりやすく見せることだった。いちばんはっきりしたのは、集合住宅のコレクティブは中心部に集まり、一戸建てのコレクティブは郊外へ広がるということだ。"],
  },

  // The one-line process summary shown above the sections.
  workflow: [{ en: "Research question", ja: "問い" }, { en: "Study area", ja: "調査範囲" }, { en: "Data cleaning", ja: "データ整理" }, { en: "Exploratory maps", ja: "試しの地図" }, { en: "Map series", ja: "地図シリーズ" }, { en: "Poster", ja: "ポスター" }, { en: "Drawings", ja: "絵" }, { en: "Web map", ja: "ウェブ地図" }, { en: "Handoff", ja: "引き継ぎ" }],

  sections: [
    {
      heading: { en: "Study area", ja: "調査範囲" },
      text: {
        en: ["Kollektiver aren’t limited to the municipality of Copenhagen, so the study area couldn’t be either. An early draft used a United Nations definition of the urban area, but I switched to the Copenhagen Urban Area as defined by Statistics Denmark and worked with it in QGIS through the 18 municipalities it overlaps, using DigDag boundaries. That is also where the first puzzle showed up: the location dataset had 108 kollektiver inside the boundary, while the survey had 125."],
        ja: ["コレクティブはコペンハーゲン市の中だけにあるわけではないので、調査範囲も市の境界では足りない。最初の下書きでは国連の基準で都市圏を決めていたが、デンマーク統計局の「コペンハーゲン都市圏」に切り替え、QGISではDigDagの市町村界を使って、都市圏にかかる18の市町村として扱った。最初の謎もここで出てきた。位置データでは範囲内に108か所、アンケートでは125件あった。"],
      },
      images: [
        { file: "kollektiv-slide-datasets.webp", alt: { en: "Progress slide: the geographic dataset of 108 kollektiver in pink municipalities, and the survey dataset of 125, blurred.", ja: "進捗発表のスライド。ピンクの市町村に108か所の位置データ、右に125件のアンケート（ぼかし）。" }, caption: { en: "From my progress presentation. The survey table is blurred because it contains addresses.", ja: "進捗発表より。住所が入っているので表はぼかした。" } },
      ],
    },
    {
      heading: { en: "Cleaning and joining the data", ja: "データの整理と結合" },
      text: {
        en: ["The QGIS project I inherited would open once and then break, because the source files weren’t linked properly and any work disappeared after closing it. I traced the broken links, copied the source files into the project folder and rebuilt the project, which gave us a stable workspace for everything that followed.",
             "The bigger problem was that the survey and the location data had no shared ID. Matching on addresses failed because spelling, formatting and capitalization varied too much, so I joined the two on kollektiv names instead, which connected most of the records. Eleven records had no name, and about fifteen groups looked like duplicates. Some were probably repeat answers, but others could be separate kollektiver in the same building, so I flagged them for review instead of deleting them and wrote down what remained uncertain."],
        ja: ["引き継いだQGISのプロジェクトは、一度は開くが、二度目には壊れていた。元のファイルへのリンクが切れていて、閉じると作業が消えてしまう。切れたリンクをたどり、元ファイルをプロジェクトのフォルダにコピーして作り直したことで、その後の作業すべての土台になる安定した作業場ができた。",
             "もっと大きな問題は、アンケートと位置データに共通のIDがないことだった。住所で結ぼうとしたが、つづりや書き方がばらばらで失敗したので、コレクティブの名前で結び、大半の記録がつながった。名前のない記録が11件、重複らしきグループが約15組あった。二重の回答もあれば、同じ建物にある別のコレクティブかもしれないものもあるので、消さずに印をつけ、わからない点は書き残した。"],
      },
      images: [
        { file: "kollektiv-slide-fix.webp", alt: { en: "Slide: problem, fix and result for the broken QGIS project.", ja: "スライド：壊れたQGISプロジェクトの問題、対処、結果。" }, caption: { en: "Rebuilding the project.", ja: "プロジェクトの作り直し。" } },
        { file: "kollektiv-slide-address.webp", alt: { en: "Slide: address matching failed because of inconsistent formatting.", ja: "スライド：表記のばらつきで住所での照合は失敗した。" }, caption: { en: "Address matching failed.", ja: "住所での照合は失敗。" } },
        { file: "kollektiv-slide-name.webp", alt: { en: "Slide: joining on kollektiv names connected most entries, with some errors remaining.", ja: "スライド：名前での結合で大半がつながり、一部の誤りは残った。" }, caption: { en: "Joining on names worked for most records.", ja: "名前での結合で大半がつながった。" } },
      ],
    },
    {
      heading: { en: "Exploratory maps", ja: "探るための地図" },
      text: {
        en: ["Once the data was usable, I mapped the survey questions one at a time, including housing type, house meetings, relationship status, household size, home size, year established and diet. For each one I asked whether there was a spatial pattern and whether enough kollektiver had answered to trust it. Several questions were answered by only 60 to 75 of the 108, and some showed no pattern at all, but housing type stood out right away."],
        ja: ["データが使えるようになってから、住宅の種類、ハウスミーティング、パートナーの有無、住人の数、家の広さ、設立年、食事など、アンケートの質問を一つずつ地図にした。どの地図でも、場所によるパターンがあるか、信頼できるほど回答がそろっているかを確かめた。108か所のうち60〜75か所しか答えていない質問もあり、パターンが見えないものもあったが、住宅の種類だけはすぐに目を引いた。"],
      },
      images: [
        { file: "kollektiv-explore-type.webp", alt: { en: "QGIS: kollektiver by housing type.", ja: "QGIS：住宅の種類で色分け。" }, caption: { en: "Housing type", ja: "住宅の種類" } },
        { file: "kollektiv-explore-meetings.webp", alt: { en: "QGIS: kollektiver by house meetings.", ja: "QGIS：ハウスミーティングの有無で色分け。" }, caption: { en: "House meetings (72 of 108 answered)", ja: "ハウスミーティング（回答72か所）" } },
        { file: "kollektiv-explore-single.webp", alt: { en: "QGIS: kollektiver by relationship status.", ja: "QGIS：パートナーの有無で色分け。" }, caption: { en: "Relationship status (102 of 108)", ja: "パートナーの有無（回答102か所）" } },
        { file: "kollektiv-explore-residents.webp", alt: { en: "QGIS: kollektiver by number of residents.", ja: "QGIS：住人の数で色分け。" }, caption: { en: "Household size (75 of 108)", ja: "住人の数（回答75か所）" } },
        { file: "kollektiv-explore-established.webp", alt: { en: "QGIS: kollektiver by year established.", ja: "QGIS：設立年で色分け。" }, caption: { en: "Year established (60 of 108)", ja: "設立年（回答60か所）" } },
        { file: "kollektiv-explore-diet.webp", alt: { en: "QGIS: kollektiver by diet.", ja: "QGIS：食事のスタイルで色分け。" }, caption: { en: "Diet", ja: "食事" } },
      ],
    },
    {
      heading: { en: "The map series", ja: "四枚の地図" },
      text: {
        en: ["For the research paper I narrowed these down to four maps and chose symbols to match each kind of data: hue and shape for housing type, circle size for when kollektiver were established, and color and size together for living space per resident and total area. Housing type gave the clearest reading. Living space was the most surprising, since a large house doesn’t necessarily mean more room per person, and workshops and gardens turned up mostly outside the dense center."],
        ja: ["研究論文のために、これを四枚の地図にしぼり、データの種類に合わせて記号を選んだ。住宅の種類には色と形、設立時期には円の大きさ、一人あたりの広さと全体の広さには色と大きさの組み合わせを使った。いちばんはっきりしていたのは住宅の種類で、いちばん意外だったのは広さだった。大きな家だからといって一人あたりが広いとは限らない。作業場や庭は、密集した中心部の外に多かった。"],
      },
      images: [
        { file: "kollektiv-types.webp", alt: { en: "Map of kollektiver by housing type with outlined clusters.", ja: "住宅の種類ごとのコレクティブとまとまりの範囲。" }, caption: { en: "Housing type", ja: "住宅の種類" } },
        { file: "kollektiv-living-space.webp", alt: { en: "Map of living space per resident (color) and total area (size).", ja: "一人あたりの面積（色）と全体の面積（大きさ）。" }, caption: { en: "Living space", ja: "住まいの広さ" } },
        { file: "kollektiv-establishment.webp", alt: { en: "Map of establishment period by circle size.", ja: "設立時期を円の大きさで示した地図。" }, caption: { en: "Establishment period", ja: "設立時期" } },
        { file: "kollektiv-workshop-garden.webp", alt: { en: "Map of workshop and garden presence.", ja: "作業場と庭の有無の地図。" }, caption: { en: "Workshops and gardens", ja: "作業場と庭" } },
      ],
    },
    {
      heading: { en: "The poster", ja: "ポスター" },
      text: {
        en: ["The research maps were for exploring, but the poster needed one clear argument. I focused on the City of Copenhagen, where 80 of the surveyed kollektiver are, and built it around housing type, with apartments filling the core and detached houses toward the edge. I tried adding a second dimension, but neither establishment year nor the socio-economic answers made an equally clear spatial point, so the only other layer is the city’s designated vulnerable areas in pink, which just four of the 80 fall inside. Findings that don’t map well, like shared meals, went into short notes around the edge.",
             "I designed a low-contrast basemap so the city reads as context and the kollektiv symbols stay on top, and gave each housing type its own small pictogram. I left kollektiv names off, both to keep the map clean and to avoid pointing to people’s homes. A map can show where kollektiver are but not what living in one is like, so I drew two places I visited on my iPad, working from my own photographs, and put them on either side: a kollektiv interior next to the story of Maos Lyst, founded in 1968 and one of Denmark’s oldest surviving kollektiver, and Freetown Christiania, founded in 1971."],
        ja: ["研究の地図は探るためのものだったが、ポスターには一つのはっきりした主張が必要だった。アンケートに答えたコレクティブのうち80か所があるコペンハーゲン市にしぼり、住宅の種類を軸にした。集合住宅は中心部を埋め、一戸建ては外側へ広がる。もう一つの軸も試したが、設立年や社会経済の答えでは同じくらいはっきりした空間の主張にならなかった。そこで、ほかに重ねたのは市が指定する生活環境の厳しい地区（ピンク）だけにした。80か所のうち、その中にあるのは四つだけだ。食事を一緒にとることなど、地図にしにくい結果は、周りの短いメモにした。",
             "ベースマップはコントラストを低くし、街は背景として、コレクティブの記号がいちばん上に見えるようにした。住宅の種類ごとに小さな絵記号も作った。コレクティブの名前は、地図をすっきりさせるためにも、人の住まいを特定しないためにも載せていない。地図はコレクティブがどこにあるかは見せられても、そこでの暮らしは見せられない。だから、実際に訪ねた二つの場所を、自分で撮った写真をもとにiPadで描き、両側に置いた。1968年に始まり、今も続くデンマークでもっとも古いコレクティブの一つ、Maos Lystの話を添えた室内の絵と、1971年にできたクリスチャニアの絵だ。"],
      },
      images: [
        { file: "kollektiv-detail-map.webp", alt: { en: "Poster close-up: apartment symbols clustered over a pale basemap around Nørrebro.", ja: "ポスターの拡大。ノアブロ周辺で、淡いベースマップの上に集合住宅の記号が集まっている。" }, caption: { en: "Symbols over a quiet basemap.", ja: "静かなベースマップの上の記号。" } },
        { file: "kollektiv-drawings.webp", alt: { en: "My two drawings: a kollektiv interior with plants and a pendant lamp, and Christiania with a balcony, trees and a bicycle.", ja: "私の二枚の絵。植物とペンダントライトのあるコレクティブの室内と、バルコニーや木、自転車のあるクリスチャニア。" }, caption: { en: "My drawings: a kollektiv interior and Christiania.", ja: "私の絵：コレクティブの室内とクリスチャニア。" } },
        { file: "kollektiv-drawing-ipad.webp", alt: { en: "The drawings in progress on my iPad.", ja: "iPadで描いている途中の絵。" }, caption: { en: "Drawing on my iPad.", ja: "iPadで描いているところ。" } },
      ],
    },
    {
      heading: { en: "Interactive map and handoff", ja: "インタラクティブ地図と引き継ぎ" },
      text: {
        en: ["Kollektivforeningen asked me to map kollektiver across all of Denmark for ICSA 2026 in Germany, so I built an interactive web map with QGIS and qgis2web/Leaflet and published it on GitHub Pages. Because it showed individual homes and respondents hadn’t agreed to that, I took it offline after the conference.",
             "The last thing I made was a GIS handoff for the next researcher, covering the project structure, how the data was joined, the rule to flag duplicates rather than delete them, and the reasoning behind each map. The records are self-identified, the join is partial and the maps are not a census, so they show patterns rather than causes, and the handoff says so."],
        ja: ["デンマーク・コレクティブ協会から、ドイツで開かれるICSA 2026のためにデンマーク全土のコレクティブを地図にしてほしいと頼まれ、QGISとqgis2web/Leafletでインタラクティブな地図を作り、GitHub Pagesで公開した。一軒ずつの住まいが見えてしまい、回答者はそれに同意していなかったので、会議のあとに公開をやめた。",
             "最後に、次の研究者のためのGISの引き継ぎ書を作った。プロジェクトの構成、データの結合方法、重複は消さずに印をつけるというルール、各地図の考え方をまとめた。記録は自己申告で、結合は部分的で、地図はすべてを数えた調査ではない。見えるのはパターンであって原因ではないことも、そこに書いてある。"],
      },
    },
  ],

  sources: [
    { en: "Municipal boundaries: DigDag, via Dataforsyningen. Study area: Copenhagen Urban Area, Statistics Denmark.", ja: "市町村界：DigDag（Dataforsyningen）。調査範囲：デンマーク統計局のコペンハーゲン都市圏" },
    { en: "Vulnerable areas: designated by the City of Copenhagen.", ja: "生活環境の厳しい地区：コペンハーゲン市の指定による" },
    { en: "Poster drawings: my own, from photographs I took on site.", ja: "ポスターの絵：現地で自分が撮った写真をもとに描いた" },
  ],
});
