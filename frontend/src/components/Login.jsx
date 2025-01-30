import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful!");
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gray-800 shadow-lg rounded-xl p-8">
          <h3 className="font-extrabold text-3xl text-white mb-6 text-center tracking-wide">
            Welcome Back!
          </h3>
          <p className="text-gray-400 text-sm text-center mb-8">
            Please login to access your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email
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
                Password
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

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
            </div>

            {/* Signup Link */}
            <p className="text-center text-gray-400 text-sm mt-6">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline hover:text-blue-400 transition-all"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>

        {/* Modal Backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button className="text-gray-500 hover:text-white transition-all">
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default Login;
