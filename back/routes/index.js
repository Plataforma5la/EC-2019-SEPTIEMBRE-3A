const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const productListRouter = require("./productList");
<<<<<<< HEAD
const singleProductDataRouter = require("./singleProductData");
=======
const categoryRouter = require("./categories");
>>>>>>> c8fcff8ff5d7efc7b192f3776b0446aadbde8354

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/products", productListRouter);
<<<<<<< HEAD
router.use("/singleProduct", singleProductDataRouter);
=======
router.use("/categories", categoryRouter);
>>>>>>> c8fcff8ff5d7efc7b192f3776b0446aadbde8354

module.exports = router;