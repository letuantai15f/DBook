const lichDatService=require('../../services/lich-dat/lich-dat.service')

const getLichDat=async(req,res,next)=>{
    try {
        const id=req.body.benh_nhan_id
        const lichDat=await lichDatService.getLichDat(id)
        return res.status(200).json(lichDat)
    } catch (error) {
        console.log(error);
    }
}
const createLichDat=async(req,res,next)=>{
    try {
        const lichDat=await lichDatService.createLichDat(req.body)
        return res.status(200).json(lichDat)
    } catch (error) {
        console.log(error);
    }
}
const deleteLichDat=async(req,res,next)=>{
    try {
        const id=req.query.id
        const lichDat=await lichDatService.deleteLichDat(id)
        if(lichDat){
            return res.status(200).json({message:"Deleted"})
        }else{
            return res.status(304).json({message:"Erro"})
        }
    } catch (error) {
        console.log(error);
    }
}
const updateLichDat=async(req,res,next)=>{
    try {
        const id=req.params.id
        const lichDat=await lichDatService.updateLichDat(id,req.body)
        if(lichDat){
            return res.status(200).json({message:"Updated"})
        }else{
            return res.status(304).json({message:"Erro"})
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports={createLichDat,deleteLichDat,updateLichDat,getLichDat}