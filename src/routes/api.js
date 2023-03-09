const express = require('express');
const router = express.Router();

const TaiKhoan=require('../controller/Tai-Khoan')
const Khoa=require('../controller/Khoa')
const BenhNhan=require('../controller/Benh-Nhan')
const NhanVien=require('../controller/Nhan-Vien')

router.use('/nhan-vien',NhanVien)
router.use('/tai-khoan',TaiKhoan)
router.use('/khoa',Khoa)
router.use('/benh-nhan',BenhNhan)

router.get("/login", (req, res) => {
    res.render("auth", {
      style: "auth.css",
      isLogin: true,
    });
});

module.exports=router