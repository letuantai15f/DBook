const hinhController=require('./hinh.controller')
const express = require('express');
const router = express.Router();
const multer = require("multer");
const upload = multer();
// let upload = multer({
//   storage: multer.memoryStorage(),
// });
// let storage=Multer.diskStorage({
//     destination:function(req,file,callback){
//         callback(null,'.uploads')
//     },
//     filename:function(req,file,callback){
//         console.log(file);
//         callback(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
//     }
// })
// const upload=Multer({storage:storage})

/**
 * @route post /hinh/upload
 * @group hinh 
 * @returns {object} 200
 * @param{file} file.formData
 * @produces multipart/form-data
 * @returns {Error}  default - Unexpected error
 */
router.post('/upload',upload.single('file'),hinhController.uploadHinh)
/**
 * @route get /hinh/
 * @group hinh 
 * @returns {object} 200
 * @produces multipart/form-data
 * @returns {Error}  default - Unexpected error
 */
router.get('/',hinhController.getListFiles)
module.exports=router