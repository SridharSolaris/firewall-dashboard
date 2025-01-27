import React, { useState, useEffect } from "react";
import axios from "axios";

const APIKey = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const fetchAPIKey = async () => {
      try {
        const response = await axios.get("/api/api-key");
        setApiKey(response.data.apiKey);
      } catch (error) {
        console.error("Error fetching API key:", error);
      }
    };

    fetchAPIKey();
  }, []);

  return (
    <div>
      <h2>Your API Key</h2>
      <p>{apiKey ? apiKey : "Loading..."}</p>
    </div>
  );
};

export default APIKey;
