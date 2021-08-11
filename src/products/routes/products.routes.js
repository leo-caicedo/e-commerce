const { Router } = require("express");
const router = Router();

// services
const ProductsServices = require("../services/products.service");
const productsServices = new ProductsServices();

router.get("/", productsServices.getProducts);
router.get("/:id", productsServices.getProduct);
router.post("/", productsServices.createProduct);
router.put("/:id", productsServices.updateProduct);
router.delete("/:id", productsServices.deleteProduct);

module.exports = router;
