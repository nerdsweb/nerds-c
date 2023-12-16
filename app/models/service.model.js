const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    amount: {
      type: Number,
      required: true,
    },
    afiliation: {
      type: Number,
      required: true,
    },
    characteristics: {
      type: Array,
      required: true,
    },
    lifeTime: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    bol_delete: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("c_service", servicesSchema, "c_service");
