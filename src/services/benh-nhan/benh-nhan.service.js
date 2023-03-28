

const { Op } = require('sequelize');
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model')
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service');
const dataTuVan = require('../../../fpg')

const getBenhNhan = async () => {
    return await BenhNhan.findAll()
}
const createBenhNhan = async (data) => {
    data.tai_khoan = data.email;
    data.quyen = 4;
    data.mat_khau = "123456";
    data.trang_thai = "Created"
    try {
        const taiKhoan = await taiKhoanService.createTaiKhoan(data)
        if (taiKhoan) {
            data.tai_khoan_id = taiKhoan.id
            const benhNhan = await BenhNhan.create(data)
            return benhNhan
        }

    } catch (error) {
        console.log(error)

    }
}
const deleteBenhNhan = async (id) => {
    const benhNhan = await BenhNhan.findAll({
        where: { id }, raw: true,
        nest: true
    })
    benhNhan.map(async (e) => {
        await BenhNhan.update({ trang_thai: "deleted" }, { where: { id: e.id } })
        await TaiKhoan.update({ trang_thai: 0 }, { where: { id: e.tai_khoan_id } })
    })
    return
}
const updateBenhNhan = async (id, data) => {
    return await BenhNhan.update(data, { where: { id } })
}
const findBenhNhan = async (data) => {
    try {
        return await BenhNhan.findOne({
            where: {
                [Op.or]: [{ email: data.email }, { cccd: data.cccd }, { sdt: data.sdt }]
            }
        })
    } catch (error) {
        console.log(error);
    }
}
const tuVanCK = async (data) => {
    const trieuChung = dataTuVan.dataTuVan;
    const input = data.split(",");
    const output = []
    const khoa=[]
    for (let i = 0; i < trieuChung.length; i++) {
        const check = input.filter(e => trieuChung[i].includes(e))
        if (check.length == input.length) {
            output.push(trieuChung[i])
        }
    }
    for(let i=0;i<output.length;i++){
        if(output[i].includes('nội tiết')){
            khoa.push('nội tiết')
        }
        if(output[i].includes('mắt')){
            khoa.push('mắt')
        }
        if(output[i].includes('nội tiết')){
            khoa.push('nội tiết')
        }
        if(output[i].includes('da liễu')){
            khoa.push('da liễu')
        }
        if(output[i].includes('xương khớp')){
            khoa.push('xướng khớp')
        }
        if(output[i].includes('tim mạch')){
            khoa.push('tim mạch')
        }
    }
    const uniqueSet=new Set(khoa)
    const khoaOutput=[...uniqueSet]
    const out={}
    out.trieuChung=output
    out.khoa=khoaOutput
    return out
}


module.exports = {
    getBenhNhan,
    createBenhNhan,
    deleteBenhNhan,
    updateBenhNhan,
    findBenhNhan, tuVanCK
}