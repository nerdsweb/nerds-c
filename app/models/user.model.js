const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    idMember: {
      type: Number,
      required: true,
    },
    shoppingCart: {
      type: Array,
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
