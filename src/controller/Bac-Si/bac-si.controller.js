const bacSiService = require('../../services/bac-si/bac-si.service')
const _ = require("lodash");
const taiKhoanService = require('../../services/tai-khoan/tai-khoan.service');
const { Op, DATE } = require('sequelize');

const getBacSi = async (req, res, next) => {
    const where = {}
    const khoa_id = req.query.khoa_id
    const ho_ten = req.query.ho_ten
    const trang_thai = req.query.trang_thai
    const email = req.query.email
    const sdt = req.query.sdt
    const cccd = req.query.cccd
    try {
        if (khoa_id) {
            where.khoa_id = khoa_id
        }
        if (ho_ten) {
            where.ho_ten = { [Op.like]: `%${ho_ten}%` }
        }
        if (trang_thai) {
            where.trang_thai = { [Op.like]: `%${trang_thai}%` }
        } else {
            where.trang_thai = "Created"
        }
        if (email) {
            where.email = { [Op.like]: `%${email}%` }
        }
        if (sdt) {
            where.sdt = { [Op.like]: `%${sdt}%` }
        }
        if (cccd) {
            where.cccd = { [Op.like]: `%${cccd}%` }
        }
        const bacSi = await bacSiService.getBacSi(where)
        return res.status(200).json(bacSi)
    } catch (error) {
        console.log(error)
    }
}
const createBacSi = async (req, res, next) => {
    try {
        const file = req.files
        const name = Date.now()
        const checkBacSi = await bacSiService.findBacSi(req.body)
        const checkTaiKhoan = await taiKhoanService.getTaiKhoan(req.body)
        if (checkBacSi || checkTaiKhoan) {
            return res.status(404).json({ message: "Thông tin đã tồn tại" })
        } else {
            const bacSi = await bacSiService.createBacSi(req.body, file, name)
            return res.status(200).json(bacSi)
        }
    } catch (error) {
        console.log(error)
    }
}
const deleteBacSi = async (req, res, next) => {
    try {
        const id = req.query.id
        const bacSi = await bacSiService.deleteBacSi(id)
        if (bacSi) {
            return res.status(200).json({ message: "Deleted" })
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    } catch (error) {
        console.log(error)
    }
}
const updateBacSi = async (req, res, next) => {
    try {
        const id = _.get(req, "params.id")
        const bacSi = await bacSiService.updateBacSi(id, req.body)
        if (bacSi) {
            return res.status(200).json({ message: "Updated" })
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    } catch (error) {
        console.log(error)
    }
}
const getThongTin = async (req, res, next) => {
    try {
        const id = req.user.id
        const thongTin = await bacSiService.getThongTin(id)
        return res.status(200).json(thongTin)
    } catch (error) {
        console.log(error);
        next()
    }
}
const getLichBacSi = async (req, res, next) => {
    try {
        const id = req.user.id
        const where = {}
        const whereBN = {}
        const ho_ten = req.query.ho_ten
        const email = req.query.email
        const sdt = req.query.sdt
        const ngay_kham = req.query.ngay_kham
        const trang_thai = req.query.trang_thai
        if (ho_ten) {
            whereBN.ho_ten = { [Op.like]: `%${ho_ten}%` }
        }
        if (email) {
            whereBN.email = { [Op.like]: `%${email}%` }
        } if (sdt) {
            whereBN.sdt = { [Op.like]: `%${sdt}%` }
        } if (ngay_kham) {
            var newdate = ngay_kham.split("/").reverse().join("-");
            whereBN.ngay_kham = newdate
        } if (trang_thai) {
            where.trang_thai = trang_thai
        } else {
            where.trang_thai = "Accept"
        }
        if (id) {
            where.bac_si_id = id
        }
        const lich = await bacSiService.getLichBacSi(where, whereBN)
        return res.status(200).json(lich)
    } catch (error) {
        console.log(error);
        next()
    }
}
const getBacSiByKhoa = async (req, res, next) => {
    try {
        const bacSi = await bacSiService.getBacSiByKhoa(req.body)
        if (bacSi) {
            return res.status(200).json(bacSi)
        } else {
            return res.status(404).json({ message: "Erro" })
        }
    } catch (error) {
        console.log(error);
        next()
    }
}

module.exports = {
    getBacSi,
    createBacSi,
    deleteBacSi,
    updateBacSi, getThongTin, getLichBacSi, getBacSiByKhoa
}