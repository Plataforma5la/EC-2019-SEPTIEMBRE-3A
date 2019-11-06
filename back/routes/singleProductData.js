const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");

router.get("/:productid", function(req, res) {
  Product.findByPk(req.params.productid).then(productData =>
    res.send(productData)
  );
});

module.exports = router;
