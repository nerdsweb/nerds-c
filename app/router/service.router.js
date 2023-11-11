const express = require("express");
const {
  listAllServiceController,
} = require("../controller/service.controller");

const Router = express.Router();

Router.get("/v1/list/service", listAllServiceController);

module.exports = Router;
