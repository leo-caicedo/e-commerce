const jwt = require("jsonwebtoken");

const { config } = require("../../config");
// models
const User = require("../../users/models/User");

const verifyToken = async (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    return res.status(403).json({ message: "no token provided" });
  }

  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = verifyToken;
