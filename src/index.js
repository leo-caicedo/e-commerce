const createApp = require("./app");

const { config } = require("./config");
const app = createApp();

app.listen(config.port, (err) => {
  err
    ? console.error(`Error: ${err}`)
    : console.log(`Express listening on port ${config.port}`);
});
