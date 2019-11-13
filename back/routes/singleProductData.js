const express = require("express");
const router = express.Router();
const Product = require("../models/products.js");


router.get("/:productid", function(req, res) {
  Product.findOne({where:{id:req.params.productid},
    include:[
      {
      all: true
      }
    ]
  }).then(productData =>{
    res.send(productData)
  });
});

 router.put("/", function(req, res) {
  console.log(req.params)
//   Category.findOne({where: {id:req.params.categoryname}})
//   .then(category=>res.send(category))
  //Product.findOne({where:{id:req.params.productid}})
  //.then(product => product.addCategories(category.id))
  //Product.find(req.params.id).then(user => {
 //   user.addFavs(req.body.movie).then(data => res.send(data));
 // });
});




module.exports = router;
