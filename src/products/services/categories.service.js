// models
const Category = require("../models/Category");

class CategoryServices {
  async getCategories(req, res, next) {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (err) {
      next(err);
    }
  }

  async getCategory(res, res, next) {
    const { id } = req.params;

    try {
      const category = Category.findById(id);
      res.json(category);
    } catch (err) {
      next(err);
    }
  }

  async createCategory(req, res, next) {
    const { body: data } = req;

    try {
      const categoryCreated = new Category(data);
      await categoryCreated.save();
      res.status(201).json(categoryCreated);
    } catch (err) {
      next(err);
    }
  }

  async updateCategory(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const categoryUpdated = await Category.findByIdAndUpdate(id, data, {
        new: true,
      });
      res.json(categoryUpdated);
    } catch (err) {
      next(err);
    }
  }

  async deleteCategory(req, res, next) {
    const { id } = req.params;

    try {
      await Category.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryServices;
