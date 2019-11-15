checkAdmin = function(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next();
  } else {
    err = new Error("No podés pasar acá chanchuni");
    next(err);
  }
};

module.exports = checkAdmin;
