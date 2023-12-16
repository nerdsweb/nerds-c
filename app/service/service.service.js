const serviceModel = require("../models/service.model");

const getAllServiceService = async () => {
  try {
    return await serviceModel.find(
      {},
      {
        name: 1,
        description: 1,
        amount: 1,
        afiliation: 1,
        characteristics: 1,
        _id: 1,
      }
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllServiceService,
};
