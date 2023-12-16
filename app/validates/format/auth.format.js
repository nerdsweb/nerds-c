const { body } = require("express-validator");
const { validateResult } = require("../../utils/validator.util");
const authSingupFormatValidate = [
  body("username")
    .notEmpty()
    .withMessage("No puede ser un valor vacio")
    .isString()
    .withMessage("Debe ser un conjunto de caracteres"),
  body("idMember")
    .notEmpty()
    .withMessage("No puede ser un valor vacio")
    .isNumeric()
    .withMessage("Debe ser un numero"),

  (_req, _res, _next) => {
    validateResult(_req, _res, _next, "NCFE001");
  },
];

const authLoginFormatValidate = [
  body("idMember")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isNumeric()
    .withMessage("Debe ser un numero"),

  (_req, _res, _next) => {
    validateResult(_req, _res, _next, "NCFE001");
  },
];

module.exports = {
  authSingupFormatValidate,
  authLoginFormatValidate,
};
