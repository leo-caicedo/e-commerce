const { body } = require("express-validator");

const userDto = [
  // username
  body("username")
    .exists({ checkFalsy: false })
    .withMessage("Username is required")
    .isLength({ max: 30 })
    .withMessage("The username must have a maximum of 30 characters"),
  // password
  body("password")
    .exists({ checkFalsy: false })
    .withMessage("Password is required"),
];

module.exports = userDto;
