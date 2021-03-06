const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    product: {
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
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: String,
    available: {
      type: Boolean,
      default: true,
    },
    image: String,
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
