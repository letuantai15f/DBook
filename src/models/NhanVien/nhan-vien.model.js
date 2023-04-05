
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

/**
 * @typedef NhanVien
 * @property {string} ho_ten.required
 * @property {string} ngay_sinh.required
 * @property {string} gioi_tinh.required
 * @property {string} cccd.required
 * @property {string} sdt.required
 * @property {string} email.required
 */
const NhanVien=Sequelizer.sequelize.define("nhan_vien",{
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
    hinh:{type:Sequelize.TEXT},
    trang_thai: {type:Sequelize.STRING},
    tai_khoan_id:{type: Sequelize.INTEGER},
},{
    timestamps: true,
    underscored: true,
    tableName: 'nhan_vien'

});
module.exports = NhanVien;
