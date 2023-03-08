
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const Khoa=Sequelizer.sequelize.define("khoa",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ma_khoa:{type:Sequelize.STRING},
    ten_khoa:{type:Sequelize.STRING},
    mo_ta: {type:Sequelize.TEXT},
    trang_thai: {type:Sequelize.STRING},

},{
    timestamps: true,
    underscored: true,
    tableName: 'khoa'

});
module.exports = Khoa;
