
const express = require('express');
const router = express.Router();
const khoaController=require('../Khoa/khoa.controller')
const bacSiController=require('../Bac-Si/bac-si.controller')
const lichDatController=require('../Lich-Dat/lich-dat.controller')


/**
 * @route get /info/khoa
 * @group info 
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.get('/khoa',khoaController.getKhoa)

/**
 * @route get /info/bac-si
 * @group info 
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.get('/bac-si',bacSiController.getBacSi)
/**
 * @route get /info/lich-trong
 * @group info
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.post('/lich-trong',lichDatController.getLichTrong)
module.exports=router