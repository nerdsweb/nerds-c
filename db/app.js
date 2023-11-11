const mongoose = require("mongoose");
const DB_URL =
  process.env.MDV_URL ||
  "mongodb+srv://nerds_db:123*yagp@cluster0.ratuffe.mongodb.net/?retryWrites=true&w=majority";

module.exports = () => {
  mongoose
    .connect(DB_URL, {
      dbName: "db_nerds",
      user: "nerds_db",
      pass: "123*yagp",
    })
    .then((_result) => {
      console.log("Se ha completado la conexion a mongo");
    })
    .catch((_err) => {
      console.log(_err);
    });
};
