const express = require('express');
const router = express.Router();
const licKhamController=require('./lich-kham.controller')

router.get('/',licKhamController.getLichKham)
router.post('/create',licKhamController.createLichKham)
router.delete('/delete',licKhamController.deleteLichKham)

module.exports=router