const bcrypt = require("bcryptjs");

// models
const User = require("../models/User");

class UsersServices {
  async getUsers(req, res, next) {
    try {
      const users = await User.find({});
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async getUser(req, res, next) {
    const { id } = req.params;

    try {
      const user = await User.findById(id);
      res.json(use);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const userUpdated = await User.findOneAndUpdate(id, data, { new: true });
      await userUpdated.save();

      res.json(userUpdated);
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    const { id } = req.params;

    try {
      await User.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }

  // auth
  async singUp(req, res, next) {
    const { username, password, country, orders } = req.body;

    try {
      const userCreated = new User({
        username,
        password: await User.encryptPassword(password),
        country,
        orders,
      });
      await userCreated.save();
      res.status(201).json(userCreated);
    } catch (err) {
      next(err);
    }
  }

  async singIn(req, res, next) {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credential" });
    }
    const matchPassword = await User.validatePassword(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid Credential" });
    }

    res.json({
      message: `Welcomme ${user.username}`,
      profile: user,
    });
  }
}

module.exports = UsersServices;
