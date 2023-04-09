const gioService = require('../../services/gio/gio.service')

const createGio = async (req, res, next) => {
    try {
        const target = new Date("1970-01-01T" + req.body.bat_dau);
        const check = await gioService.getGioBatDau(req.body.bat_dau)
        if (check.length > 0) {
            return res.status(404).json({ message: "Giờ đã tồn tại" })
        } else {
            const gio = await gioService.createGio(req.body)
            if (gio) {
                return res.status(200).json(gio)
            } else {
                return res.status(200).json({ message: "Erro" })
            }
        }
    } catch (error) {
        console.log(error);
        next()
    }
}



module.exports = {createGio}