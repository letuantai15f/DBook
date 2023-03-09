const NhanVien = require('../../models/NhanVien/nhan-vien.model')
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')
const { sequelize } = require("../../models");

const getNhanVien = async () => {
    return await NhanVien.findAll()
}
const createNhanVien = async (data) => {
    const t = await sequelize.transaction();
    try {
        const taiKhoan=await TaiKhoan.create({
            tai_khoan: data.sdt,
            mat_khau: "123456",
            quyen: 3,
            trang_thai: 1
        }, { transaction: t })
        data.tai_khoan_id=taiKhoan.id
        const nhanVien = await NhanVien.create(data, { transaction: t })
        t.commit()
        return nhanVien
    } catch (error) {
        console.log(error)
        t.rollback()
    }
}
const deleteNhanVien=async(id)=>{
    const nhanVien=await NhanVien.findAll({where:{id:id}, raw: true,
        nest: true,})
    nhanVien.map(async(e)=>{
        await NhanVien.update({trang_thai:"Deleted"},{where:{id:e.id}})
        await TaiKhoan.update({trang_thai:0},{where:{id:e.tai_khoan_id}})
    })
    
    
}
const updateNhanVien=async(id,data)=>{
    return await NhanVien.update(data,{where:{id}})
}
module.exports = {
    createNhanVien,
    deleteNhanVien,
    getNhanVien,
    updateNhanVien

}