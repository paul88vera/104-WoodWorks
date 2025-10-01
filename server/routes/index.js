const router = require("express").Router();
const Item = require("./item");
const User = require("./user");
const Cart = require("./cart");

router.use("/item", Item);
router.use("/user", User);
router.use("/cart", Cart);

module.exports = router;
