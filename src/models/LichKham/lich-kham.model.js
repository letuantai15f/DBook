    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

/**
 * @typedef LichKham
 * @property {string} bac_si_id.required
 * @property {string} ngay_kham.required
 * @property {string} bat_dau.required
 * @property {string} ket_thuc.required
 * @property {string} trang_thai
 */
const LichKham=Sequelizer.sequelize.define("lich_kham",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    bac_si_id: {type:Sequelize.INTEGER},
    ngay_kham:{type:Sequelize.DATE},
    bat_dau: {type:Sequelize.TIME},
    ket_thuc:{type:Sequelize.TIME},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'lich_kham'

});
module.exports = LichKham;
