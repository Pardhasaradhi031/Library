const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Invalid Token!" });
  }

  const token = authHeader.split(" ")[1]; // Extract token

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.status(401).json({ message: "Invalid Token!", error: err });
    }

    req.user = decoded; // Attach decoded user to request
    next();
  });
};

module.exports = verifyToken;
