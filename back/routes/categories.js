const router = require("express").Router();
const Category = require("../models/categories");

router.get("/", function(req, res) {
  Category.findAll({}).then(categories => {
    res.status(200);
    res.json(categories);
  });
});

module.exports = router;
