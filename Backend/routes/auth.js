const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await pool.query("SELECT * FROM WHERE email = $1", [email]);

    if (existingUser.rows.length > 0) return res.status(400).json({ message: "User already exists" });
    
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, password]
    );

    res.status(201).json({ message: "User registered successfully", user: newUser.rows[0] });
  } catch (error) {
    console.log("Error Registering: " + error);
  }
})

module.exports = router;