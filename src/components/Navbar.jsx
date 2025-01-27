import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set login status based on token presence
  }, []);

  const handleLogout = () => {
    // Clear user session from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update login status
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="bg-white shadow-md p-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold text-gray-800">Firewall Dashboard</h1>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links Section */}
        <ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex lg:gap-6 lg:items-center transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-gray-600 hover:text-blue-500 lg:inline"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          {/* Always visible */}
          <li>
            <Link
              to="/sdk-setup"
              className="block px-4 py-2 text-gray-600 hover:text-blue-500 lg:inline"
              onClick={closeMenu}
            >
              SDK Integration
            </Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 lg:inline"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 lg:inline"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 lg:inline"
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 lg:inline"
                  onClick={closeMenu}
                >
                  Settings
                </Link>
              </li>
              {/* Log Out Button */}
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 lg:inline lg:ml-4"
                >
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
