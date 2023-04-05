const phongService=require('../../services/phong-chat/phong-chat.service')

const getPhong=async(req,res,next)=>{
    try {
        const id=req.user.id
        const phong=await phongService.getPhong(id)
        if(phong){
            return res.status(200).json(phong)
        }else{
            const data={}
            data.benh_nhan_id=id
            data.trang_thai="Created"
            const phong=await phongService.createPhong(data)
            return res.status(200).json(phong)
        }
    } catch (error) {
        console.log(error);
        next()
    }
}
const sendYeuCau=async(req,res,next)=>{
    try {
        const id=req.user.id
        const send=await phongService.sendYeuCau(id)
        if(send){
            return res.status(200).json({message:"Success"})
        }else{
            return res.status(404).json({message:"Erro"})
        }
    } catch (error) {
        console.log(error);
        next()
    }
}
const cancelYeuCau=async(req,res,next)=>{
    try {
        const id=req.user.id
        const cancel=await phongService.cancelYeuCau(id)
        if(cancel){
            return res.status(200).json({message:"Success"})
        }else{
            return res.status(404).json({message:"Erro"})
        }
    } catch (error) {
        console.log(error);
        next()
    }
}
const getPhongAll=async(req,res,next)=>{
    try {
        const phong=await phongService.getPhongAll()
        return res.status(200).json(phong)
    } catch (error) {
        console.log(error);
        next()
    }
}
module.exports={getPhong,sendYeuCau,cancelYeuCau,getPhongAll}