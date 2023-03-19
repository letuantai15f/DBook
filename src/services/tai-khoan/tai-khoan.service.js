const { Op } = require("sequelize");
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')
const BacSi = require('../../models/BacSi/bac-si.model')
const NhanVien = require('../../models/NhanVien/nhan-vien.model')
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createTaiKhoan = async (data) => {
    try {

        const mat_khau = changePass(data.mat_khau)
        if (mat_khau) {
            const taiKhoan = await TaiKhoan.create({
                tai_khoan: data.tai_khoan,
                mat_khau: mat_khau,
                quyen: data.quyen,
                trang_thai: "Created"

            })
            return taiKhoan;
        }

    } catch (error) {
        console.log(error)
    }
}
const login = async (data) => {
    try {

        const taiKhoan = await TaiKhoan.findOne({ where: { tai_khoan: data.tai_khoan } })
        if (taiKhoan) {
            let check = bcrypt.compareSync(data.mat_khau, taiKhoan.mat_khau)
            if (check) {
                let user;
                switch (taiKhoan.quyen) {
                    case 1:
                        user = taiKhoan
                        break;
                    case 2:
                        user = await BacSi.findOne({ where: { tai_khoan_id: taiKhoan.id } })
                        break;
                    case 3:
                        user = await NhanVien.findOne({ where: { tai_khoan_id: taiKhoan.id } })
                        break;
                    case 4:
                        user = await BenhNhan.findOne({ where: { tai_khoan_id: taiKhoan.id } })
                        break;
                    default:
                        break;
                }
                const payload = { id: user.id, quyen: taiKhoan.quyen };
                const token = jwt.sign(payload, process.env.JWT_SECRET);
                return { token: token, userID: user.id }
            }
            else { return false }
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
    }
}
const getTaiKhoan = async (data) => {
    return await TaiKhoan.findOne({ where: { tai_khoan: data.tai_khoan } })
}
const changePass = (passWord) => {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(passWord, salt)
    return hash
}
module.exports = { createTaiKhoan, login, getTaiKhoan }