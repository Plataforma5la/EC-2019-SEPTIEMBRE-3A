const router = require("express").Router();
const Review = require("../models/reviews");
const Product = require("../models/products");

router.post("/:id", function(req, res) {
  Review.findOne({
    where: { userId: req.user.id, productId: req.params.id }
  }).then(review => {
    if (review) res.sendStatus(403);
    else {
        Review.create({
            score: req.body.score,
            content: req.body.content,
            userId: req.user.id, //*
            productId: req.params.id //*
        })
        .then(review =>{

            Product.findOne(({ where: { id: req.params.id } }))
            .then(product =>{
            product.increment({ratingCount:1, ratingValue: req.body.score})
            })
            .then(product =>{
                res.send(review)
            }) 
     
        })
    }
  });
});

module.exports = router;
