
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const BenhNhan=Sequelizer.sequelize.define("benh_nhan",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ho_ten:{type:Sequelize.STRING},
    ngay_sinh: {type:Sequelize.DATE},
    gioi_tinh:{type:Sequelize.STRING},
    cccd:{type:Sequelize.STRING},
    dia_chi:{type:Sequelize.STRING},
    sdt:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    trang_thai: {type:Sequelize.INTEGER},
    tai_khoan_id:{type: Sequelize.INTEGER},
},{
    timestamps: true,
    underscored: true,
    tableName: 'benh_nhan'

});
module.exports = BenhNhan;
