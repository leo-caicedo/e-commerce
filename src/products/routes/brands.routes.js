const { Router } = require("express");
const router = Router();

// dtos
const brandDto = require("../dto/brand.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
// services
const BrandsServices = require("../services/brands.service");
const bransServices = new BrandsServices();

router.get("/", bransServices.getBrands);
router.get("/:id", bransServices.getBrand);
router.post("/", brandDto, validationSchema, bransServices.createBrand);
router.put("/:id", bransServices.updateBrand);
router.delete("/:id", bransServices.deleteBrand);

module.exports = router;
