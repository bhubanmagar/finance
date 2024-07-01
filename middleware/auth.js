const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const aunthorizationHeadder = req.headers.authorization;
  if (!aunthorizationHeadder) {
    res.status(401).json({
      status: " Authorization failed",
      messege: "please login first!",
    });
    return;
  }

  const token = aunthorizationHeadder.split("Bearer ")[1];
  try {
    const checkToken = jwt.verify(token, process.env.jwt_key);
    req.user = checkToken;
    if (!checkToken) throw "Authorization failed";
  } catch (error) {
    return res.status(401).json({
      status: " Authorization failed",
      Message: error,
    });
  }
  // sucess then...
  next();
};

module.exports = auth;
