const express = require("express");

// required routes
const categoriesRoutes = require("./products/routes/categories.routes");
const brandsRoutes = require("./products/routes/brands.routes");

// error handler
const notFoundHandler = require("./utils/middleware/404Handler");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use("/api/categories", categoriesRoutes);
  app.use("/api/brands", brandsRoutes);

  // 404
  app.use(notFoundHandler);

  return app;
};

module.exports = createApp;
