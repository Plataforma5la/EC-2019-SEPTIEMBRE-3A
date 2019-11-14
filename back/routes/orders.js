const router = require("express").Router();
const Cart = require("../models/cart");
const Product = require("../models/products");
const User = require("../models/user");
const checkAdmin = require("./authenticate");

router.get("/", checkAdmin, function(req, res) {
  Cart.findAll({ include: [{ model: User, as: "buyer" }] }).then(orders => {
    res.send(orders);
  });
});

router.put("/", function(req, res) {
  Cart.findAll({
    where: { status: req.body.status },
    include: [{ model: User, as: "buyer" }]
  }).then(orders => {
    res.send(orders);
  });
});

router.put("/confirm", function(req, res) {
  Cart.findByPk(req.body.id).then(cart => {
    cart
      .update({
        status: "closed"
      })
      .then(() => {
        Cart.findAll({ include: [{ model: User, as: "buyer" }] }).then(orders =>
          res.send(orders)
        );
      });
  });
});

router.put("/reject", function(req, res) {
  Cart.findByPk(req.body.id).then(cart => {
    cart
      .update({
        status: "cancelled"
      })
      .then(() => {
        Cart.findAll({ include: [{ model: User, as: "buyer" }] }).then(orders =>
          res.send(orders)
        );
      });
  });
});

router.get("/:id", function(req, res) {
  Cart.findOne({
    where: { id: req.params.id },
    include: [
      {
        all: true
      }
    ]
  }).then(cart => {
    res.send(cart);
  });
});

module.exports = router;
