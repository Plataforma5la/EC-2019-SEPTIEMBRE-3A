const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");
const Category = require ("../models/categories")

router.get("/:productid", function(req, res) {
  Product.findOne({where:{id:req.params.productid},include:[Category]}).then(productData =>{
    res.send(productData)
  });
});

module.exports = router;
