import React from "react";

const BookCard = ({ title, author, genre, year }) => {
  return (
    <div className="w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">by {author}</p>
      <p className="text-xs text-gray-500 mt-1">{genre} • {year}</p>

      <div className="mt-4 flex justify-end">
        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
