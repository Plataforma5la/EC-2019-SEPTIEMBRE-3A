const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Category = require("../models/categories");
const Product = require("../models/products.js");

router.get("/search/:text", function(req, res, next) {
  Product.findAll({
    include: [Category],
    where: {
      name: {
        [Sequelize.Op.iLike]: "%" + req.params.text + "%"
      }
    }
  }).then(productList => res.send(productList));
});

router.get("/category/:id", function(req, res, next) {
  Product.findAll({
    include: [{ where: { id: req.params.id }, model: Category }]
  }).then(productList => res.send(productList));
});

router.get("/", function(req, res, next) {
  Product.findAll({ include: [Category] }).then(productList =>
    res.send(productList)
  );
});

router.delete("/", function(req, res) {
  Product.findByPk(req.body.product.id)
    .then(product => product.destroy())
    .then(() =>
      Product.findAll({ include: [Category] }).then(products =>
        res.send(products)
      )
    );
});

module.exports = router;
