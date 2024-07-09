const express = require("express");
const registerPassbook = require("../../Modules/Controller/passbook/passbookHandler");
const checkBookHander = require("../../Modules/Controller/checkbook/checkbookHandler");
const loanHandler = require("../../Modules/Controller/loan/loanHandler");

const financeRoute = express.Router();

financeRoute.get("/get-checkbook", checkBookHander.getCheckBookRequest);
financeRoute.post("/request-passbook", registerPassbook.passbookHandler);
financeRoute.post("/request-checkbook", checkBookHander.checkBookHander);
financeRoute.post("/request-loan", loanHandler);

module.exports = financeRoute;
