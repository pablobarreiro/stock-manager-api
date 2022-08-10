const S = require("sequelize");
const db = require("../db");

class Sale extends S.Model {}

Sale.init(
  {
    order_number: {
        type: S.INTEGER,
        defaultValue:0
    },
    price: {
      type: S.FLOAT,
    },
    quantity: {
      type: S.INTEGER,
    },
  },
  { sequelize: db, modelName: "sales" }
);

module.exports = Sale;
