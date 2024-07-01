const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const userRoute = require("./Routes/user/Routes");
const ConnectDB = require("./Modules/Controller/databaseconnection/dbConnection");
require("./Models/User/UserModel");

//
const app = express();
app.use(
  cors({
    origin: "",
  })
);
app.use(express.json());
require("dotenv").config();

//
const MONGO_URI = process.env.MONGO_URI;
ConnectDB(MONGO_URI); //database connection

//Routes
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("hello mfs");
});

const port = process.env.PORT || 5000;
app.listen(`${port}`, () => {
  console.log(`server started at port ${port}`);
});
