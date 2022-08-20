const Sequelize = require("sequelize");
require("dotenv").config({ path: ".env" });

const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});

module.exports = db;
