const { Op } = require("sequelize");
const Khoa=require("../../models/Khoa/Khoa.model")


const getKhoa=async()=>{
    return await Khoa.findAll();
}
const getKhoaId=async(id)=>{
    return await Khoa.findOne({where:{id}})
}

const createKhoa=async(data)=>{
    
    const khoa=await Khoa.create(data)
    return khoa
}
const deleteKhoa=async(id)=>{
        return await Khoa.update({trang_thai:"Closed"},{where:{id:id}})
}
const updateKhoa=async(id,data)=>{
     return await Khoa.update(data,{where:{id:id}})
}

module.exports={
    createKhoa,
    updateKhoa,
    deleteKhoa,
    getKhoa,
    getKhoaId,
}