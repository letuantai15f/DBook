const trieuChungService=require('../../services/trieu-chung-tu-van/trieu-chung.service')
const {Op}=require('sequelize')

const getTrieuChungAll=async(req,res)=>{
    try {
        const where={}
        const trieu_chung=req.query.ten
        const chuyen_khoa=req.query.chuyen_khoa
        if(ten){
            where.trieu_chung={ [Op.like]: `%${ten}%` }
        }
        if(chuyen_khoa){
            where.chuyen_khoa={ [Op.like]: `%${chuyen_khoa}%` }
        }
        const trieuChung=await trieuChungService.getTrieuChungAll(where)
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
const createTrieuChung=async(req,res,next)=>{
    try {
        const trieu_chung=await trieuChungService.createTrieuchung(req.body)
        return res.status(200).json(trieu_chung)
    } catch (error) {
        console.log(error);
        next()
    }
}

module.exports={getTrieuChungAll,findTrieuChung,createTrieuChung}