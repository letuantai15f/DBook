const express = require('express');
const router = express.Router();
const verifyEmail=require('./VerifyEmail')

router.get('/',verifyEmail.verifyEmail)
module.exports=router
