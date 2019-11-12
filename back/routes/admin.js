const router = require("express").Router();
const Product = require("../models/products");
const Category = require("../models/categories");

router.post("/newProduct", function(req, res) {
  Product.create(req.body).then(() => {
    Product.findAll({ include: [Category] }).then(products =>
      res.send(products)
    );
  });
});

router.post("/newCategory", function(req, res) {
  console.log(req.body);
  Category.create(req.body).then(() => {
    Category.findAll().then(categories => res.send(categories));
  });
});

module.exports = router;
