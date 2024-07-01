const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const User = mongoose.model("user");
  const { email, password } = req.body;
  try {
    if (!email) throw "Field can't be empty";
    if (!password) throw "Field can't be empty";

    //find user by email
    const getUser = await User.findOne({
      email: email,
    });
    if (!getUser) throw "Email doesn't exist";
    const match = bcrypt.compare(password, getUser.password);
    if (!match) throw "Email or Password doesn't match";
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error,
    });
  }

  let getuserToken = await User.findOne({
    email: email,
  });

  //making acess token
  const accessToken = jwt.sign(
    {
      _id: getuserToken._id,
      name: getuserToken.name,
      email: getuserToken.email,
    },
    process.env.jwt_key,
    {
      expiresIn: "90 days",
    }
  );

  //
  res.status(200).send({
    status: "ok",
    data: accessToken,
  });
};

module.exports = userLogin;
