import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br  px-4 text-center w-10/12 mx-auto ">
      <div className="border border-gray-300  rounded-md px-10 py-10 bg-gradient-to-br from-pink-50 to-teal-100">
        <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist. You can go back home
          or explore the menu.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg transition duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
