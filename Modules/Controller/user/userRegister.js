const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userRegister = async (req, res) => {
  const User = mongoose.model("user");
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    dateOfBirth,
    accountNo,
    accountType,
    // securityQuestions,
    address,
  } = req.body;
  try {
    if (firstName == "" || !firstName) throw "Field cant be empty";
    if (!lastName || lastName == "") throw "Field can't be empty";
    if (!email || email == "") throw "Field can't be empty";
    if (!password || password == "") throw "Field can't be empty";
    if (!phoneNumber || phoneNumber == "") throw "Field can't be empty";
    if (!dateOfBirth || dateOfBirth == "") throw "Field can't be empty";
    if (!accountNo || accountNo == "") throw "Field can't be empty";
    if (!accountType || accountType == "") throw "Field can't be empty";
    if (!address || address == "") throw "Field can't be empty";
    // if (!securityQuestions || securityQuestions == "")
    //   throw "Field can't be empty";

    //
    const emailCheck = await User.findOne({
      email: email,
    });
    if (!emailCheck) {
      const encPassword = await bcrypt.hash(password, 10);
      const response = await User.create({
        firstName,
        lastName,
        email: email,
        password: encPassword,
        phoneNumber,
        dateOfBirth,
        accountNo,
        accountType,
        address,
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error,
    });
  }
  //
  res.status(201).send({
    status: "ok",
    message: "Sucessfull",
  });
};

module.exports = userRegister;
