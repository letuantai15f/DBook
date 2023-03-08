const express = require('express');
const router = express.Router();

const TaiKhoan=require('../controller/Tai-Khoan')
const Khoa=require('../controller/Khoa')


router.use('/tai_khoan',TaiKhoan)
router.use('/khoa',Khoa)

router.get("/login", (req, res) => {
    res.render("auth", {
      style: "auth.css",
      isLogin: true,
    });
});

module.exports=router