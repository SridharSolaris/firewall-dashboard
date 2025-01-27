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
    <div>
      <h1>Settings</h1>

      {/* User Account Details */}
      <section>
        <h2>User Account</h2>
        <p>
          <strong>Username:</strong> {userDetails.username}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
      </section>

      {/* API Section */}
      <section>
        <h2>API</h2>
        <div>
          <h3>Your Applications</h3>
          {apps.length > 0 ? (
            apps.map((app) => (
              <div key={app._id}>
                <h4>{app.appName}</h4>

                {/* Display the existing API Key */}
                <div>
                  <p>
                    <strong>API Key:</strong> {app.apiKey}
                  </p>
                  <button onClick={() => handleCopyApiKey(app.apiKey)}>
                    Copy API Key
                  </button>
                </div>

                {/* Display the App ID */}
                <div>
                  <p>
                    <strong>App ID:</strong> {app._id}
                  </p>
                  <button onClick={() => handleCopyAppId(app._id)}>
                    Copy App ID
                  </button>
                </div>

                {/* Button to generate a new API key */}
                <button onClick={() => handleGenerateApiKey(app._id)}>
                  Generate New API Key
                </button>

                {/* Display the newly generated API Key */}
                {selectedAppId === app._id && apiKey && (
                  <div>
                    <p>Your New API Key: {apiKey}</p>
                    <button onClick={() => handleCopyApiKey(apiKey)}>
                      Copy New API Key
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No apps available. Please add one!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Settings;
