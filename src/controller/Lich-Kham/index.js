const express = require('express');
const LichKham = require('../../models/LichKham/lich-kham.model');
const router = express.Router();
const licKhamController=require('./lich-kham.controller')

/**
 * @route get /lich-kham/
 * @group lichKham 
 * @param {string} bacSiId.query.required
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',licKhamController.getLichKham)
/**
 * @route post /lich-kham/create
 * @group lichKham 
 * @returns {object} 200 
 * @param {LichKham.model} lich_kham.body.required
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',licKhamController.createLichKham)
/**
 * @route delete /lich-kham/delete
 * @group lichKham 
 * @returns {object} 200 
 * @param {string} id.query.required
 * @returns {Error}  default - Unexpected error
 */
router.delete('/delete',licKhamController.deleteLichKham)

module.exports=router