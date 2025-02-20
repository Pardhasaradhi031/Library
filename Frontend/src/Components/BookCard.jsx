import React from "react";

const BookCard = ({
  bookId,
  title,
  author,
  genre,
  year,
  availability_status,
}) => {
  const isAvailable = availability_status === true;

  const handleClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:5000/books/${bookId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: !availability_status }), // Toggle status
        }
      );

      if (response.ok) {
        window.location.reload(); // Reload page to update status
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/books/${bookId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
  
      if (response.ok) {
        window.location.reload(); // Reload after deletion
      } else {
        const errorData = await response.json();
        console.error("Error deleting book:", errorData.message);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  

  return (
    <div className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 border border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-white px-3 py-1 text-sm rounded-lg transition cursor-pointer" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="red"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </span>
      </div>
      <p className="text-sm text-gray-600">by {author}</p>
      <p className="text-xs text-gray-500 mt-1">
        {genre} • {year}
      </p>

      <div className="mt-4 flex justify-between items-center cursor-pointer">
        <span
          className={`px-3 py-1 text-sm rounded-lg font-medium ${
            isAvailable ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
          onClick={handleClick}
        >
          {isAvailable ? "Available" : "Not Available"}
        </span>

        <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
