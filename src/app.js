const express = require("express");

// required routes
const categoriesRoutes = require("./products/routes/categories.routes");
const brandsRoutes = require("./products/routes/brands.routes");
const productsRoutes = require("./products/routes/products.routes");

// error handler
const notFoundHandler = require("./utils/middleware/404Handler");
const {
  errorHandler,
  logError,
  wrapError,
} = require("./utils/middleware/errorHandler");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use("/api/categories", categoriesRoutes);
  app.use("/api/brands", brandsRoutes);
  app.use("/api/products", productsRoutes);

  // 404
  app.use(notFoundHandler);

  // error middleware
  app.use(logError);
  app.use(wrapError);
  app.use(errorHandler);

  return app;
};

module.exports = createApp;
