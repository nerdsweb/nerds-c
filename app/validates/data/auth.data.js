const { verifyserExistsService } = require("../../service/auth.service");

const responseUtilClass = require("../../utils/http.utils");

const singUpDataValidate = async (_req, _res, _next) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { idMember } = _req.body;
    const user = await verifyserExistsService(null, +idMember).catch((err) => {
      NERDS_RESPONSE.utilError(err, "NCDE001").core();
    });

    if (user) {
      throw NERDS_RESPONSE.utilError(
        "username",
        idMember,
        "NCDE002",
        "Este usuario ya esta registrado"
      ).data();
    }

    return _next();
  } catch (error) {
    return error;
  }
};

const loginDataValidate = async (_req, _res, _next) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { idMember } = _req.body;
    //? verificamos que el usuario exista
    const user = await verifyserExistsService(null, +idMember).catch((err) => {
      NERDS_RESPONSE.utilError(err, "NCDE003").core();
    });

    if (!user) {
      throw NERDS_RESPONSE.utilError(
        "username",
        idMember,
        "NCDE002",
        "Este usuario no existe"
      ).data();
    }

    //? seteamos sus valores en una variable
    _req.body.user = user;

    return _next();
  } catch (error) {
    return error;
  }
};

module.exports = {
  singUpDataValidate,
  loginDataValidate,
};
