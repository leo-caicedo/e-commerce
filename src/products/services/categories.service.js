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
}

module.exports = CategoryServices;
