const express = require("express");
const { createBook, fetchBooks, fetchBookById, modifyBook, removeBook } = require("../controller/bookController");

const router = express.Router();

router.post("/", createBook);
router.get("/", fetchBooks);
router.get("/:id", fetchBookById);
router.put("/:id", modifyBook);
router.delete("/:id", removeBook);

module.exports = router;