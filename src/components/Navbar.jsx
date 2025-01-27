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
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-800">Firewall Dashboard</h1>
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-gray-600 hover:text-blue-500">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-gray-600 hover:text-blue-500">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-500">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/sdk-setup" className="text-gray-600 hover:text-blue-500">
            SDK Integration
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-gray-600 hover:text-blue-500">
            Settings
          </Link>
        </li>
      </ul>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </nav>

  );
};

export default Navbar;
