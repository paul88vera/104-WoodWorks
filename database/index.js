const express = require("express");
const app = express();
const cors = require("cors");
const { shop } = require("./db.json");

const port = 5500;

// middleware
app.use(express.json());
app.use(cors());

// ROUTES
// @route    GET /shop
// @desc     Get all shop items
// @access   Public
app.get("/shop", (req, res) => {
  let results = shop;
  res.json(results);
});
// @route    GET /shop/item_id
// @desc     Get all shop item by ID
// @access   Public
app.get("/shop/:id", (req, res) => {
  let results = shop;
  res.json(results);
});

// @route    GET /shop/:item_id/edit
// @desc     Get shop item by ID and update or delete
// @access   Private
app.get("/shop/:id/edit", (req, res) => {
  let results = req.body.params;
  res.json(results, res);
});

// @route    GET /user/profile
// @desc     Create user or update
// @access   Private
app.get("/user/profile", (req, res) => {
  let results = users;
  res.json(results);
});

// @route    GET /user/profile/user_id
// @desc     Get profile page
// @access   Private
app.get("/user/profile/:id", (req, res) => {
  let results = users;
  res.json(results);
});

// Listening to port
app.listen(port, "0.0.0.0", () => {
  console.log("Server is now live on port:", port);
});
