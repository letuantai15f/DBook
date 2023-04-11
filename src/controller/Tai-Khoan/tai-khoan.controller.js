const { Op } = require("sequelize");
const taiKhoanService=require('../../services/tai-khoan/tai-khoan.service')
const benhNhanService = require('../../services/benh-nhan/benh-nhan.service')
const bcrypt=require('bcrypt')

const createTaiKhoan=async(req,res)=>{
    try {
        
        const tai_khoan=await taiKhoanService.createTaiKhoan(req.body)
        return res.status(200).json(tai_khoan)
       
    } catch (error) {
        console.log(error)
    }
}
const login=async(req,res)=>{
    try {
        const tai_khoan=await taiKhoanService.login(req.body)
        if(tai_khoan){
            return res.status(200).json(tai_khoan)
        }else{
            return res.status(404).json({message:"Fail"})
        }
    } catch (error) {
        console.log(error)
    }
}
const verifyMatKhau = (req, res) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
        if (result == true) {
            const matKhau=taiKhoanService.verifyMatKhau(req.query.email,req.query.mat_khau)
            if (matKhau) {
                return res.status(200).json({ message: "Sucess" })
            } else {
                return res.status(500).json({ message: "Erro" })
            }
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    })
}
const forgotMatKhau= async (req,res)=>{
    try {
        const email=req.query.email
        const sendMail= await taiKhoanService.forgotMatKhau(email)
        if(sendMail){
            return res.status(200).json({message:"Sent link"})
        }
    } catch (error) {
        return error
    }
}
const changeMatKhau=async (req,res)=>{
    try {
        const id=req.user.id
        const mat_khau= await taiKhoanService.changeMatKhau(id,req.body)
        if(mat_khau){
            return res.status(200).json({message:"Updated"})
        }
    } catch (error) {
        return error
    }
}
const register=async(req,res)=>{
    try {

        const checkBenhNhan = await benhNhanService.findBenhNhan(req.body)
        const checkTaiKhoan=await taiKhoanService.getTaiKhoan(req.body)
        if (checkBenhNhan || checkTaiKhoan) {
            return res.status(404).json({ message: "Thông tin đã tồn tại" })
        } else {
            const benhNhan = await benhNhanService.createBenhNhan(req.body)
            return res.status(200).json(benhNhan)
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports={createTaiKhoan,login,forgotMatKhau,verifyMatKhau,register,changeMatKhau}