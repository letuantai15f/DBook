const express = require('express');
const router = express.Router();
const taiKhoanController=require('./tai-khoan.controller')
const multer = require("multer");
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model');
const upload = multer();


/**
 * @route post /tai-khoan/create
 * @group tai-khoan - Operations about create Tai Khoan
 * @returns {object} 200 - An array of class info by week
 * @param {TaiKhoan.model} tai_khoan.body
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',taiKhoanController.createTaiKhoan)

router.post('/login',upload.fields([]),taiKhoanController.login)

module.exports=router