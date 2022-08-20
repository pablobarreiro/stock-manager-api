const Sequelize = require('sequelize');
require('dotenv').config({path:'.env'});

const db = new Sequelize(process.env.DATABASE_URL,{
  dialectOptions: {}
})

module.exports = db
