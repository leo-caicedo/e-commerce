// models
const Product = require("../models/Product");

class ProductsServices {
  async getProducts(req, res, next) {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  async getProduct(req, res, next) {
    const { id } = req.params;

    try {
      const product = await Product.findById(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
  async createProduct(req, res, next) {
    const { body: data } = req;

    try {
      const productCreated = new Product(data);
      await productCreated.save();
      res.status(201).json(productCreated);
    } catch (err) {
      next(err);
    }
  }

  async updateProduct(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const productUpdated = await Product.findByIdAndUpdate(id, data, {
        new: true,
      });
      res.json(productUpdated);
    } catch (err) {
      next(err);
    }
  }
  async deleteProduct(req, res, next) {
    const { id } = req.params;

    try {
      await Product.findOneAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductsServices;
