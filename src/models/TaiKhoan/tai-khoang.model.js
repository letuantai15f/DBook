// 'use strict';
// const {Model} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class TaiKhoan extends Model {
//         static associate(models) {
//         }
//     }
//     TaiKhoan.init({
//         taiKhoan: DataTypes.STRING,
//         matKhau: DataTypes.STRING,
//         quyen: DataTypes.INTEGER,
//         trangThai: DataTypes.INTEGER
//     }, {
//         sequelize,
//         modelName: 'TaiKhoan',
//     });
//     return TaiKhoan;
// };

const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const TaiKhoan=Sequelizer.sequelize.define("tai_khoan",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tai_khoan:{type:Sequelize.STRING},
    mat_khau: {type:Sequelize.STRING},
    quyen:{type:Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING}
},{
    timestamps: true,
    underscored: true,
    tableName: 'tai_khoan'

});
module.exports = TaiKhoan;
