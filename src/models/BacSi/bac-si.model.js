
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");
const Khoa=require("../Khoa/Khoa.model")

/**
 * @typedef BacSi
 * @property {string} ho_ten.required
 * @property {string} ngay_sinh.required
 * @property {string} gioi_tinh.required
 * @property {string} cccd.required
 * @property {string} sdt.required
 * @property {string} hinh_anh
 * @property {string} khoa_id
 * @property {string} email.required
 * @property {string} mo_ta
 */
const BacSi=Sequelizer.sequelize.define("bac_si",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ho_ten:{type:Sequelize.STRING},
    ngay_sinh: {type:Sequelize.DATE},
    gioi_tinh:{type:Sequelize.STRING},
    cccd:{type:Sequelize.STRING},
    sdt:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    dia_chi:{type:Sequelize.STRING},
    khoa_id:{type: Sequelize.INTEGER},
    mo_ta:{type: Sequelize.TEXT},
    hinh:{type:Sequelize.TEXT},
    trang_thai: {type:Sequelize.STRING},
    tai_khoan_id:{type: Sequelize.INTEGER},
},{
    timestamps: true,
    underscored: true,
    tableName: 'bac_si'

});
BacSi.belongsTo(Khoa)
Khoa.hasMany(BacSi)
module.exports = BacSi;
