import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBooks(res.data); // Update state with fetched books
      } catch (error) {
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  return (
    <div className="container mt-14 mx-auto p-6">
      <Link to="/">
        <button className="relative px-6 py-2 text-white font-semibold bg-blue-500 rounded-lg flex items-center justify-center group transition duration-300 transform hover:bg-blue-600 hover:scale-100">
          <span className="mr-2">Back</span>
          <svg
            className="w-4 h-4 group-hover:mr-2 transition-all duration-300 ease-in-out transform group-hover:-translate-x-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l-7 7 7 7M5 12h13"
            ></path>
          </svg>
        </button>
      </Link>
      <h2 className="text-2xl font-semibold text-center mb-6">All Books</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-600">No books available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 bg-zinc-100"
            >
              <img
                src={book.link}
                alt={book.title}
                className="w-40 h-60 object-cover mx-auto rounded-md"
              />
              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">Author: {book.author}</p>
              <p className="text-sm text-gray-600">Pages: {book.pages}</p>
              <p className="text-sm text-gray-600">Year: {book.year}</p>
              <div className="flex justify-center mt-4">
                <button className="relative inline-block bg-green-400 text-white font-medium text-sm rounded-md px-6 py-2 shadow-lg hover:shadow-green-400/50 transition-all duration-400 group">
                  <span className="relative inline-block transition-all duration-400 group-hover:opacity-0">
                    Buy Now
                  </span>
                  <span className="absolute top-1 right-0 left-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 text-2xl">
                    &#x1F929;
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Course;
