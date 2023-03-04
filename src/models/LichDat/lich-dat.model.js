    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const LichDat=Sequelizer.sequelize.define("lich_dat",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    benh_nhan_id:{type:Sequelize.STRING},
    nhan_vien_id: {type:Sequelize.STRING},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'lich_dat'

});
module.exports = LichDat;
