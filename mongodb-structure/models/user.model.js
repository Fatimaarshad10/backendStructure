const mongoose = require("mongoose");
// strings
const UserSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    password: String,
   
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
