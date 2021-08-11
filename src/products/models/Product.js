const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate(price) {
      if (price < 0) throw new Error("The price must be a positive decimal");
    },
  },
  description: String,
  available: {
    type: Boolean,
    default: true,
    required: true,
  },
  image: String,
});

const Product = model("Product", productSchema);

module.exports = Product;
