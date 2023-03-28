const express = require('express');
const router = express.Router();
const trieuChungController= require('./trieu-chung.controller')

/**
 * @route get /trieu-chung/
 * @group trieuChung 
 * @param {string} trieuChung.query
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',trieuChungController.findTrieuChung)

module.exports=router