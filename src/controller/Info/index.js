
const express = require('express');
const router = express.Router();
const khoaController=require('../Khoa/khoa.controller')
const bacSiController=require('../Bac-Si/bac-si.controller')

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
 * @route get /info/bac
 * @group info 
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.get('/bac-si',bacSiController.getBacSi)


module.exports=router