import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchAllBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books");
      const data = await response.json();
  
      console.log("Fetched books:", data); // Debugging
  
      if (response.ok) {
        setBooks(Array.isArray(data) ? data : []); // Ensure data is an array
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setMessage("Failed to fetch books");
    }
  };
  

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Book Added Successfully");
        setFormData({ title: "", author: "", genre: "", year: "" }); // Clear form
        setShowForm(false);
        fetchAllBooks(); // Refresh books list
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Submit Error:", err);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="bg-white h-screen">
      <div className="h-16 bg-black flex justify-between items-center px-8 shadow-md">
        <div className="text-white text-lg font-bold">LIBRARY</div>
        <div
          className="text-white text-lg cursor-pointer hover:underline"
          onClick={() => setShowForm(!showForm)}
        >
          Add Book
        </div>
        {showForm && (
          <div className="absolute right-0 top-10 bg-white p-4 rounded-lg shadow-lg w-64">
            <h2 className="text-black font-bold text-center mb-2">Add a Book</h2>
            <input
              type="text"
              placeholder="Book Title"
              className="w-full p-2 border rounded mb-2"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Author Name"
              className="w-full p-2 border rounded mb-2"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Book Genre"
              className="w-full p-2 border rounded mb-2"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Published Year"
              className="w-full p-2 border rounded mb-2"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
            <button
              className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
      {message && <p className="text-center text-red-500">{message}</p>}

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id || book.title} // Add unique key
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
