const express = require("express");
const router = express.Router();

// ROUTES
// @route    GET /shop
// @desc     Get all shop items
// @access   Public
router.get("/shop", (req, res) => {
  let results = shop;
  res.json(results);
});
// @route    GET /shop/item_id
// @desc     Get all shop item by ID
// @access   Public
router.get("/shop/:id", (req, res) => {
  let results = shop;
  res.json(results);
});

// @route    GET /shop/:item_id/edit
// @desc     Get shop item by ID and update or delete
// @access   Private
router.get("/shop/:id/edit", (req, res) => {
  let results = req.body.params;
  res.json(results, res);
});

module.exports = router;
