    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const LichKham=Sequelizer.sequelize.define("lich_kham",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nhan_vien_id: {type:Sequelize.STRING},
    ngay_kham:{type:Sequelize.DATE},
    gio_kham_id:{type:Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'lich_kham'

});
module.exports = LichKham;
