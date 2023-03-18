const LichKham=require('../../models/LichKham/lich-kham.model')

const getLichKham=async(bacSiId)=>{
    return await LichKham.findAll({where:{bac_si_id:bacSiId}})
}
const createLichKham=async(data)=>{
    try {
        return await LichKham.create(data)
    } catch (error) {
        console.log(error)
    }
}
const deleteLichKham=async(id)=>{
    try {
        return await LichKham.update({trang_thai:"Deleted"},{where:{id}})
    } catch (error) {
        console.log(error)
    }
}

module.exports={createLichKham,deleteLichKham,getLichKham}