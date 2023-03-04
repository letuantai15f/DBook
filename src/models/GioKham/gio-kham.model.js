    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const GioKham=Sequelizer.sequelize.define("gio_kham",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    bat_dau: {type:Sequelize.STRING},
    ket_thuc:{type:Sequelize.STRING},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'gio_kham'

});
module.exports = GioKham;
