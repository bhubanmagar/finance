const mongoose = require("mongoose");

const loanSchema = mongoose.Schema(
  {
    AccountNo: {
      type: Number,
      required: Number,
    },
    Name: {
      type: String,
      required: true,
    },

    Amount: {
      type: Number,
      require: true,
    },
    PurposeOfLoan: {
      type: String,
      required: true,
    },
    MobileNo: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LoanModel = mongoose.model("loan", loanSchema);

module.exports = LoanModel;
