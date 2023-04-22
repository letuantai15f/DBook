    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");

/**
 * @typedef TrieuChung
 * @property {text} trieu_chung
 * @property {string} chuyen_khoa.required
 */
const TCTV=Sequelizer.sequelize.define("trieu_chung_tu_van",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    trieu_chung: {type:Sequelize.TEXT},
    chuyen_khoa:{type:Sequelize.STRING},
    tc_ck:{type:Sequelize.TEXT}
},{
    timestamps: true,
    underscored: true,
    tableName: 'trieu_chung_tu_van'

});
module.exports = TCTV;
