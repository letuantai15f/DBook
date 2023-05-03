const { Op } = require('sequelize');
const BenhNhan = require('../../models/BenhNhan/benh-nhan.model');
const BacSi = require('../../models/BacSi/bac-si.model')
const Khoa = require('../../models/Khoa/Khoa.model')
const Gio = require('../../models/Gio/gio.model');
const LichDat = require('../../models/LichDat/lich-dat.model');

const getLichDat = async (where,whereBS) => {
    try {
        return await LichDat.findAll({ where, include: [{ model: BacSi,where:whereBS, include: { model: Khoa } }, { model: Gio }] })
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
const getAllLichDat = async (where, whereBN) => {
    return await LichDat.findAll({ where, include: [{ model: BenhNhan, where: whereBN }, { model: BacSi, include: { model: Khoa } }, { model: Gio }] })
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
    const gio = await Gio.findAll({ where:{trang_thai:"Created"},raw: true, nest: true, })
    for (let i = 0; i < gio.length; i++) {
        arrGio.push(gio[i].id)
    }
    if (lichDat.length == 0) {
        await gio.sort(function (a, b) {
            return a.bat_dau.localeCompare(b.bat_dau)
        })
        return gio
    } else {
        const id = arrGio.filter(e => !arrLich.includes(e))
        const gio2 = await Gio.findAll({
            where: { id: id }, raw: true,
            nest: true,
        })
        await gio2.sort(function (a, b) {
            return a.bat_dau.localeCompare(b.bat_dau)
        })
        return gio2;
    }
}

module.exports = { getLichDatTrong, createLichDat, deleteLichDat, updateLichDat, getLichDat, findLichDatId, getAllLichDat }