const express = require('express');
const router = express.Router();
const auth=require('../middlewares/auth')

const TaiKhoan=require('../controller/Tai-Khoan')
const Khoa=require('../controller/Khoa')
const BenhNhan=require('../controller/Benh-Nhan')
const NhanVien=require('../controller/Nhan-Vien')
const BacSi=require('../controller/Bac-Si')
const LichDat=require('../controller/Lich-Dat')
const Verify=require('../controller/Verify')
const TrieuChung=require('../controller/Trieu-Chung-Tu-Van')
const Hinh=require('../controller/Hinh')
const Info=require('../controller/Info')
const Phong=require('../controller/Phong-Chat')
const Tin=require('../controller/Tin-Nhan')
const Gio=require('../controller/Gio')

router.use('/nhan-vien',auth,NhanVien)
router.use('/tai-khoan',TaiKhoan)
router.use('/khoa',auth,Khoa)
router.use('/benh-nhan',auth,BenhNhan)
router.use('/bac-si',auth,BacSi)
router.use('/lich-dat',auth,LichDat)
router.use('/verify',Verify)
router.use('/trieu-chung',TrieuChung)
router.use('/hinh',auth,Hinh)
router.use('/info',Info)
router.use('/chat',auth,Phong)
router.use('/tin-nhan',auth,Tin)
router.use('/gio',Gio)


module.exports=router