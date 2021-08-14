const { Router } = require("express");
const router = Router();

// dtos
const categoryDto = require("../dto/category.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
const verifyToken = require("../../utils/middleware/jwt");
// services
const CategoryServices = require("../services/categories.service");
const categoriesServices = new CategoryServices();

router.get("/", categoriesServices.getCategories);
router.get("/:id", categoriesServices.getCategory);
router.post(
  "/",
  [verifyToken, categoryDto, validationSchema],
  categoriesServices.createCategory
);
router.put("/:id", verifyToken, categoriesServices.updateCategory);
router.delete("/:id", verifyToken, categoriesServices.deleteCategory);

module.exports = router;
