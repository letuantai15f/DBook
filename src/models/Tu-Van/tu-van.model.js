    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

const TCTV=Sequelizer.sequelize.define("trieu_chung_tu_van",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    trieu_chung: {type:Sequelize.TEXT},
},{
    timestamps: true,
    underscored: true,
    tableName: 'trieu_chung_tu_van'

});
module.exports = TCTV;
