const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const productListRouter = require("./productList");
const singleProductDataRouter = require("./singleProductData");
const categoryRouter = require("./categories");
const cartRouter = require("./cart");
const adminRouter = require("./admin");
const mailerRouter = require("./mailer");

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/products", productListRouter);
router.use("/singleProduct", singleProductDataRouter);
router.use("/categories", categoryRouter);
router.use("/cart", cartRouter);
router.use("/admin", adminRouter);
router.use("/mailer", mailerRouter);

module.exports = router;
