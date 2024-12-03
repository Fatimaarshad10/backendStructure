// Init
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();
const responseTime = require("response-time");
const path = require("path");
const helmet = require("helmet");
// Common Middleware
module.exports = (app) => {
  app.use(cors());

  app.use("/uploads", express.static("uploads", { maxAge: "31536000" }));
  app.use(express.static(path.join(__dirname, "public")));
  // secure your Express apps by setting various HTTP headers.
  app.use(helmet());
  app.use(logger("dev"));

  // view engine setup

  app.use(express.json({ limit: "500mb" }));
  app.use(express.urlencoded({ extended: true, limit: "500mb" }));
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "pug");
  app.use(responseTime());
};
