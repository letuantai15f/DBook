const express = require('express');
const NhanVien = require('../../models/NhanVien/nhan-vien.model');
const router = express.Router();
const nhanVienController=require('./nhan-vien.controller')

/**
 * @route get /nhan-vien/thong-tin
 * @group nhanVien 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/thong-tin',nhanVienController.getThongTin)
/**
 * @route get /nhan-vien/
 * @group nhanVien 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',nhanVienController.getNhanVien)
/**
 * @route post /nhan-vien/create
 * @group nhanVien 
 * @returns {object} 200 
 * @param {NhanVien.model} nhan_vien.body.required
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',nhanVienController.createNhanVien)
/**
 * @route delete /nhan-vien/delete
 * @group nhanVien 
 * @returns {object} 200 
 * @param {string} id.query.required
 * @returns {Error}  default - Unexpected error
 */
router.delete('/delete',nhanVienController.deleteNhanVien)
/**
 * @route put /nhan-vien/update/{id}
 * @group nhanVien 
 * @returns {object} 200 
 * @param {string} id.params.required
 * @param {NhanVien.model} nhan_vien.body.require
 * @returns {Error}  default - Unexpected error
 */
router.put('/update/:id',nhanVienController.updateNhanVien)


module.exports=router