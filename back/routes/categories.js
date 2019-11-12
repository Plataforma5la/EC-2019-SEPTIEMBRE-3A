const router = require("express").Router();
const Category = require("../models/categories");

router.get("/", function(req, res) {
  Category.findAll({}).then(categories => {
    res.status(200);
    res.json(categories);
  });
});

router.delete("/", function(req, res) {
  console.log(req.body);
  Category.findByPk(req.body.category.id)
    .then(category => category.destroy())
    .then(() => Category.findAll().then(categories => res.send(categories)));
});

module.exports = router;
