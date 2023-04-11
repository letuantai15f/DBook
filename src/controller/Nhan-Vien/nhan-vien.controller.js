const nhanVienService=require('../../services/NhanVien/nhan-vien.service')
const _ = require("lodash");
const { Error } = require('sequelize');
const taiKhoanService=require('../../services/tai-khoan/tai-khoan.service')
const {Op}=require('sequelize')


const getNhanVien=async (req,res,next)=>{
    try {
        const where={}
        const ho_ten=req.query.ho_ten
        const email=req.query.email
        const cccd=req.query.cccd
        const sdt=req.query.sdt
        const trang_thai=req.query.trang_thai
        if(ho_ten){
            where.ho_ten={ [Op.like]: `%${ho_ten}%` }
        }
        if(email){
            where.email={ [Op.like]: `%${email}%` }
        }
        if(sdt){
            where.sdt={ [Op.like]: `%${sdt}%` }
        }
        if(trang_thai){
            where.trang_thai={ [Op.like]: `%${trang_thai}%` }
        }else{
            where.trang_thai="Created"
        }if(cccd){
            where.cccd={ [Op.like]: `%${cccd}%` }
        }
        const nhanVien=await nhanVienService.getNhanVien(where)
        return res.status(200).json(nhanVien)
    } catch (error) {
        console.log(error);
    }
}
const createNhanVien=async(req,res,next)=>{
    try {
        const checkNhanVien=await nhanVienService.findNhanVien(req.body)
        const checkTaiKhoan=await taiKhoanService.getTaiKhoan(req.body)
        if(checkNhanVien || checkTaiKhoan){
            console.log(checkNhanVien,checkTaiKhoan);
            return res.status(404).json({message:"Thông tin đã tồn tại"})
        }else{
            const nhanVien=await nhanVienService.createNhanVien(req.body)
        return res.status(200).json(nhanVien)
        }
        
    } catch (error) {
        console.log(error);
    }
}
const deleteNhanVien=async(req,res,next)=>{
    try {
        const id=req.query.id
        await nhanVienService.deleteNhanVien(id)
            return res.status(200).json({message:"Deleted"})
    } catch (error) {
        console.log(error);
    }
}
const updateNhanVien=async(req,res,next)=>{
    try {
        const id=_.get(req,"params.id")
        const nhanVien=await nhanVienService.updateNhanVien(id,req.body)
        if(nhanVien){
            return res.status(200).json({message:"Updated"})
        }else{
            return res.status(4040).json({message:"Erro"})
        }
    } catch (error) {
        console.log(error);
    }
}
const getThongTin=async (req,res,next)=>{
    try {
        const id=req.user.id
        const thongTin=await nhanVienService.getThongTin(id)
        return res.status(200).json(thongTin)
    } catch (error) {
        console.log(error);
        next()
    }
}

module.exports={getNhanVien,createNhanVien,deleteNhanVien,updateNhanVien, getThongTin}