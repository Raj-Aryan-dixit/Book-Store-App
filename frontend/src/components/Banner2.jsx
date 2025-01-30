import React, { useEffect, useState } from "react";

const Banner2 = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  // This effect will trigger when the component is mounted to apply the transition
  useEffect(() => {
    // Delay the visibility to ensure smooth animation
    setTimeout(() => {
      setIsImageVisible(true);
    }, 100); // Delay of 100ms for smoother transition
  }, []);

  return (
    <div className="h-screen w-full bg-white">
      <div className="mx-auto max-w-7xl pt-8 sm:pt-16 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col-reverse lg:flex-row">
          {/* Left Section (Content) */}
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left px-6 order-2 lg:order-1">
            <div className="space-y-8">
              {/* Heading Section */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-black">
                    Early Access
                  </span>
                  <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
                    Your Next Adventure is Just a{" "}
                    <span
                      className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 
                    "
                    >
                      Book
                    </span>
                    <br /> Away
                  </h1>
                </div>
                <p className="text-base text-gray-800 mt-6 leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                  Welcome to The Book Store, a haven for book lovers! Explore a
                  carefully curated collection of books across genres, from
                  timeless classics to contemporary bestsellers. Dive into the world of stories and
                  let your imagination soar!
                </p>
              </div>

              <div className="border-t border-gray-700"></div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className=" scale-100 flex items-center w-full lg:col-span-6 order-1 lg:order-2">
            <div className="h-45 sm:h-45 md:h-96 lg:h-full w-full max-w-2xl mx-auto px-6">
              <div
                className={`w-full h-full transition-all duration-1000 ease-in-out transform ${
                  isImageVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src="/images/banner.png"
                  alt="StellarGlo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
