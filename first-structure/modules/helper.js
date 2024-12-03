"use strict";
const jwt = require("jsonwebtoken");

module.exports.generateOtp = async () => {
  const otp = Math.floor(Math.random() * 900000) + 100000;
  return otp;
};

module.exports.verifyJWTToken = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    return { err: err, decoded: decoded };
  });
};

