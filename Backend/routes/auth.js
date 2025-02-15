const express = require("express");
const pool = require("../config/db");
const { registerUser, loginUser } = require("../controller/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;