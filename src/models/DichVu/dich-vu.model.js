    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const DichVu=Sequelizer.sequelize.define("dich_vu",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    maDV: {type:Sequelize.STRING},
    ten:{type:Sequelize.STRING},
    gia:{type:Sequelize.DOUBLE},
    mo_ta: {type:Sequelize.TEXT},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'dich_vu'

});
module.exports = DichVu;
