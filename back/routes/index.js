const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const productListRouter = require("./productList");
<<<<<<< HEAD

const singleProductDataRouter = require("./singleProductData");

=======
const singleProductDataRouter = require("./singleProductData");
>>>>>>> 4e43f7387ff5888caee62d2b0af06eea9cb1f3ae
const categoryRouter = require("./categories");

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/products", productListRouter);
<<<<<<< HEAD

router.use("/singleProduct", singleProductDataRouter);

=======
router.use("/singleProduct", singleProductDataRouter);
>>>>>>> 4e43f7387ff5888caee62d2b0af06eea9cb1f3ae
router.use("/categories", categoryRouter);

module.exports = router;
