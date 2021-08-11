const { Router } = require("express");
const router = Router();

// services
const BrandsServices = require("../services/brands.service");
const bransServices = new BrandsServices();

router.get("/", bransServices.getBrands);
router.get("/:id", bransServices.getBrand);
router.post("/", bransServices.createBrand);
router.put("/:id", bransServices.updateBrand);
router.delete("/:id", bransServices.deleteBrand);

module.exports = router;
