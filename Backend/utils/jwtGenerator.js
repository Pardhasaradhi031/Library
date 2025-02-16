const jwt = require("jsonwebtoken");


const jwtGenerator = (user_id) => {
  const payLoad = {
    user: user_id,
  }

  jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = jwtGenerator;