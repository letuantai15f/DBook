const LichKham=require('../../models/LichKham/lich-kham.model')
const lichDat=require('../../models/LichDat/lich-dat.model')
const LichDat = require('../../models/LichDat/lich-dat.model')

const getLichKham=async(bacSiId)=>{
    return await LichKham.findAll({where:{bac_si_id:bacSiId}})
}
const createLichKham=async(data)=>{
    try {
        return await LichKham.bulkCreate(data)
    } catch (error) {
        console.log(error)
    }
}
const deleteLichKham=async(id)=>{
    try {
        await LichDat.update({trang_thai:"Cancel"},{where:{lich_kham_id:id}})
        return await LichKham.update({trang_thai:"Deleted"},{where:{id}})
    } catch (error) {
        console.log(error)
    }
}

module.exports={createLichKham,deleteLichKham,getLichKham}