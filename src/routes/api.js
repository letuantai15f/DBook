const express = require('express');
const router = express.Router();
const auth=require('../middlewares/auth')

const TaiKhoan=require('../controller/Tai-Khoan')
const Khoa=require('../controller/Khoa')
const BenhNhan=require('../controller/Benh-Nhan')
const NhanVien=require('../controller/Nhan-Vien')
const BacSi=require('../controller/Bac-Si')
const LichDat=require('../controller/Lich-Dat')
const LichKham=require('../controller/Lich-Kham')
const Verify=require('../controller/Verify')
const TrieuChung=require('../controller/Trieu-Chung-Tu-Van')

router.use('/nhan-vien',NhanVien)
router.use('/tai-khoan',TaiKhoan)
router.use('/khoa',auth,Khoa)
router.use('/benh-nhan',BenhNhan)
router.use('/bac-si',BacSi)
router.use('/lich-dat',LichDat)
router.use('/lich-kham',LichKham)
router.use('/verify',Verify)
router.use('/trieu-chung',TrieuChung)


module.exports=router