const { Router } = require("express");
const router = Router();

// dtos
const categoryDto = require("../dto/category.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
// services
const CategoryServices = require("../services/categories.service");
const categoriesServices = new CategoryServices();

router.get("/", categoriesServices.getCategories);
router.get("/:id", categoriesServices.getCategory);
router.post(
  "/",
  categoryDto,
  validationSchema,
  categoriesServices.createCategory
);
router.put("/:id", categoriesServices.updateCategory);
router.delete("/:id", categoriesServices.deleteCategory);

module.exports = router;
