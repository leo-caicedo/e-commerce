const { Router } = require("express");
const router = Router();

// dtos
const productDto = require("../dto/product.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
const verifyToken = require("../../utils/middleware/jwt");
// services
const ProductsServices = require("../services/products.service");
const productsServices = new ProductsServices();

router.get("/", productsServices.getProducts);
router.get("/:id", productsServices.getProduct);
router.post(
  "/",
  [verifyToken, productDto, validationSchema],
  productsServices.createProduct
);
router.put("/:id", verifyToken, productsServices.updateProduct);
router.delete("/:id", verifyToken, productsServices.deleteProduct);

module.exports = router;
