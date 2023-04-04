const lichKhamService=require('../../services/lich-kham/lich-kham.service')



const getLichKhamAll=async(req,res)=>{
    try {
        const where={}
        const ho_ten=req.query.ho_ten
        const cccd=req.query.cccd 
    } catch (error) {
        
    }
}
const getLichKham=async(req,res,next)=>{
    try {
        const bacSiId=req.query.bacSiId
        const lichKham=await lichKhamService.getLichKham(bacSiId)
        return res.status(200).json(lichKham)
    } catch (error) {
        console.log(error);
    }
}

const createLichKham=async(req,res,next)=>{
    try {
        const lichKham=await lichKhamService.createLichKham(req.body)
        return res.status(200).json(lichKham)
    } catch (error) {
        console.log(error);
    }
}
const deleteLichKham=async(req,res,next)=>{
    try {
        const id=req.query.id
        const lichKham=await lichKhamService.deleteLichKham(id)
        if(lichKham){
            return res.status(200).json({message:"deleted"})
        }else{
            return res.status(304).json({message:"Erro"})
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports={createLichKham,deleteLichKham,getLichKham}