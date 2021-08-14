const { Router } = require("express");

const router = Router();
// dtos
const { signUpDto, signInDto } = require("../dto/user.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
// services
const UsersServices = require("../services/user.service");
const usersServices = new UsersServices();

// auth
router.post("/signup", signUpDto, validationSchema, usersServices.singUp);
router.post("/signin", signInDto, validationSchema, usersServices.singIn);

module.exports = router;
