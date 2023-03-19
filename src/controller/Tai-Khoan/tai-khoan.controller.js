const { Op } = require("sequelize");
const taiKhoanService=require('../../services/tai-khoan/tai-khoan.service')
const createTaiKhoan=async(req,res)=>{
    try {
        const checkTaikhoan=await taiKhoanService.getTaiKhoan(req.body)
        if(checkTaikhoan){
            return res.status(200).json({message:"Tài khoản đã tồn tại"})
        }
        const tai_khoan=await taiKhoanService.createTaiKhoan(req.body)
        if(tai_khoan){
             return res.status(200).json(tai_khoan)
        }
       
    } catch (error) {
        console.log(error)
    }
}
const login=async(req,res)=>{
    try {
        const tai_khoan=await taiKhoanService.login(req.body)
        console.log(tai_khoan);
        if(tai_khoan){
            return res.status(200).json(tai_khoan)
        }else{
            return res.status(404).json({message:"Fail"})
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={createTaiKhoan,login}