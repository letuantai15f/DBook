const express = require('express');
const router = express.Router();

const TaiKhoan=require('../controller/Tai-Khoan')

router.use('/tai_khoan',TaiKhoan)
module.exports=router