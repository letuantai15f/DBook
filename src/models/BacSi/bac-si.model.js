
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

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
    hinh_anh:{type:Sequelize.TEXT},
    khoa_id:{type: Sequelize.INTEGER},
    mo_ta:{type: Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING},
    tai_khoan_id:{type: Sequelize.INTEGER},
},{
    timestamps: true,
    underscored: true,
    tableName: 'bac_si'

});
module.exports = BacSi;
