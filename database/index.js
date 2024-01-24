const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { shop } = require("./db.json");

const port = 3000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.get("/shop", (req, res) => {
  let results = shop;
  res.json(results);
});
// NOT CORRECT
app.get("/shop/:id", (req, res) => {
  let results = shop;
  res.json(results);
});

// NOT CORRECT
app.get("/shop/:id/edit", (req, res) => {
  let results = req.body.params;
  res.json(results, res);
});

app.get("/users", (req, res) => {
  let results = users;
  res.json(results);
});

app.listen(port, () => {
  console.log("Server is now live on port:", port);
});
