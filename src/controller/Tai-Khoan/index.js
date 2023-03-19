const express = require('express');
const router = express.Router();
const taiKhoanController=require('./tai-khoan.controller')
const multer = require("multer");
const upload = multer();
router.post('/create',taiKhoanController.createTaiKhoan)

router.post('/login',upload.fields([]),taiKhoanController.login)

module.exports=router