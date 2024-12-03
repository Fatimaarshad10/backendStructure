const STRINGS = require("../utils/texts");
const AuthService = require("../services/auth.service");
const User = require("../models/user.model");

/**
 * If no role is passed the default role is user
 *
 * @param  {String} role role allowed to access the route
 */

function auth(role = "") {
  return async (req, res, next) => {
    const header = req.get("Authorization");
    if (!header || !header.startsWith("Bearer")) {
      return res.status(401).json({ message: STRINGS.ERRORS.tokenInvalid });
    }
    try {
      const token = header.split(" ")[1];
      const decoded = await AuthService.generateVerifyToken(
        token,
        process.env.JWT_SECRET,
      );

      // let role = role;
      const _id = String(decoded.id);

      const user = await User.findOne({
        _id,
      }).lean();
      if (!user) {
        return res.status(401).json({ message: STRINGS.ERRORS.userNotFound });
      }

      req.user = user;
      req.userId = user.id;
      next();
    } catch (err) {
      console.log("err--->", err);
      return res.status(401).json({ message: STRINGS.ERRORS.tokenExpired });
    }
  };
}

module.exports = auth;
