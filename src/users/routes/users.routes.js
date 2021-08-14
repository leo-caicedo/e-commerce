const { Router } = require("express");

const router = Router();
// dtos
const { signUpDto, signInDto } = require("../dto/user.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
// services
const UsersServices = require("../services/users.service");
const usersServices = new UsersServices();

router.get("/", usersServices.getUsers);
router.get("/:id", usersServices.getUser);
router.put("/:id", usersServices.updateUser);
router.delete("/:id", usersServices.deleteUser);
// auth
router.post("/signup", signUpDto, validationSchema, usersServices.singUp);
router.post("/signin", signInDto, validationSchema, usersServices.singIn);

module.exports = router;
