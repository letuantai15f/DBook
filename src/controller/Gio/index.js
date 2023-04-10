const express = require('express');
const router = express.Router();
const gioController=require('./gio.controller');
const Gio = require('../../models/Gio/gio.model');


/**
 * @route post /gio/create
 * @group gio 
 * @returns {object} 200 
 * @param {Gio.model} gio.body.required
 * @returns {Error}  default - Unexpected error
 */
router.post('/create',gioController.createGio)
/**
 * @route get /gio/
 * @group gio 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected error
 */
router.get('/',gioController.getGioAll)
/**
 * @route delete /gio/delete
 * @group gio 
 * @returns {object} 200 
 * @param {integer} id.query
 * @returns {Error}  default - Unexpected error
 */
router.delete('/delete',gioController.getGioAll)
/**
 * @route put /gio/update/{id}
 * @group gio 
 * @returns {object} 200 
 * @param {integer} id.params
 * @param {Gio.models} gio.body
 * @returns {Error}  default - Unexpected error
 */
router.put('/update/:id',gioController.getGioAll)

module.exports=router