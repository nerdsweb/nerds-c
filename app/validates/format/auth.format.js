const { body } = require("express-validator");
const { validateResult } = require("../../utils/validator.util");
const authSingupFormatValidate = [
  body("username")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe ser un conjunto de caracteres"),
  body("email")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe ser un conjunto de caracteres")
    .isEmail()
    .withMessage("Debe ser una direccion de correo valida"),

  (_req, _res, _next) => {
    validateResult(_req, _res, _next, "NCFE001");
  },
];

module.exports = {
  authSingupFormatValidate,
};
