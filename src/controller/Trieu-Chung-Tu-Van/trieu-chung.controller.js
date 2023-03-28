const trieuChungService=require('../../services/trieu-chung-tu-van/trieu-chung.service')
const {Op}=require('sequelize')

const getTrieuChungAll=async(req,res)=>{
    try {
        const trieuChung=await trieuChungService.getTrieuChungAll()
        return res.status(200).json(trieuChung)
    } catch (error) {
        console.log(error);
    }
}
const findTrieuChung=async(req,res)=>{
    const where={}
    const input=req.query.trieuChung
    try {
        if(input){
           where.trieu_chung={ [Op.like]: `%${input}%` }; 
        }
        
        const trieuChung2=await trieuChungService.findTrieuChung(where)
        return res.status(200).json(trieuChung2)
    } catch (error) {
        console.log(error);
    }
}

module.exports={getTrieuChungAll,findTrieuChung}