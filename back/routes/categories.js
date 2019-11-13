const router = require("express").Router();
const Category = require("../models/categories");

router.get("/", function(req, res) {
  Category.findAll({}).then(categories => {
    res.status(200);
    res.json(categories);
  });
});

router.delete("/", function(req, res) {
  Category.findByPk(req.body.category.id)
    .then(category => category.destroy())
    .then(() => Category.findAll().then(categories => res.send(categories)));
});

router.put("/", (req, res) => {
  Category.findByPk(req.body.id)
    .then(cat => cat.update({ name: req.body.categoryName }))
    .then(categoriaUpdateada => {
      Category.findAll().then(categories => res.send(categories));
    });
});

module.exports = router;
