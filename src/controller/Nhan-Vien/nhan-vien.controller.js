const nhanVienService=require('../../services/NhanVien/nhan-vien.service')
const _ = require("lodash");
const { Error } = require('sequelize');
const taiKhoanService=require('../../services/tai-khoan/tai-khoan.service')


const getNhanVien=async (req,res,next)=>{
    try {
        const nhanVien=await nhanVienService.getNhanVien()
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

module.exports={getNhanVien,createNhanVien,deleteNhanVien,updateNhanVien}