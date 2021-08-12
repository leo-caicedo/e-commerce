const { body } = require("express-validator");

const productSchema = [
  // name
  body("product")
    .exists({ checkFalsy: true })
    .withMessage("product name is required")
    .isLength({ max: 30 })
    .withMessage("The name must have a maximum of 30 characters"),
  // price
  body("price")
    .exists({ checkFalsy: false })
    .withMessage("price is required")
    .isDecimal()
    .withMessage("The price must be a positive decimal"),
];

module.exports = productSchema;
