const mongoose = require("mongoose");
const ConnectDB = (uri) => {
  mongoose
    .connect(uri, {})
    .then(() => {
      console.log("connection sucessfull...");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = ConnectDB;
