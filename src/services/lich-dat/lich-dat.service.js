const LichDat=require('../../models/LichDat/lich-dat.model')

const getLichDat=async(id)=>{
    try {
        return await LichDat.findAll({where:{benh_nhan_id:id}})
    } catch (error) {
        console.log(error);
    }
}
const createLichDat=async(data)=>{
    try {
        return await LichDat.create(data)
    } catch (error) {
        console.log(error)
    }
}
const deleteLichDat=async(id)=>{
    try {
        return await LichDat.update({trang_thai:"delete"},{where:{id}})
    } catch (error) {
        console.log();
    }
}
const updateLichDat=async(id,data)=>{
    try {
        return await LichDat.update(data,{where:{id}})
    } catch (error) {
        console.log();
    }
}

module.exports={createLichDat,deleteLichDat,updateLichDat,getLichDat}