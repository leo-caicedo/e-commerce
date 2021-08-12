// models
const Brand = require("../models/Brand");

class BrandsServices {
  async getBrands(req, res, next) {
    try {
      const brands = await Brand.find({}).populate("products", {
        product: 1,
        _id: 0,
      });
      res.json(brands);
    } catch (err) {
      next(err);
    }
  }

  async getBrand(req, res, next) {
    const { id } = req.params;

    try {
      const brand = await Brand.findById(id).populate("products", {
        product: 1,
        price: 1,
        description: 1,
      });
      res.json(brand);
    } catch (err) {
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
      const brandUpdated = await Brand.findByIdAndUpdate(id, data, {
        new: true,
      });
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

module.exports = BrandsServices;
