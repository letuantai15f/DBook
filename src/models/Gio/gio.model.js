    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");


/**
 * @typedef Gio
 * @property {time} bat_dau.required
 */
const Gio=Sequelizer.sequelize.define("gio",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    bat_dau:{type:Sequelize.TIME},
    ket_thuc: {type:Sequelize.TIME},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'gio'

});
module.exports = Gio;
