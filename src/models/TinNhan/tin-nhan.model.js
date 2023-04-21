    
const  Sequelize  = require("sequelize");
const Sequelizer = require("../../core/database");
/**
 * @typedef TinNhan
 * @property {string} phong_id.required
 * @property {string} nguoi_gui.required
 * @property {text} noi_dung.required
 * @property {text} type.required
 */
const TinNhan=Sequelizer.sequelize.define("tin_nhan",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    phong_id: {type:Sequelize.INTEGER},
    nguoi_gui:{type:Sequelize.STRING},
    noi_dung:{type:Sequelize.TEXT},
    type:{type:Sequelize.STRING},
    trang_thai: {type:Sequelize.STRING},
},{
    timestamps: true,
    underscored: true,
    tableName: 'tin_nhan'

});
module.exports = TinNhan;
