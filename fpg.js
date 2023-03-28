const fp = require('node-fpgrowth');
const reader=require('xlsx')
const fs = require('fs')


const file=reader.readFile('./DATA.xlsx');
const sheet=file.SheetNames
const data=[]
const transactions = [];
const tv=[]
for (let i = 0; i < sheet.length; i++) {
  const arr = reader.utils.sheet_to_json(
      file.Sheets[ sheet[i]])
  arr. forEach((res) => {
     data.push(res.tv)
  })}

  
  data.forEach((row) => {
    const symptoms = row.split(',');
    transactions.push(symptoms);
  });
  
var fpgrowth = new fp.FPGrowth(0.001);
console.log(`Executing FPGrowth...`);


fpgrowth.on('data', function (itemset) {
  var support = itemset.support;
  var items = itemset.items;
  tv.push(items)
});

fpgrowth.exec(transactions)
  .then(function (itemsets) {
    console.log(`Finished executing FPGrowth. ${itemsets.itemsets.length} frequent itemset(s) were found.`);
});
const dataTuVan=[]
  for(let i=0;i<tv.length;i++){
    if(tv[i].includes('da liễu') || tv[i].includes('mắt') || tv[i].includes('xương khớp') || tv[i].includes('nội tiết') || tv[i].includes('hô hấp') || tv[i].includes('tim mạch')){
      dataTuVan.push(tv[i])
    }
  }

module.exports={dataTuVan}