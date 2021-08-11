const express = require("express");

// required routes
const categoriesRoutes = require("./products/routes/categories.routes");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use("/api/categories", categoriesRoutes);

  return app;
};

module.exports = createApp;
