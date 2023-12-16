const { createUser } = require("../service/auth.service");
const responseUtilClass = require("../utils/http.utils");

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

module.exports = {
  registerUserController,
};
