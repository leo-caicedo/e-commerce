const { body } = require("express-validator");

const brandDto = [
  body("brand")
    .exists({ checkFalsy: false })
    .withMessage("Brand name is required"),
];

module.exports = brandDto;
