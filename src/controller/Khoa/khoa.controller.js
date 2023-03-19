const { Op } = require("sequelize");
const khoaService=require('../../services/khoa/khoa.service')
const _ = require("lodash");


const getKhoa=async(req,res,next)=>{
    try {
        const khoa=await khoaService.getKhoa();
        return res.status(200).json(khoa)
    } catch (error) {
        
    }
}
const getKhoaId=async(req,res,next)=>{
    try {
        const id=_.get(req,"params.id")
        const khoa= await khoaService.getKhoaId(id)
        return res.status(200).json(khoa)
    } catch (error) {
        console.log(error)
    }
}
const createKhoa=async(req,res,next)=>{
    try {
        const khoa=await khoaService.createKhoa(req.body)
        return res.status(200).json(khoa)
    } catch (error) {
        next(error)
    }
}
const updateKhoa=async(req,res,next)=>{
    try {
        const id=_.get(req,"params.id")
        const khoa=await khoaService.updateKhoa(id,req.body)
        if(khoa){
            return res.status(200).json({message:"Updated"})
        }else{
            return res.status(404).json({message:"Erro"})
        }
    } catch (error) {
        next(error)
    }
}
const deleteKhoa=async(req,res,next)=>{
    try {
        const id=req.query.id
        const khoa=await khoaService.deleteKhoa(id)
        if(khoa){
            return res.status(200).json({message:"Deleted"})
        }else{
            return res.status(404).json({message:"Erro"})
        }
    } catch (error) {
        next(error)
    }
}
module.exports={
    createKhoa,
    updateKhoa,
    deleteKhoa,
    getKhoa,
    getKhoaId,} 