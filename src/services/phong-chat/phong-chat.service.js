const { where } = require('sequelize')
const PhongChat=require('../../models/PhongChat/phong-chat.model')
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model')

const createPhong=async(data)=>{
    return await PhongChat.create(data)
}
const getPhong=async(id)=>{
    return await PhongChat.findOne({where:{benh_nhan_id:id}})
}
const sendYeuCau=async(id)=>{
    return await PhongChat.update({trang_thai:"Req"},{where:{benh_nhan_id:id}})
}
const cancelYeuCau=async(id)=>{
    return await PhongChat.update({trang_thai:"Created"},{where:{benh_nhan_id:id}})
}
const getPhongAll=async()=>{
    return await PhongChat.findAll({where:{trang_thai:"Req"},include:[{model:BenhNhan}]})
}
module.exports={createPhong,getPhong,sendYeuCau,cancelYeuCau,getPhongAll}