const { Schema, model } = require("mongoose");

const brandSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Brand = model("Brand", brandSchema);

module.exports = Brand;
