// THE DANISH KOLLEKTIV
// My content for this project. English and Japanese sit side by side.
// Privacy: the slide screenshots are cropped above the attribute tables and the
// survey table is blurred, so no names or addresses show. The interactive map
// is offline, so I don't link to it.

project({
  // The line under the title.
  intro: {
    en: "Collective Living Across Copenhagen",
    ja: "コペンハーゲンに広がる共同生活",
  },

  hero: {
    file: "kollektiv-poster.webp",
    alt: { en: "The Danish Kollektiver poster: Copenhagen with kollektiver marked by housing type over a quiet basemap, the city’s vulnerable areas in pink, and drawings on either side.", ja: "ポスター「The Danish Kollektiver」。コペンハーゲンの地図にコレクティブを住宅の種類ごとの記号で示し、市が指定する地区をピンクで重ね、両側に絵を添えている。" },
    caption: { en: "The Danish Kollektiver, my poster for NACIS 2026.", ja: "NACIS 2026のポスター「The Danish Kollektiver」。" },
  },

  facts: [
    { label: { en: "Context", ja: "背景" }, text: { en: "<em>Living Kollektiv Cartographies of the Nordic Residential Commune in Copenhagen</em>, a research project at DIS Copenhagen (Spring 2026); later developed into an interactive map for ICSA 2026 and a map for NACIS 2026 in Milwaukee, WI", ja: "DISコペンハーゲンの研究プロジェクト「Living Kollektiv Cartographies of the Nordic Residential Commune in Copenhagen」（2026年春）。その後、ICSA 2026向けのインタラクティブ地図と、NACIS 2026（ウィスコンシン州ミルウォーキー）の地図に発展した。" } },
    { label: { en: "Team", ja: "チーム" }, text: { en: "Supervised by Dr. Heitor Garcia Lantarón and Dr. Rodrigo Antonio Rieiro Diaz, with student researchers Parmida E., Eva Y., Chloe W., and me, in collaboration with Kollektivforeningen", ja: "指導：Heitor Garcia Lantarón博士、Rodrigo Antonio Rieiro Diaz博士。学生研究者：Parmida E.、Eva Y.、Chloe W.と私。デンマーク・コレクティブ協会（Kollektivforeningen）と協力。" } },
    { label: { en: "My role", ja: "担当" }, text: { en: "Data cleaning and joining, geocoding, spatial analysis, thematic maps, map design and illustrations, interactive web map, GIS documentation", ja: "データの整理と結合、ジオコーディング、空間分析、主題図、地図のデザインとイラスト、インタラクティブなウェブ地図、GISの記録" } },
    { label: { en: "Tools", ja: "ツール" }, text: { en: "Excel, QGIS, Adobe Illustrator, qgis2web / Leaflet, GitHub Pages", ja: "Excel、QGIS、Adobe Illustrator、qgis2web / Leaflet、GitHub Pages" } },
  ],

  // The process line, shown as the last row of the facts above.
  workflow: [{ en: "Research question", ja: "問い" }, { en: "Study area", ja: "調査範囲" }, { en: "Data cleaning", ja: "データ整理" }, { en: "Exploratory maps", ja: "探るための地図" }, { en: "Map series", ja: "地図シリーズ" }, { en: "Web map", ja: "ウェブ地図" }, { en: "Handoff", ja: "引き継ぎ" }, { en: "Big Map", ja: "大きな地図" }],

  sections: [
    {
      heading: { en: "Research question", ja: "問い" },
      text: {
        en: ["A kollektiv is a form of communal living in Denmark, where residents share a home and organize parts of their daily lives together. Despite its long history, the Danish kollektiv has received relatively little attention in architectural research for over fifty years, and there is still no clear definition of what makes one. Some occupy apartments, others detached houses or row houses, which raises the question of whether they share any common architectural, spatial, or social characteristics. Our research team at DIS Copenhagen set out to investigate this through a survey conducted in collaboration with Kollektivforeningen, looking at housing types, shared spaces, daily routines, and socioeconomic conditions.",
             "My role focused primarily on GIS and cartography, which involved bringing together the survey and location data, mapping different variables, and examining their spatial patterns. The clearest finding was the relationship between housing type and location, with apartment kollektiver concentrated toward central Copenhagen and those in detached houses more common toward the outskirts."],
        ja: ["コレクティブ（kollektiv）は、住人が一つの家を共有し、日々の暮らしの一部を一緒に営む、デンマークの共同生活の形だ。長い歴史があるにもかかわらず、建築の研究では50年以上あまり注目されてこなかった。何をもってコレクティブとするのか、はっきりした定義も今もない。集合住宅にあるものもあれば、一戸建てや長屋にあるものもある。では、建築、空間、社会の面で共通する特徴はあるのか。DISコペンハーゲンの研究チームは、デンマーク・コレクティブ協会と協力したアンケートを通して、住宅の種類、共有の空間、日々の過ごし方、社会経済的な状況を調べた。",
             "私の担当は主にGISと地図づくりで、アンケートと位置のデータをまとめ、さまざまな変数を地図にし、その空間的なパターンを調べた。いちばんはっきりしたのは住宅の種類と場所の関係で、集合住宅のコレクティブはコペンハーゲンの中心部に集まり、一戸建てのコレクティブは郊外に多かった。"],
      },
    },
    {
      heading: { en: "Study area", ja: "調査範囲" },
      text: {
        en: ["One of the first decisions I had to make was defining the study area. Since kollektiver are not limited to Copenhagen Municipality, I wanted to include the surrounding urban area as well. I initially looked at a United Nations definition before deciding to use the Copenhagen Urban Area defined by Statistics Denmark, which overlaps 18 municipalities. I used the municipal boundary data from DigDag to establish the study area in QGIS.",
             "This was also when I noticed the first discrepancy between the datasets: the geographic dataset contained 108 kollektiver within the study area, while the survey had 125 responses."],
        ja: ["最初に決めなければならなかったことの一つが、調査範囲だった。コレクティブはコペンハーゲン市の中だけにあるわけではないので、周りの都市部も含めたかった。はじめは国連の定義を検討したが、最終的にデンマーク統計局が定める「コペンハーゲン都市圏」を使うことにした。都市圏は18の市町村にまたがる。QGISでは、DigDagの市町村界のデータを使って調査範囲を設定した。",
             "データどうしの最初の食い違いに気づいたのもこのときだった。位置のデータでは範囲内に108か所のコレクティブがあったが、アンケートの回答は125件あった。"],
      },
      images: [
        { file: "kollektiv-slide-datasets.webp", alt: { en: "Progress slide: the geographic dataset of 108 kollektiver in pink municipalities, and the survey dataset of 125, blurred.", ja: "進捗発表のスライド。ピンクの市町村に108か所の位置データ、右に125件のアンケート（ぼかし）。" }, caption: { en: "From my progress presentation. The survey table is blurred because it contains addresses.", ja: "進捗発表より。住所が入っているので表はぼかした。" } },
      ],
    },
    {
      heading: { en: "Data cleaning", ja: "データ整理" },
      text: {
        en: ["Before I could work with the data, I had to fix the QGIS project I inherited. It would open initially, but the source files were not properly linked, and the project would break again after closing it. I traced the broken file paths, copied the source data into a local folder, and rebuilt the project from scratch, which finally gave us a stable workspace.",
             "The more complicated issue was joining the survey responses to the geographic data, since the two datasets had no shared unique identifier. I prepared both tables in Excel, standardizing names, addresses, and establishment dates, and first attempted to match them by address, but differences in spelling, formatting, and capitalization made this unreliable. I eventually used kollektiv names instead, which successfully connected most of the records, although some uncertainty remained. Eleven records had no name, and I identified around fifteen groups of possible duplicates or near-duplicates. Some appeared to be repeated responses, while others might have represented separate kollektiver at the same address, so I flagged them for further review rather than deleting them outright. I also documented these issues for the researchers who would continue the project."],
        ja: ["データを扱う前に、引き継いだQGISのプロジェクトを直す必要があった。最初は開くものの、元のファイルが正しくリンクされておらず、閉じるとまた壊れてしまう。切れたファイルのパスをたどり、元データをローカルのフォルダにコピーして、プロジェクトを一から作り直した。これでようやく安定した作業場ができた。",
             "もっと厄介だったのは、アンケートの回答を位置のデータに結びつけることだった。二つのデータには共通のIDがなかった。Excelで両方の表を準備し、名前、住所、設立日の書き方をそろえ、まず住所で照合しようとしたが、つづりや書式、大文字小文字の違いで当てにならなかった。最終的にコレクティブの名前を使うことにし、大半の記録をつなげられたが、不確かな点は残った。名前のない記録が11件あり、重複またはほぼ重複と思われるグループが約15組あった。同じ回答を二度送ったように見えるものもあれば、同じ住所にある別のコレクティブかもしれないものもあったので、すぐには消さず、あとで確認できるよう印をつけた。これらの問題は、プロジェクトを引き継ぐ研究者のために記録にも残した。"],
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
        en: ["Once I had a working dataset, I began exploring the survey results in QGIS, mapping one variable at a time to see whether any geographical patterns emerged. These included housing type, house meetings, relationship status, number of residents, living space, establishment year, and diet, among others.",
             "Not all the variables were particularly useful for mapping. Some questions had only 60 to 75 responses, and others showed little geographical variation. Housing type, however, showed a fairly clear pattern from the beginning, with apartments concentrated toward central Copenhagen and detached houses more common in the surrounding municipalities."],
        ja: ["使えるデータができてから、QGISでアンケートの結果を探り始めた。変数を一つずつ地図にし、地理的なパターンが見えるかを確かめた。住宅の種類、ハウスミーティング、パートナーの有無、住人の数、住まいの広さ、設立年、食事などだ。",
             "どの変数も地図にして役立つわけではなかった。回答が60〜75件しかない質問もあれば、場所による違いがほとんどないものもあった。ただ、住宅の種類だけは最初からかなりはっきりしたパターンを見せた。集合住宅はコペンハーゲンの中心部に集まり、一戸建ては周りの市町村に多かった。"],
      },
      images: [
        { file: "kollektiv-explore-type.webp", alt: { en: "QGIS: kollektiver by housing type.", ja: "QGIS：住宅の種類で色分け。" }, caption: { en: "Housing type", ja: "住宅の種類" } },
        { file: "kollektiv-explore-meetings.webp", alt: { en: "QGIS: kollektiver by house meetings.", ja: "QGIS：ハウスミーティングの有無で色分け。" }, caption: { en: "House meetings (72 of 108 answered)", ja: "ハウスミーティング（回答72か所）" } },
        { file: "kollektiv-explore-single.webp", alt: { en: "QGIS: kollektiver by relationship status.", ja: "QGIS：パートナーの有無で色分け。" }, caption: { en: "Relationship status (102 of 108)", ja: "パートナーの有無（回答102か所）" } },
        { file: "kollektiv-explore-residents.webp", alt: { en: "QGIS: kollektiver by number of residents.", ja: "QGIS：住人の数で色分け。" }, caption: { en: "Number of residents (75 of 108)", ja: "住人の数（回答75か所）" } },
        { file: "kollektiv-explore-established.webp", alt: { en: "QGIS: kollektiver by year established.", ja: "QGIS：設立年で色分け。" }, caption: { en: "Year established (60 of 108)", ja: "設立年（回答60か所）" } },
        { file: "kollektiv-explore-diet.webp", alt: { en: "QGIS: kollektiver by diet.", ja: "QGIS：食事のスタイルで色分け。" }, caption: { en: "Diet", ja: "食事" } },
      ],
    },
    {
      heading: { en: "Map series", ja: "地図シリーズ" },
      text: {
        en: ["For the final research paper, I selected four variables to map in greater detail: housing type, establishment period, living space, and the presence of workshops and gardens. I experimented with different ways of representing each variable, using color and shape to distinguish housing types, graduated circles for establishment periods, and a combination of color and symbol size to show living space per resident and total dwelling area.",
             "Of the four, housing type produced the clearest spatial pattern. The living-space map was also interesting, since larger homes did not necessarily provide more space per resident, while workshops and gardens appeared more frequently outside the dense urban center. Together, the maps helped us examine how kollektiver occupy and use different kinds of housing across Copenhagen."],
        ja: ["最終的な研究論文のために、四つの変数を選んで詳しく地図にした。住宅の種類、設立時期、住まいの広さ、作業場と庭の有無だ。変数ごとに表し方を試し、住宅の種類は色と形で、設立時期は大きさの違う円で、一人あたりの広さと住まい全体の広さは色と記号の大きさの組み合わせで示した。",
             "四つのうち、いちばんはっきりした空間のパターンが出たのは住宅の種類だった。広さの地図もおもしろく、大きな家だからといって一人あたりの広さが大きいとは限らなかった。作業場や庭は、密集した中心部の外に多く見られた。四枚の地図を合わせることで、コペンハーゲンのコレクティブがさまざまな住宅をどう使っているかを見ていくことができた。"],
      },
      images: [
        { file: "kollektiv-types.webp", alt: { en: "Map of kollektiver by housing type with outlined clusters.", ja: "住宅の種類ごとのコレクティブとまとまりの範囲。" }, caption: { en: "Housing type", ja: "住宅の種類" } },
        { file: "kollektiv-living-space.webp", alt: { en: "Map of living space per resident (color) and total area (size).", ja: "一人あたりの面積（色）と全体の面積（大きさ）。" }, caption: { en: "Living space", ja: "住まいの広さ" } },
        { file: "kollektiv-establishment.webp", alt: { en: "Map of establishment period by circle size.", ja: "設立時期を円の大きさで示した地図。" }, caption: { en: "Establishment period", ja: "設立時期" } },
        { file: "kollektiv-workshop-garden.webp", alt: { en: "Map of workshop and garden presence.", ja: "作業場と庭の有無の地図。" }, caption: { en: "Workshops and gardens", ja: "作業場と庭" } },
      ],
    },
    {
      heading: { en: "Web map", ja: "ウェブ地図" },
      text: {
        en: ["Kollektivforeningen later asked me to produce a map of kollektiver across Denmark for ICSA 2026 in Germany. I built an interactive map in QGIS, exported it using qgis2web with Leaflet, and published it through GitHub Pages. However, the map included individual residential locations, and we had not obtained permission from respondents to publish their homes, so I took it offline after the conference."],
        ja: ["その後、デンマーク・コレクティブ協会から、ドイツで開かれるICSA 2026のために、デンマーク全土のコレクティブの地図を作ってほしいと頼まれた。QGISでインタラクティブな地図を作り、qgis2webとLeafletで書き出して、GitHub Pagesで公開した。ただ、地図には一軒ずつの住まいの場所が含まれていて、回答者から家を公開する許可はとっていなかったので、会議のあとに公開をやめた。"],
      },
    },
    {
      heading: { en: "Big Map", ja: "大きな地図" },
      text: {
        en: ["After presenting the research maps, I decided to develop the housing-type map into a poster for NACIS 2026. Unlike the research paper, which examined several aspects of kollektiv life, I wanted the poster to focus on one geographical pattern. I narrowed the extent to Copenhagen Municipality, where 80 kollektiver were mapped, and emphasized the concentration of apartments in the city center and detached houses toward the outskirts.",
             "I considered adding another variable, including establishment year and socioeconomic characteristics, but neither produced a particularly clear spatial pattern. I eventually decided to include the city’s designated vulnerable areas in pink, of which only four of the 80 kollektiver fell within, while placing other findings, such as the prevalence of shared meals, in short descriptions around the map.",
             "I exported the layers from QGIS and finished the poster in Adobe Illustrator, where a fair amount of time went into designing the basemap, particularly finding the right balance between the building footprints and the kollektiv symbols. I wanted the urban density to remain visible, since it was important for understanding the distribution of housing types, without overwhelming the thematic data. I kept the basemap relatively subdued and designed separate pictograms for each housing type, which I adjusted to remain distinguishable against the buildings and roads. I also chose not to label individual kollektiver, both to avoid clutter and to protect residents’ privacy.",
             "Finally, I wanted to include something that would give viewers a better sense of the places being mapped. Using photographs I had taken during my time in Copenhagen, I drew two illustrations on my iPad: an interior of a kollektiv, placed alongside a short history of Maos Lyst, founded in 1968, and an exterior view of Freetown Christiania, founded in 1971. I placed them on opposite sides of the map to bring some of the architecture and everyday character of communal living into what was otherwise a fairly technical map."],
        ja: ["研究の地図を発表したあと、住宅の種類の地図をNACIS 2026のポスターに発展させることにした。コレクティブの暮らしをいくつもの面から調べた研究論文とは違い、ポスターでは一つの地理的なパターンにしぼりたかった。範囲をコペンハーゲン市にしぼり（地図にしたコレクティブは80か所）、中心部に集まる集合住宅と、郊外に向かって増える一戸建てを強調した。",
             "設立年や社会経済的な特徴など、もう一つ変数を加えることも考えたが、どちらもはっきりした空間のパターンにはならなかった。最終的に、市が指定する生活環境の厳しい地区をピンクで加えた。80か所のうち、その中にあるのは四つだけだった。食事を一緒にとることが多いといった、ほかの結果は、地図の周りの短い説明文にした。",
             "QGISからレイヤーを書き出し、Adobe Illustratorでポスターを仕上げた。とくに時間をかけたのはベースマップで、建物の形とコレクティブの記号のバランスを探った。住宅の種類の分布を理解するには街の密度が大事なので、それは見えるようにしつつ、主題のデータを邪魔しないようにしたかった。ベースマップは控えめにし、住宅の種類ごとに絵記号をデザインして、建物や道路の上でも見分けられるよう調整した。一つひとつのコレクティブに名前はつけなかった。地図がごちゃつかないように、そして住人のプライバシーを守るためだ。",
             "最後に、地図にした場所の雰囲気が伝わるものを入れたかった。コペンハーゲンにいたあいだに撮った写真をもとに、iPadで二枚の絵を描いた。一枚はコレクティブの室内で、1968年にできたMaos Lystの短い歴史を添えた。もう一枚は1971年にできたクリスチャニアの外観だ。二枚を地図の両側に置き、技術的になりがちな地図に、共同生活の建物や日々の雰囲気を少し持ち込んだ。"],
      },
      images: [
        { file: "kollektiv-detail-map.webp", alt: { en: "Poster close-up: apartment symbols clustered over a pale basemap around Nørrebro.", ja: "ポスターの拡大。ノアブロ周辺で、淡いベースマップの上に集合住宅の記号が集まっている。" }, caption: { en: "Symbols over a quiet basemap.", ja: "静かなベースマップの上の記号。" } },
        { file: "kollektiv-drawings.webp", alt: { en: "My two drawings: a kollektiv interior with plants and a pendant lamp, and Christiania with a balcony, trees and a bicycle.", ja: "私の二枚の絵。植物とペンダントライトのあるコレクティブの室内と、バルコニーや木、自転車のあるクリスチャニア。" }, caption: { en: "My drawings: a kollektiv interior and Christiania.", ja: "私の絵：コレクティブの室内とクリスチャニア。" } },
        { file: "kollektiv-drawing-ipad.webp", alt: { en: "The drawings in progress on my iPad.", ja: "iPadで描いている途中の絵。" }, caption: { en: "Drawing on my iPad.", ja: "iPadで描いているところ。" } },
      ],
    },
  ],

  sources: [
    { en: "Municipal boundaries: DigDag, via Dataforsyningen. Study area: Copenhagen Urban Area, Statistics Denmark.", ja: "市町村界：DigDag（Dataforsyningen）。調査範囲：デンマーク統計局のコペンハーゲン都市圏" },
    { en: "Vulnerable areas: designated by the City of Copenhagen.", ja: "生活環境の厳しい地区：コペンハーゲン市の指定による" },
    { en: "Poster drawings: my own, from photographs I took in Copenhagen.", ja: "ポスターの絵：コペンハーゲンで自分が撮った写真をもとに描いた" },
  ],
});
