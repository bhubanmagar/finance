const mongoose = require("mongoose");
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

module.exports = passbookHandler;
