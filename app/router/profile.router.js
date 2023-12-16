const express = require("express");
const {
  addToCartFormatValidate,
  deleteToCartFormatValidate,
  getUserFormatValidate,
} = require("../validates/format/profile.format");
const {
  addToCartController,
  getCartController,
  deleteCartController,
} = require("../controller/profile.controller");
const {
  addTocartDataValidate,
  getCartDataValidate,
  deleteCartDataValidate,
} = require("../validates/data/profile.data");

const Router = express.Router();

//? Agregar productos al carrito de compras
Router.post(
  "/v1/profile/addTocart",
  addToCartFormatValidate,
  addTocartDataValidate,
  addToCartController
);

//? listar los productos de un carrito de compras
Router.get(
  "/v1/profile/getCart",
  getUserFormatValidate,
  getCartDataValidate,
  getCartController
);

//? eliminar un producto del carrito de compras
Router.delete(
  "/v1/profile/deleteCart",
  deleteToCartFormatValidate,
  deleteCartDataValidate,
  deleteCartController
);

module.exports = Router;
