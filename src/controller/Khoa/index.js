const express = require('express');
const router = express.Router();
const khoaController=require('./khoa.controller')

/**
 * @route get /khoa/
 * @group khoa 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',khoaController.getKhoa)
/**
 * @route get /khoa/{id}
 * @group khoa 
 * @param {string} id.params.required
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id',khoaController.getKhoaId)
/**
 * @route post /khoa/create
 * @group khoa 
 * @returns {object} 200 
 * @param {Khoa.model} khoa.body.required
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',khoaController.createKhoa)
/**
 * @route delete /khoa/delete
 * @group khoa 
 * @returns {object} 200 
 * @param {string} id.query.required
 * @returns {Error}  default - Unexpected error
 */
router.delete('/delete',khoaController.deleteKhoa)
/**
 * @route put /khoa/update/{id}
 * @group khoa 
 * @returns {object} 200 
 * @param {string} id.params.required
 * @param {Khoa.model} khoa.body.require
 * @returns {Error}  default - Unexpected error
 */
router.put('/update/:id',khoaController.updateKhoa)


module.exports=router