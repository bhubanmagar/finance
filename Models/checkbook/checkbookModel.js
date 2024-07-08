const mongoose = require("mongoose");
const CheckBookSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
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
      requierd: true,
    },
    dateofCollection: {
      type: Date,
    },
    CheckbookNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

const CheckBook = mongoose.model("checkbook", CheckBookSchema);

module.exports = CheckBook;
