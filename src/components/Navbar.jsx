import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session from localStorage
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between w-full">
      {/* Logo and Title */}
      <h1 className="text-xl font-semibold text-gray-800">Firewall Dashboard</h1>

      {/* Hamburger menu for mobile */}
      <div className="lg:hidden flex items-center">
        <button className="text-gray-600 hover:text-blue-500 focus:outline-none" aria-label="Toggle Menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex gap-6 items-center">
        <li>
          <Link to="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/sdk-setup" className="text-gray-600 hover:text-blue-500 transition duration-300">
            SDK Integration
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-gray-600 hover:text-blue-500 transition duration-300">
            Settings
          </Link>
        </li>
      </ul>

      {/* Log Out Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Log Out
      </button>
    </nav>
  );
};

export default Navbar;
