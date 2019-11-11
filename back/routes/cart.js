const router = require("express").Router();
const Cart = require("../models/cart");
const Product = require("../models/products");
const Cart_product = require("../models/cart_product");

router.get("/", function(req, res) {
  if (req.user) {
    Cart.findAll({
      where: { buyerId: req.user.id },
      include: [Product]
    }).then(cart => {
      res.status(200);
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
    cart[0].addProducts(req.body.product.id).then(respX => {
      res.send(respX);
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
        cart[0].addProducts(product.id).then(respX => {
          res.send(true);
        });
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

router.delete("/", function(req, res) {
  console.log("SOY EL BACK", req.body);
});



// router.delete("/", function(req, res) {
//   console.log("SOY EL BACK")
//   Cart.removeProducts({ cartId: req.body })
//   .then(res=>res.send("listo"))
// });

module.exports = router;
