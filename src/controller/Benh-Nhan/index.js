const express = require('express');
const router = express.Router();
const benhNhanController= require('./benh-nhan.contoller')

router.get('/',benhNhanController.getBenhNhan)
router.post('/create',benhNhanController.createBenhNhan)
router.delete('/delete',benhNhanController.deleteBenhNhan)
router.put('/update',benhNhanController.updateBenhNhan)

module.exports=router