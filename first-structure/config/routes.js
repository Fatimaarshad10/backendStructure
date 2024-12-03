"use-strict";
module.exports = (app) => {
  app.use("/api/auth", require("../controller/authController"));


};
