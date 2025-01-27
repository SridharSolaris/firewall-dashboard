import React, { useEffect, useState } from "react";
import { getApps, generateApiKey } from "../services/apiService";

const Settings = () => {
  const [userDetails, setUserDetails] = useState({
    username: "John Doe", // Example static user data, replace with actual API call if needed
    email: "john.doe@example.com",
  });
  const [apps, setApps] = useState([]);
  const [apiKey, setApiKey] = useState(null); // Store the newly generated API Key for a specific app
  const [selectedAppId, setSelectedAppId] = useState(null); // Track which app's API key to show
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const data = await getApps(token);
        setApps(data);
      } catch (error) {
        console.error("Error fetching apps:", error.message);
      }
    };

    if (token) {
      fetchApps();
    } else {
      console.error("No token available. Please log in.");
    }
  }, [token]);

  const handleGenerateApiKey = async (appId) => {
    try {
      const data = await generateApiKey(appId, token);
      setApiKey(data.apiKey);
      setSelectedAppId(appId);
    } catch (error) {
      console.error("Error generating API key:", error.message);
    }
  };

  const handleCopyApiKey = (apiKey) => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey);
      alert("API Key copied to clipboard!");
    }
  };

  const handleCopyAppId = (appId) => {
    if (appId) {
      navigator.clipboard.writeText(appId);
      alert("App ID copied to clipboard!");
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-5xl bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-4xl font-semibold text-center mb-8 text-gray-900">Settings</h1>

      {/* User Account Details */}
      <section className="bg-white p-8 rounded-lg shadow-xl mb-8 border-l-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">User Account</h2>
        <p className="text-lg text-gray-700 mb-2 truncate">
          <strong className="text-gray-900">Username:</strong> {userDetails.username}
        </p>
        <p className="text-lg text-gray-700 truncate">
          <strong className="text-gray-900">Email:</strong> {userDetails.email}
        </p>
      </section>

      {/* API Section */}
      <section className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-green-500">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">API Management</h2>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Your Applications</h3>
          {apps.length > 0 ? (
            apps.map((app) => (
              <div
                key={app._id}
                className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 border-l-4 border-indigo-500"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-4 truncate">{app.appName}</h4>

                {/* Display the existing API Key */}
                <div className="mb-4">
                  <p className="text-lg text-gray-700 truncate">
                    <strong className="text-gray-900">API Key:</strong> {app.apiKey}
                  </p>
                  <button
                    onClick={() => handleCopyApiKey(app.apiKey)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Copy API Key
                  </button>
                </div>

                {/* Display the App ID */}
                <div className="mb-4">
                  <p className="text-lg text-gray-700 truncate">
                    <strong className="text-gray-900">App ID:</strong> {app._id}
                  </p>
                  <button
                    onClick={() => handleCopyAppId(app._id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Copy App ID
                  </button>
                </div>

                {/* Button to generate a new API key */}
                <button
                  onClick={() => handleGenerateApiKey(app._id)}
                  className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition duration-300 ease-in-out"
                >
                  Generate New API Key
                </button>

                {/* Display the newly generated API Key */}
                {selectedAppId === app._id && apiKey && (
                  <div className="mt-4">
                    <p className="text-lg text-gray-700 truncate">
                      <strong className="text-gray-900">Your New API Key:</strong> {apiKey}
                    </p>
                    <button
                      onClick={() => handleCopyApiKey(apiKey)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-green-700 transition duration-300 ease-in-out"
                    >
                      Copy New API Key
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-700">No apps available. Please add one!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Settings;
