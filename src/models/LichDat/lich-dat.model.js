    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

/**
 * @typedef LichDat
 * @property {string} benh_nhan_id.required
 * @property {string} bac_si_id.required
 * @property {string} ngay_kham_id.required
 * @property {string} trang_thai
 */
const LichDat=Sequelizer.sequelize.define("lich_dat",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    benh_nhan_id:{type:Sequelize.STRING},
    bac_si_id: {type:Sequelize.STRING},
    ngay_kham_id:{type:Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'lich_dat'

});
module.exports = LichDat;
