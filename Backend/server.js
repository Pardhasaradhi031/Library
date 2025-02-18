const express = require('express');
const cors = require("cors");
const pool = require('./config/db');
require("dotenv").config();

const app = express()
app.use(express.json());
app.use(cors());

async function createUsersTable() {
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
    console.error("Error Creating Users Table: ", error);
  }
}

async function createBooksTable() {
  try {
    await pool.query(`
      CREATE TABLE books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        genre VARCHAR(100),
        year int,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table 'Books' is ready!");
  } catch (error) {
    console.error("Error Creating Books Table: " + error);
  }
}

createUsersTable();
createBooksTable();

app.use("/auth", require("./routes/auth"));
app.use("/books", require("./routes/bookRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running on port ${process.env.PORT}`)
})