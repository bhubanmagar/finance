const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, unique: true, required: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  accountNo: { type: String, required: true, unique: true },
  accountType: { type: String, enum: ["saving", "General"], required: true },
  // securityQuestions: [
  //   {
  //     question: { type: String, required: true },
  //     answer: { type: String, required: true },
  //   },
  // ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;