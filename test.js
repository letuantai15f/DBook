const data = [
    ['m'], ['m','k'], ['m'],
     ['k','z'], ['m'], ['m','z'],['m','z'],
     ['k','z'],
]
data.map(e=>{
    let k=0;
    for(let i=0;i<data.length;i++){
        const check=e.filter(el=>data[i].includes(el))
        // console.log('i:'+i+'-'+check+'-'+k);
        if(check.length==data[i].length && k==1 ){
            data.splice(i, 1);
        }else if(check.length==data[i].length && k==0 && check.length==e.length){
            k=1;
        }
    }
})


data.map(e=>{
   console.log(e); 
})
