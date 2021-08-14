const { Router } = require("express");
const router = Router();

// dtos
const brandDto = require("../dto/brand.dto");
// middleware
const validationSchema = require("../../utils/middleware/validate-schema");
const verifyToken = require("../../utils/middleware/jwt");
// services
const BrandsServices = require("../services/brands.service");
const bransServices = new BrandsServices();

router.get("/", bransServices.getBrands);
router.get("/:id", bransServices.getBrand);
router.post(
  "/",
  [verifyToken, brandDto, validationSchema],
  bransServices.createBrand
);
router.put("/:id", verifyToken, bransServices.updateBrand);
router.delete("/:id", verifyToken, bransServices.deleteBrand);

module.exports = router;
