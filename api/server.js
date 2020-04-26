const express = require("express");
const helmet = require("helmet");
const server = express();

const carsRouter = require("../cars/cars-router");

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({
    message: "This is a dbms"
  });
});

server.use("/cars", carsRouter);

module.exports = server;
