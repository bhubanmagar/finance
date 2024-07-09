const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const userRoute = require("./Routes/user/Routes");
const ConnectDB = require("./Modules/Controller/databaseconnection/dbConnection");
const financeRoute = require("./Routes/finance/Finance");
require("./Models/User/UserModel");
require("./Models/checkbook/checkbookModel");
require("./Models/loan/loanModel");
require("./Models/passbook/passbookModel");

//
const app = express();
app.use(
  cors({
    origin: "https://127.0.0.1:3000/",
  })
);
app.use(express.json());
require("dotenv").config();

//
const MONGO_URI = process.env.MONGO_URI;
ConnectDB(MONGO_URI); //database connection

//Routes
app.use("/user", userRoute);
app.use("/finance", financeRoute);

app.get("/", (req, res) => {
  res.send("home..!");
});

const port = process.env.PORT || 5000;
app.listen(`${port}`, () => {
  console.log(`server started at port ${port}`);
});
