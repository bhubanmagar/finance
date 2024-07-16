const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, unique: true, required: true },
  verificationOTP: {
    type: String,
    require: false,
  },
  forgotPasswordOTP: {
    type: String,
    require: false,
  },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  accountNo: { type: String, required: true, unique: true },
  accountType: {
    type: String,
    enum: ["saving", "general"],
    required: true,
  },
  role: {
    type: String,
    enum: ["general", "admin"],
    default: "general",
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
