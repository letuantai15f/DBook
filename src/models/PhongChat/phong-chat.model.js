    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const PhongChat=Sequelizer.sequelize.define("phong_chat",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    benh_nhan_id:{type:Sequelize.STRING},
    nhan_vien_id:{type:Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'phong_chat'

});
module.exports = PhongChat;
