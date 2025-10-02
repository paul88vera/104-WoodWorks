const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    text: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
