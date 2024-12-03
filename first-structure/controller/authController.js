"use-strict";
const router = require("express")();
const { httpsCodes } = require("../constants/httpsCodes");
const authManager = require("../manager/authManager");
const { logger } = require("../config/winstonLogger");

router.post("/signup", async (req, res, next) => {
  const reqObj = Object.assign({}, req.body);
  authManager
    .createUser(reqObj)
    .then(async (result) => {
      logger.info(result.message);
      res.status(result.status).json(result);
    })
    .catch(async (error) => {
      console.log(error);
      logger.error(error);
      res.send({
        error: error,
        status: httpsCodes.SERVER_ERROR_CODE,
      });
    });
});

module.exports = router;
