const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const productListRouter = require("./productList");

const singleProductDataRouter = require("./singleProductData");

const categoryRouter = require("./categories");

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/products", productListRouter);

router.use("/singleProduct", singleProductDataRouter);

router.use("/categories", categoryRouter);

module.exports = router;
