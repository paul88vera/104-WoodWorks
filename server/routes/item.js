const express = require("express");
const Item = require("../models/Item");
const Comment = require("../models/Comment");

const router = express.Router();

// Create new item
router.post("/", async (req, res) => {
  try {
    const { name, price, sale, img, description } = req.body;
    const item = new Item({ name, price, sale, img, description });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single item + its comments
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });

    const comments = await Comment.find({ item: item._id });
    res.json({ ...item.toObject(), comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add comment to item
router.post("/:id/comments", async (req, res) => {
  try {
    const { user, rating, text } = req.body;
    const item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ error: "Item not found" });

    const comment = new Comment({
      item: item._id,
      user,
      rating,
      text,
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
