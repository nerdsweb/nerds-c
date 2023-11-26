const express = require("express");
const cors = require("cors");
const db = require("./db/app");
const bodyParser = require("body-parser");
const multer = require("multer");

const forms = multer();

const app = express();
const Routes = require("./app/router/index.router");

app.use(cors());
app.use(bodyParser.json());
app.use(forms.any());
app.use(bodyParser.urlencoded({ extended: true }));

// Seteamos rutas Rutas
Routes(app);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  db();
  console.log(`Example app listening on port ${PORT}`);
});
