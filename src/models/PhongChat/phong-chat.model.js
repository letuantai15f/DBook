    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");
const BenhNhan=require('../BenhNhan/benh-nhan.model')
const PhongChat=Sequelizer.sequelize.define("phong_chat",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    benh_nhan_id:{type:Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'phong_chat'

});
PhongChat.belongsTo(BenhNhan)
module.exports = PhongChat;
