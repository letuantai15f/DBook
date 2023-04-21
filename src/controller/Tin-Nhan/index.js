const express = require('express');
const router = express.Router();
const tinController=require('./tin-nhan.controller');
const TinNhan = require('../../models/TinNhan/tin-nhan.model');

/**
 * @route get /tin-nhan/
 * @group tin-nhan 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',tinController.getTinNhanAll)

/**
 * @route post /tin-nhan/create
 * @group tin-nhan 
 * @returns {object} 200 
 * @param {TinNhan.model} tin_nhan.body
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',tinController.createTin)

module.exports=router