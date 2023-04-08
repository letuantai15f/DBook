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

module.exports=router