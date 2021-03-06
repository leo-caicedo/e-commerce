const express = require("express");
const morgan = require("morgan");

// required routes
const categoriesRoutes = require("./products/routes/categories.routes");
const brandsRoutes = require("./products/routes/brands.routes");
const productsRoutes = require("./products/routes/products.routes");
const usersRoutes = require("./users/routes/users.routes");
const ordersRoutes = require("./users/routes/orders.routes");

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
  app.use(morgan("dev"));

  // routes
  app.use("/api/categories", categoriesRoutes);
  app.use("/api/brands", brandsRoutes);
  app.use("/api/products", productsRoutes);
  app.use("/api/users", usersRoutes);
  app.use("/api/orders", ordersRoutes);

  // 404
  app.use(notFoundHandler);

  // error middleware
  app.use(logError);
  app.use(wrapError);
  app.use(errorHandler);

  return app;
};

module.exports = createApp;
