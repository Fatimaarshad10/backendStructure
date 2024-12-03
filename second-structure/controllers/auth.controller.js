// strings
const STRINGS = require("../utils/texts");

// services
const LoggerService = require("../config/logger");
const AuthService = require("../services/auth.service");
const UserService = require("../services/user.service");
class AuthController {
  // User Register
  async register(req, res, next) {
    try {
      const data = req.body;
      let user = await UserService.getOne({ email: data.email });
      if (user) {
        return LoggerService.LoggerHandler(
          STRINGS.STATUS_CODE.EXISTS,
          STRINGS.ERRORS.userAlreadyExists,
          res,
        );
      }
      // generating hashed password
      const hashedPassword = AuthService.HashPassword(data.password);

      const body = {
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        email: data.email,
        password: hashedPassword,
        permissions: {},
      };
      user = await UserService.create(body);
      return LoggerService.LoggerHandler(
        STRINGS.STATUS_CODE.CREATED,
        STRINGS.TEXTS.userCreated,
        res,
        user,
      );
    } catch (error) {
      console.log("Register Error->", error.message);
      next(error);
    }
  }


}
module.exports = new AuthController();
