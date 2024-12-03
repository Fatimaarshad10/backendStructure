const util = require("util");
const JWT = require("jsonwebtoken");
const ENV = process.env;
const bcrypt = require("bcryptjs");
class AuthService {
  // generate token
  generateToken = (user) => {
    const accessToken = JWT.sign(
      {
        id: user._id,
      },
      ENV.JWT_SECRET,
    );

    return { accessToken };
  };

  // verify jwt token
  generateVerifyToken = async (token, secret) => {
    const jwtVerifyAsync = util.promisify(JWT.verify);
    const decoded = await jwtVerifyAsync(token, secret);
    return decoded;
  };

  // hash password
  HashPassword = (password) => {
    const salt = bcrypt.genSaltSync(+ENV.BCRYPT_SALT);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  // compare passwords
  comparePassword = (password, user_password) => {
    // Check if user password is correct
    const isCorrect = bcrypt.compareSync(password, user_password);
    return isCorrect;
  };

  // generate otp
  generateOTP = () => {
    // generate otp
    const otp = Math.floor(10000 + Math.random() * 9000);
    return otp;
  };

  // generate otp expiry
  generateOTPExpires = () => {
    // generate otp expiry
    const resetPasswordExpires = Date.now() + 86400;
    return resetPasswordExpires;
  };
}

module.exports = new AuthService();
