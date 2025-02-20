const express = require("express");
const { createBook, fetchBooks, fetchBookById, modifyBook, modifyBookStatus, removeBook } = require("../controller/bookController");
const verifyToken = require("../utils/verifyToken");

const router = express.Router();

router.post("/", verifyToken, createBook);
router.get("/", verifyToken, fetchBooks);
router.get("/:id", verifyToken, fetchBookById);
router.put("/:id", verifyToken, modifyBook);
router.put("/:id/status", verifyToken, modifyBookStatus);
router.delete("/:id", verifyToken, removeBook);

module.exports = router;