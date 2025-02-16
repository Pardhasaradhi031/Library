const express = require("express");
const { createBook, fetchBooks, fetchBooksById, modfiyBook, removeBook, modifyBook } = require("../controller/bookController");

const router = express.Router();

router.post("/", createBook);
router.get("/", fetchBooks);
router.get("/:id", fetchBooksById);
router.put("/:id", modifyBook);
router.delete("/:id", removeBook);

module.exports = router;