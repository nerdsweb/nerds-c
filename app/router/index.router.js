"use strict";

/* Routes */
const seriveRouter = require("./service.router");
module.exports = function (_app) {
  _app.use("", seriveRouter);
};
