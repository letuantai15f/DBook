

const { Op } = require('sequelize');
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model')
const TaiKhoan = require('../../models/TaiKhoan/tai-khoang.model')
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service');
const trieuChungService=require('../../services/trieu-chung-tu-van/trieu-chung.service')
// const dataTuVan = require('../../../fpg')

const getBenhNhan = async () => {
    return await BenhNhan.findAll()
}
const createBenhNhan = async (data) => {
    data.tai_khoan = data.email;
    data.quyen = 4;
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
    let trieuChung = global.trieuChung
    let input = data.split(",");
    let output = []
    let khoa = []
    let trieuChungTuVan = []
    for (let i = 0; i < trieuChung.length; i++) {
        const check = input.filter(e => trieuChung[i].includes(e))
        if (check.length == input.length) {
            output.push(trieuChung[i])
        }
    }

    for (let i = 0; i < output.length; i++) {

        if (output[i].includes('nội tiết')) {
            const index = output[i].indexOf('nội tiết');
            if (index > -1) {
                const trieuChung = output[i].filter((data, i) => i !== index)
                trieuChungTuVan.push(trieuChung)
            }
            khoa.push('nội tiết')
        }
        if (output[i].includes('mắt')) {
            const index = output[i].indexOf('mắt');
            if (index > -1) {
                const trieuChung = output[i].filter((data, i) => i !== index)
                trieuChungTuVan.push(trieuChung)
            }
            khoa.push('mắt')
        }
        if (output[i].includes('hô hấp')) {
            let index = output[i].indexOf('hô hấp');
            if (index > -1) {
                const trieuChung = output[i].filter((data, i) => i !== index)
                trieuChungTuVan.push(trieuChung)
            }
            khoa.push('hô hấp')
        }
        if (output[i].includes('da liễu')) {
            const index = output[i].indexOf('da liễu');
            if (index > -1) {
                const trieuChung = output[i].filter((data, i) => i !== index)
                trieuChungTuVan.push(trieuChung)
            }
            khoa.push('da liễu')
        }
        if (output[i].includes('xương khớp')) {
            const index = output[i].indexOf('xương khớp');
            if (index > -1) {
                const trieuChung = output[i].filter((data, i) => i !== index)
                trieuChungTuVan.push(trieuChung)
            }
            khoa.push('xướng khớp')
        }
        if (output[i].includes('tim mạch')) {
            const index = output[i].indexOf('tim mạch');
            if (index > -1) {
                const trieuChung = output[i].filter((data, i) => i !== index)
                trieuChungTuVan.push(trieuChung)
            }
            khoa.push('tim mạch')
        }


    }

    trieuChungTuVan.map(e=>{
        let k=0;
        for(let i=0;i<trieuChungTuVan.length;i++){
            const check=e.filter(el=>trieuChungTuVan[i].includes(el))
            if(check.length==trieuChungTuVan[i].length && k==1 ){
                trieuChungTuVan.splice(i, 1);
            }else if(check.length==trieuChungTuVan[i].length && k==0 && check.length==e.length){
                k=1;
            }
        }
    })

    let uniqueSet = new Set(khoa)
    let khoaOutput = [...uniqueSet]
    let out = {}
    out.trieuChung = trieuChungTuVan
    out.khoa = khoaOutput

    return out
}
const uploadIMG=async(data)=>{
    
}


module.exports = {
    getBenhNhan,
    createBenhNhan,
    deleteBenhNhan,
    updateBenhNhan,
    findBenhNhan, tuVanCK
}