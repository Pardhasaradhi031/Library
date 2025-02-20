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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchAllBooks = async () => {
    const token = localStorage.getItem("token");
    console.log("Stored Token:", token); // Debugging
  
    if (!token) {
      setMessage("Authentication token not found. Please log in.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Ensure "Bearer" is included
        },
      });
  
      const data = await response.json();
      console.log("Fetched books response:", data);
  
      if (response.status === 401) {
        setMessage("Unauthorized access. Please log in again.");
        localStorage.removeItem("token");
        return;
      }
  
      if (response.ok) {
        setBooks(Array.isArray(data) ? data : []);
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
  }, [books.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
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

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (searchQuery == "") {
      setFilteredBooks([]);
    } else {
      setFilteredBooks(books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase())));
    }
  };

  return (
    <div className="relative bg-white min-h-screen p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Library Dashboard</h1>
        <input
          type="search"
          placeholder="Search books..."
          className="w-64 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setShowForm(true)}
        >
          ➤ Add New Book
        </button>
      </div>

      {showForm && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <h2 className="text-lg font-semibold mb-4 text-center">Add a Book</h2>
            <input type="text" name="title" placeholder="Title" className="w-full p-2 mb-2 border rounded" value={formData.title} onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" className="w-full p-2 mb-2 border rounded" value={formData.author} onChange={handleChange} />
            <input type="text" name="genre" placeholder="Genre" className="w-full p-2 mb-2 border rounded" value={formData.genre} onChange={handleChange} />
            <input type="text" name="year" placeholder="Year" className="w-full p-2 mb-2 border rounded" value={formData.year} onChange={handleChange} />
            <div className="flex justify-between">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={handleSubmit}>Submit</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {message && <p className="text-red-500 text-center">{message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mt-25">
        {(filteredBooks.length > 0 ? filteredBooks : books).map((book) => (
          <BookCard key={book.id || book.title} title={book.title} author={book.author} genre={book.genre} year={book.year} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
