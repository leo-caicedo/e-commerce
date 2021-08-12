const { body } = require("express-validator");

const categoryDto = [
  body("category")
    .exists({ checkFalsy: false })
    .withMessage("Category name is required"),
];

module.exports = categoryDto;
