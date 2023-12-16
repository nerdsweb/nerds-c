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

const verifyserExistsService = async (_name, idMember) => {
  try {
    const MEMBER_WHERE = idMember ? { idMember: idMember } : {};
    const NAME_WHERE = _name ? { username: _name } : {};

    return await usersModel
      .findOne({ ...MEMBER_WHERE, ...NAME_WHERE })
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

const createUser = async (_name, idMember) => {
  try {
    return await usersModel
      .create([
        {
          username: _name.toLowerCase(),
          idMember: idMember,
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
