const User = require("../models/user.model");

class UserService {
  constructor() {
    this.selectUserFields = {
      email: true,
      first_name: true,
      last_name: true,
      phone: true,
      image: true,
      role: true,
    };
  }

  // create  User
  create(data) {
    return User.create(data, this.selectUserFields);
  }
  getAll(query, field = {}) {
    return User.find(query, { ...this.selectUserFields, ...field });
  }

  getOne(query, field = {}) {
    return User.findOne(query, { ...this.selectUserFields, ...field });
  }
  getOneById(query, field = {}) {
    return User.findOne(query, field);
  }
  // delete one Account
  delete(id) {
    return User.findOneAndDelete({
      _id: id,
    });
  }

  // update User
  update(id, data) {
    return User.findOneAndUpdate(
      {
        _id: id,
      },
      data,
    );
  }
  // save Token
  saveToken(id, token, expiryDate) {
    return User.findOneAndUpdate(
      { _id: id },
      { token: token, token_expiry: expiryDate },
      { new: true },
    );
  }
  getOneData(query) {
    return User.findOne(query);
  }
}

module.exports = new UserService();
