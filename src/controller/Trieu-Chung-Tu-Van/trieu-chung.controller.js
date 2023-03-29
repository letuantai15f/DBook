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
    const data=req.query.trieuChung
    try {
        if(data){
            let input = data.split(",");
            for(let i=0;i<input.length;i++){
               where.trieu_chung={ [Op.like]: `%${input[i]}%` };  
            }
           
        }
        
        const trieuChung2=await trieuChungService.findTrieuChung(where)
        return res.status(200).json(trieuChung2)
    } catch (error) {
        console.log(error);
    }
}

module.exports={getTrieuChungAll,findTrieuChung}