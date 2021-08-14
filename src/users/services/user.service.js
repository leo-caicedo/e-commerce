const bcrypt = require("bcryptjs");

// models
const User = require("../models/User");

class UserServices {
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
    const correctPassword =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      res.status(401).json({
        message: "invalid credentials",
      });
    }

    res.json({
      message: `Welcomme ${user.username}`,
      profile: user,
    });
  }
}

module.exports = UserServices;
