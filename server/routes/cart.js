const router = require("express").Router();

// const db = (enter your db connection here)

router.get("cart/:id", (req, res) => {
  try {
    const db = "yup db";
  } catch (error) {
    console.error(error, "Cart empty");
  }
});

module.exports = router;
