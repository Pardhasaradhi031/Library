const express = require('express');
const cors = require("cors");
const pool = require('./config/db');
require("dotenv").config();

const app = express()
app.use(express.json());
app.use(cors());

async function createTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);
    console.log("Table 'users' is ready!");
  } catch (error) {
    console.error("Error Creating Table: ", error);
  }
}

createTable();

app.use("/auth", require("./routes/auth"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running on port ${process.env.PORT}`)
})