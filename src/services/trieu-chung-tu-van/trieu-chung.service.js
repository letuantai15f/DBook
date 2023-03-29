const trieuChung=require('../../models/TrieuChungTuVan/trieu-chung-tu-van.model')

const getTrieuChungAll=async()=>{
    return trieuChung.findAll()
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

module.exports={getTrieuChungAll,findTrieuChung,importTrieuChung}