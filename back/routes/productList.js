const express = require("express");
const router = express.Router();
const Category = require("../models/categories");
const Product = require("../models/products.js");


router.get("/category/:id", function(req, res, next) {
  Category.findOne({
  where:{
      id: req.params.id
  },
  include: [Product]
})
  .then(productList => 
    // res.send(productList[productList.length-1].getCategories()));
    res.send(productList));

});

router.get("/", function(req, res, next) {
  Product.findAll().then(productList => res.send(productList));
});

module.exports = router;
