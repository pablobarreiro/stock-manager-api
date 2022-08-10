const Sequelize = require('sequelize');
require('dotenv').config({path:'.env'});

const db = new Sequelize('stockman', null, null, {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = db