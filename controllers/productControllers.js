const { Product } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const allProducts = await Product.findAll({
        order: [['name','ASC']]
      });
      res.send(allProducts);
    } catch (err) {
      console.log(err);
    }
  },
  add: async (req, res) => {
    try {
      const product = await Product.create(req.body)
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
    }
  },
  bulkAdd: async (req, res) => {
    try {
      const products = await Product.bulkCreate(req.body)
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
    }
  },
  edit: async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
      await product.update(req.body);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  },
  delete: async (req, res) => {
    try {
      await Product.destroy({where:{id:req.params.id}});
      res.sendStatus(204);
    } catch (err) {
      console.log(err);
    }
  },
  clearDB: async (req, res) => {
    try {
      await Product.destroy({where:{}});
      res.sendStatus(204);
    } catch (err) {
      console.log(err);
    }
  },
};
