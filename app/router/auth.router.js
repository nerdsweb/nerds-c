const express = require("express");
const { authSingupFormatValidate } = require("../validates/format/auth.format");
const { singUpDataValidate } = require("../validates/data/auth.data");
const { registerUserController } = require("../controller/auth.controller");

const Router = express.Router();

Router.post(
  "/v1/auth/register",
  authSingupFormatValidate,
  singUpDataValidate,
  registerUserController
);

module.exports = Router;
