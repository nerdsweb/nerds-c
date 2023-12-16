const { default: mongoose } = require("mongoose");
const usersModel = require("../models/user.model");

/**
 *
 * @version        :1.0.0
 * @description    :Servicio para verificar que exista un usuario
 * @param {String} userName - nombre de usuario
 * @param {String} email - email de un usuario
 * @returns
 *
 */

const verifyserExistsService = async (_name, _email) => {
  try {
    const EMAIL_WHERE = _email ? { email: _email } : {};
    const NAME_WHERE = _name ? { username: _name } : {};

    return await usersModel
      .findOne({ ...EMAIL_WHERE, ...NAME_WHERE })
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
 * @param {String} userName - nombre de usuario
 * @param {String} email - email de un usuario
 * @returns
 *
 */

const createUser = async (_name) => {
  try {
    return await usersModel
      .create([
        {
          userName: _name.toLowerCase(),
          services: [],
          cupon: [],
          shoppingCart: [],
          bol_delete: false,
        },
      ])
      .catch((err) => {
        err;
      });
  } catch (error) {
    return error;
  }
};

module.exports = {
  verifyserExistsService,
  createUser,
};
