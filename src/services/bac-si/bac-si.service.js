const BacSi=require('../../models/BacSi/bac-si.model')
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model')
const Khoa = require('../../models/Khoa/Khoa.model')
const LichDat = require('../../models/LichDat/lich-dat.model')
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service')
const hinhService=require('../hinh/hinh.service')
const {Op}=require('sequelize')


const getBacSi=async(where)=>{
    return await BacSi.findAll({where,include:[{model:Khoa}]})
}
const createBacSi=async(data,file,name)=>{
    try {
        //email,sdt check them
        const hinh=await hinhService.uploadHinh(file,name)
        const checkBacSi=await BacSi.findOne({where:{cccd:data.cccd}})
        if(checkBacSi){
            return;
        }else if(hinh && !checkBacSi){
            data.tai_khoan=data.email;
            data.quyen = 2;
            data.mat_khau= "123456";
            data.trang_thai="Created"
            const taiKhoan = await taiKhoanService.createTaiKhoan(data)
            if (taiKhoan) {
                data.tai_khoan_id = taiKhoan.id
                data.hinh="https://storage.googleapis.com/dbook2/" + name + ".jpg"
                const bacSi =  await BacSi.create(data)
                return bacSi
            }
        
        }
    } catch (error) {
        console.log(error);
    }
}
const deleteBacSi=async(id)=>{
    return await BacSi.update({trang_thai:"Deleted"},{where:{id}})
}
const updateBacSi=async(id,data)=>{
    return await BacSi.update(data,{where:{id}})
}
const findBacSi=async()=>{
    try {
        return await BacSi.findOne({where:{
            [Op.or]:[{email:data.email},{cccd:data.cccd},{sdt:data.sdt}]
        }})
    } catch (error) {
        console.log(error);
    }
}
const getLichBacSi=async(id)=>{
    return await LichDat.findAll({where:{bac_si_id:id,trang_thai:"Accept"},include:[{model:BenhNhan}]})
}
const getThongTin=async(id)=>{
    return await BacSi.findOne({where:{id}})
}
module.exports={
    getBacSi,
    createBacSi,
    deleteBacSi,
    updateBacSi,findBacSi, getThongTin,getLichBacSi
}