const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Category = model("Category", categorySchema);

module.exports = Category;
