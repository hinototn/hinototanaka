// RE-DRAWING VOTING ACCESS
// My content for this project. English and Japanese sit side by side.

project({
  intro: { en: "Could Richmond make polling places easier to reach by moving them?", ja: "投票所の場所を変えたら、リッチモンドの人たちは投票しやすくなるのか。" },
  hero: {
    file: "richmond-change.webp",
    alt: { en: "Richmond precincts showing how the share of homes more than a mile from a polling station changes when polling places move.", ja: "投票所を動かしたとき、投票所まで1マイル以上ある住宅の割合が各地区でどう変わるかを示した地図。" },
    caption: { en: "Change in the share of homes more than a mile from their polling place.", ja: "投票所まで1マイル以上ある住宅の割合の変化。" },
  },
  facts: [
    { label: { en: "Tools", ja: "ツール" }, text: { en: "QGIS", ja: "QGIS" } },
    { label: { en: "Data", ja: "データ" }, text: { en: "Richmond precincts, polling stations, residential addresses, roads and water; households without a car from the American Community Survey", ja: "リッチモンドの投票区、投票所、住宅の住所、道路と水域、米国コミュニティ調査の車を持たない世帯" } },
  ],
  about: {
    en: ["Distance is a quiet barrier to voting, especially for people without a car. I measured how far homes in Richmond, Virginia are from their polling places, then tested what would happen if the polling places moved. Access improved in 40 precincts and got worse in 15, and the average share of homes more than a mile away fell from 22.9% to 21.2%."],
    ja: ["投票所までの距離は、とくに車のない人にとって目立たない壁になる。バージニア州リッチモンドで、住宅から投票所までの距離を測り、投票所を動かしたらどうなるかを試した。40地区で行きやすくなり、15地区で遠くなった。1マイル以上離れた住宅の平均割合は22.9%から21.2%に下がった。"],
  },
  sections: [
    {
      heading: { en: "Measuring distance", ja: "距離を測る" },
      text: {
        en: ["For each precinct, I calculated the share of residential addresses more than one mile from their assigned polling station. A mile is a short drive but a long walk, so I also mapped households without a car, since they are the people for whom that distance matters most."],
        ja: ["投票区ごとに、割り当てられた投票所から1マイル以上離れた住宅の割合を計算した。1マイルは車ならすぐだが、歩くと遠い。だから、その距離がいちばん響く車を持たない世帯も地図にした。"],
      },
      images: [
        { file: "richmond-carless.webp", alt: { en: "Map of households without a car in Richmond.", ja: "リッチモンドの車を持たない世帯の地図。" }, caption: { en: "Households without a car.", ja: "車を持たない世帯。" } },
      ],
    },
    {
      heading: { en: "Moving the polling places", ja: "投票所を動かす" },
      text: {
        en: ["I then tested alternative polling locations, using each precinct’s pole of inaccessibility, the point hardest to reach, as a guide, and recalculated every distance. The before and after maps share the same precincts, colors and classes so the comparison is fair. Moving polling places helped on average but not everywhere, because improving one precinct can push another farther away. It is a model rather than a recommendation, since real polling places also need suitable buildings and approval."],
        ja: ["次に、各地区でいちばん行きにくい地点（到達不能極）を手がかりに投票所の候補地を試し、すべての距離を計算し直した。前後の地図は投票区も色も階級もそろえ、公平に比べられるようにした。平均すれば効果はあったが、ある地区を良くすると別の地区が遠くなることもあり、どこでも良くなるわけではない。実際の投票所には建物や承認も必要なので、これは提案ではなくモデルだ。"],
      },
      images: [
        { file: "richmond-before.webp", alt: { en: "Existing polling stations and the share of homes more than a mile away.", ja: "現在の投票所と1マイル以上離れた住宅の割合。" }, caption: { en: "Before", ja: "変更前" } },
        { file: "richmond-after.webp", alt: { en: "Updated polling stations and the share of homes more than a mile away.", ja: "変更後の投票所と1マイル以上離れた住宅の割合。" }, caption: { en: "After", ja: "変更後" } },
        { file: "richmond-stats.webp", alt: { en: "Table summarizing the change in voting access.", ja: "投票所への行きやすさの変化をまとめた表。" }, caption: { en: "Summary table", ja: "集計表" } },
      ],
    },
  ],
  sources: [
    { en: "Households without a car: U.S. Census Bureau, American Community Survey.", ja: "車を持たない世帯：米国勢調査局、米国コミュニティ調査" },
  ],
});
