const { Op } = require('sequelize');
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model');
const Gio = require('../../models/Gio/gio.model');
const LichDat = require('../../models/LichDat/lich-dat.model');

const getLichDat = async (id) => {
    try {
        return await LichDat.findAll({ where: { benh_nhan_id: id }, include: [{ model: LichKham }] })
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
const getAllLichDat = async (where) => {
    return await LichDat.findAll({ where })
}
const getLichDatTrong = async (data) => {
    const lichDat = await LichDat.findAll({
        where: { [Op.and]: [{ ngay_kham: data.ngay_kham }, { bac_si_id: data.bac_si_id }] },
        attributes: ["gio_id"],
        raw: true,
        nest: true,
    })
    const arrLich = []
    const arrGio = []
    for (let i = 0; i < lichDat.length; i++) {
        arrLich.push(lichDat[i].gio_id)
    }
    const gio = await Gio.findAll({ raw: true, nest: true, })
    for (let i = 0; i < gio.length; i++) {
        arrGio.push(gio[i].id)
    }
    if (lichDat.length == 0) {
        return gio
    } else {
        const id=arrGio.filter(e=>!arrLich.includes(e))
        return await Gio.findAll({ where: { id: id } })
    }
}

module.exports = { getLichDatTrong, createLichDat, deleteLichDat, updateLichDat, getLichDat, findLichDatId, getAllLichDat }