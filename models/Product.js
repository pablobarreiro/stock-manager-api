const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    category: {
      type: S.STRING,
      allowNull: false,
    },
    stock: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    price: {
      type: S.FLOAT,
    },
  },
  { sequelize: db, modelName: "products" }
);

module.exports = Product;
