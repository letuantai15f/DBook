const express = require('express');
const router = express.Router();
const nhanVienController=require('./nhan-vien.controller')

router.get('/',nhanVienController.getNhanVien)
router.post('/create',nhanVienController.createNhanVien)
router.delete('/delete',nhanVienController.deleteNhanVien)
router.put('/update/:id',nhanVienController.updateNhanVien)

module.exports=router