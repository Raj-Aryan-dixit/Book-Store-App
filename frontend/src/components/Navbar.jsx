import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Login";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Fetch books data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        setBooks(response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle search and filter books
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBooks([]);
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [searchQuery, books]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Courses</a>
      </li>
      <li>
        <a href="/About">About</a>
      </li>
    </>
  );

  return (
    <>
      <div className="my-4 max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Navbar */}
        <div
          className={`navbar ${
            scrolled ? "bg-sky-500/100 text-black" : "bg-sky-500/75 text-black"
          } space-x-3 fixed top-1 left-0 right-0 shadow-md rounded transition-colors duration-100 z-50`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-sky-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Pages</a>
                  <ul className="p-2">{navItems}</ul>
                </li>
              </ul>
            </div>

            <a className="btn btn-ghost text-xl">Book Store</a>
          </div>
          <div className="navbar-end"></div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search books..."
              className="bg-gray-100 input input-bordered rounded-lg shadow-sm min-w-fit max-w-xs focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {filteredBooks.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border rounded-lg shadow-lg mt-2 z-50 max-h-60 overflow-auto">
                {filteredBooks.map((book) => (
                  <li
                    key={book.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => alert(`Book Selected: ${book.title}`)}
                  >
                    {book.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <a
              className="btn bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Login
            </a>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
