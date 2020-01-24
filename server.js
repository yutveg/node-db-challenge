const express = require("express");

const server = express();
const projectRouter = require("./api/projects/project-router.js");
const resourceRouter = require("./api/resources/resource-router.js");

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

module.exports = server;
