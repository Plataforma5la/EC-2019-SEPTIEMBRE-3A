const router = require("express").Router();
const userRouter = require("./users");
const meRouter = require("./me");
const productListRouter = require("./productList");
const singleProductDataRouter = require("./singleProductData");
const categoryRouter = require("./categories");
const cartRouter = require("./cart");
<<<<<<< HEAD
const adminRouter = require("./admin");
=======
const mailerRouter = require("./mailer");
>>>>>>> 83e93dc5045d60048d37dbc073b0c05ef7ea0efe

router.use("/users", userRouter);
router.use("/me", meRouter);
router.use("/products", productListRouter);
router.use("/singleProduct", singleProductDataRouter);
router.use("/categories", categoryRouter);
router.use("/cart", cartRouter);
<<<<<<< HEAD
router.use("/admin", adminRouter);
=======
router.use("/mailer", mailerRouter);
>>>>>>> 83e93dc5045d60048d37dbc073b0c05ef7ea0efe

module.exports = router;
