const express = require("express");
const helmet = require("helmet");
const CORS = require("cors");
const appRouter = require("../data/app/appRouter");

const server = express();

server.use(helmet());
server.use(CORS());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h1>SERVER IS UP</h1>`);
});

//endpoints/routers

server.use("/api", appRouter);

module.exports = server;
