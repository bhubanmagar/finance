const mongoose = require("mongoose");

const getUser = async (req, res) => {
  const User = mongoose.model("user");

  try {
    const response = await User.find();
    return res.status(200).json({
      status: "ok",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = getUser;
