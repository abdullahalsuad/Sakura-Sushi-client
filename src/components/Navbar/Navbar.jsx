import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#03fa7e] to-[#06c0c0] text-transparent bg-clip-text cursor-pointer">
              Sakura Sushi
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-[#fff386] transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-gray-300 hover:text-[#fff386] transition duration-300 font-medium"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-[#fff386] transition duration-300 font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/signin"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-md transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black py-4 px-4 space-y-3">
          <Link
            to="/"
            className="block text-gray-300 hover:text-[#fff386] transition duration-300 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block text-gray-300 hover:text-[#fff386] transition duration-300 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block text-gray-300 hover:text-[#fff386] transition duration-300 font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/signin"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-md transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
