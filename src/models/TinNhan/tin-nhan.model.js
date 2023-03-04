    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const TinNhan=Sequelizer.sequelize.define("tin_nhan",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    phong_id: {type:Sequelize.INTEGER},
    nguoi_gui:{type:Sequelize.STRING},
    nguoi_nhan:{type:Sequelize.INTEGER},
    noi_dung:{type:Sequelize.TEXT},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'tin_nhan'

});
module.exports = TinNhan;
