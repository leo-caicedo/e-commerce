const { body } = require("express-validator");

// models
const User = require("../models/User");

const signUpDto = [
  // username
  body("username")
    .exists({ checkFalsy: false })
    .withMessage("Username is required")
    .isLength({ max: 30 })
    .withMessage("The username must have a maximum of 30 characters")
    .custom((username) => {
      return User.findOne({ username }).then((user) => {
        if (user) {
          return Promise.reject("Username already in use");
        }
      });
    }),
  // password
  body("password")
    .exists({ checkFalsy: false })
    .withMessage("Password is required"),
];

const signInDto = [
  // username
  body("username")
    .exists({ checkFalsy: false })
    .withMessage("Username is required"),
  body("password")
    .exists({ checkFalsy: false })
    .withMessage("Password is required"),
];

module.exports = { signUpDto, signInDto };
