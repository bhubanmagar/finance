const mongoose = require("mongoose");

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
  res.status(200).json({
    status: "ok",
    message: "Sucessfully Requested for Checkbook",
  });
};
module.exports = checkBookHander;
