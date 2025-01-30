import React from "react";
import list from "../../public/list.json";

function Freebooks() {
  const filterData = list.filter((data) => data.year <= 1980);

  // Assuming categories are based on some attributes like genre, author, etc.
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "History",
    "Biographies",
  ];

  return (
    <>
      <div className="text-center my-8 max-w-screen-2xl container mx-auto md:px-20 px-6">
        {/* Header Section */}
        <h1 className="font-extrabold text-4xl text-gray-800 mt-16 mb-8">
          Discover Free Books for You
        </h1>

        {/* Subtitle or description */}
        <p className="text-lg text-gray-600 mb-12">
          Explore a curated list of classic books published before 1980,
          categorized for easy browsing.
        </p>

        {/* Categories List Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-200 text-gray-800 px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-semibold">{category}</h2>
              <p className="text-sm text-gray-500 mt-2">
                Browse books in this category
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Freebooks;
