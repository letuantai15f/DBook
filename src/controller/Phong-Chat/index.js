const express = require('express');
const router = express.Router();
const phongController=require('./phong-chat.controller')

/**
 * @route get /phong-chat/
 * @group phong-chat 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',phongController.getPhong)
/**
 * @route get /phong-chat/all
 * @group phong-chat 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/all',phongController.getPhongAll)
/**
 * @route get /phong-chat/req
 * @group phong-chat 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/req',phongController.sendYeuCau)
/**
 * @route get /phong-chat/cancel
 * @group phong-chat 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/cancel',phongController.cancelYeuCau)

module.exports=router