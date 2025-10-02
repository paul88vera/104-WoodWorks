const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
    quantity: { type: Number, default: 1 },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    role: { type: String },
    cart: [cartItemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
