const { Router } = require("express");
const router = Router();

// dtos
const brandSchema = require("../dto/brand.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
// services
const BrandsServices = require("../services/brands.service");
const bransServices = new BrandsServices();

router.get("/", bransServices.getBrands);
router.get("/:id", bransServices.getBrand);
router.post("/", brandSchema, validationSchema, bransServices.createBrand);
router.put("/:id", bransServices.updateBrand);
router.delete("/:id", bransServices.deleteBrand);

module.exports = router;
