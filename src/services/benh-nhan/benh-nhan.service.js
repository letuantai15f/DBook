

const BenhNhan=require('../../models/BenhNhan/benh-nhan.model')
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')

const getBenhNhan=async()=>{
    return await BenhNhan.findAll()
}
const createBenhNhan=async(data)=>{
    return await BenhNhan.create(data)
}
const deleteBenhNhan=async(id)=>{
    const benhNhan=await BenhNhan.findAll({where:{id},raw: true,
        nest: true})
        benhNhan.map(async(e)=>{
            await BenhNhan.update({trang_thai:"deleted"},{where:{id:e.id}})
            await TaiKhoan.update({trang_thai:0},{where:{id:e.tai_khoan_id}})
        })
    return 
}
const updateBenhNhan=async(id,data)=>{
    return await BenhNhan.update(data,{where:{id}})
}


module.exports={
    getBenhNhan,
    createBenhNhan,
    deleteBenhNhan,
    updateBenhNhan
    }