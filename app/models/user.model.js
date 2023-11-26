const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    services: {
      type: Array,
      required: false,
    },
    cupon: {
      type: Array,
      required: true,
    },
    bol_delete: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("c_users", servicesSchema, "c_users");
