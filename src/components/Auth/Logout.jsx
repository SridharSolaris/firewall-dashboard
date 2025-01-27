import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session from localStorage
    localStorage.removeItem("token");

    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
