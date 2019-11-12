const router = require("express").Router();
const User = require("../models/user");
const passport = require("../config/passport");

router.post("/register", function(req, res) {
  User.create(req.body).then(user =>
    req.login(user, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.send(user);
      }
    })
  );
});

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});


router.get("/", function(req, res) {
  User.findAll({}).then(users => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  });
});

router.put("/:id", function(req, res) {
  User.findByPk(req.params.id)
  .then(user => {
    user.update({
      isAdmin: true
    })
    .then((user)=>{
      User.findAll({})
      .then(users=>res.send(users))
    })
  });
});


module.exports = router;