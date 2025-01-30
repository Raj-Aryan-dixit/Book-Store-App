import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        const filteredBooks = response.data.filter((book) => book.pages < 500); // Filter books with pages < 500
        setBooks(filteredBooks);
      } catch (err) {
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-10">
      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600 text-lg">{error}</p>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No books available.</p>
      ) : (
        <Slider {...settings}>
          {books.map((book, index) => (
            <div key={index} className="p-4">
              <div className="border rounded-lg shadow-2xl p-6 bg-gray-50 hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img
                    src={book.link}
                    alt={book.title}
                    className="w-40 h-60 object-cover mx-auto rounded-md border shadow-lg"
                  />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-gray-400 via-gray-200 to-transparent opacity-50 blur-md"></div>
                </div>
                <h3 className="mt-6 font-semibold text-lg text-gray-800 text-center">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Author: <span className="font-medium">{book.author}</span>
                </p>
                <p className="text-sm text-gray-600 text-center">
                  Pages: <span className="font-medium">{book.pages}</span>
                </p>
                <p className="text-sm text-gray-600 text-center">
                  Year: <span className="font-medium">{book.year}</span>
                </p>
                <div className="flex justify-center mt-4">
                  <button className="relative inline-block bg-gradient-to-r from-green-400 to-green-500 text-white font-medium text-sm rounded-md px-6 py-2 shadow-2xl hover:shadow-green-500/50 hover:from-green-500 hover:to-green-600 transform hover:-translate-y-1 transition-all duration-300 group">
                    <span className="relative inline-block transition-all duration-300 group-hover:opacity-0">
                      Buy Now
                    </span>
                    <span className="absolute top-1 right-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 text-2xl">
                      &#x1F929;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Carousel;
