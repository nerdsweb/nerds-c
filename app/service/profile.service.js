const { default: mongoose } = require("mongoose");
const usersModel = require("../models/user.model");

/**
 *
 * @version        :1.0.0
 * @description    :Servicio  listar productos de carrito de compras de un usuario
 * @param {String} products - arreglo de productos a colocar del usuario
 * @returns
 *
 */

const listUserProducts = async (_id) => {
  try {
    return await usersModel
      .findById({
        _id: new mongoose.Types.ObjectId(_id),
      })
      .catch((err) => {
        err;
      });
  } catch (error) {
    return error;
  }
};

/**
 *
 * @version        :1.0.0
 * @description    :Servicio  listar productos de carrito de compras de un usuario
 * @param {String} products - arreglo de productos a colocar del usuario
 * @returns
 *
 */

const deleteUserProducts = async (_id, products) => {
  try {
    return await usersModel
      .updateOne(
        {
          _id: new mongoose.Types.ObjectId(_id),
        },
        {
          $set: {
            shoppingCart: products,
          },
        }
      )
      .catch((err) => {
        err;
      });
  } catch (error) {
    return error;
  }
};

/**
 *
 * @version        :1.0.0
 * @description    :Servicio para verificar que exista un usuario
 * @param {String} products - arreglo de productos a colocar del usuario
 * @returns
 *
 */

const addToCartService = async (_id, item) => {
  try {
    return await usersModel
      .updateOne(
        {
          _id: new mongoose.Types.ObjectId(_id),
        },

        { $push: { shoppingCart: item } }
      )
      .catch((err) => {
        err;
      });
  } catch (error) {
    return error;
  }
};

module.exports = {
  listUserProducts,
  addToCartService,
  deleteUserProducts,
};
