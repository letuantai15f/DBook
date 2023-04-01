const LichDat = require('../../models/LichDat/lich-dat.model')

const getLichDat = async (id) => {
    try {
        console.log(id);
        return await LichDat.findAll({ where: { benh_nhan_id: id } })
    } catch (error) {
        console.log(error);
    }
}
const createLichDat = async (data) => {
    try {
        return await LichDat.create(data)
    } catch (error) {
        console.log(error)
    }
}
const deleteLichDat = async (id) => {
    try {
        return await LichDat.update({ trang_thai: "delete" }, { where: { id } })
    } catch (error) {
        console.log();
    }
}
const updateLichDat = async (id, data) => {
    try {
        return await LichDat.update(data, { where: { id } })
    } catch (error) {
        console.log();
    }
}
const findLichDatId = async (id) => {
    try {
        const lichDat = await LichDat.findOne({ where: { id } })
        if (lichDat) {
            return lichDat;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}
const getAllLichDat=async(where)=>{
    return await LichDat.findAll({where})
}

module.exports = { createLichDat, deleteLichDat, updateLichDat, getLichDat,findLichDatId,getAllLichDat }