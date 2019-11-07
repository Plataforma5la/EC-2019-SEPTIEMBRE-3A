const express = require("express");
const router = express.Router();
const Category = require("../models/categories");
const Product = require("../models/products.js");

router.get("/category/:id", function(req, res, next) {
  Product.findAll({
    include: [{ where: { id: req.params.id }, model: Category }]
  }).then(productList => res.send(productList));
  // Category.findOne({
  //   where: {
  //     id: req.params.id
  //   },
  //   include: [Product]
  // }).then(productList => res.send(productList));
});

router.get("/", function(req, res, next) {
  Product.findAll({ include: [Category] }).then(productList =>
    res.send(productList)
  );
});

module.exports = router;
