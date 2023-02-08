const { Op } = require("sequelize");
const taiKhoanService=require('../../services/tai-khoan/tai-khoan.service')
const createTaiKhoan=async(req,res)=>{
    try {
        const tai_khoan=await taiKhoanService.createTaiKhoan(req.body)
        return res.status(200).json(tai_khoan)
    } catch (error) {
        console.log(error)
    }
}
module.exports={createTaiKhoan}