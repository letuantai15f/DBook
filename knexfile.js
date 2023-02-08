require("dotenv").config();
module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  migrations: {
    directory: __dirname + "/knex/migrations",
  },
  seeds: {
    directory: __dirname + "/knex/seeds",
  },
};
