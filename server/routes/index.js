const router = require("express").Router();
const Shop = require("./item");
const User = require("./user");
const Cart = require("./cart");

router.use("/shop", Shop);
router.use("/user", User);
router.use("/cart", Cart);

module.exports = router;
