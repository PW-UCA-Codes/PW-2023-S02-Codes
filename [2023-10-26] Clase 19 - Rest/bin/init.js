const http = require("http");
const app = require("../app");

require("dotenv").config();

const debug = require("debug")("app:server");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
app.set("port", port);

server.on("error", ()=> {
  console.error(error)
});

server.on("listening", ()=> {
  debug(`Listening on :${port}`);
});