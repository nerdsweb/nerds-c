const express = require("express");
const {
  authSingupFormatValidate,
  authLoginFormatValidate,
} = require("../validates/format/auth.format");
const {
  singUpDataValidate,
  loginDataValidate,
} = require("../validates/data/auth.data");
const {
  registerUserController,
  loginController,
  verifyTokenData,
} = require("../controller/auth.controller");

const Router = express.Router();

Router.post(
  "/v1/auth/register",
  authSingupFormatValidate,
  singUpDataValidate,
  registerUserController
);

Router.post(
  "/v1/auth/login",
  authLoginFormatValidate,
  loginDataValidate,
  loginController
);

Router.get("/v1/verify", verifyTokenData);

module.exports = Router;
