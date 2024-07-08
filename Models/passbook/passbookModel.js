const mongoose = require("mongoose");

const passbookSchema = new mongoose.Schema(
  {
    AccountNo: {
      type: Number,
      required: true,
    },
    MobileNo: {
      type: Number,
      required: true,
    },
    CollectorName: {
      type: String,
      required: true,
    },
    dateofCollection: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PassbookModel = mongoose.model("passbook", passbookSchema);
module.exports = PassbookModel;
