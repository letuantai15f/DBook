/* eslint-disable max-len */
const {Sequelize} = require("sequelize");

class Sequelizer {
  constructor() {
    this.init();
  }

  init() {
    if (
      !process.env.DB_CONNECTION ||
      !process.env.DB_USERNAME
    ) {
      throw new Error("Database env must not be empty!");
    }

    this.sequelize = new Sequelize(
      process.env.DB_DATABASE,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: "mysql",
        pool: {
          max: 30,
          min: 5,
          acquire: 60000,
          idle: 10000,
        },
        timezone: "+07:00",
        logging: false,
      }
    );

    this.sequelize
      .authenticate()
      .then(() => console.log("Connection databases successfully."))
      .catch((err) =>
          console.log("Unable to connect to the database:", err)
      );
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Sequelizer();
      return this.instance;
    }
    return this.instance;
  }
}

module.exports = Sequelizer.getInstance();
