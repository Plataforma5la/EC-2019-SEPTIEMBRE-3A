const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");

router.use("/users", userRouter);
router.use("/me", meRouter);

module.exports = router;
