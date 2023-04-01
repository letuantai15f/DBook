const bcrypt = require("bcrypt");
const TaiKhoan = require("../../models/TaiKhoan/tai-khoang.model");
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service')

const verifyEmail = (req, res) => {
    bcrypt.compare(req.query.email, req.query.token, (err, result) => {
        if (result == true) {
            const verify=taiKhoanService.verifyEmail(req.query.email)
            console.log(verify);
            if (verify) {
                return res.redirect("http://localhost:3000/xac-thuc")
            } else {
                return res.status(500).json({ message: "Erro" })
            }
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    })
}
module.exports = { verifyEmail }