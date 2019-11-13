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

router.put("/", function(req, res) {
  Product.findOne({ where: { id: req.body.productID } })
    .then(product => product.addCategories(req.body.categoryID))
    .then(()=>
      Product.findOne({
        where: { id: req.body.productID },
        include: [{ all: true }]
      })
    )
    .then(productData => {
      res.send(productData);
    })
    .catch(err => console.log(err));
});

module.exports = router;
