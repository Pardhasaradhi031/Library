import React from "react";

const BookCard = ({ title, author, genre, year }) => {
  return (
    <div className="border p-4 rounded shadow-md my-2">
      <h3 className="font-bold">{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
};

export default BookCard;
