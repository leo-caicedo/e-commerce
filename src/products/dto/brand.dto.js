const { body } = require("express-validator");

const brandSchema = [
  body("brand")
    .exists({ checkFalsy: false })
    .withMessage("Brand name is required"),
];

module.exports = brandSchema;
