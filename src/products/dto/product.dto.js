const { body } = require("express-validator");

const productDto = [
  // name
  body("product")
    .exists({ checkFalsy: false })
    .withMessage("Product name is required")
    .isLength({ max: 30 })
    .withMessage("The name must have a maximum of 30 characters"),
  // price
  body("price")
    .exists({ checkFalsy: false })
    .withMessage("Price is required")
    .isDecimal()
    .withMessage("The price must be a positive decimal"),
  // brand
  body("brand").exists({ checkFalsy: false }).withMessage("Brand is required"),
  // category
  body("category")
    .exists({ checkFalsy: false })
    .withMessage("Category is required"),
];

module.exports = productDto;
