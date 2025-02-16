const pool = require("../config/db");

const addBook = async (title, author, category, coverImage) => {
  const result = await pool.query(
    "INSERT INTO books (title, author, category, coverImage) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, author, category, coverImage]
  );
  return result.rows[0];
};

const getAllBooks = async () => {
  const result = await pool.query("SELECT * FROM books");
  return result.rows[0];
};

const getBookById = async (id) => {
  const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  return result.rows[0];
};

const updateBook = async (id, title, author, category, coverImage) => {
  const result = await pool.query(
    "UPDATE books SET title = $1, author = $2, category = $3, coverImage = $4 WHERE id = $6 RETURNING *",
    [title, author, category, coverImage, id]
  );
  return result.rows[0];
};

const deleteBook = async (id) => {
  await pool.query("DELETE FROM books WHERE id = $1", [id]);
  return { message: "Book Deleted Successfully" };
};

module.exports = { addBook, getAllBooks, getBookById, updateBook, deleteBook };