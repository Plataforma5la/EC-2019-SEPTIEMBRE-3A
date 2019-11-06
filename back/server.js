const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/db");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({ secret: "cualquierCosa", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

db.sync().then(() =>
<<<<<<< HEAD
  app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
=======
  app.listen(6969, function() {
    console.log("Example app listening on port 6969!");
>>>>>>> 4e43f7387ff5888caee62d2b0af06eea9cb1f3ae
  })
);
app.use("/api", require("./routes"));

app.use(function(req, res, next) {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next(null);
  }
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
