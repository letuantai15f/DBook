const Gio=require('../../models/Gio/gio.model')

const createGio=async(data)=>{
    const gioKetThuc= Number(data.bat_dau.slice(0, 2))+1
    if(gioKetThuc<10){
        data.ket_thuc="0"+gioKetThuc+":00:00"
    }else{
        data.ket_thuc=gioKetThuc+":00:00"
    }
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