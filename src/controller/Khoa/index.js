const express = require('express');
const router = express.Router();
const khoaController=require('./khoa.controller')

router.get('/',khoaController.getKhoa)
router.get('/:id',khoaController.getKhoaId)
router.post('/create',khoaController.createKhoa)
router.delete('/delete',khoaController.deleteKhoa)
router.put('/update/:id',khoaController.updateKhoa)


module.exports=router