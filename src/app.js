const express = require("express");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  return app;
};

module.exports = createApp;
