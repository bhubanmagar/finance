const mongoose = require("mongoose");

//request checkBook
const checkBookHander = async (req, res) => {
  const {
    AccountNo,
    MobileNo,
    CollectorName,
    dateofCollection,
    CheckbookNumber,
  } = req.body;
  const CheckBook = mongoose.model("checkbook");
  try {
    if (!AccountNo) throw "Account No must me provided";
    if (!MobileNo) throw "Mobile can't be empty";

    await CheckBook.create({
      AccountNo,
      MobileNo,
      CollectorName,
      dateofCollection,
      CheckbookNumber,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error,
    });
  }
  return res.status(200).json({
    status: "ok",
    message: "Sucessfully Requested for Checkbook",
  });
};

//get checkbook request data function
const getCheckBookRequest = async (req, res) => {
  const CheckBook = mongoose.model("checkbook");
  try {
    const response = await CheckBook.find();
    return res.status(200).json({
      status: "ok",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};
module.exports = {
  getCheckBookRequest,
  checkBookHander,
};
