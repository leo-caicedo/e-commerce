const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
