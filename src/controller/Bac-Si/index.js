const express = require('express');
const BacSi = require('../../models/BacSi/bac-si.model');
const router = express.Router();
const bacSiController=require('./bac-si.controller')
const multer=require('multer')
const upload=multer()


/**
 * @route get /bac-si/lich-dat
 * @group bacSi 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/lich-dat',bacSiController.getLichBacSi)
/**
 * @route get /bac-si/thong-tin
 * @group bacSi 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/thong-tin',bacSiController.getThongTin)
/**
 * @route get /bac-si/
 * @group bacSi 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',bacSiController.getBacSi)
/**
 * @route post /bac-si/create
 * @group bacSi 
 * @returns {object} 200 
 * @param {BacSi.model} bac_si.body.required
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',upload.array("hinh"),bacSiController.createBacSi)
/**
 * @route delete /bac-si/delete
 * @group bacSi 
 * @returns {object} 200 
 * @param {string} id.query.required
 * @returns {Error}  default - Unexpected error
 */
router.delete('/delete',bacSiController.deleteBacSi)
/**
 * @route put /bac-si/update/{id}
 * @group bacSi 
 * @returns {object} 200 
 * @param {string} id.params.required
 * @param {BacSi.model} bac_si.body.require
 * @returns {Error}  default - Unexpected error
 */
router.put('/update/:id',bacSiController.updateBacSi)
/**
 * @route post /bac-si/khoa
 * @group bacSi 
 * @returns {object} 200 
 * @param {string} khoa.body
 * @returns {Error}  default - Unexpected error
 */
router.post('/khoa',bacSiController.getBacSiByKhoa)



module.exports=router