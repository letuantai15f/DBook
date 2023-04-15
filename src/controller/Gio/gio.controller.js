const gioService = require('../../services/gio/gio.service')
const _ = require("lodash");
const createGio = async (req, res, next) => {
    try {
        const check = await gioService.getGioBatDau(req.body.bat_dau)
        if (check.length > 0) {
            return res.status(404).json({ message: "Giờ đã tồn tại" })
        } else {
            const gio = await gioService.createGio(req.body)
            if (gio) {
                return res.status(200).json(gio)
            } else {
                return res.status(404).json({ message: "Erro" })
            }
        }
    } catch (error) {
        console.log(error);
        next()
        return res.json(error)
    }
}
const getGioAll=async(req,res,next)=>{
    try {
        const where={}
        where.trang_thai="Created"
        const gio= await gioService.getGioAll(where)
        return res.status(200).json(gio)
    } catch (error) {
        console.log(error);
        next()
    }
}
const deleteGio=async(req,res,next)=>{
    try {
        const id=req.query.id
        const gio=await gioService.deleteGio(id)
        return res.status(200).json({message:"Deleted"})
    } catch (error) {
        console.log(error);
        next()
    }
}
const updateGio=async(req,res,next)=>{
    try {
        const id=_.get(req,"params.id")
        const gio=await gioService.updateGio(id,req.body)
        return res.status(200).json({message:"Updated"})
    } catch (error) {
        console.log(error);
        next()
    }
}



module.exports = {createGio,getGioAll,deleteGio,updateGio}