const serviceModel = require("../models/service.model");

const getAllServiceService = async () => {
  try {
    return await serviceModel.find(
      {},
      {
        name: 1,
        description: 1,
        amount: 1,
        lifetime: 1,
        _id: 0,
      }
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllServiceService,
};
