const NhanVien = require('../../models/NhanVien/nhan-vien.model')
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')
const { sequelize } = require("../../models");
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service');
const { Op } = require('sequelize');

const getNhanVien = async () => {
    return await NhanVien.findAll()
}
const createNhanVien = async (data) => {
    data.tai_khoan=data.email;
    data.quyen = 3;
    data.mat_khau= "123456";
    data.trang_thai="Created"
    try {
        const taiKhoan = await taiKhoanService.createTaiKhoan(data)
        if (taiKhoan) {
            data.tai_khoan_id = taiKhoan.id
            const nhanVien = await NhanVien.create(data)
            return nhanVien
        }
        
    } catch (error) {
        console.log(error)

    }
}
const deleteNhanVien = async (id) => {
    const nhanVien = await NhanVien.findAll({
        where: { id: id }, raw: true,
        nest: true,
    })
    nhanVien.map(async (e) => {
        await NhanVien.update({ trang_thai: "Deleted" }, { where: { id: e.id } })
        await TaiKhoan.update({ trang_thai: 0 }, { where: { id: e.tai_khoan_id } })
    })


}
const updateNhanVien = async (id, data) => {
    return await NhanVien.update(data, { where: { id } })
}
const findNhanVien=async (data)=>{
    try {
        return await NhanVien.findAll({where:{
            [Op.or]:[{email:data.email},{cccd:data.cccd},{sdt:data.sdt}]
        }})
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    createNhanVien,
    deleteNhanVien,
    getNhanVien,
    updateNhanVien,
    findNhanVien,

}