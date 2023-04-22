const trieuChung=require('../../models/TrieuChungTuVan/trieu-chung-tu-van.model')

const getTrieuChungAll=async(where)=>{
    return trieuChung.findAll({where})
}
const getTrieuChungOnly=async()=>{
    return trieuChung.findAll({attributes:["tc_ck"],raw: true,
    nest: true,})
}
const findTrieuChung=async(where)=>{
    return trieuChung.findAll({where})
}
const  importTrieuChung=async(data)=>{
    try {
        if(data){
        await trieuChung.destroy({where:{},truncate:true})
        await trieuChung.bulkCreate(data)
    }
    } catch (error) {
        console.log(error);
    }
    
}
const createTrieuchung=async(data)=>{
    return await trieuChung.create(data)
}

module.exports={getTrieuChungAll,findTrieuChung,importTrieuChung,getTrieuChungOnly,createTrieuchung}