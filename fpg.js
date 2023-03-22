// const data = [
//     ["Đau đầu", "Nội tiết"],
//     ["Đau đầu", "Thần kinh"],
//     ["Ho, đau họng", "Tai mũi họng"],
//     ["Ho, đau họng", "Nội tiết"],
//     ["Đau bụng", "Tiêu hóa"],
//     ["Đau bụng, buồn nôn", "Tiêu hóa"],
//     ["Đau bụng, buồn nôn", "Nội tiết"],
//     ["Mệt mỏi, khó thở", "Hô hấp"],
//     ["Mệt mỏi, khó thở", "Nội tiết"],
//     ["Sốt cao, đau đầu", "Nội tiết"],
//     ["Sốt cao, đau đầu", "Thần kinh"],
//     ["Tiểu đêm nhiều, khát nước", "Nội tiết"],
//   ];

var f = require("node-fpgrowth");

var transactions = [
    [1, 3, 4],
    [2, 3, 5],
    [1, 2, 3, 5],
    [2, 5],
    [1, 2, 3, 5]
];

var fpgrowth = new f.FPGrowth(.5);
console.log(`Executing FPGrowth...`);
fpgrowth.on('data', function (itemset) {
    var support = itemset.support;
    var items = itemset.items;
    console.log(`Itemset { ${items.join(',')} } is frequent and have a support of ${support}`);
});

fpgrowth.exec(transactions)
    .then(function (itemsets) {
      console.log(`Finished executing FPGrowth. ${itemsets.length} frequent itemset(s) were found.`);
  });