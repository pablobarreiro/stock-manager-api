const express = require("express");
const userRouter = require("./user");
const productRouter = require("./products")
const salesRouter = require("./sales")
const router = express.Router();

router.use("/user", userRouter);
router.use('/products', productRouter);
router.use('/sales',salesRouter)


module.exports = router;