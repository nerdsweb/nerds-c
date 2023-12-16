const { createUser } = require("../service/auth.service");
const responseUtilClass = require("../utils/http.utils");
const jwt = require("jsonwebtoken");

const registerUserController = async (_req, _res) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { username } = _req.body;

    await createUser(username).catch((error) => {
      throw error;
    });
    return NERDS_RESPONSE.Ok("NCCS001", "Registro de usuario exitoso", true);
  } catch (error) {
    return NERDS_RESPONSE.utilError(_err, "NSCE001").core();
  }
};

const loginController = async (_req, _res) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { user } = _req.body;

    const token = jwt.sign(
      {
        name: user.username,
        id: user._id.toString(),
      },
      "nerdsaaj"
    );

    return NERDS_RESPONSE.Ok("NCCS002", "Inicio de sesion exitoso", token);
  } catch (error) {
    return NERDS_RESPONSE.utilError(_err, "NSCE003").core();
  }
};

const verifyTokenData = async (_req, _res) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { token } = _req.body;

    const decoded = jwt.verify(token, "nerdsaaj");

    return NERDS_RESPONSE.Ok("NCCS003", "nerds", decoded);
  } catch (error) {
    return NERDS_RESPONSE.utilError(_err, "NSCE003").core();
  }
};

module.exports = {
  registerUserController,
  loginController,
  verifyTokenData,
};
