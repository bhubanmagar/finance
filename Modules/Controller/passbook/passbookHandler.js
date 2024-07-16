const mongoose = require("mongoose");

//register passbook request
const passbookHandler = async (req, res) => {
  const { AccountNo, MobileNo, CollectorName, dateofCollection } = req.body;
  const PassbookModel = mongoose.model("passbook");
  try {
    await PassbookModel.create({
      AccountNo,
      MobileNo,
      CollectorName,
      dateofCollection,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
  res.status(200).json({
    status: "ok",
    message: "Sucessfully Requested for PassBook",
  });
};

//function to get All passbook request data
const getPassbookRequest = async (req, res) => {
  const PassbookModel = mongoose.model("passbook");
  try {
    const response = await PassbookModel.find();
    return res.status(200).json({
      status: "ok",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "Failed to Retrive PassBook Requests",
    });
  }
};
module.exports = { passbookHandler, getPassbookRequest };
