const { Router } = require("express");

const router = Router();
// dtos
const { signUpDto, signInDto } = require("../dto/user.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
const verifyToken = require("../../utils/middleware/jwt");
// services
const UsersServices = require("../services/users.service");
const usersServices = new UsersServices();

router.get("/", usersServices.getUsers);
router.get("/:id", usersServices.getUser);
router.put("/:id", verifyToken, usersServices.updateUser);
router.delete("/:id", verifyToken, usersServices.deleteUser);
// auth
router.post("/signup", signUpDto, validationSchema, usersServices.singUp);
router.post("/signin", signInDto, validationSchema, usersServices.singIn);

module.exports = router;
