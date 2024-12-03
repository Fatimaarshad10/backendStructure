require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/index.routes");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware
require("./middleware/common")(app);

// database
require("./config/db");

app.use("/api", indexRouter);

module.exports = app;
