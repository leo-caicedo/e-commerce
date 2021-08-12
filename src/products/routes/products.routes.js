const { body } = require("express-validator");
const { Router } = require("express");
const router = Router();

// dtos
const productSchema = require("../dto/product.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
// services
const ProductsServices = require("../services/products.service");
const productsServices = new ProductsServices();

router.get("/", productsServices.getProducts);
router.get("/:id", productsServices.getProduct);
router.post(
  "/",
  productSchema,
  validationSchema,
  productsServices.createProduct
);
router.put("/:id", productsServices.updateProduct);
router.delete("/:id", productsServices.deleteProduct);

module.exports = router;
