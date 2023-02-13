const express = require('express');
const router = express.Router();
const taiKhoanController=require('./tai-khoan.controller')

router.post('/create',taiKhoanController.createTaiKhoan)

router.post('/login',taiKhoanController.dangNhap)

module.exports=router