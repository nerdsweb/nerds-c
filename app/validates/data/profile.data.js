const { listUserProducts } = require("../../service/profile.service");

const responseUtilClass = require("../../utils/http.utils");

const addTocartDataValidate = async (_req, _res, _next) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { userId, product } = _req.body;

    const USER_PRODUCT = await listUserProducts(userId).catch((err) => {
      NERDS_RESPONSE.utilError(err, "NCDPE001").core();
    });

    if (USER_PRODUCT.shoppingCart.length > 0) {
      const PRODUCT = USER_PRODUCT.shoppingCart.filter((data) => {
        return data.productId.toString() == product.productId.toString();
      });

      if (PRODUCT.length >= 1) {
        throw NERDS_RESPONSE.utilError(
          "product",
          product,
          "NCDPE002",
          "Ya posee este producto en su carrito de compras"
        ).data();
      }
    }

    return _next();
  } catch (error) {
    return error;
  }
};

//! verifica la existencia de un usuario
const getCartDataValidate = async (_req, _res, _next) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { userId } = _req.query;

    //verificamos que la persona existe en db
    const USER_PRODUCT = await listUserProducts(userId).catch((err) => {
      NERDS_RESPONSE.utilError(err, "NCDPE001").core();
    });

    if (!USER_PRODUCT) {
      throw NERDS_RESPONSE.utilError(
        "product",
        userId,
        "NCDPE003",
        "Este usuario no posee una cuenta registrada"
      ).data();
    }

    return _next();
  } catch (error) {
    return error;
  }
};

const deleteCartDataValidate = async (_req, _res, _next) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { userId, products } = _req.body;

    //verificamos que la persona existe en db
    const USER_PRODUCT = await listUserProducts(userId).catch((err) => {
      NERDS_RESPONSE.utilError(err, "NCDPE001").core();
    });

    if (!USER_PRODUCT) {
      throw NERDS_RESPONSE.utilError(
        "product",
        userId,
        "NCDPE003",
        "Este usuario no posee una cuenta registrada"
      ).data();
    }

    let FILTER_PRODUCTS = [];

    if (USER_PRODUCT.shoppingCart.length > 0) {
      FILTER_PRODUCTS = USER_PRODUCT.shoppingCart.filter((element) => {
        return !products.includes(element.productId.toString());
      });
    }

    _req.body.products = FILTER_PRODUCTS;

    return _next();
  } catch (error) {
    return error;
  }
};
module.exports = {
  addTocartDataValidate,
  getCartDataValidate,
  deleteCartDataValidate,
};
