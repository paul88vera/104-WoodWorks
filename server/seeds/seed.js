require("dotenv").config();
const mongoose = require("mongoose");

const Item = require("../models/Item");
const User = require("../models/User");
const Comment = require("../models/Comment");

async function seed() {
  try {
    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🌱 Connected to MongoDB");

    // Clear old data
    await Promise.all([
      Item.deleteMany({}),
      User.deleteMany({}),
      Comment.deleteMany({}),
    ]);
    console.log("🗑️ Cleared old data");

    // Create items
    const items = await Item.insertMany([
      { name: "Gaming Mouse", price: 59.99, description: "RGB wireless mouse" },
      {
        name: "Mechanical Keyboard",
        price: 89.99,
        description: "Blue switches",
      },
      { name: "4K Monitor", price: 299.99, description: "27-inch UHD display" },
    ]);
    console.log("✅ Seeded items");

    // Create user with cart
    const user = await User.create({
      name: "Alice",
      email: "alice@example.com",
      cart: [
        { item: items[0]._id, quantity: 2 },
        { item: items[1]._id, quantity: 1 },
      ],
    });
    console.log("✅ Seeded user with cart");

    // Add comments for items
    await Comment.insertMany([
      {
        item: items[0]._id,
        user: "Bob",
        rating: 5,
        text: "Amazing mouse, very responsive!",
      },
      {
        item: items[0]._id,
        user: "Charlie",
        rating: 4,
        text: "Good but battery drains fast.",
      },
      {
        item: items[1]._id,
        user: "Dana",
        rating: 5,
        text: "Best keyboard I’ve ever used!",
      },
      {
        item: items[2]._id,
        user: "Eve",
        rating: 3,
        text: "Sharp display but weak stand.",
      },
    ]);
    console.log("✅ Seeded comments");

    console.log("🌱 Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
}

seed();
