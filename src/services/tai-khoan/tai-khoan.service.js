const { Op } = require("sequelize");
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')

const createTaiKhoan = async (data) => {
    try {
        return await TaiKhoan.create({
            tai_khoan: data.sdt,
            mat_khau: data.mat_khau,
            quyen: data.quyen,
            trang_thai: "Created"
        })
    } catch (error) {
        return error
    }
}
const login = async (data) => {
    try {
        const taiKhoan = await TaiKhoan.findOne({ where: { tai_khoan: data.tai_khoan } })
        if (taiKhoan) {
            if (taiKhoan.mat_khau === data.mat_khau) {
                return true
            }
            else { return false }
        }
        return false;
    } catch (error) {

    }
}
const getTaiKhoan = async (data) => {
    return await TaiKhoan.findOne({ where: { tai_khoan: data.tai_khoan } })
}

module.exports = { createTaiKhoan, login, getTaiKhoan }