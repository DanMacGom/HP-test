require("dotenv").config();

const app = require("./app");

const http = require("http");
const server = http.createServer(app);

const port = process.env.APP_PORT;
const host = process.env.APP_HOST;

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
