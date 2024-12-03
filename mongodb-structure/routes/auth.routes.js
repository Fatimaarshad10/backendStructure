// Init
const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");
const multer = require("../middleware/multer");
const {
  registerUserValidator,
  isValidated,
} = require("../middleware/validators");

// Register User
router.post(
  "/register",
  registerUserValidator,
  isValidated,
  AuthController.register,
);


module.exports = router;
