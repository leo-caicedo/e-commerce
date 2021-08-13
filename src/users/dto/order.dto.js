const { body } = require("express-validator");

const orderDto = [
  body("user").exists({ checkFalsy: false }).withMessage("User ID is required"),
  body("products")
    .exists({ checkFalsy: false })
    .withMessage("Product ID is required"),
];

module.exports = orderDto;
