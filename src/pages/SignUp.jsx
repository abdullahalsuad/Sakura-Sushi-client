import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  //handling signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...rest } = Object.fromEntries(formData.entries());
    console.log(email, password);

    const newUserinfo = { email, ...rest };
    try {
      // Create user with Firebase Auth
      const result = await createUser(email, password);

      // Send user profile data to backends
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserinfo),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const userData = await response.json();
      if (userData.insertedId) {
        console.log("user added:", userData);
        toast.success("user added successfully!");
        navigate("/profile");
        e.target.reset();
      }

      console.log(result);
    } catch (error) {
      // Firebase Auth error codes for sign up
      const errorMessages = {
        "auth/email-already-in-use": "This email is already in use.",
        "auth/invalid-email": "The email address is invalid.",
        "auth/operation-not-allowed":
          "Email/password accounts are not enabled.",
        "auth/weak-password":
          "Password is too weak. Use at least 6 characters.",
        "auth/missing-password": "Please enter a password.",
        "auth/missing-email": "Please enter an email address.",
        default: "An unexpected error occurred. Please try again.",
      };

      const message = errorMessages[error.code] || errorMessages.default;
      toast.error(message);
      message;
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-teal-50 px-4 ">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-teal-700 mb-6 ">
            Create Account
          </h2>

          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                for="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                for="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                for="profileUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Image URL
              </label>
              <input
                type="url"
                id="profileUrl"
                name="profileUrl"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="https://example.com/image.jpg "
                required
              />
            </div>

            <div>
              <label
                for="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="+1234567890"
                required
              />
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?
            <Link to={"/signin"} className="text-teal-700 hover:underline ml-1">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
