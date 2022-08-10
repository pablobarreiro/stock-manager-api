const User = require('./User')
const Product = require('./Product')
const Sale = require('./Sale')

Sale.belongsTo(Product)
Product.hasMany(Sale)

module.exports = { User, Product, Sale }