const lichDatService = require('../../services/lich-dat/lich-dat.service')
const { Op } = require('sequelize')

const getAllLichDat = async (req, res, next) => {
    try {
        const id = req.user.id
        const quyen = req.user.quyen
        const where = {}
        const trangThai = req.query.trang_thai
        const ho_ten=req.query.ho_ten
        const email=req.query.email
        const sdt = req.query.sdt
        const ngay_dat=req.query.ngay_dat
        const whereBN={}
        if(ho_ten){
            whereBN.ho_ten={ [Op.like]: `%${ho_ten}%` };
        }
        if(email){
            whereBN.email={ [Op.like]: `%${email}%` };
        }
        if(sdt){
            whereBN.sdt={ [Op.like]: `%${sdt}%` };
        }
        if(ngay_dat){
            where.ngay_kham=ngay_dat
        }
        if (id && quyen == 3) {

            if (trangThai) {
                where.trang_thai = { [Op.like]: `%${trangThai}%` };
            }
            const lichDat = await lichDatService.getAllLichDat(where,whereBN)
            return res.status(200).json(lichDat)
        } else {
            return res.status(404).json({ message: "Xin lỗi bạn không có quyền xem trang này" })
        }
    } catch (error) {
        console.log(error);
        next();
    }
}
const getLichDat = async (req, res, next) => {
    try {
        const id = req.user.id
        const quyen = req.user.quyen
        if (id) {
            const lichDat = await lichDatService.getLichDat(id)
            return res.status(200).json(lichDat)
        } else {
            return res.status(404).json({ message: "Xin lỗi bạn không có quyền xem trang này" })
        }

    } catch (error) {
        console.log(error);
    }
}
const createLichDat = async (req, res, next) => {
    try {
        const lichDat = await lichDatService.createLichDat(req.body)
        return res.status(200).json(lichDat)
    } catch (error) {
        console.log(error);
    }
}
const deleteLichDat = async (req, res, next) => {
    try {
        const id = req.query.id
        const lichDat = await lichDatService.deleteLichDat(id)
        if (lichDat) {
            return res.status(200).json({ message: "Deleted" })
        } else {
            return res.status(304).json({ message: "Erro" })
        }
    } catch (error) {
        console.log(error);
    }
}
const updateLichDat = async (req, res, next) => {
    try {
        const id = req.params.id
        const lichDat = await lichDatService.updateLichDat(id, req.body)
        if (lichDat) {
            return res.status(200).json({ message: "Updated" })
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    } catch (error) {
        console.log(error);
    }
}
const getLichTrong = async (req, res, next) => {
    try {
        const lich = await lichDatService.getLichDatTrong(req.body)
        return res.status(200).json(lich)
    } catch (error) {
        console.log(error);
        next();
    }
}



module.exports = { getLichTrong, createLichDat, deleteLichDat, updateLichDat, getLichDat, getAllLichDat }