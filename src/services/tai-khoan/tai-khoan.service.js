const { Op } = require("sequelize");
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')

const createTaiKhoan = async (data) => {
    try {
        let quyen = 0
        if (data.quyen == "") {
            quyen = 1
        } else {
            quyen = data.quyen
        }
        return await TaiKhoan.create({
            tai_khoan: data.tai_khoan,
            mat_khau: quyen,
            quyen: data.quyen,
            trang_thai: data.trang_thai
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