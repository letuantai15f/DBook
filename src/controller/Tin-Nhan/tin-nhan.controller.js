const tinService=require('../../services/tin-nhan/tin-nhan.service')

const getTinNhanAll=async(req,res,next)=>{
    try {
        const id=req.query.phong_id
        const tin=await tinService.getTinNhanAll(id)
        return res.status(200).json(tin)
    } catch (error) {
        console.log(error);
        next();
    }
}
const createTin=async(req,res,next)=>{
    try {
        const tin=await tinService.createTin(data)
        return res.status(200).json(tin)
    } catch (error) {
        console.log(error);
        next()
    }
}

module.exports={getTinNhanAll,createTin}