const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const favsRouter = require("./favs");

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/favs", favsRouter);

module.exports = router;
