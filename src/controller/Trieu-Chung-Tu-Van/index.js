const express = require('express');
const router = express.Router();
const trieuChungController= require('./trieu-chung.controller')
const TrieuChung=require('../../models/TrieuChungTuVan/trieu-chung-tu-van.model')
const multer=require('multer')
const upload=multer();

/**
 * @route get /trieu-chung/
 * @group trieuChung 
 * @param {string} trieuChung.query
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',trieuChungController.findTrieuChung)
/**
 * @route post /trieu-chung/create
 * @group trieuChung 
 * @param {TrieuChung.model} trieuChung.body
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',trieuChungController.createTrieuChung)
/**
 * @route post /trieu-chung/import
 * @group trieuChung 
 * @param{file} file.formData
 * @produces multipart/form-data
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.post('/import',upload.array(['file']),trieuChungController.importTrieuChung)


module.exports=router