const express = require("express");
const cors = require("cors");
const db = require("./db/app");

const app = express();
const Routes = require("./app/router/index.router");
// Seteamos rutas Rutas
Routes(app);

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  db();
  console.log(`Example app listening on port ${PORT}`);
});
