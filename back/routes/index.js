const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const productListRouter = require("./productList");

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/products", productListRouter);

module.exports = router;
