const { body } = require("express-validator");
const { validateResult } = require("../../utils/validator.util");
const { default: mongoose } = require("mongoose");

const addToCartFormatValidate = [
  body("product")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isObject()
    .withMessage("Debe enviar  un producto valido")
    .custom((data) => {
      try {
        return (data.productId = new mongoose.Types.ObjectId(data.productId));
      } catch (error) {
        throw "Debe ser un object id valido";
      }
    }),
  body("product.name")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe enviar una cadena de caracteres"),
  body("product.type")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe enviar una cadena de caracteres"),
  body("product.amount")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe enviar una cadena de caracteres"),
  body("product.description")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe enviar una cadena de caracteres"),
  (_req, _res, _next) => {
    validateResult(_req, _res, _next, "NCPFE001");
  },
];

const deleteToCartFormatValidate = [
  body("userId")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe enviar  un producto valido"),
  body("products")
    .isArray()
    .withMessage("Debe enviar una arreglo de productos"),
  (_req, _res, _next) => {
    validateResult(_req, _res, _next, "NCPFE002");
  },
];

const getUserFormatValidate = [
  body("userId")
    .notEmpty()
    .withMessage("No puede ser un valor vacío")
    .isString()
    .withMessage("Debe enviar  un producto valido"),
  (_req, _res, _next) => {
    validateResult(_req, _res, _next, "NCPFE003");
  },
];

module.exports = {
  addToCartFormatValidate,
  deleteToCartFormatValidate,
  getUserFormatValidate,
};
