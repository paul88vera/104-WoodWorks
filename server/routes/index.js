const router = require("express").Router();
const Item = require("./item");
const User = require("./user");

router.use("/item", Item);
router.use("/users", User);

module.exports = router;
