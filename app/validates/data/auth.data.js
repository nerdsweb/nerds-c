const { verifyserExistsService } = require("../../service/auth.service");

const responseUtilClass = require("../../utils/http.utils");

const singUpDataValidate = async (_req, _res, _next) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { username, email } = _req.body;
    const user = await verifyserExistsService(username).catch((err) => {
      NERDS_RESPONSE.utilError(err, "NCDE001").core();
    });

    if (user) {
      throw NERDS_RESPONSE.utilError(
        "username",
        username,
        "NCDE002",
        "Nombre de usuario ya registrado"
      ).data();
    }

    const userEmail = await verifyserExistsService(null, email).catch((err) => {
      NERDS_RESPONSE.utilError(err, "NCDE003").core();
    });

    if (userEmail) {
      throw NERDS_RESPONSE.utilError(
        "email",
        email,
        "NCDE004",
        "Correo electronico  ya registrado"
      ).data();
    }

    return _next();
  } catch (error) {
    return error;
  }
};

module.exports = {
  singUpDataValidate,
};
