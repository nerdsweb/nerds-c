const serviceModel = require("../models/service.model");

const getAllServiceService = async (category) => {
  try {
    const WHERE_CATEGORY = category ? { category: category } : {};
    return await serviceModel.find(
      {
        ...WHERE_CATEGORY,
      },
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
