const { Router } = require("express");
const router = Router();

// services
const CategoryServices = require("../services/categories.service");
const categoriesServices = new CategoryServices();

router.get("/", categoriesServices.getCategories);
router.get("/:id", categoriesServices.getCategory);
router.post("/", categoriesServices.createCategory);
router.put("/:id", categoriesServices.updateCategory);
router.delete("/:id", categoriesServices.deleteCategory);

module.exports = router;
