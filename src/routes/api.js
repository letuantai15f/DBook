const express = require('express');
const router = express.Router();

const TaiKhoan=require('../controller/Tai-Khoan')

router.use('/tai_khoan',TaiKhoan)

router.get("/login", (req, res) => {
    res.render("auth", {
      style: "auth.css",
      isLogin: true,
    });
});

module.exports=router