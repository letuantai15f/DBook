const trieuChung=require('../../models/TrieuChungTuVan/trieu-chung-tu-van.model')

const getTrieuChungAll=async()=>{
    return trieuChung.findAll()
}
const findTrieuChung=async(where)=>{
    return trieuChung.findAll({where})
}

module.exports={getTrieuChungAll,findTrieuChung}