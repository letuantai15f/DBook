const bcrypt = require("bcrypt");
const TaiKhoan = require("../../models/TaiKhoan/tai-khoang.model");
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service')

const verifyEmail = (req, res) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
        console.log(result);
        if (result == true) {
            const verify=taiKhoanService.verifyEmail(req.query.email)
            if (verify) {
                return res.status(200).json({ message: "Sucess" })
            } else {
                return res.status(500).json({ message: "Erro" })
            }
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    })
}
module.exports = { verifyEmail }