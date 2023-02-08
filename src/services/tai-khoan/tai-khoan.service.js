const { Op } = require("sequelize");
const TaiKhoan=require('../../models/TaiKhoan/tai-khoang.model')
const createTaiKhoan=async(data)=>{
    try {
       return await TaiKhoan.create({
            tai_khoan:data.tai_khoan,
            mat_khau:data.mat_khau,
            quyen:data.quyen,
            trang_thai:data.trang_thai
        })
    } catch (error) {
        return error
    }
}

module.exports={createTaiKhoan}