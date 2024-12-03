"use strict";
const { httpsCodes } = require("../constants/httpsCodes");
const { language } = require("../constants/language");
const { User } = require("../models/index");

class AuthManager {
  static async createUser(reqObj) {
    try {
      let result = {};
      const user = await User.create({
        ...reqObj,
      });
      result = {
        status: httpsCodes.SUCCESS_CODE,
        message: language.ONE_RECORD_CREATE,
        result: {
          user
        },
      };
      return result;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = AuthManager;
