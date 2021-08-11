// models
const Brand = require("../models/Brand");

class BrandServices {
  async getBrands(req, res, next) {
    try {
      const brands = await Brand.find({});
      res.json(brands);
    } catch {
      next(err);
    }
  }

  async getBrand(req, res, next) {
    const { id } = req.params;

    try {
      const brand = await Brand.findById(id);
      res.json(brand);
    } catch {
      next(err);
    }
  }

  async createBrand(req, res, next) {
    const { body: data } = req;

    try {
      const brandCreated = new Brand(data);
      await brandCreated.save();
      res.status(201).json(brandCreated);
    } catch (err) {
      next(err);
    }
  }

  async updateBrand(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const brandUpdated = await Brand.findByIdAndUpdate(id, data);
      res.json(brandUpdated);
    } catch (err) {
      next(err);
    }
  }

  async deleteBrand(req, res, next) {
    const { id } = req.params;

    try {
      await Brand.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BrandServices;
