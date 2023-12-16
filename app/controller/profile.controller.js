const {
  addToCartService,
  listUserProducts,
  deleteUserProducts,
} = require("../service/profile.service");
const responseUtilClass = require("../utils/http.utils");

const addToCartController = async (_req, _res) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { userId, product } = _req.body;

    await addToCartService(userId, product).catch((error) => {
      throw error;
    });
    return NERDS_RESPONSE.Ok("NCPS001", "Agregado", true);
  } catch (error) {
    return NERDS_RESPONSE.utilError(_err, "NSCE001").core();
  }
};

const getCartController = async (_req, _res) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { userId } = _req.query;

    const data = await listUserProducts(userId).catch((error) => {
      throw error;
    });
    return NERDS_RESPONSE.Ok(
      "NCPS002",
      "carrito de productos",
      data.shoppingCart
    );
  } catch (error) {
    console.log(error);
    return NERDS_RESPONSE.utilError(error, "NSCE002").core();
  }
};

const deleteCartController = async (_req, _res) => {
  const NERDS_RESPONSE = new responseUtilClass(_req, _res);
  try {
    const { userId, products } = _req.body;

    await deleteUserProducts(userId, products).catch((error) => {
      throw error;
    });
    return NERDS_RESPONSE.Ok("NCPS003", "Producto eliminado", true);
  } catch (error) {
    return NERDS_RESPONSE.utilError(error, "NSCE003").core();
  }
};

module.exports = {
  addToCartController,
  getCartController,
  deleteCartController,
};
