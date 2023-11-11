const { getAllServiceService } = require("../service/service.service");
const responseUtilClass = require("../utils/http.utils");

const listAllServiceController = async (_req, _res) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const data = await getAllServiceService();

    return NERDS_RESPONSE.Ok("NSCS001", "listado de servicios", data);
  } catch (_err) {
    return NERDS_RESPONSE.utilError(_err, "NSCE001");
  }
};

module.exports = {
  listAllServiceController,
};
