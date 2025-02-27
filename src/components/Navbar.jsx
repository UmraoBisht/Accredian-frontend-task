import React from "react";
import { FaChevronDown, FaGraduationCap } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <FaGraduationCap className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-blue-500 font-bold text-xl">
            accredian
          </span>
          <span className="text-gray-500 text-xs ml-1">LEARNING PLATFORM</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-500 font-medium">
              Courses
              <FaChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">
            Refer & Earn
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">
            Resources
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-500 font-medium">
            About Us
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-500 font-medium">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
