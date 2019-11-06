const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");

router.get("/", function(req, res, next) {
  Product.findAll().then(productList => res.send(productList));
});

module.exports = router;
