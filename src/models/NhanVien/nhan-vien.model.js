
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

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
    chuc_vu:{type:Sequelize.STRING},
    sdt:{type:Sequelize.STRING},
    hinh_anh:{type:Sequelize.TEXT},
    trang_thai: {type:Sequelize.STRING},
    tai_khoan_id:{type: Sequelize.INTEGER},
},{
    timestamps: true,
    underscored: true,
    tableName: 'nhan_vien'

});
module.exports = NhanVien;
