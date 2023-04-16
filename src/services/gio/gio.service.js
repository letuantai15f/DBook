const Gio = require('../../models/Gio/gio.model')

const createGio = async (data) => {
    const gioKetThuc = Number(data.bat_dau.slice(0, 2)) + 1
    let phutKetThuc = Number(data.bat_dau.slice(3, 5))
    // if(phutKetThuc==0){
    //     phutKetThuc="00"
    // }
    if (gioKetThuc < 10) {
        data.ket_thuc = "0" + gioKetThuc + ":" + phutKetThuc + ":00"
    } else {
        data.ket_thuc = gioKetThuc + ":" + phutKetThuc + ":00"
    }
    data.trang_thai = "Created"
    return await Gio.create(data)
}
const getGioAll = async (where) => {
    const gio = await Gio.findAll({
        where, raw: true,
        nest: true,
    })
    await gio.sort(function (a, b) {
        return a.bat_dau.localeCompare(b.bat_dau)
    })
    return gio
}
const getGioBatDau = async (bat_dau) => {
    return await Gio.findAll({ where: { bat_dau: bat_dau, trang_thai: "Created" } })
}
const deleteGio = async (id) => {
    return await Gio.update({ trang_thai: "Deleted" }, { where: { id } })
}
const updateGio = async (id, data) => {
    return await Gio.update(data, { where: { id } })
}



module.exports = { createGio, getGioAll, getGioBatDau, deleteGio, updateGio }