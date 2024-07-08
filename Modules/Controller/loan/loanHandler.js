const mongoose = require("mongoose");

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

module.exports = loanHandler;
