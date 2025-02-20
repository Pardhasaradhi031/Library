const jwt = require("jsonwebtoken");

const jwtGenerator = (user_id, user_name, email_id) => {
  const payLoad = {
    id: user_id,
    name: user_name,
    mail: email_id,
  };

  return jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = jwtGenerator;
