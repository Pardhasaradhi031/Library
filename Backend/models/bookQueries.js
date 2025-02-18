const pool = require("../config/db");

const addBook = async (title, author, genre, year) => {
  const result = await pool.query(
    "INSERT INTO books (title, author, genre, year) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, author, genre, year]
  );
  return result.rows[0];
};

const getAllBooks = async () => {
  const result = await pool.query("SELECT * FROM books");
  return result.rows;
};

const getBookById = async (id) => {
  const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  return result.rows[0];
};

const updateBook = async (id, title, author, genre, year) => {
  const result = await pool.query(
    "UPDATE books SET title = $1, author = $2, genre = $3, year = $4 WHERE id = $6 RETURNING *",
    [title, author, genre, year, id]
  );
  return result.rows[0];
};

const deleteBook = async (id) => {
  await pool.query("DELETE FROM books WHERE id = $1", [id]);
  return { message: "Book Deleted Successfully" };
};

module.exports = { addBook, getAllBooks, getBookById, updateBook, deleteBook };