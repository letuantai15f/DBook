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

const { verify } = require("jsonwebtoken");
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

/**
 * @typedef TaiKhoan
 * @property {string} tai_khoan.required
 * @property {string} mat_khau.required
 * @property {string} quyen.required
 * @property {string} trang_thai
 */

const TaiKhoan=Sequelizer.sequelize.define("tai_khoan",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    tai_khoan:{type:Sequelize.STRING},
    mat_khau: {type:Sequelize.STRING},
    quyen:{type:Sequelize.INTEGER},
    trang_thai: {type:Sequelize.STRING},
    verify:{type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'tai_khoan'

});
module.exports = TaiKhoan;
