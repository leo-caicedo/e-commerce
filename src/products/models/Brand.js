const { Schema, model } = require(".mongoose");

const brandSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Brand = model("Brand", brandSchema);

module.exports = Brand;
