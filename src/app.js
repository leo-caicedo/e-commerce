const express = require("express");

// required routes
const categoriesRoutes = require("./products/routes/categories.routes");

// error handler
const notFoundHandler = require("./utils/middleware/404Handler");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use("/api/categories", categoriesRoutes);

  // 404
  app.use(notFoundHandler);

  return app;
};

module.exports = createApp;
