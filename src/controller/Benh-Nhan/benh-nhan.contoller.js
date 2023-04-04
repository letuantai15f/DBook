const { Op } = require("sequelize");
const _ = require("lodash");
const benhNhanService = require('../../services/benh-nhan/benh-nhan.service')
const taiKhoanService=require('../../services/tai-khoan/tai-khoan.service')

const getBenhNhan = async (req, res, next) => {
    try {
        const where={}
        const ho_ten=req.query.ho_ten
        const trang_thai=req.query.trang_thai
        const email=req.query.email
        const sdt=req.query.sdt
        const cccd=req.query.cccd
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
        }
        if(cccd){
            where.cccd={ [Op.like]: `%${cccd}%` }
        }
        const benhNhan = await benhNhanService.getBenhNhan(where)
        return res.status(200).json(benhNhan)

    } catch (error) {
        console.log(error)
    }
}
const createBenhNhan = async (req, res, next) => {
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
const deleteBenhNhan = async (req, res, next) => {
    try {
        const id = req.query.id
        const benhNhan = await benhNhanService.deleteBenhNhan(id)
        if (benhNhan) {
            return res.status(200).json({ message: "Deleted" })
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    } catch (error) {
        console.log(error);
    }
}
const updateBenhNhan = async (req, res, next) => {
    try {
        const id = _.get(req, "params.id")
        const benhNhan = await benhNhanService.updateBenhNhan(id, req.body)
        if (benhNhan) {
            return res.status(200).json({ message: "Updated" })
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    } catch (error) {
        console.log(error);
    }
}
const tuVanCK=async(req,res,next)=>{
    try {
        const data=req.query.trieuChung
        const khoa=await benhNhanService.tuVanCK(data)
        if(khoa){
            return res.status(200).json(khoa)
        }else{
            return res.status(200).json({message:"Xin lỗi chúng tôi còn quá ít dữ liệu để tư vấn cho bạn !"})
        }
    } catch (error) {
        console.log(error);
    }
}
const findBenhNhanId=async(req,res)=>{
    try {
        const id=req.user.id
        if(id){
            const benhNhan=await benhNhanService.findBenhNhanId(id)
            return res.status(200).json(benhNhan)
        }else{
            return res.status(404).json({message:"Không tìm thấy thông tin"})
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getBenhNhan,
    deleteBenhNhan,
    createBenhNhan,
    updateBenhNhan,tuVanCK,findBenhNhanId
}
