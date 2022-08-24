const S = require("sequelize");
const db = require("../db");

class Sale extends S.Model {}

Sale.init(
  {
    order_number: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    sold_to: {
      type: S.STRING,
      defaultValue: "Sin agregar",
    },
    price: {
      type: S.FLOAT,
    },
    quantity: {
      type: S.INTEGER,
    },
    eft_total: {
      type: S.FLOAT,
    },
    mp_total: {
      type: S.FLOAT,
    },
    transf_total: {
      type: S.FLOAT,
    },
  },
  { sequelize: db, modelName: "sales" }
);

module.exports = Sale;
