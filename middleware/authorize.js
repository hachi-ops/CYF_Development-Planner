const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("jwt_token");

  console.log(token);

  // Check if not token
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);

    console.log(verify);
    
    req.user = verify.user;
    // logs { id: 'a73a420a-bcde-4e04-bd4c-276e8ad37cf7' }

    // next should probably be called _outside_ the try-catch block - otherwise if the next handler throws any exception, you'll respond with a 401 rather than possibly a more-specific error?
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
