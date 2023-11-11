const serviceModel = require("../models/service.model");

const getAllServiceService = async () => {
  try {
    return await serviceModel.find();
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllServiceService,
};
