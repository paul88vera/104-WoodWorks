const express = require("express");
const User = require("../models/User");
const Item = require("../models/Item");

const router = express.Router();

// Add item to cart
router.post("/:userId/cart", async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const user = await User.findById(req.params.userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    // check if item already in cart
    const existing = user.cart.find((c) => c.item.toString() === itemId);

    if (existing) {
      existing.quantity += quantity || 1;
    } else {
      user.cart.push({ item: itemId, quantity: quantity || 1 });
    }

    await user.save();
    res.json(user.cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get user cart with full item details
router.get("/:userId/cart", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("cart.item");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
