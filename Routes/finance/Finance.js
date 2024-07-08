const express = require("express");
const registerPassbook = require("../../Modules/Controller/passbook/passbookHandler");
const checkBookHander = require("../../Modules/Controller/checkbook/checkbookHandler");
const loanHandler = require("../../Modules/Controller/loan/loanHandler");

const financeRoute = express.Router();

financeRoute.post("/request-passbook", registerPassbook);
financeRoute.post("/request-checkbook", checkBookHander);
financeRoute.post("/request-loan", loanHandler);

module.exports = financeRoute;
