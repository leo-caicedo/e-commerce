// models
const Product = require("../models/Product");
const Category = require("../models/Category");
const Brand = require("../models/Brand");

class ProductsServices {
  async getProducts(req, res, next) {
    try {
      const products = await Product.find({})
        .populate("brand", { _id: 0, products: 0 })
        .populate("category", { _id: 0, products: 0 })
        .exec();
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  async getProduct(req, res, next) {
    const { id } = req.params;

    try {
      const product = await Product.findById(id)
        .populate("brand", { _id: 0, products: 0 })
        .populate("category", { _id: 0, products: 0 })
        .exec();
      res.json(product);
    } catch (err) {
      next(err);
    }
  }

  async createProduct(req, res, next) {
    const { product, price, brand, category, description, image } = req.body;

    try {
      const brandRef = await Brand.findById(brand);
      const categoryRef = await Category.findById(category);

      // create product
      const productCreated = new Product({
        product,
        price,
        brand: brandRef._id,
        category: categoryRef._id,
        description,
        image,
      });
      await productCreated.save();

      // add product to brand
      brandRef.products = brandRef.products.concat(productCreated._id);
      await brandRef.save();

      // add product to category
      categoryRef.products = categoryRef.products.concat(productCreated._id);
      await categoryRef.save();

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
