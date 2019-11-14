const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const configAuth = require("./fbAuth")
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({
      where: { username: username }
    })
      .then(user => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      })
      .catch(console.error);
  })
);



passport.use(new FacebookStrategy({
  clientID: configAuth.facebookAuth.clientID,
  clientSecret: configAuth.facebookAuth.clientSecret,
  callbackURL: configAuth.facebookAuth.callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ where: { facebook: { id: profile.id } } }).then(function (user, err) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, user);
      } else {
        //Create the user
        User.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          token: accessToken,
          fbID: profile.id
        });
        User.findOne({ where: { id: profile.id } }).then(function (user, err) {
          if (user) {
            return done(null, user);
          } else {
            return done(err);
          }
        });
      }
    }
    )
  }
)
)





passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then(user => done(null, user));
});

module.exports = passport;
