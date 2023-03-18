const express = require('express');
const router = express.Router();
const lichDatController=require('./lich-dat.controller')

router.get('/',lichDatController.getLichDat)
router.post('/create',lichDatController.createLichDat)
router.delete('/delete',lichDatController.deleteLichDat)
router.put('/update/:id',lichDatController.updateLichDat)


module.exports=router