const router = require("express").Router();
const Cart = require("../models/cart");
const Product = require("../models/products");
const Cart_product = require("../models/cart_product");

router.get("/", function(req, res) {
  if (req.user) {
    Cart.findOne({
      where: { buyerId: req.user.id, status: "open" },
      include: [Product]
    }).then(cart => {
      console.log(cart);
      res.send(cart);
    });
  } else {
    res.sendStatus(200);
  }
});

router.put("/", function(req, res) {
  Cart.findOrCreate({
    where: { buyerId: req.user.id, status: "open" },
    include: [Product]
  }).then(cart => {
    Cart_product.findOne({
      where: { cartId: cart[0].id, productId: req.body.product.id }
    }).then(instance => {
      if (instance) {
        instance.addCount();
        res.sendStatus(201);
      } else {
        cart[0].addProducts(req.body.product.id).then(respX => {
          res.send(respX);
        });
      }
    });
  });
});

router.post("/", function(req, res) {
  Cart.findOrCreate({
    where: { buyerId: req.user.id, status: "open" },
    include: [Product]
  }).then(cart => {
    if (cart[1]) {
      req.body.products.forEach(product => {
        Cart_product.findOne({
          where: { cartId: cart[0].id, productId: product.id }
        })
          .then(instance => {
            if (instance) {
              instance.addCount();
            } else {
              cart[0].addProducts(product.id);
            }
          })
          .then(() => res.send(true));
      });
    } else {
      Cart.findAll({
        where: { buyerId: req.user.id },
        include: [Product]
      }).then(cart => {
        res.send(cart);
      });
    }
  });
});

module.exports = router;
