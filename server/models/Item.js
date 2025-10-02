const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sale: { type: Number, required: true },
    height: { type: Number },
    width: { type: Number },
    length: { type: Number },
    img: { type: String },
    description: { type: String },
    fav: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
