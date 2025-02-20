const express = require("express");
const { createBook, fetchBooks, fetchBookById, modifyBook, removeBook } = require("../controller/bookController");
const verifyToken = require("../utils/verifyToken");

const router = express.Router();

router.post("/", verifyToken, createBook);
router.get("/", verifyToken, fetchBooks);
router.get("/:id", verifyToken, fetchBookById);
router.put("/:id", verifyToken, modifyBook);
router.delete("/:id", verifyToken, removeBook);

module.exports = router;