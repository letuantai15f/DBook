    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");
const BenhNhan=require("../BenhNhan/benh-nhan.model");
const BacSi = require("../BacSi/bac-si.model");
const Gio = require("../Gio/gio.model");


/**
 * @typedef LichDat
 * @property {string} benh_nhan_id.required
 * @property {string} bac_si_id.required
 * @property {string} ngay_kham.required
 * @property {string} bat_dau.required
 * @property {string} ket_thuc.required
 * @property {text} mo_ta.required
 * @property {string} trang_thai
 */
const LichDat=Sequelizer.sequelize.define("lich_dat",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    benh_nhan_id:{type:Sequelize.INTEGER},
    bac_si_id: {type:Sequelize.INTEGER},
    ngay_kham:{type:Sequelize.DATE},
    gio_id:{type:Sequelize.INTEGER},
    mo_ta:{type:Sequelize.TEXT},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'lich_dat'

});
LichDat.belongsTo(BacSi)
LichDat.belongsTo(Gio)
module.exports = LichDat;
