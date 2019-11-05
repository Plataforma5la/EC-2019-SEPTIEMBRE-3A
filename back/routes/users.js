const router = require("express").Router();
const User = require("../models/index");
const passport = require("../config/passport");

router.post("/register", function(req, res) {
  User.create(req.body).catch(err => console.log(err));
});

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
