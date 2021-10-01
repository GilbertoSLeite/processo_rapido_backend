const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const corsOptions = require("./bin/cors_options");
const calling_routes = require("./bin/calling_routes");

const db = require("./infrastructure/database/index");

db.sequelize.sync();

const app = express();

app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Home Page
app.get("/", (req, res) => {
  res.json({
    message: "Seja bem vindo ao recrutamento do Processo Rápido.",
  });
});

//Chamando as Rotas
calling_routes;

// Analisar Cors do Navegador
app.use(cors(corsOptions));

// catch 404 and forward to error handler
require("./bin/error_status");

// error handler
require("./bin/error_handlers");

module.exports = app;
