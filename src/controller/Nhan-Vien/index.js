const express = require('express');
const router = express.Router();
const nhanVienController=require('./nhan-vien.controller')

router.post('/create',nhanVienController.createNhanVien)
router.delete('/delete',nhanVienController.deleteNhanVien)

module.exports=router