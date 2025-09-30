const express = require("express");
const router = express.Router();

// @route    GET /user/profile
// @desc     Create user or update
// @access   Private
router.get("/user/profile", (req, res) => {
  let results = users;
  res.json(results);
});

// @route    GET /user/profile/user_id
// @desc     Get profile page
// @access   Private
router.get("/user/profile/:id", (req, res) => {
  let results = users;
  res.json(results);
});

module.exports = router;
