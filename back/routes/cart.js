const router = require("express").Router();
const Cart = require("../models/cart");
const Product = require("../models/products");

router.get("/", function(req, res) {
  Cart.findAll({
    where: { buyerId: req.user.id },
    include: [Product]
  }).then(cart => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(cart);
  });
});

router.post("/", function(req, res) {
  Cart.findOrCreate({
    where: { buyerId: req.user.id, status: "open" },
    include: [Product]
  }).then(cart => {
    cart[0].addProducts(req.body.product.id).then(respX => {
      res.send(respX);
    });
  });
});

module.exports = router;
