const express = require("express");
const router = express.Router();

router.use("/v1/user", require("./admin/account.routes"));


module.exports = router;


