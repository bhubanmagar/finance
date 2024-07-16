const mongoose = require("mongoose");

//function to register loan request
const loanHandler = async (req, res) => {
  const { AccountNo, MobileNo, Name, PurposeOfLoan, Amount } = req.body;
  const LoanModel = mongoose.model("loan");
  try {
    await LoanModel.create({
      AccountNo,
      MobileNo,
      Name,
      Amount,
      PurposeOfLoan,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error,
    });
  }
  res.status(200).json({
    status: "ok",
    message: "Sucessfully Requested for Loan",
  });
};

//function to get Load data or request
const getLoanRequest = async (req, res) => {
  const LoanModel = mongoose.model("loan");
  try {
    const response = await LoanModel.find();
    return res.status(200).json({
      status: "ok",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "filed to retrive Loan requests",
    });
  }
};

module.exports = { loanHandler, getLoanRequest };
