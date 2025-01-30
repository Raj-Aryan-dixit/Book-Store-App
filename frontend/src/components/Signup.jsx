import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); // For programmatic navigation

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    alert("Signup successful!");
    navigate("/"); // Navigate to the home/login page
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/signup.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md p-6 bg-gray-800 shadow-xl rounded-xl">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")} // Navigate back to the home page
          className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
          aria-label="Close Modal"
        >
          &#10008;
        </button>

        <h3 className="text-3xl font-extrabold text-white text-center mb-6 tracking-wide">
          Create Your Account
        </h3>
        <p className="text-gray-400 text-sm text-center mb-8">
          Join us and explore the best services.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                errors.name ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className={`w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Set Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ${
                errors.password ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Buttons Section */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            >
              Signup
            </button>
            <p className="text-gray-400 text-sm">
              Already a member?{" "}
              <button
                onClick={() => navigate("/")}
                className="text-blue-500 hover:text-blue-400 underline ml-1 transition-all"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
