const bacSiService=require('../../services/bac-si/bac-si.service')
const _ = require("lodash");
const taiKhoanService=require('../../services/tai-khoan/tai-khoan.service')

const getBacSi=async(req,res,next)=>{
    try {
        const bacSi=await bacSiService.getBacSi()
        return res.status(200).json(bacSi)
    } catch (error) {
        console.log(error)
    }
}
const createBacSi=async(req,res,next)=>{
    try {
        const checkBacSi=await bacSiService.findBacSi(req.body)
        const checkTaiKhoan=await taiKhoanService.getTaiKhoan(req.body)
        if(checkBacSi || checkTaiKhoan){
            return res.status(404).json({message:"Thông tin đã tồn tại"})
        }else{
           const bacSi=await bacSiService.createBacSi(req.body) 
           return res.status(200).json(bacSi)
        }
    } catch (error) {
        console.log(error)
    }
} 
const deleteBacSi=async(req,res,next)=>{
    try {
        const id=req.query.id
        const bacSi=await bacSiService.deleteBacSi(id)
        if(bacSi){
            return res.status(200).json({message:"Deleted"})
           }else{
            return res.status(404).json({message:"Erro"})
           }
    } catch (error) {
        console.log(error)
    }
}
const updateBacSi=async(req,res,next)=>{
    try {
        const id=_.get(req,"params.id")
        const bacSi=await bacSiService.updateBacSi(id,req.body)
         if(bacSi){
            return res.status(200).json({message:"Updated"})
           }else{
            return res.status(404).json({message:"Erro"})
           }
    } catch (error) {
       console.log(error)
    }
}

module.exports={
    getBacSi,
    createBacSi,
    deleteBacSi,
    updateBacSi,
}