"use strict";

/* Routes */
const seriveRouter = require("./service.router");
const authRouter = require("./auth.router");

module.exports = function (_app) {
  _app.use("", seriveRouter);
  _app.use("", authRouter);
};
