const router = require("express").Router();
const Favorite = require("../models/favs");
const passport = require("../config/passport");
const User = require("../models/index");

router.post("/", function(req, res) {
  User.findByPk(req.user.id).then(user => {
    user.addFavs(req.body.movie).then(data => res.send(data));
  });
});

router.get("/", function(req, res) {
  if (req.user) {
    Favorite.findAllFromUser(req.user.id).then(favs => res.send(favs));
  } else {
    res.send({});
  }
});

router.delete("/", function(req, res) {
  Favorite.findOne({ where: { imdbID: req.body.movie.imdbID } })
    .then(fav => fav.destroy())
    .then(() =>
      Favorite.findAllFromUser(req.user.id).then(favs => res.send(favs))
    );
});

module.exports = router;
