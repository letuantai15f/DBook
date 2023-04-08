const Gio=require('../../models/Gio/gio.model')

const createGio=async(data)=>{
    data.ket_thuc=data.bat_dau + 1
    data.trang_thai="Created"
    return await Gio.create(data)
}
const getGioAll=async(where)=>{
    return await Gio.findAll({where})
}
const getGioBatDau=async(bat_dau)=>{
    return await Gio.findAll({where:{bat_dau:bat_dau}})
}



module.exports={createGio,getGioAll,getGioBatDau}