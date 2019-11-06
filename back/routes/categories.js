const router = require("express").Router();
const Category = require("../models/categories");

router.get("/", function(req, res) {
  Category.findAll({})
  .then(categories =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(categories);
  })
});

module.exports = router;