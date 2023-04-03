    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");
const BenhNhan=require("../BenhNhan/benh-nhan.model")
const LichKham=require("../LichKham/lich-kham.model")

/**
 * @typedef LichDat
 * @property {string} benh_nhan_id.required
 * @property {string} lich_kham_id.required
 * @property {string} trang_thai
 */
const LichDat=Sequelizer.sequelize.define("lich_dat",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    benh_nhan_id:{type:Sequelize.INTEGER},
    lich_kham_id:{type:Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'lich_dat'

});
LichDat.belongsTo(LichKham)
module.exports = LichDat;
