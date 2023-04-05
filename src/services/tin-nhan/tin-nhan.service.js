
const TinNhan = require('../../models/TinNhan/tin-nhan.model')

const createTin=async(data)=>{
    data.trang_thai="Created"
    return await TinNhan.create(data)
}
const getTinNhanAll=async(id)=>{
    return await TinNhan.findAll({where:{phong_id:id}})
}

module.exports = {createTin,getTinNhanAll}