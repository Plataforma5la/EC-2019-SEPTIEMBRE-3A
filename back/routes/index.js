const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const categoryRouter = require("./categories");

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/categories", categoryRouter);

module.exports = router;
