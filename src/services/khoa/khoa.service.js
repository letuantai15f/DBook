const { Op } = require("sequelize");
const Khoa=require("../../models/Khoa/Khoa.model")
const hinhService=require('../hinh/hinh.service')

const getKhoa=async()=>{
    return await Khoa.findAll();
}
const getKhoaId=async(id)=>{
    return await Khoa.findOne({where:{id}})
}

const createKhoa=async(data,file,name)=>{
    try {
        const hinh=await hinhService.uploadHinh(file,name)
    if(hinh){
        data.hinh="https://storage.googleapis.com/dbook2/" + name + ".jpg"
        data.trang_thai="Created"
       const khoa=await Khoa.create(data) 
       return khoa
    }
    } catch (error) {
        console.log(error);
    }
    
    
    
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