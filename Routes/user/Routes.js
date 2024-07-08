const express = require("express");
const userRegister = require("../../Modules/Controller/user/userRegister");
const userLogin = require("../../Modules/Controller/user/userLogin");
const getUser = require("../../Modules/Controller/user/getUser");
const userRoute = express.Router();

userRoute.get("/getUser", getUser);
userRoute.post("/register", userRegister);
userRoute.post("/Login", userLogin);

module.exports = userRoute;
