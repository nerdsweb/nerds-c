"use strict";

/* Routes */
const seriveRouter = require("./service.router");
const authRouter = require("./auth.router");
const profileRouter = require("./profile.router");

module.exports = function (_app) {
  _app.use("", seriveRouter);
  _app.use("", authRouter);
  _app.use("", profileRouter);
};
