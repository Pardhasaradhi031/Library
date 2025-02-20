const { addBook, getAllBooks, getBookById, updateBook, deleteBook, updateBookStatus } = require("../models/bookQueries");

const createBook = async (req, res) => {
  try {
    const { title, author, genre, year } = req.body;
    const newBook = await addBook(title, author, genre, year);
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error adding book: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

const fetchBooks = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

const fetchBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getBookById(id);
    if (!book) return res.status(404).json({ message: "Book not found!" });
    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book: ", book);
    res.status(500).json({ message: "Server error" });
  }
};

const modifyBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, category, coverImage } = req.body;
    const updatedBook = await updateBook(id, title, author, category, coverImage);
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Error updating book: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

const modifyBookStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const modifiedStatus = await updateBookStatus(id, status);
    res.status(200).json(modifiedStatus);
  } catch (error) {
    console.error("Error Updating book status: ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteBook(id);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error deleting book: ", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createBook, fetchBooks, fetchBookById, modifyBook, modifyBookStatus, removeBook };