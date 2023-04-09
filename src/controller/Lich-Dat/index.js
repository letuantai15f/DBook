const express = require('express');
const router = express.Router();
const lichDatController=require('./lich-dat.controller')


/**
 * @route get /lich-dat/all
 * @group lichDat
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/all',lichDatController.getAllLichDat)

/**
 * @route get /lich-dat/
 * @group lichDat
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',lichDatController.getLichDat)

/**
 * @route post /lich-dat/create
 * @group lichDat 
 * @returns {object} 200 
 * @param {LichDat.model} lich_dat.body.required
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',lichDatController.createLichDat)
/**
 * @route delete /lich-dat/delete
 * @group lichDat 
 * @returns {object} 200 
 * @param {string} id.query.required
 * @returns {Error}  default - Unexpected error
 */
router.delete('/delete',lichDatController.deleteLichDat)
/**
 * @route put /lich-dat/update/{id}
 * @group lichDat 
 * @returns {object} 200 
 * @param {string} id.params.required
 * @param {LichDat.model} lich_dat.body.require
 * @returns {Error}  default - Unexpected error
 */
router.put('/update/:id',lichDatController.updateLichDat)


module.exports=router