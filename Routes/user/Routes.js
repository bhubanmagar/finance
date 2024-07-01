const express = require("express");
const userRegister = require("../../Modules/Controller/user/userRegister");
const userLogin = require("../../Modules/Controller/user/userLogin");
const userRoute = express.Router();

userRoute.post("/register", userRegister);
userRoute.post("/Login", userLogin);

module.exports = userRoute;
