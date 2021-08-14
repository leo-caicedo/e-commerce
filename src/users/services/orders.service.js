// models
const Order = require("../models/Order");

class OrdersServices {
  async getOrders(req, res, next) {
    try {
      const orders = await Order.find({})
        .populate("user", {
          _id: 0,
          username: 1,
        })
        .populate("products", { _id: 0, product: 1 })
        .exec();
      res.json(orders);
    } catch (err) {
      next(err);
    }
  }

  async getOrder(req, res, next) {
    const { id } = req.params;

    try {
      const order = await Order.findById(id);
      res.json(order);
    } catch (err) {
      next(err);
    }
  }

  async createOrder(req, res, next) {
    const { body: data } = req;

    try {
      const orderCreated = new Order(data);
      await orderCreated.save();
      res.status(201).json(orderCreated);
    } catch (err) {
      next(err);
    }
  }

  async updateOrder(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const orderUpdated = await Order.findByIdAndUpdate(id, data);
      await orderUpdated.save();
      res.json(orderUpdated);
    } catch (err) {
      next(err);
    }
  }

  async deleteOrder(req, res, next) {
    const { id } = req.params;

    try {
      await Order.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = OrdersServices;
