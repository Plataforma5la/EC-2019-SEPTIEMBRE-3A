const router = require("express").Router();
const User = require("../models/index");
const passport = require("../config/passport");

router.get("/", function(req, res) {
  res.send(req.user);
});

module.exports = router;
