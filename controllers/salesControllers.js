const { Product, Sale } = require("../models");

module.exports = {
  confirm: async (req, res) => {
    try {
      const payment = {
        eft_total: req.body[0],
        mp_total: req.body[1],
        transf_total: req.body[2],
        sold_to: req.body[3],
      };
      const saleProducts = req.body.slice(4);
      const productArray = saleProducts.map((prod) => {
        return {
          name: prod.name,
          category: prod.category,
          quantity: prod.quantity,
          price: prod.price,
          stock: prod.stock,
          productId: prod.id,
          ...payment,
        };
      });
      const createdSales = await Sale.bulkCreate(productArray);
      createdSales.forEach((sale, i) => sale.setProduct(req.body[i].id));
      const maxOrderNumber = await Sale.max("order_number");
      await Sale.update(
        { order_number: maxOrderNumber + 1 },
        { where: { order_number: 0 }, returning: false }
      );
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const allSales = await Sale.findAll({
        order: [["order_number", "DESC"]],
      });
      res.send(allSales);
    } catch (err) {
      console.log(err);
    }
  },
  getOne: async (req, res) => {
    try {
      const allSales = await Sale.findAll({
        where: { order_number: req.params.orderNumber },
        order: [["productId", "ASC"]],
        include: [{ model: Product, attributes: ["name", "category"] }],
      });
      res.send(allSales);
    } catch (err) {
      console.log(err);
    }
  },
};
