const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");

router.get("/:productid", function(req, res) {
  Product.findOne({
    where: { id: req.params.productid },
    include: [
      {
        all: true
      }
    ]
  }).then(productData => {
    res.send(productData);
  });
});

module.exports = router;
