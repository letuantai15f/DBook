const express = require('express');
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model');
const router = express.Router();
const benhNhanController= require('./benh-nhan.contoller')

/**
 * @route get /benh-nhan/
 * @group benhNhan 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',benhNhanController.getBenhNhan)
/**
 * @route post /benh-nhan/create
 * @group benhNhan 
 * @returns {object} 200 
 * @param {BenhNhan.model} benh_nhan.body.required
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',benhNhanController.createBenhNhan)
/**
 * @route delete /benh-nhan/delete
 * @group benhNhan 
 * @returns {object} 200 
 * @param {string} id.query.required
 * @returns {Error}  default - Unexpected error
 */
router.delete('/delete',benhNhanController.deleteBenhNhan)
/**
 * @route put /benh-nhan/update/{id}
 * @group benhNhan 
 * @returns {object} 200 
 * @param {string} id.params.required
 * @param {BenhNhan.model} benh_nhan.body.require
 * @returns {Error}  default - Unexpected error
 */
router.put('/update',benhNhanController.updateBenhNhan)
/**
 * @route get /benh-nhan/trieu-chung
 * @group benhNhan 
 * @param {string} trieuChung.query
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/trieu-chung',benhNhanController.tuVanCK)
module.exports=router