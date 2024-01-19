const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: String,
    rating: String,
    stock: String,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String, String, String, String, String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", schema);
