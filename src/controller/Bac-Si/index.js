const express = require('express');
const router = express.Router();
const bacSiController=require('./bac-si.controller')

router.get('/',bacSiController.getBacSi)
router.post('/create',bacSiController.createBacSi)
router.delete('/delete',bacSiController.deleteBacSi)
router.put('/update/:id',bacSiController.updateBacSi)


module.exports=router